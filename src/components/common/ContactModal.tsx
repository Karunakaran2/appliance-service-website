import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useForm } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/servicesData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm(siteConfig.formspreeEndpoint);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  useEffect(() => {
    if (state.succeeded) {
      // Reset form after successful submission
      setFormData({ name: '', phone: '', service: '' });
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  }, [state.succeeded, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-lg transition-colors duration-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-white font-display">{t('contactModal.title')}</h2>
          <p className="text-white/90 mt-2">{t('contactModal.subtitle')}</p>
        </div>

        {/* Form */}
        <div className="p-6">
          {state.succeeded ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('contactModal.thankYou')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('contactModal.confirmation')}
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contactModal.yourName')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder={t('contactModal.enterName')}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contactModal.phoneNumber')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder={t('contactModal.enterPhone')}
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contactModal.serviceType')} *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">{t('contactModal.selectService')}</option>
                  {servicesData.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? t('contactModal.submitting') : t('contactModal.bookNow')}
              </button>

              {state.errors && (
                <p className="text-sm text-red-500 text-center">
                  {t('contactModal.error')}
                </p>
              )}
            </form>
          )}

          {/* Alternative Contact */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
              {t('contactModal.orReachUs')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-300"
              >
                <span>📞</span>
                <span className="font-medium">{t('hero.callNow')}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-300"
              >
                <span>💬</span>
                <span className="font-medium">{t('hero.whatsapp')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
