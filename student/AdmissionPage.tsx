import { useEffect, useState, type FormEvent } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Admission {
  status: 'pending' | 'approved' | 'rejected';
  fullName: string;
  branch: string;
  course: string;
  experience: string;
  preferredBatch: string;
  createdAt: string;
  adminNote?: string;
}

const statusConfig = {
  pending: {
    label: 'Under Review',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    desc: 'Your application is being reviewed. We will contact you shortly.',
  },
  approved: {
    label: '✅ Approved',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    desc: 'Congratulations! Your admission has been approved. Please visit the Loni Branch to complete enrollment.',
  },
  rejected: {
    label: '❌ Not Selected',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    desc: 'Unfortunately your application was not selected at this time.',
  },
};

export default function AdmissionPage() {
  const [admission, setAdmission] = useState<Admission | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: 'female',
    phone: '',
    parentName: '',
    parentPhone: '',
    address: '',
    city: '',
    pincode: '',
    branch: 'loni',
    experience: 'beginner',
    preferredBatch: 'evening',
  });

  useEffect(() => {
    document.title = 'Admission — Nrityangan';
    fetch(`${API_URL}/api/admissions/my`, { credentials: 'include' })
      .then(r => r.json())
      .then(d => setAdmission(d.admission))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch(`${API_URL}/api/admissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || 'Submission failed');
      setAdmission(data.admission);
      setSubmitSuccess(true);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-64">
        <div className="w-8 h-8 border-4 border-maroon/20 border-t-maroon rounded-full animate-spin" />
      </div>
    );
  }

  // Already submitted — show status
  if (admission) {
    const cfg = statusConfig[admission.status];
    return (
      <div className="p-6 md:p-8 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Admission Application</h1>
          <p className="text-gray-500 mt-1">Bharatanatyam Programme — Nrityangan Dance Academy</p>
        </div>

        <div className={`rounded-2xl border p-6 mb-6 ${cfg.bg} ${cfg.border}`}>
          <p className={`font-bold text-lg mb-2 ${cfg.text}`}>{cfg.label}</p>
          <p className={`text-sm ${cfg.text} opacity-80`}>{cfg.desc}</p>
          {admission.adminNote && (
            <p className={`text-sm mt-3 font-medium ${cfg.text}`}>Admin note: {admission.adminNote}</p>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          {[
            { label: 'Full Name', value: admission.fullName },
            { label: 'Branch', value: `${admission.branch.charAt(0).toUpperCase()}${admission.branch.slice(1)} Branch` },
            { label: 'Course', value: admission.course },
            { label: 'Experience Level', value: admission.experience.charAt(0).toUpperCase() + admission.experience.slice(1) },
            { label: 'Preferred Batch', value: admission.preferredBatch.charAt(0).toUpperCase() + admission.preferredBatch.slice(1) },
            { label: 'Applied On', value: new Date(admission.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) },
          ].map(row => (
            <div key={row.label} className="flex justify-between px-5 py-3.5">
              <span className="text-sm text-gray-500">{row.label}</span>
              <span className="text-sm font-medium text-gray-900">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // No application yet — show form
  return (
    <div className="p-6 md:p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900">Apply for Admission</h1>
        <p className="text-gray-500 mt-1">Fill in your details to join the Bharatanatyam programme</p>
      </div>

      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-700 text-sm">
          ✅ Application submitted successfully! We will review it and contact you soon.
        </div>
      )}

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-red-700 text-sm">
          ❌ {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Personal Info */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Full Name *</label>
              <input type="text" name="fullName" required value={form.fullName} onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Date of Birth *</label>
                <input type="date" name="dateOfBirth" required value={form.dateOfBirth} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Gender *</label>
                <select name="gender" value={form.gender} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Phone Number *</label>
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm" />
            </div>
          </div>
        </div>

        {/* Parent/Guardian */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">Parent / Guardian</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Parent Name *</label>
              <input type="text" name="parentName" required value={form.parentName} onChange={handleChange}
                placeholder="Parent/Guardian full name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Parent Phone *</label>
              <input type="tel" name="parentPhone" required value={form.parentPhone} onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm" />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">Address</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Street Address *</label>
              <input type="text" name="address" required value={form.address} onChange={handleChange}
                placeholder="House/Flat No., Street, Area"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">City *</label>
                <input type="text" name="city" required value={form.city} onChange={handleChange}
                  placeholder="City"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Pincode *</label>
                <input type="text" name="pincode" required value={form.pincode} onChange={handleChange}
                  placeholder="411001"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Course Preferences */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">Course Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Branch *</label>
              <select name="branch" value={form.branch} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm">
                <option value="loni">Loni Branch (Admissions Open)</option>
                <option value="akole">Akole Branch</option>
                <option value="sangamner">Sangamner Branch</option>
                <option value="rahuri">Rahuri Branch</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Experience Level</label>
                <select name="experience" value={form.experience} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Preferred Batch</label>
                <select name="preferredBatch" value={form.preferredBatch} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all text-sm">
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                  <option value="weekend">Weekend</option>
                </select>
              </div>
            </div>
            <div className="bg-maroon/5 border border-maroon/20 rounded-xl p-4">
              <p className="text-sm font-medium text-maroon">📚 Course: Bharatanatyam</p>
              <p className="text-xs text-gray-500 mt-1">Nrityangan specialises exclusively in Bharatanatyam — the classical South Indian dance form.</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-maroon text-white py-4 rounded-2xl font-semibold text-base hover:bg-maroon-dark transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </span>
          ) : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
