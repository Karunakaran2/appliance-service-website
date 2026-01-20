#!/bin/bash

# StatsSection.tsx
cat > src/components/home/StatsSection.tsx << 'EOF'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { siteConfig } from '../../data/siteConfig';

const StatsSection = () => {
  const [counts, setCounts] = useState({ clients: 0, experience: 0, repairs: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const clientTarget = 50000;
    const experienceTarget = 15;
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
            <div className="text-xl font-semibold opacity-90">Satisfied Clients</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white"
          >
            <div className="text-5xl md:text-6xl font-bold mb-2">{counts.experience}+</div>
            <div className="text-xl font-semibold opacity-90">Years Experience</div>
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
            <div className="text-xl font-semibold opacity-90">Repairs Done</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
EOF

# WhyChooseUs.tsx
cat > src/components/home/WhyChooseUs.tsx << 'EOF'
import { motion } from 'framer-motion';
import { Home, Clock, Shield, DollarSign, Award, Wrench } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Doorstep Service',
      description: 'We come to your location with all necessary tools and equipment',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Same-Day Repairs',
      description: 'Fast and efficient service to get your appliances running quickly',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Genuine Spare Parts',
      description: 'Only authentic parts from authorized dealers and manufacturers',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Transparent Pricing',
      description: 'No hidden charges. You know exactly what you are paying for',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Service Warranty',
      description: '90-day warranty on all repairs and replaced parts',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Expert Technicians',
      description: '10-15+ years of experience with certified professionals',
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
          <h2 className="heading-lg mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are committed to providing the best appliance repair services with unmatched quality and customer care
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
EOF

# ProcessTimeline.tsx
cat > src/components/home/ProcessTimeline.tsx << 'EOF'
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
EOF

# Testimonials.tsx
cat > src/components/home/Testimonials.tsx << 'EOF'
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from our satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card relative"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary-100 dark:text-primary-900/30" />
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.location} • {testimonial.service}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
EOF

echo "Home components created successfully!"
