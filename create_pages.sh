#!/bin/bash

# About.tsx
cat > src/pages/About.tsx << 'EOF'
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
              <div className="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 rounded-2xl flex items-center justify-center">
                <span className="text-9xl">🏆</span>
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
              <div className="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 rounded-2xl flex items-center justify-center">
                <span className="text-9xl">✅</span>
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
EOF

# Services.tsx
cat > src/pages/Services.tsx << 'EOF'
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';

const Services = () => {
  const { slug } = useParams();
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
EOF

echo "Pages created successfully!"
