import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import WashingMachine from '../pages/services/WashingMachine';
import ACService from '../pages/services/ACService';
import Refrigerator from '../pages/services/Refrigerator';
import Television from '../pages/services/Television';
import Microwave from '../pages/services/Microwave';
import WaterPurifier from '../pages/services/WaterPurifier';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/washing-machine" element={<WashingMachine />} />
      <Route path="/services/ac-service" element={<ACService />} />
      <Route path="/services/refrigerator" element={<Refrigerator />} />
      <Route path="/services/television" element={<Television />} />
      <Route path="/services/microwave" element={<Microwave />} />
      <Route path="/services/water-purifier" element={<WaterPurifier />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
};

export default AppRoutes;
