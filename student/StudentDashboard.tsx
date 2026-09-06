import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface AdmissionStatus {
  status: 'pending' | 'approved' | 'rejected';
  branch: string;
  createdAt: string;
  adminNote?: string;
}

const statusConfig = {
  pending: {
    label: 'Under Review',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    dot: 'bg-amber-400',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  approved: {
    label: 'Approved',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    dot: 'bg-green-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  rejected: {
    label: 'Not Accepted',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    dot: 'bg-red-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export default function StudentDashboard() {
  const { user } = useAuth();
  const [admission, setAdmission] = useState<AdmissionStatus | null>(null);

  useEffect(() => {
    document.title = 'Dashboard — Nrityangan';
    fetch(`${API_URL}/api/admissions/my`, { credentials: 'include' })
      .then(r => r.json())
      .then(d => setAdmission(d.admission))
      .catch(() => {});
  }, []);

  const greetingHour = new Date().getHours();
  const greeting =
    greetingHour < 12 ? 'Good morning' : greetingHour < 17 ? 'Good afternoon' : 'Good evening';

  const cfg = admission ? statusConfig[admission.status] : null;

  return (
    <div className="p-6 md:p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-1">{greeting} 👋</p>
        <h1 className="text-3xl font-serif font-bold text-gray-900">{user?.name}</h1>
        <p className="text-gray-500 mt-1">Welcome to your Nrityangan student portal</p>
      </div>

      {/* Admission status card */}
      <div className="mb-6">
        {admission ? (
          <div className={`rounded-2xl border p-6 ${cfg!.bg} ${cfg!.border}`}>
            <div className={`flex items-center gap-2 mb-3 ${cfg!.text}`}>
              {cfg!.icon}
              <span className="font-semibold text-base">Admission {cfg!.label}</span>
              <span className={`ml-auto inline-block w-2 h-2 rounded-full ${cfg!.dot} animate-pulse`} />
            </div>
            <p className={`text-sm ${cfg!.text} opacity-80`}>
              {admission.status === 'pending' &&
                'Your application is being reviewed by our team. We will notify you soon.'}
              {admission.status === 'approved' &&
                '🎉 Congratulations! Your admission to Nrityangan Dance Academy has been approved.'}
              {admission.status === 'rejected' &&
                'Unfortunately your application was not selected at this time.'}
            </p>
            {admission.adminNote && (
              <p className={`text-sm mt-2 font-medium ${cfg!.text}`}>
                Note: {admission.adminNote}
              </p>
            )}
            <p className={`text-xs mt-3 opacity-60 ${cfg!.text}`}>
              Submitted on {new Date(admission.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-maroon/30 bg-maroon/5 p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-maroon mb-1">No Admission Application</p>
              <p className="text-sm text-gray-500">Apply to join our Bharatanatyam programme at the Loni Branch.</p>
            </div>
            <Link
              to="/student/dashboard/admission"
              className="bg-maroon text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-maroon-dark transition-all duration-200 whitespace-nowrap"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>

      {/* Quick links */}
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Access</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            to: '/student/dashboard/admission',
            icon: '📄',
            title: 'Admission Form',
            desc: admission ? 'View your application' : 'Apply for Bharatanatyam',
          },
          {
            to: '/student/dashboard/content',
            icon: '🎬',
            title: 'Class Content',
            desc: 'Videos & notes from your guru',
          },
          {
            to: '/student/dashboard/profile',
            icon: '👤',
            title: 'My Profile',
            desc: 'Update your information',
          },
        ].map(card => (
          <Link
            key={card.to}
            to={card.to}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-maroon/30 hover:shadow-md transition-all duration-200 group"
          >
            <div className="text-2xl mb-3">{card.icon}</div>
            <p className="font-semibold text-gray-800 group-hover:text-maroon transition-colors">{card.title}</p>
            <p className="text-sm text-gray-400 mt-1">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
