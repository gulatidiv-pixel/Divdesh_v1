import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import Chatbot from './components/Chatbot';
import HealthInsurancePage from './pages/HealthInsurancePage';
import TermInsurancePage from './pages/TermInsurancePage';
import ULIPsPage from './pages/ULIPsPage';
import MutualFundsPage from './pages/MutualFundsPage';
import PMSPage from './pages/PMSPage';
import AIFPage from './pages/AIFPage';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = ({ openModal }) => (
  <>
    <Hero openModal={openModal} />
    <Services />
    <Trust />
    <Contact />
  </>
);

HomePage.propTypes = {
  openModal: PropTypes.func.isRequired,
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-light">
        <Navbar openModal={openModal} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage openModal={openModal} />} />
            <Route path="/services/health-insurance" element={<HealthInsurancePage openModal={openModal} />} />
            <Route path="/services/term-insurance" element={<TermInsurancePage openModal={openModal} />} />
            <Route path="/services/ulips" element={<ULIPsPage openModal={openModal} />} />
            <Route path="/services/mutual-funds" element={<MutualFundsPage openModal={openModal} />} />
            <Route path="/services/pms" element={<PMSPage openModal={openModal} />} />
            <Route path="/services/aif" element={<AIFPage openModal={openModal} />} />
          </Routes>
        </main>
        <Footer />
        <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
