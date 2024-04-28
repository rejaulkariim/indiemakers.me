import { DashboardConfig } from '@/types';

export const dashboardConfig: DashboardConfig = {
  // mainNav: [
  //   {
  //     title: 'Catalog',
  //     href: '/docs',
  //   },
  //   {
  //     title: 'Support',
  //     href: '/support',
  //     disabled: true,
  //   },
  // ],
  sidebarNav: [
    {
      title: 'Submit Tool',
      href: '/user/dashboard/submit',
      icon: 'shoppingCartIcon',
    },
    {
      title: 'Profile',
      href: '/user/dashboard/profile',
      icon: 'settings',
    },
    {
      title: 'Buy Credits',
      href: '/user/dashboard/credits',
      icon: 'settings',
    },
  ],
};
