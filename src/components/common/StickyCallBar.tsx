import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const StickyCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
      <div className="flex items-center">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex-1 flex items-center justify-center space-x-2 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors duration-300"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
