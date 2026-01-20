import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ta' : 'en';
    i18n.changeLanguage(newLang);
  };

  return ( // turbo-all
    <button
      onClick={toggleLanguage}
      className="p-2 mr-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle Language"
      title={i18n.language === 'en' ? 'Switch to Tamil' : 'Switch to English'}
    >
        <span className="flex items-center font-medium text-sm">
            <Globe className="w-5 h-5 mr-1" />
            {i18n.language === 'en' ? 'TA' : 'EN'}
        </span>
    </button>
  );
};

export default LanguageSwitcher;
