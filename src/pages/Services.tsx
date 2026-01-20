import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';

const Services = () => {
  const { } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Scroll to specific service if hash is present
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

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
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional repair and maintenance for all your home appliances
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      {servicesData.map((service, index) => (
        <section
          key={service.id}
          id={service.slug}
          className={`section-padding ${
            index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'
          }`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 0 ? '' : 'lg:order-2'}
              >
                <div className="inline-block mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-semibold">
                  {service.icon} {service.name}
                </div>
                <h2 className="heading-md mb-4">{service.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Common Problems We Fix
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.problems.map((problem, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{problem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href={`tel:${siteConfig.contact.phone}`} className="btn-primary">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Book Now
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 inline mr-2" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 0 ? '' : 'lg:order-1'}
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-3xl p-8">
                  <div className="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 rounded-2xl flex items-center justify-center">
                    <span className="text-9xl">{service.icon}</span>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 mb-2" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Expert Service for Your Appliance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get professional repair service from certified technicians
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now: {siteConfig.contact.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
