import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import Card from '../../components/common/Card';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout showLeftPanel={false}>
      <Card className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif font-bold text-maroon mb-2">
            No Password Needed
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Nrityangan uses <span className="font-semibold text-maroon">Google Sign-In</span> — there's no password to reset.
          </p>
        </div>

        <div className="bg-cream border border-gold/30 rounded-xl p-4 mb-6 text-sm text-gray-600 leading-relaxed text-center">
          Simply sign in with the Google account you used to register and you're in.
        </div>

        <button
          onClick={() => navigate('/login')}
          className="w-full bg-maroon text-white py-3.5 rounded-xl font-medium hover:bg-maroon-dark transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Back to Sign In
        </button>
      </Card>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
