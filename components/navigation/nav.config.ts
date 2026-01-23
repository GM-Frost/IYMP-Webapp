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
    label: 'Algo Suite',
    children: [
      { label: 'Overview', href: '/algos' },
      { label: 'Algo Levels', href: '/algos/levels' },
      { label: 'Strategy Library', href: '/algos/strategies' },
      { label: 'Ticker Coverage', href: '/algos/tickers' },
      { label: 'TradingView Access', href: '/algos/tradingview' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Overview', href: '/resources' },
      { label: 'Booklet', href: '/resources/booklet' },
      { label: 'Video Library', href: '/resources/videos' },
      { label: 'PDF Vault', href: '/resources/pdfs' },
    ],
  },
  {
    label: 'Community',
    children: [
      { label: 'Overview', href: '/community' },
      { label: 'Discord Hub', href: '/community/discord' },
      { label: 'Daily Trade Plan', href: '/community/trade-plan' },
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
      { label: 'Methodology', href: '/about/methodology' },
      { label: 'Disclaimer', href: '/about/disclaimer' },
    ],
  },
];
