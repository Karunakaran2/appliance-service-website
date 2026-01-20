import { motion } from 'framer-motion';
import { Phone, Search, Wrench, CheckCircle } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      number: 1,
      icon: <Phone className="w-8 h-8" />,
      title: 'Contact Us',
      description: 'Call us or book online to schedule your service appointment',
    },
    {
      number: 2,
      icon: <Search className="w-8 h-8" />,
      title: 'Breakdown Analysis',
      description: 'Our technician will diagnose the problem and provide a transparent quote',
    },
    {
      number: 3,
      icon: <Wrench className="w-8 h-8" />,
      title: 'Performing Repairs',
      description: 'We fix your appliance using genuine parts and professional expertise',
    },
    {
      number: 4,
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Fix the Problem',
      description: 'Your appliance is restored to perfect working condition with warranty',
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Our Service Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Simple and transparent process from booking to completion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {step.number}
                </div>
                <div className="w-12 h-12 mx-auto mb-4 text-primary-600 dark:text-primary-400">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
