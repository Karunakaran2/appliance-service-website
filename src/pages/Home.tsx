import { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServicesGrid from '../components/home/ServicesGrid';
import EmergencyCTA from '../components/home/EmergencyCTA';
import AboutSnapshot from '../components/home/AboutSnapshot';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessTimeline from '../components/home/ProcessTimeline';
import Testimonials from '../components/home/Testimonials';
import ContactModal from '../components/common/ContactModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal on first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem('hasVisited', 'true');
      }, 2000); // Show after 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <EmergencyCTA />
      <AboutSnapshot />
      <StatsSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
      
      {/* Contact Modal */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Home;
