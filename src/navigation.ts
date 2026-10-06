import { getPermalink } from './utils/permalinks';

export const LUMA_URL = 'https://luma.com/lv6wgy6r';
export const CONTACT_EMAIL = 'hello@sigmaflo.ai';

export const headerData = {
  links: [
    { text: 'Problem', href: getPermalink('/#problem') },
    { text: 'How it works', href: getPermalink('/#solution') },
    { text: 'SuiteWorld', href: getPermalink('/#suiteworld') },
  ],
  actions: [{ text: 'Save a seat', href: LUMA_URL, target: '_blank', variant: 'primary' }],
};

export const footerData = {
  tagline: 'Cash flow statements, built from the GL.',
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Problem', href: getPermalink('/#problem') },
        { text: 'How it works', href: getPermalink('/#solution') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Security', href: getPermalink('/security') },
        { text: 'Privacy', href: getPermalink('/privacy') },
        { text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      ],
    },
  ],
  footNote: '© 2026 Sigmaflo, Inc. All rights reserved.',
};
