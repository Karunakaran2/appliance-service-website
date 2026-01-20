import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

import { useTranslation } from 'react-i18next';

const ServicesGrid = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:scale-105 cursor-pointer overflow-hidden transform transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={t(`services.${service.slug}.name`)}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-4xl text-white drop-shadow-lg">{service.icon}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t(`services.${service.slug}.name`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {t(`services.${service.slug}.shortDesc`)}
                </p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors duration-300"
              >
                <span>{t('services.learnMore')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
