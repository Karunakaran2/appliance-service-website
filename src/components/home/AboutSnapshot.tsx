import { motion } from 'framer-motion';
import { Users, CheckCircle, Award, Clock } from 'lucide-react';

import { useTranslation } from 'react-i18next';

const AboutSnapshot = () => {
  const { t } = useTranslation();
  const features = [
    { icon: <Users className="w-6 h-6" />, text: t('aboutSnapshot.professionalStaff') },
    { icon: <CheckCircle className="w-6 h-6" />, text: t('aboutSnapshot.qualityControl') },
    { icon: <Award className="w-6 h-6" />, text: t('aboutSnapshot.accurateTesting') },
    { icon: <Clock className="w-6 h-6" />, text: t('aboutSnapshot.timelyDelivery') },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/assets/images/placeholders/about-service.png" 
                alt="About Our Service" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">{t('aboutSnapshot.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {t('aboutSnapshot.description1')}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {t('aboutSnapshot.description2')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="text-primary-500 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
