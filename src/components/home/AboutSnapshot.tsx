import { motion } from 'framer-motion';
import { Users, CheckCircle, Award, Clock } from 'lucide-react';

const AboutSnapshot = () => {
  const features = [
    { icon: <Users className="w-6 h-6" />, text: 'Highly Professional Staff' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Quality Control System' },
    { icon: <Award className="w-6 h-6" />, text: 'Accurate Testing Process' },
    { icon: <Clock className="w-6 h-6" />, text: 'Timely Delivery' },
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
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-3xl p-8">
              <div className="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 rounded-2xl flex items-center justify-center">
                <span className="text-8xl">👨‍🔧</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">About Our Service</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We provide a one-stop solution for all your home appliance repair and fitting needs. 
              With over 15 years of experience and a team of highly skilled technicians, we ensure 
              your appliances are in the best hands.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Our commitment to quality, transparency, and customer satisfaction has made us the 
              trusted choice for thousands of homeowners across Tamil Nadu.
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
