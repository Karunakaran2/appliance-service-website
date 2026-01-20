import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a5276' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 rounded-full text-sm font-semibold"
            >
              ⭐ {t('hero.trustedBy')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-xl mb-6"
            >
              {t('hero.titlePrefix')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                {t('hero.titleHighlight')}
              </span>{' '}
              {t('hero.titleSuffix')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.tagline')}
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-green-500">✓</span>
                <span>{t('hero.sameDayService')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-green-500">✓</span>
                <span>{t('hero.expertTechnicians')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-green-500">✓</span>
                <span>{t('hero.genuineParts')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-green-500">✓</span>
                <span>{t('hero.warranty')}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-2 btn-primary group"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>{t('hero.callNow')}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('hero.whatsapp')}</span>
              </a>
              <button className="flex items-center space-x-2 btn-outline">
                <Calendar className="w-5 h-5" />
                <span>{t('hero.bookService')}</span>
              </button>
            </motion.div>

            {/* Phone Number Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-center lg:text-left"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t('hero.emergencyService')}</p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
              >
                {siteConfig.contact.phone}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block p-8"
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/placeholders/hero-image.png" 
                  alt="Appliance Service Hero" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t('hero.rating')}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{t('hero.reviews')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t('hero.years')}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{t('hero.experience')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
