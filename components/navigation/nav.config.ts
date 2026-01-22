export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    children: [
      { label: 'Stocks', href: '/products/stocks' },
      { label: 'Crypto', href: '/products/crypto' },
      { label: 'ETF', href: '/products/etf' },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'About',
    children: [
      { label: 'Company', href: '/about/company' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];
