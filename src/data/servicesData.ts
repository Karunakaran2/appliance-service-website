export interface Service {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
  shortDesc: string;
  image: string;
  problems: string[];
  features: string[];
  benefits: string[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    name: 'Washing Machine Service',
    slug: 'washing-machine',
    icon: '🧺',
    shortDesc: 'Complete washing machine repair and maintenance for all brands',
    description: 'Expert washing machine repair services for all brands including Samsung, LG, Whirlpool, Bosch, IFB, and more. We handle all types of issues from simple repairs to complex diagnostics.',
    image: '/assets/images/placeholders/washing-machine.jpg',
    problems: [
      'Machine not starting',
      'Water not draining',
      'Excessive noise during spin',
      'Door not opening/closing',
      'Water leakage',
      'Drum not rotating',
      'Error codes displayed',
      'Clothes not getting clean',
    ],
    features: [
      'Doorstep service',
      'Same-day repair',
      'Genuine spare parts',
      '90-day service warranty',
      'Free diagnostics',
      'Experienced technicians',
    ],
    benefits: [
      'Save money on replacement',
      'Extended appliance life',
      'Professional service',
      'Transparent pricing',
    ],
  },
  {
    id: 2,
    name: 'AC Service & Gas Refill',
    slug: 'ac-service',
    icon: '❄️',
    shortDesc: 'Complete AC repair, installation, and gas refilling services',
    description: 'Professional AC service including installation, repair, maintenance, and gas refilling for all brands. Split AC, window AC, and central AC services available.',
    image: '/assets/images/placeholders/ac-service.jpg',
    problems: [
      'AC not cooling',
      'Water leakage',
      'Strange noises',
      'Foul smell',
      'High electricity bills',
      'Compressor issues',
      'Remote not working',
      'Ice formation on coils',
    ],
    features: [
      'Gas leak detection',
      'Complete servicing',
      'Filter cleaning',
      'Installation service',
      'AMC packages available',
      'Energy efficiency tips',
    ],
    benefits: [
      'Better cooling performance',
      'Lower electricity bills',
      'Improved air quality',
      'Extended AC lifespan',
    ],
  },
  {
    id: 3,
    name: 'Refrigerator Repair',
    slug: 'refrigerator',
    icon: '🧊',
    shortDesc: 'Expert refrigerator and freezer repair for all brands',
    description: 'Comprehensive refrigerator repair services covering single door, double door, side-by-side, and French door models from all major brands.',
    image: '/assets/images/placeholders/refrigerator.jpg',
    problems: [
      'Not cooling properly',
      'Freezer not working',
      'Water leakage',
      'Excessive noise',
      'Ice buildup',
      'Door seal problems',
      'Light not working',
      'Temperature fluctuation',
    ],
    features: [
      'Gas refilling',
      'Thermostat replacement',
      'Compressor repair',
      'Door seal replacement',
      'Defrost system repair',
      'Emergency service',
    ],
    benefits: [
      'Food safety maintained',
      'Energy savings',
      'Avoid costly replacement',
      'Professional diagnosis',
    ],
  },
  {
    id: 4,
    name: 'Television Repair',
    slug: 'television',
    icon: '📺',
    shortDesc: 'LED, LCD, and Smart TV repair services',
    description: 'Expert television repair for all brands and models including LED, LCD, OLED, QLED, and Smart TVs. Screen replacement, motherboard repair, and software updates.',
    image: '/assets/images/placeholders/tv-repair.jpg',
    problems: [
      'No display',
      'No sound',
      'Lines on screen',
      'Remote not working',
      'HDMI port issues',
      'Screen flickering',
      'Smart features not working',
      'Power issues',
    ],
    features: [
      'Screen replacement',
      'Panel repair',
      'Motherboard repair',
      'Software updates',
      'HDMI port repair',
      'Wall mounting service',
    ],
    benefits: [
      'Cost-effective repairs',
      'Original parts',
      'Quick turnaround',
      'Expert technicians',
    ],
  },
  {
    id: 5,
    name: 'Microwave Service',
    slug: 'microwave',
    icon: '🔥',
    shortDesc: 'Microwave oven repair and maintenance',
    description: 'Complete microwave oven repair services including solo, grill, and convection models. Magnetron replacement, control panel repair, and safety inspections.',
    image: '/assets/images/placeholders/microwave.jpg',
    problems: [
      'Not heating food',
      'Turntable not rotating',
      'Display not working',
      'Door not closing',
      'Sparking inside',
      'Unusual sounds',
      'Timer issues',
      'Keypad malfunction',
    ],
    features: [
      'Magnetron replacement',
      'Waveguide repair',
      'Door seal replacement',
      'Control panel repair',
      'Safety testing',
      'Cleaning service',
    ],
    benefits: [
      'Safe operation',
      'Even heating',
      'Energy efficient',
      'Extended lifespan',
    ],
  },
  {
    id: 6,
    name: 'Water Purifier Service',
    slug: 'water-purifier',
    icon: '💧',
    shortDesc: 'RO, UV, and UF water purifier servicing',
    description: 'Complete water purifier service including RO membrane replacement, filter changes, UV lamp replacement, and TDS adjustment for all brands.',
    image: '/assets/images/placeholders/water-purifier.jpg',
    problems: [
      'Water taste changed',
      'Low water flow',
      'RO not working',
      'UV lamp not glowing',
      'Water leakage',
      'Storage tank issues',
      'Foul smell',
      'High TDS levels',
    ],
    features: [
      'RO membrane replacement',
      'Filter replacement',
      'UV lamp replacement',
      'TDS testing',
      'Annual maintenance',
      'Installation service',
    ],
    benefits: [
      'Pure drinking water',
      'Better health',
      'Cost savings',
      'Regular maintenance',
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find(service => service.slug === slug);
};
