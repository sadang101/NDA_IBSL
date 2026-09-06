import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HeroSection from './components/public/HeroSection';
import AboutSection from './components/public/AboutSection';
import WhyChooseSection from './components/public/WhyChooseSection';
import BharatanatyamSection from './components/public/BharatanatyamSection';
import TeachersSection from './components/public/TeachersSection';
import GallerySection from './components/public/GallerySection';
import AchievementsSection from './components/public/AchievementsSection';
import BranchesSection from './components/public/BranchesSection';
import ContactSection from './components/public/ContactSection';
import Footer from './components/public/Footer';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import StudentLayout from './layouts/StudentLayout';
import StudentDashboard from './pages/student/StudentDashboard';
import ProfilePage from './pages/student/ProfilePage';
import AdmissionPage from './pages/student/AdmissionPage';
import ContentPage from './pages/student/ContentPage';
import NotFoundPage from './pages/shared/NotFoundPage';
import ProtectedRoute from './components/common/ProtectedRoute';

// ── Landing Page ──────────────────────────────────────────────────────────────
const LandingPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WhyChooseSection />
    <BharatanatyamSection />
    <TeachersSection />
    <GallerySection />
    <AchievementsSection />
    <BranchesSection />
    <ContactSection />
    <Footer />
  </div>
);

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Student Dashboard — protected */}
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute requiredRole="student">
            <StudentLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StudentDashboard />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="admission" element={<AdmissionPage />} />
        <Route path="content" element={<ContentPage />} />
      </Route>

      {/* Admin Dashboard — placeholder redirect until Phase 5 */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-serif font-bold text-maroon mb-2">Admin Dashboard</h1>
                <p className="text-gray-500">Coming soon — Phase 5</p>
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
