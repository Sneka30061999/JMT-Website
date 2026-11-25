/** Company details. Replace the placeholders marked TODO before launch. */
export const SITE = {
  name: 'Joys Marbles & Granites',
  tagline: 'Elevating Iconic Architecture With Premium Stone.',
  founded: 1998,
  city: 'Chennai, Tamil Nadu, India',
  whatsapp: '919999999999', // TODO: company WhatsApp number (country code + number, no +)
  phone: '+91 00000 00000', // TODO
  phoneHref: 'tel:+910000000000', // TODO
  email: 'info@example.com', // TODO
  address: 'Business address to be added (Chennai, Tamil Nadu)', // TODO
  hours: '', // TODO: add only when confirmed
} as const;

export const waLink = (stone?: string): string =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    'Hello Joys Marbles & Granites, I would like pricing' + (stone ? ` for ${stone}` : '') + '.',
  )}`;
