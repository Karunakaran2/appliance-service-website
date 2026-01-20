import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Phone, MessageCircle, Wrench, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { getServiceBySlug } from '../../data/servicesData';

const WashingMachine = () => {
  const { t } = useTranslation();
  const serviceKey = 'serviceDetails.washing-machine';
  const serviceData = getServiceBySlug('washing-machine');

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={serviceData?.image || "/assets/images/placeholders/washing-machine.png"}
            alt={t(`${serviceKey}.title`)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading-xl mb-6 text-white">{t(`${serviceKey}.title`)}</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              {t(`${serviceKey}.intro`)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problems & Types */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-md mb-6">{t(`${serviceKey}.problemsTitle`)}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(t(`${serviceKey}.problems`, { returnObjects: true }) as string[]).map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Wrench className="w-5 h-5 text-primary-500 mt-0.5" />
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

      {/* Brands Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-10">{t(`${serviceKey}.brandsTitle`)}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {(t(`${serviceKey}.brands`, { returnObjects: true }) as string[]).map((brand, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:shadow-md transition-shadow">
                <img
                  src={`/assets/images/brands/${brand.toLowerCase().replace(/\s+/g, '-')}.svg`}
                  alt={`${brand} logo`}
                  className="h-12 w-32 object-contain dark:invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">{t(`${serviceKey}.processTitle`)}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {(t(`${serviceKey}.process`, { returnObjects: true }) as string[]).map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{step.split(':')[0]}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.split(':')[1]}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-1/2 order-2 lg:order-1">
               <h2 className="heading-md mb-8">{t(`${serviceKey}.whyChooseTitle`)}</h2>
               <div className="space-y-4">
                {(t(`${serviceKey}.whyChoose`, { returnObjects: true }) as string[]).map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <ShieldCheck className="w-6 h-6 text-primary-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg font-medium text-gray-900 dark:text-white">{reason}</p>
                    </div>
                  </div>
                ))}
               </div>
             </div>
             <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 lg:h-auto">
                  <img 
                    src="/assets/images/placeholders/washing-machine.png" 
                    alt="Why Choose Us" 
                    className="w-full h-full object-cover"
                  />
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
