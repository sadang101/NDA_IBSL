import { useEffect, useState, type FormEvent } from 'react';
import { useAuth } from '../../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ProfilePage() {
  const { user, refreshUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    document.title = 'My Profile — Nrityangan';
    setName(user?.name || '');
  }, [user]);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);
    try {
      const res = await fetch(`${API_URL}/api/users/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || 'Update failed');
      await refreshUser();
      setIsEditing(false);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setTimeout(() => setMessage(null), 3000);
    } catch (err: unknown) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Something went wrong' });
    } finally {
      setIsSaving(false);
    }
  };

  const initials = user?.name
    ?.split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'S';

  return (
    <div className="p-6 md:p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-500 mt-1">Manage your account information</p>
      </div>

      {/* Avatar card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-5 flex items-center gap-5 shadow-sm">
        {user?.avatar ? (
          <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-2xl object-cover" />
        ) : (
          <div className="w-20 h-20 rounded-2xl bg-maroon/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-maroon">{initials}</span>
          </div>
        )}
        <div>
          <p className="text-xl font-bold text-gray-900">{user?.name}</p>
          <p className="text-sm text-gray-400 mt-0.5">{user?.email}</p>
          <span className="inline-block mt-2 text-xs font-medium bg-maroon/10 text-maroon px-2.5 py-0.5 rounded-full capitalize">
            {user?.role}
          </span>
        </div>
      </div>

      {/* Success / error message */}
      {message && (
        <div className={`rounded-xl px-4 py-3 text-sm mb-4 flex items-center gap-2 ${
          message.type === 'success'
            ? 'bg-green-50 text-green-700 border border-green-200'
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {message.type === 'success' ? '✅' : '❌'} {message.text}
        </div>
      )}

      {/* Edit form */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-gray-800">Account Details</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm text-maroon font-medium hover:text-maroon-dark transition-colors"
            >
              Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon/30 focus:border-maroon outline-none transition-all"
                required
                minLength={2}
              />
            ) : (
              <p className="text-gray-900 py-3 px-4 bg-gray-50 rounded-xl">{user?.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Email Address</label>
            <p className="text-gray-500 py-3 px-4 bg-gray-50 rounded-xl flex items-center gap-2">
              {user?.email}
              {user?.avatar && (
                <span className="text-xs text-blue-500 ml-auto">Managed by Google</span>
              )}
            </p>
          </div>

          {isEditing && (
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isSaving}
                className="bg-maroon text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-maroon-dark transition-all disabled:opacity-60"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                type="button"
                onClick={() => { setIsEditing(false); setName(user?.name || ''); }}
                className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
