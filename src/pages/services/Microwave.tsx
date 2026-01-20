import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const Microwave = () => {
  const { t } = useTranslation();
  const serviceKey = 'serviceDetails.microwave';

  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/assets/images/placeholders/microwave.png"
            alt={t(`${serviceKey}.title`)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="heading-xl mb-6 text-white">{t(`${serviceKey}.title`)}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t(`${serviceKey}.intro`)}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
               <div className="lg:w-1/2">
                   <h2 className="heading-md mb-6">{t(`${serviceKey}.title`)}</h2>
                   <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                       {t(`${serviceKey}.intro`)}
                   </p>
               </div>
               <div className="lg:w-1/2">
                   <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video">
                       <img 
                           src="/assets/images/placeholders/hero-image.png" 
                           alt="Microwave Repair" 
                           className="w-full h-full object-cover"
                       />
                   </div>
               </div>
            </div>

           <h2 className="heading-md mb-8 text-center">{t(`${serviceKey}.issuesTitle`)}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t(`${serviceKey}.issues`, { returnObjects: true }) as string[]).map((issue, index) => (
                <div key={index} className="card hover:shadow-lg transition-transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl text-primary-600 dark:text-primary-400">⚠️</span>
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{issue}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Expert repair solution available</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600 dark:bg-primary-800">
        <div className="container-custom text-center">
            <h2 className="text-2xl font-bold text-white mb-6">{t('servicesPage.ctaTitle')}</h2>
            <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-white">
                <Phone className="w-5 h-5 inline mr-2" />
                {t('hero.callNow')}
            </a>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} className="btn-white">
                <MessageCircle className="w-5 h-5 inline mr-2" />
                {t('hero.whatsapp')}
            </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Microwave;
