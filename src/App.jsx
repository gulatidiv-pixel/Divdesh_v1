import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ServiceDetail from './components/ServiceDetail';
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
            <Route path="/services/:id" element={<ServiceDetail openModal={openModal} />} />
          </Routes>
        </main>
        <Footer />
        <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}

export default App;
