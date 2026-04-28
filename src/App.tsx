import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Students } from './pages/Students';
import { StudentDetail } from './pages/StudentDetail';
import { Gallery } from './pages/Gallery';
import { Messages } from './pages/Messages';
import { AdminLogin } from './pages/Admin/Login';
import { AdminDashboard } from './pages/Admin/Dashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
