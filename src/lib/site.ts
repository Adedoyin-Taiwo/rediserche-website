export const site = {
  name: 'RediSerche',
  domain: 'rediserche.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rediserche.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@rediserche.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+234 805 785 4470',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2348057854470',
  tagline: 'Research execution, participant access, and data intelligence for Africa.',
  colors: {
    ink: '#191919',
    brand: '#390b76'
  },
  bank: {
    accountName: 'Rediserche Ltd',
    bankName: 'Guaranty Trust Bank',
    accountNumber: '3004383862'
  },
  social: {
    linkedin: 'Rediserche Research',
    twitter: 'Rediserche',
    facebook: 'Rediserche Research',
    instagram: 'rediserche'
  }
};

export const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Platform', href: '/platform' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Grants', href: '/grants-and-partnerships' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' }
];

export const sectors = [
  'Health and public health',
  'Finance and fintech',
  'Agriculture and rural development',
  'Education',
  'Government and policy',
  'Development and social impact',
  'Consumer markets',
  'Academic research'
];
