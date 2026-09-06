import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-serif font-bold text-maroon/20 mb-4">404</p>
        <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">Page not found</h1>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-block bg-maroon text-white px-6 py-3 rounded-xl font-medium hover:bg-maroon-dark transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
