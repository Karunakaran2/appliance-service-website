export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQ[] = [
  {
    id: 1,
    question: 'What areas do you serve?',
    answer: 'We provide home appliance repair services across Tamil Nadu, including Sivagangai, Karaikudi, Madurai, Coimbatore, Salem, and Tiruppur. Contact us to check if we serve your area.',
    category: 'Service Area',
  },
  {
    id: 2,
    question: 'Do you provide same-day service?',
    answer: 'Yes, we offer same-day service for most repairs. Our technicians are available 24/7 for emergency repairs. Book early in the day for guaranteed same-day service.',
    category: 'Service',
  },
  {
    id: 3,
    question: 'Are your spare parts genuine?',
    answer: 'Absolutely! We use only genuine spare parts sourced directly from authorized dealers and manufacturers. This ensures quality and longevity of the repairs.',
    category: 'Parts',
  },
  {
    id: 4,
    question: 'What is your service warranty?',
    answer: 'We provide a 90-day warranty on all repairs and replaced parts. If the same issue occurs within the warranty period, we will fix it free of charge.',
    category: 'Warranty',
  },
  {
    id: 5,
    question: 'How much do you charge for diagnostics?',
    answer: 'We offer FREE diagnostics for all appliances. You only pay for the repair if you choose to proceed with our service. No hidden charges!',
    category: 'Pricing',
  },
  {
    id: 6,
    question: 'Do I need to bring my appliance to your service center?',
    answer: 'No! We provide doorstep repair services. Our technicians will come to your location with all necessary tools and spare parts to fix your appliance on-site.',
    category: 'Service',
  },
  {
    id: 7,
    question: 'What brands do you service?',
    answer: 'We service all major brands including Samsung, LG, Whirlpool, Bosch, IFB, Godrej, Haier, Panasonic, Sony, Voltas, Blue Star, and many more.',
    category: 'Brands',
  },
  {
    id: 8,
    question: 'How can I book a service?',
    answer: 'You can book a service by calling us at +91 97890 90737, sending a WhatsApp message, or filling out the online booking form on our website. We will confirm your appointment within 30 minutes.',
    category: 'Booking',
  },
  {
    id: 9,
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, UPI, credit/debit cards, and online bank transfers. Payment is required only after the repair is completed and you are satisfied with the service.',
    category: 'Payment',
  },
  {
    id: 10,
    question: 'Are your technicians certified?',
    answer: 'Yes, all our technicians are highly trained and certified with 10-15+ years of experience in appliance repair. They undergo regular training to stay updated with the latest technologies.',
    category: 'Technicians',
  },
  {
    id: 11,
    question: 'Do you offer annual maintenance contracts (AMC)?',
    answer: 'Yes, we offer comprehensive AMC packages for AC, washing machines, refrigerators, and water purifiers. These packages include regular servicing, priority support, and discounted repairs.',
    category: 'AMC',
  },
  {
    id: 12,
    question: 'What if the repair is not successful?',
    answer: 'If we cannot fix your appliance on-site, we will provide you with an honest assessment and alternative solutions. We never charge for unsuccessful repairs or diagnostics.',
    category: 'Service',
  },
];

export const faqCategories = Array.from(new Set(faqData.map(faq => faq.category)));
