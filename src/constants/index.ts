export const footerDocsLinks = [
  {
    label: 'Getting Started',
    route: '/',
  },

  {
    label: 'API Reference',
    route: '#',
  },
  {
    label: 'Integrations',
    route: '#',
  },
  {
    label: 'Examples',
    route: '#',
  },
];

export const footerResourcesLinks = [
  {
    label: 'Changelog',
    route: '#',
  },
  {
    label: 'Pricing',
    route: '#',
  },
  {
    label: 'Security',
    route: '#',
  },
  {
    label: 'Status',
    route: '#',
  },
];

export const footerCompanyLinks = [
  {
    label: 'Blog',
    route: '#',
  },
  {
    label: 'Contact',
    route: '#',
  },
  {
    label: 'Customers',
    route: '#',
  },
  {
    label: 'Brand',
    route: '#',
  },
];

export const footerLegalLinks = [
  {
    label: 'Cookies',
    route: '#',
  },
  {
    label: 'Privacy Policy',
    route: '#',
  },
  {
    label: 'Terms of Service',
    route: '#',
  },
];

export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Features',
    route: '/#features',
  },
  {
    label: 'Pricing',
    route: '/#pricing',
  },
  {
    label: 'Contact',
    route: '/contact',
  },

  {
    label: 'Blog',
    route: '/blog',
  },
];

export const userTestimonails = [
  {
    user: 'Sarah M.',
    comment: 'Stripe and user authentication setup made a huge difference!',
    image: '/assets/images/user.png',
  },
  {
    user: 'Emily L.',
    comment:
      'From concept to deployment in days! Next.js Architecture is a lifesaver.',
    image: '/assets/images/user.png',
  },
  {
    user: 'Alex H.',
    comment:
      'Full Stack Next.js made building and deploying a breeze. Phenomenal growth!',
    image: '/assets/images/user.png',
  },
  {
    user: 'Michael P.',
    comment:
      'Fast, efficient, and scalable! Unparalleled development experience.',
    image: '/assets/images/user.png',
  },
  {
    user: 'Jessica B.',
    comment: 'Impressive results! Smooth launch and unmatched scalability.',
    image: '/assets/images/user.png',
  },
  {
    user: 'David S.',
    comment: "Couldn't be happier! Unparalleled speed and scalability.",
    image: '/assets/images/user.png',
  },
  {
    user: 'Amanda R.',
    comment:
      'Game-changer for startups! Quick deployment and top-notch scalability.',
    image: '/assets/images/user.png',
  },
];

export const features = [
  {
    title: 'Authentication',
    description: 'Manage user authentication seamlessly with Clerk.',
    image: '/assets/images/authentication.png',
  },
  {
    title: 'Send Email with Resend',
    description:
      'Effortlessly send emails and manage resend functionality with Resend.',
    image: '/assets/images/email.png',
  },
  {
    title: 'Database Management',
    description:
      'Simplify tasks with MongoDB, a flexible NoSQL database solution.',
    image: '/assets/images/database.png',
  },
  {
    title: 'Stripe Payment Gateway',
    description: 'Accept payments securely and efficiently with Stripe.',
    image: '/assets/images/stripe.png',
  },
  {
    title: 'Responsive Design',
    description: 'Visually appealing and responsive designs with Tailwind CSS.',
    image: '/assets/images/tailwind.png',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve website visibility and performance with Next.js.',
    image: '/assets/images/seo.png',
  },
];

