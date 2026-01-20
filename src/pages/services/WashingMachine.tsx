import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const WashingMachine = () => {
  const { t } = useTranslation();
  const serviceKey = 'serviceDetails.washing-machine';

  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/assets/images/placeholders/washing-machine.png"
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-md mb-6">{t(`${serviceKey}.problemsTitle`)}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(t(`${serviceKey}.problems`, { returnObjects: true }) as string[]).map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="heading-md mb-6">{t(`${serviceKey}.typesTitle`)}</h2>
              <div className="space-y-4">
                {(t(`${serviceKey}.types`, { returnObjects: true }) as string[]).map((type, index) => (
                  <div key={index} className="card flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-white">{type}</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="/assets/images/placeholders/hero-image.png" 
                    alt="Why Choose Us" 
                    className="w-full h-full object-cover"
                  />
                </div>
             </div>
             <div className="lg:w-1/2">
               <h2 className="heading-md mb-8">{t(`${serviceKey}.whyChooseTitle`)}</h2>
               <div className="space-y-4">
                {(t(`${serviceKey}.whyChoose`, { returnObjects: true }) as string[]).map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg font-medium text-gray-900 dark:text-white">{reason}</p>
                    </div>
                  </div>
                ))}
               </div>
             </div>
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

export default WashingMachine;
