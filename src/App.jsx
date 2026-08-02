import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { PageLoader } from './components/application/loading-indicator/PageLoader';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { GamificationProvider } from './context/GamificationContext';
import { CourseProvider } from './context/CourseContext';
import { NotificationProvider } from './context/NotificationContext';

// Layouts
import { MainLayout } from './components/layout/MainLayout';
import { DashboardLayout } from './components/layout/DashboardLayout';

// Pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';
import { ParentDashboardPage } from './pages/ParentDashboardPage';
import { TeacherDashboardPage } from './pages/TeacherDashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { VideoLearningPage } from './pages/VideoLearningPage';
import { QuizPage } from './pages/QuizPage';
import { AssignmentPage } from './pages/AssignmentPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { ProgressTrackingPage } from './pages/ProgressTrackingPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotificationsPage } from './pages/NotificationsPage';
import { SettingsPage } from './pages/SettingsPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { BlogsPage } from './pages/BlogsPage';
import { CareersPage } from './pages/CareersPage';
import { FaqPage } from './pages/FaqPage';
import { KidsGameSpacePage } from './pages/KidsGameSpacePage';

import { AuthModal } from './components/common/AuthModal';

// ── Inner component so we can use useLocation inside Router ──────────────
const AppInner = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const prevPath = React.useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 550);
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  return (
    <>
      <AuthModal />
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="page-loader" />}
      </AnimatePresence>

      <Routes>
        {/* Public Website Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/games" element={<KidsGameSpacePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
          <Route path="/learn/:courseId" element={<VideoLearningPage />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/assignment/:id" element={<AssignmentPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/resources" element={<BlogsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Role Specific Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/student" element={<StudentDashboardPage />} />
          <Route path="/dashboard/parent" element={<ParentDashboardPage />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboardPage />} />
          <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
          <Route path="/progress" element={<ProgressTrackingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Fallback Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothTouch: false
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      return () => lenis.destroy();
    } catch (e) {
      console.log('Lenis smooth scroll ready');
    }
  }, []);

  return (
    <AuthProvider>
      <GamificationProvider>
        <CourseProvider>
          <NotificationProvider>
            <Router>
              <AppInner />
            </Router>
          </NotificationProvider>
        </CourseProvider>
      </GamificationProvider>
    </AuthProvider>
  );
}

export default App;