export const products = [
  {
    name: 'Logo Fast',
    slug: 'logo-fast',
    title: 'Create a beautiful logo in seconds with AI.',
    description: '',
    websiteUrl: 'https://shipfa.st/tools/logo-fast',
    imageUrl: '/logofast.png',
    likes: 50,
    comments: ['Logo Maker'],
    pricingModel: 'Fixed',
    tags: ['Next.js', 'AI'],
    youtubeUrl: 'https://www.youtube.com/watch?v=video123',
    isPromoted: true,
    status: 'Featured',
    createdBy: {
      id: 'user123',
      name: 'John Doe',
      email: 'john@example.com',
    },
    createdAt: '2024-04-07T12:00:00.000Z',
    updatedAt: '2024-04-07T12:00:00.000Z',
  },
  {
    name: 'App Brews',
    slug: 'app-brews',
    title: 'Your Marketplace for High Quality Next.js Starter Kit.⚡️',
    description:
      'Laptop Y is a sleek and powerful device built for multitasking and productivity. It boasts a high-resolution display, fast processor, and long battery life.',
    websiteUrl: 'https://appbrews.co',
    imageUrl: '/appbrews.png',
    likes: 20,
    comments: ['Great laptop for work!', 'Impressive performance.'],
    pricingModel: 'Subscription',
    tags: ['laptop', 'technology', 'work'],
    youtubeUrl: null,
    isPromoted: false,
    status: 'Featured',
    createdBy: {
      id: 'user456',
      name: 'Jane Smith',
      email: 'jane@example.com',
    },
    createdAt: '2024-04-08T09:30:00.000Z',
    updatedAt: '2024-04-08T09:30:00.000Z',
  },
  {
    name: 'Ship Fast',
    slug: 'ship-fast',
    title: 'Launch your startup in days, not weeks.',
    description: '',
    websiteUrl: 'https://shipfa.st',
    imageUrl: '/shipfast.png',
    likes: 15,
    comments: [],
    pricingModel: 'Onetime',
    tags: ['Next.js', 'React'],
    youtubeUrl: null,
    isPromoted: false,
    status: 'Featured',
    createdBy: {
      id: 'user789',
      name: 'Alice Johnson',
      email: 'alice@example.com',
    },
    createdAt: '2024-04-09T15:45:00.000Z',
    updatedAt: '2024-04-09T15:45:00.000Z',
  },
  {
    name: 'Micro Launch',
    slug: 'micro-launch',
    title: 'Discover the latest product trends on Microlaunch.',
    description:
      'Smart Watch A tracks your workouts, monitors your health, and keeps you connected on the go. Its sleek design and customizable faces make it the perfect accessory.',
    websiteUrl: 'https://microlaunch.net',
    imageUrl: '/microlaunch.png',
    likes: 35,
    comments: ['Love the design!', 'Great battery life.'],
    pricingModel: 'Subscription',
    tags: ['smartwatch', 'wearable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=video456',
    isPromoted: true,
    status: 'Featured',
    createdBy: {
      id: 'user123',
      name: 'John Doe',
      email: 'john@example.com',
    },
    createdAt: '2024-04-10T11:20:00.000Z',
    updatedAt: '2024-04-10T11:20:00.000Z',
  },
  {
    name: 'Lara Fast',
    slug: 'larafast',
    title: 'Launch your startup in days with Laravel',
    description:
      'Camera B features high-resolution imaging, advanced autofocus, and manual controls for capturing stunning photos and videos.',
    websiteUrl: 'https://larafast.com',
    imageUrl: '/larafast.png',
    likes: 10,
    comments: ["Best camera I've ever used!", 'Impressive image quality.'],
    pricingModel: 'Fixed',
    tags: ['CSS', 'Tailwind'],
    youtubeUrl: 'https://www.youtube.com/watch?v=video789',
    isPromoted: false,
    status: 'Featured',
    createdBy: {
      id: 'user456',
      name: 'Jane Smith',
      email: 'jane@example.com',
    },
    createdAt: '2024-04-11T14:00:00.000Z',
    updatedAt: '2024-04-11T14:00:00.000Z',
  },
  {
    name: 'Lara Fast',
    slug: 'larafast',
    title: 'Launch your startup in days with Laravel',
    description:
      'Camera B features high-resolution imaging, advanced autofocus, and manual controls for capturing stunning photos and videos.',
    websiteUrl: 'https://larafast.com',
    imageUrl: '/larafast.png',
    likes: 10,
    comments: ["Best camera I've ever used!", 'Impressive image quality.'],
    pricingModel: 'Fixed',
    tags: ['camera', 'photography'],
    youtubeUrl: 'https://www.youtube.com/watch?v=video789',
    isPromoted: false,
    status: 'New',
    createdBy: {
      id: 'user456',
      name: 'Jane Smith',
      email: 'jane@example.com',
    },
    createdAt: '2024-04-11T14:00:00.000Z',
    updatedAt: '2024-04-11T14:00:00.000Z',
  },
  {
    name: 'Lara Fast',
    slug: 'larafast',
    title: 'Launch your startup in days with Laravel',
    description:
      'Camera B features high-resolution imaging, advanced autofocus, and manual controls for capturing stunning photos and videos.',
    websiteUrl: 'https://larafast.com',
    imageUrl: '/larafast.png',
    likes: 10,
    comments: ["Best camera I've ever used!", 'Impressive image quality.'],
    pricingModel: 'Fixed',
    tags: ['camera', 'photography'],
    youtubeUrl: 'https://www.youtube.com/watch?v=video789',
    isPromoted: false,
    status: 'Trending',
    createdBy: {
      id: 'user456',
      name: 'Jane Smith',
      email: 'jane@example.com',
    },
    createdAt: '2024-04-11T14:00:00.000Z',
    updatedAt: '2024-04-11T14:00:00.000Z',
  },
];

export const plans = [
  {
    _id: 1,
    name: 'Pro Package',
    icon: '/assets/icons/free-plan.svg',
    price: 19,
    credits: 100,
    inclusions: [
      {
        label: '100 Credits',
        isIncluded: true,
      },
      {
        label: 'Full Access to Services',
        isIncluded: true,
      },
      {
        label: 'Priority Customer Support',
        isIncluded: true,
      },
      {
        label: 'Priority Updates',
        isIncluded: false,
      },
    ],
  },
  {
    _id: 1,
    name: 'Premium Package',
    icon: '/assets/icons/free-plan.svg',
    price: 79,
    credits: 250,
    inclusions: [
      {
        label: '250 Credits',
        isIncluded: true,
      },
      {
        label: 'Full Access to Services',
        isIncluded: true,
      },
      {
        label: 'Priority Customer Support',
        isIncluded: true,
      },
      {
        label: 'Priority Updates',
        isIncluded: true,
      },
    ],
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const creditFee = -50;
