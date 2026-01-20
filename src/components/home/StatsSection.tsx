import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const StatsSection = () => {
  const { t } = useTranslation();
  const [counts, setCounts] = useState({ clients: 0, experience: 0, repairs: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const clientTarget = 50000;
    const experienceTarget = 8;
    const repairsTarget = 10000;

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current <= steps) {
        setCounts({
          clients: Math.floor((clientTarget / steps) * current),
          experience: Math.floor((experienceTarget / steps) * current),
          repairs: Math.floor((repairsTarget / steps) * current),
        });
      } else {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {counts.clients.toLocaleString()}+
            </div>
            <div className="text-xl font-semibold opacity-90">{t('stats.clients')}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white"
          >
            <div className="text-5xl md:text-6xl font-bold mb-2">{counts.experience}+</div>
            <div className="text-xl font-semibold opacity-90">{t('stats.experience')}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white"
          >
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {counts.repairs.toLocaleString()}+
            </div>
            <div className="text-xl font-semibold opacity-90">{t('stats.repairs')}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
