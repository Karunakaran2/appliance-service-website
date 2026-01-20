export interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  review: string;
  date: string;
  avatar?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Chennai',
    service: 'AC Service',
    rating: 5,
    review: 'Excellent service! The technician arrived on time and fixed my AC within an hour. Very professional and the pricing was transparent. Highly recommended!',
    date: '2024-01-15',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Trichy',
    service: 'Washing Machine Repair',
    rating: 5,
    review: 'My washing machine was making strange noises. They diagnosed the problem quickly and replaced the faulty part with genuine Samsung parts. Great service!',
    date: '2024-01-10',
  },
  {
    id: 3,
    name: 'Arun Patel',
    location: 'Madurai',
    service: 'Refrigerator Service',
    rating: 5,
    review: 'Quick and efficient service. My fridge was not cooling properly, and they fixed it the same day. The technician explained everything clearly. Very satisfied!',
    date: '2024-01-08',
  },
  {
    id: 4,
    name: 'Deepa Menon',
    location: 'Coimbatore',
    service: 'TV Repair',
    rating: 5,
    review: 'Professional and courteous service. They repaired my LED TV screen and it looks as good as new. Reasonable pricing and good warranty. Thank you!',
    date: '2024-01-05',
  },
  {
    id: 5,
    name: 'Vijay Krishnan',
    location: 'Salem',
    service: 'Microwave Service',
    rating: 5,
    review: 'My microwave stopped heating. They came the next day, replaced the magnetron, and tested everything thoroughly. Works perfectly now!',
    date: '2024-01-03',
  },
  {
    id: 6,
    name: 'Lakshmi Iyer',
    location: 'Tiruppur',
    service: 'Water Purifier Service',
    rating: 5,
    review: 'Regular RO service was due. They changed all filters, cleaned the system, and checked TDS levels. Water tastes much better now. Great work!',
    date: '2023-12-28',
  },
];
