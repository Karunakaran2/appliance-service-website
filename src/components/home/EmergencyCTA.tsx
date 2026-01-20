import { Phone, Clock } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

import { useTranslation } from 'react-i18next';

const EmergencyCTA = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-700 dark:to-orange-700">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {t('emergencyCTA.title')}
            </h3>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-white/90">
              <Clock className="w-5 h-5" />
              <span>{siteConfig.contact.workingHours}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-2 bg-white text-red-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              {t('emergencyCTA.getDiagnostics')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
