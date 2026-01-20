import { motion } from 'framer-motion';
import { Home, Clock, Shield, DollarSign, Award, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const reasons = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t('whyChooseUs.doorstep'),
      description: t('whyChooseUs.doorstepDesc'),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('whyChooseUs.sameDay'),
      description: t('whyChooseUs.sameDayDesc'),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('whyChooseUs.genuineParts'),
      description: t('whyChooseUs.genuinePartsDesc'),
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: t('whyChooseUs.pricing'),
      description: t('whyChooseUs.pricingDesc'),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('whyChooseUs.warranty'),
      description: t('whyChooseUs.warrantyDesc'),
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: t('whyChooseUs.technicians'),
      description: t('whyChooseUs.techniciansDesc'),
    },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">{t('whyChooseUs.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('whyChooseUs.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center group hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
