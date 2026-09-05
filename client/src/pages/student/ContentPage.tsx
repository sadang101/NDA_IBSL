import { useEffect } from 'react';

export default function ContentPage() {
  useEffect(() => {
    document.title = 'My Content — Nrityangan';
  }, []);

  return (
    <div className="p-6 md:p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900">My Content</h1>
        <p className="text-gray-500 mt-1">Class videos and notes uploaded by your guru</p>
      </div>

      {/* Tabs placeholder */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6 w-fit">
        {['Videos', 'Notes'].map((tab, i) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              i === 0 ? 'bg-white text-maroon shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Empty state */}
      <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-maroon/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-maroon/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
        </div>
        <p className="font-semibold text-gray-700 mb-2">No content yet</p>
        <p className="text-sm text-gray-400 max-w-xs mx-auto">
          Your guru will upload class recordings and notes here once your admission is approved.
        </p>
      </div>
    </div>
  );
}
