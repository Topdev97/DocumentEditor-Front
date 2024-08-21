import { IMenuItem } from '@/types/nav';
import { PATH } from './path';
export const NAV_ITEMS: IMenuItem[] = [
  {
    icon: '/icons/lists_svg.svg',
    activeIcon: '/icons/lists_svg.svg',
    brandImg: '/imgs/brand.png',
    label: 'Dashboard',
    href: PATH.DASHBOARD,
    children: [
      {
        icon: '/icons/home.svg',
        activeIcon: '/icons/home.svg',
        brandImg: '/imgs/brand.png',
        label: "Home",
        href: PATH.DASHBOARD,
      },
      {
        icon: '/icons/keywords.svg',
        activeIcon: '/icons/keywords.svg',
        brandImg: '/imgs/brand.png',
        label: "Histores",
        href: PATH.KEYWORDS,
      },
      // {
      //   icon: '/icons/negative_keywords.svg',
      //   activeIcon: '/icons/negative_keywords.svg',
      //   brandImg: '/imgs/brand.png',
      //   label: "Negative Keywords",
      //   href: PATH.NEGATIVE_KEYWORDS,
      // },
      // {
      //   icon: '/icons/metions.svg',
      //   activeIcon: '/icons/metions.svg',
      //   brandImg: '/imgs/brand.png',
      //   label: "Mentions",
      //   href: PATH.MENTIONS,
      // },
      // {
      //   icon: '/icons/replies.svg',
      //   activeIcon: '/icons/replies.svg',
      //   brandImg: '/imgs/brand.png',
      //   label: "Replies",
      //   href: PATH.REPLIES,
      // },
      // {
      //   icon: '/icons/offers.svg',
      //   activeIcon: '/icons/offers.svg',
      //   brandImg: '/imgs/brand.png',
      //   label: "Offers",
      //   href: PATH.OFFERS,
      // },
      // {
      //   icon: '/icons/settings.svg',
      //   activeIcon: '/icons/settings.svg',
      //   brandImg: '/imgs/brand.png',
      //   label: "Settings",
      //   href: PATH.SETTINGS,
      // },
      // {
      //   icon: '/icons/feedback.svg',
      //   activeIcon: '/icons/feedback.svg',
      //   brandImg: '/imgs/brand.png',
      //   label: "Feedback",
      //   href: PATH.FEEDBACK,
      // },
      // {
      //   icon: '/icons/affiliate.svg',
      //   activeIcon: '/icons/affiliate.svg',
      //   brandImg: '/imgs/brand.png',
      //   label: "Affiliate",
      //   href: PATH.AFFILIATE,
      // },
      {
        icon: '/icons/help.svg',
        activeIcon: '/icons/help.svg',
        brandImg: '/imgs/brand.png',
        label: "Help",
        href: PATH.HELP,
      },
    ]
  },
];
