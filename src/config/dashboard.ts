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
      title: 'Profile',
      href: '/user/dashboard/profile',
      icon: 'user',
    },
    {
      title: 'New Product',
      href: '/user/dashboard/submit',
      icon: 'plus',
    },
    {
      title: 'Buy Credits',
      href: '/user/dashboard/credits',
      icon: 'billing',
    },
  ],
};
