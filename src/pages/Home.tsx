import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServicesGrid from '../components/home/ServicesGrid';
import EmergencyCTA from '../components/home/EmergencyCTA';
import AboutSnapshot from '../components/home/AboutSnapshot';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessTimeline from '../components/home/ProcessTimeline';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
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
    </>
  );
};

export default Home;
