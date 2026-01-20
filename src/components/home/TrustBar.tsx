import { Award, Star, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

const TrustBar = () => {
  const trustItems = [
    {
      icon: <Award className="w-8 h-8" />,
      text: `${siteConfig.stats.experience} Years Experience`,
    },
    {
      icon: <Star className="w-8 h-8" />,
      text: `${siteConfig.stats.rating}⭐ Google Rating (${siteConfig.stats.reviews}+ Reviews)`,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      text: 'Same Day Service',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      text: 'Genuine Spare Parts',
    },
  ];

  return (
    <section className="py-8 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-primary-500 dark:text-primary-400 mb-3">
                {item.icon}
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
