import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Services Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <h1 className="heading-xl mb-6 text-gray-900 dark:text-white">
                {t('servicesPage.title')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('servicesPage.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${siteConfig.contact.phone}`} className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('hero.callNow')}
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/placeholders/services_overview_hero.png" 
                  alt="Appliance Repair Technicians" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-t-xl">
                  <img 
                    src={service.image} 
                    alt={t(`services.${service.slug}.name`)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3 bg-primary-50 dark:bg-primary-900/30 w-12 h-12 flex items-center justify-center rounded-lg">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t(`services.${service.slug}.name`)}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {t(`services.${service.slug}.shortDesc`)}
                </p>
                
                <Link 
                  to={`/services/${service.slug}`} 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 group-hover:translate-x-1 transition-transform"
                >
                  {t('servicesPage.readMore')} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/placeholders/services_why_choose_us.png"
                  alt="Why Choose Us" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="heading-md mb-8">{t('whyChooseUs.title')}</h2>
              <div className="space-y-6">
                 {[
                    'sameDay',
                    'doorstep',
                    'genuineParts',
                    'technicians',
                    'warranty'
                 ].map((item, index) => (
                    <div key={index} className="flex items-start">
                       <CheckCircle className="w-6 h-6 text-primary-500 mr-4 mt-1 flex-shrink-0" />
                       <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                             {t(`whyChooseUs.${item}`)}
                          </h3>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/placeholders/services_cta_bg.png"
            alt="Technician Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/90" />
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="heading-md mb-6 text-white">
            {t('servicesPage.ctaTitle')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('servicesPage.ctaSubtitle')}
          </p>
           <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-white">
               <Phone className="w-5 h-5 mr-2" />
               {t('servicesPage.callNow')}
            </a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
