import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import Layout from './components/common/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProgramsPage = React.lazy(() => import('./pages/ProgramsPage'));
const AccessoriesPage = React.lazy(() => import('./pages/AccessoriesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <Layout>
            <React.Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/accessories" element={<AccessoriesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </React.Suspense>
          </Layout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;