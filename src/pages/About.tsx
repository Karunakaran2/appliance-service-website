import { motion } from 'framer-motion';
import { Shield, Award, Users, Target, CheckCircle, Clock } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Shield />, title: 'Integrity', description: 'Honest and transparent service' },
    { icon: <Award />, title: 'Excellence', description: 'Highest quality standards' },
    { icon: <Users />, title: 'Customer Focus', description: 'Your satisfaction is our priority' },
    { icon: <Target />, title: 'Reliability', description: 'Dependable and consistent service' },
  ];

  const qualities = [
    'Certified and experienced technicians',
    'Use of genuine spare parts only',
    '90-day warranty on all repairs',
    'Same-day service available',
    'Transparent pricing with no hidden costs',
    '24/7 customer support',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-xl mb-6">About Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your Trusted Partner for Home Appliance Repair & Maintenance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  With over 15 years of experience in the home appliance repair industry, we have built 
                  a reputation for excellence, reliability, and customer satisfaction. What started as 
                  a small local service has grown into one of Tamil Nadu's most trusted appliance repair 
                  companies.
                </p>
                <p>
                  Our journey has been driven by a simple mission: to provide honest, professional, and 
                  affordable repair services that extend the life of your appliances and save you money. 
                  We believe in building long-term relationships with our customers through quality service 
                  and transparent communication.
                </p>
                <p>
                  Today, we serve thousands of satisfied customers across multiple cities, handling everything 
                  from simple repairs to complex installations. Our team of certified technicians brings 
                  decades of combined experience to every job, ensuring your appliances are in expert hands.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-3xl p-8"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/images/placeholders/our-story.png" 
                  alt="Our Team" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-md mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Guided by integrity, excellence, and customer satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-3xl p-8"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/images/placeholders/quality-assurance.png" 
                  alt="Quality Assurance" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="heading-md mb-6">Quality Assurance Promise</h2>
              <div className="space-y-4">
                {qualities.map((quality, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{quality}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border-l-4 border-primary-500">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Service Warranty
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We stand behind our work with a comprehensive 90-day warranty on all repairs 
                      and replaced parts. If the same issue occurs within the warranty period, we'll 
                      fix it free of charge.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
