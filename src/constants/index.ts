export const footerDocsLinks = [
  {
    label: 'Getting Started',
    route: '/'
  },

  {
    label: 'API Reference',
    route: '#'
  },
  {
    label: 'Integrations',
    route: '#'
  },
  {
    label: 'Examples',
    route: '#'
  }
]

export const footerResourcesLinks = [
  {
    label: 'Changelog',
    route: '#'
  },
  {
    label: 'Pricing',
    route: '#'
  },
  {
    label: 'Security',
    route: '#'
  },
  {
    label: 'Status',
    route: '#'
  }
]

export const footerCompanyLinks = [
  {
    label: 'Blog',
    route: '#'
  },
  {
    label: 'Contact',
    route: '#'
  },
  {
    label: 'Customers',
    route: '#'
  },
  {
    label: 'Brand',
    route: '#'
  }
]

export const footerLegalLinks = [
  {
    label: 'Cookies',
    route: '#'
  },
  {
    label: 'Privacy Policy',
    route: '#'
  },
  {
    label: 'Terms of Service',
    route: '#'
  }
]

export const headerLinks = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Features',
    route: '/#features'
  },
  {
    label: 'Pricing',
    route: '/#pricing'
  },
  {
    label: 'Contact',
    route: '/contact'
  },

  {
    label: 'Blog',
    route: '/blog'
  }
]

export const userTestimonails = [
  {
    user: 'Sarah M.',
    comment: 'Stripe and user authentication setup made a huge difference!',
    image: '/assets/images/user.png'
  },
  {
    user: 'Emily L.',
    comment:
      'From concept to deployment in days! Next.js Architecture is a lifesaver.',
    image: '/assets/images/user.png'
  },
  {
    user: 'Alex H.',
    comment:
      'Full Stack Next.js made building and deploying a breeze. Phenomenal growth!',
    image: '/assets/images/user.png'
  },
  {
    user: 'Michael P.',
    comment:
      'Fast, efficient, and scalable! Unparalleled development experience.',
    image: '/assets/images/user.png'
  },
  {
    user: 'Jessica B.',
    comment: 'Impressive results! Smooth launch and unmatched scalability.',
    image: '/assets/images/user.png'
  },
  {
    user: 'David S.',
    comment: "Couldn't be happier! Unparalleled speed and scalability.",
    image: '/assets/images/user.png'
  },
  {
    user: 'Amanda R.',
    comment:
      'Game-changer for startups! Quick deployment and top-notch scalability.',
    image: '/assets/images/user.png'
  }
]

export const features = [
  {
    title: 'Authentication',
    description: 'Manage user authentication seamlessly with Clerk.',
    image: '/assets/images/authentication.png'
  },
  {
    title: 'Send Email with Resend',
    description:
      'Effortlessly send emails and manage resend functionality with Resend.',
    image: '/assets/images/email.png'
  },
  {
    title: 'Database Management',
    description:
      'Simplify tasks with MongoDB, a flexible NoSQL database solution.',
    image: '/assets/images/database.png'
  },
  {
    title: 'Stripe Payment Gateway',
    description: 'Accept payments securely and efficiently with Stripe.',
    image: '/assets/images/stripe.png'
  },
  {
    title: 'Responsive Design',
    description: 'Visually appealing and responsive designs with Tailwind CSS.',
    image: '/assets/images/tailwind.png'
  },
  {
    title: 'SEO Optimization',
    description: 'Improve website visibility and performance with Next.js.',
    image: '/assets/images/seo.png'
  }
]

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
        isIncluded: true
      },
      {
        label: 'Full Access to Services',
        isIncluded: true
      },
      {
        label: 'Priority Customer Support',
        isIncluded: true
      },
      {
        label: 'Priority Updates',
        isIncluded: false
      }
    ]
  },
  {
    _id: 1,
    name: 'Premium Package',
    icon: '/assets/icons/free-plan.svg',
    price: 49,
    credits: 250,
    inclusions: [
      {
        label: '250 Credits',
        isIncluded: true
      },
      {
        label: 'Full Access to Services',
        isIncluded: true
      },
      {
        label: 'Priority Customer Support',
        isIncluded: true
      },
      {
        label: 'Priority Updates',
        isIncluded: true
      }
    ]
  }
]

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000
  }
}

export const creditFee = -50

export const PRODUCT_CATEGORIES = [
  {
    label: 'Support',
    value: 'support' as const,
    featured: [
      // {
      //   name: 'Contact us',
      //   title: 'Use the form to send us message and get help right away',
      //   href: '/contact',
      //   icon: 'message',
      // },
      // {
      //   name: 'FAQs',
      //   title:
      //     'Browse our faqs for common questions and quick find your answare',
      //   href: '#faqs',
      //   icon: 'post',
      // },
      {
        name: 'Send message on X',
        title: 'You can also send us direct message on x (Indie Makers)',
        href: 'https:/twitter.com/IndieMakersMe',
        icon: 'help'
      }
    ]
  },

  {
    label: 'Credits',
    value: 'credits' as const,
    featured: [
      {
        name: 'Buy Credits',
        title: 'Add credits to publish or feature your product.',
        href: '/credits',
        icon: 'coins'
      }
      // {
      //   name: 'Benifits',
      //   title:
      //     'Browse our faqs for common questions and quick find your answare',
      //   href: '#benifits',
      //   icon: 'crown',
      // },
    ]
  },
  {
    label: 'News',
    value: 'news' as const,
    featured: [
      {
        name: 'Blog',
        title: 'See our latest blog on indie products',
        href: '/blog',
        icon: 'book'
      }
      // {
      //   name: 'Benifits',
      //   title:
      //     'Browse our faqs for common questions and quick find your answare',
      //   href: '#benifits',
      //   icon: 'crown',
      // },
    ]
  }
]

export const products = [
  {
    name: 'SuperTask',
    slug: 'supertask',
    title: 'Efficient Task Management',
    logo: 'https://example.com/logo1.png',
    thumbnail: '/og.png',
    website: 'https://supertask.com',
    description: 'Manage your tasks efficiently with SuperTask.',
    tags: ['60e6ef7c55bd70343b54622c'],
    views: 150,
    upvotes: ['60e6ef7c55bd70343b54622d'],
    downvotes: [],
    comments: ['60e6ef7c55bd70343b54622e'],
    author: '60e6ef7c55bd70343b54622f',
    status: 'NEW',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'QuickNotes',
    slug: 'quicknotes',
    title: 'Fast and Simple Note Taking',
    logo: 'https://example.com/logo2.png',
    thumbnail: '/og.png',
    website: 'https://quicknotes.com',
    description: 'Take notes quickly and easily with QuickNotes.',
    tags: ['60e6ef7c55bd70343b546230'],
    views: 200,
    upvotes: ['60e6ef7c55bd70343b546231'],
    downvotes: [],
    comments: ['60e6ef7c55bd70343b546232'],
    author: '60e6ef7c55bd70343b546233',
    status: 'TRENDING',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'PhotoMaster',
    slug: 'photomaster',
    title: 'Professional Photo Editing',
    logo: 'https://example.com/logo3.png',
    thumbnail: '/og.png',
    website: 'https://photomaster.com',
    description: 'Edit your photos like a pro with PhotoMaster.',
    tags: ['60e6ef7c55bd70343b546234'],
    views: 300,
    upvotes: ['60e6ef7c55bd70343b546235'],
    downvotes: ['60e6ef7c55bd70343b546236'],
    comments: ['60e6ef7c55bd70343b546237'],
    author: '60e6ef7c55bd70343b546238',
    status: 'FEATURED',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'FitnessPal',
    slug: 'fitnesspal',
    title: 'Your Personal Fitness Companion',
    logo: 'https://example.com/logo4.png',
    thumbnail: '/og.png',
    website: 'https://fitnesspal.com',
    description: 'Track your workouts and stay fit with FitnessPal.',
    tags: ['60e6ef7c55bd70343b546239'],
    views: 250,
    upvotes: ['60e6ef7c55bd70343b546240'],
    downvotes: ['60e6ef7c55bd70343b546241'],
    comments: ['60e6ef7c55bd70343b546242'],
    author: '60e6ef7c55bd70343b546243',
    status: 'NEW',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'TravelBuddy',
    slug: 'travelbuddy',
    title: 'Your Travel Companion',
    logo: 'https://example.com/logo5.png',
    thumbnail: '/og.png',
    website: 'https://travelbuddy.com',
    description: 'Plan your trips easily with TravelBuddy.',
    tags: ['60e6ef7c55bd70343b546244'],
    views: 400,
    upvotes: ['60e6ef7c55bd70343b546245'],
    downvotes: [],
    comments: ['60e6ef7c55bd70343b546246'],
    author: '60e6ef7c55bd70343b546247',
    status: 'TRENDING',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'RecipeGuru',
    slug: 'recipeguru',
    title: 'Discover Delicious Recipes',
    logo: 'https://example.com/logo6.png',
    thumbnail: '/og.png',
    website: 'https://recipeguru.com',
    description: 'Find and share recipes with RecipeGuru.',
    tags: ['60e6ef7c55bd70343b546248'],
    views: 180,
    upvotes: ['60e6ef7c55bd70343b546249'],
    downvotes: [],
    comments: ['60e6ef7c55bd70343b546250'],
    author: '60e6ef7c55bd70343b546251',
    status: 'FEATURED',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'MindfulnessApp',
    slug: 'mindfulnessapp',
    title: 'Your Mindfulness Guide',
    logo: 'https://example.com/logo7.png',
    thumbnail: '/og.png',
    website: 'https://mindfulnessapp.com',
    description: 'Practice mindfulness with guided meditations.',
    tags: ['60e6ef7c55bd70343b546252'],
    views: 220,
    upvotes: ['60e6ef7c55bd70343b546253'],
    downvotes: ['60e6ef7c55bd70343b546254'],
    comments: ['60e6ef7c55bd70343b546255'],
    author: '60e6ef7c55bd70343b546256',
    status: 'NEW',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'BudgetTracker',
    slug: 'budgettracker',
    title: 'Manage Your Finances',
    logo: 'https://example.com/logo8.png',
    thumbnail: '/og.png',
    website: 'https://budgettracker.com',
    description: 'Track your expenses and manage your budget.',
    tags: ['60e6ef7c55bd70343b546257'],
    views: 340,
    upvotes: ['60e6ef7c55bd70343b546258'],
    downvotes: ['60e6ef7c55bd70343b546259'],
    comments: ['60e6ef7c55bd70343b546260'],
    author: '60e6ef7c55bd70343b546261',
    status: 'TRENDING',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'LanguageLearner',
    slug: 'languagelearner',
    title: 'Learn a New Language',
    logo: 'https://example.com/logo9.png',
    thumbnail: '/og.png',
    website: 'https://languagelearner.com',
    description: 'Learn a new language with interactive lessons.',
    tags: ['60e6ef7c55bd70343b546262'],
    views: 260,
    upvotes: ['60e6ef7c55bd70343b546263'],
    downvotes: ['60e6ef7c55bd70343b546264'],
    comments: ['60e6ef7c55bd70343b546265'],
    author: '60e6ef7c55bd70343b546266',
    status: 'FEATURED',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'MusicStreamer',
    slug: 'musicstreamer',
    title: 'Stream Your Favorite Music',
    logo: 'https://example.com/logo10.png',
    thumbnail: '/og.png',
    website: 'https://musicstreamer.com',
    description: 'Stream and discover new music.',
    tags: ['60e6ef7c55bd70343b546267'],
    views: 500,
    upvotes: ['60e6ef7c55bd70343b546268'],
    downvotes: [],
    comments: ['60e6ef7c55bd70343b546269'],
    author: '60e6ef7c55bd70343b546270',
    status: 'NEW',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'HealthMonitor',
    slug: 'healthmonitor',
    title: 'Track Your Health Metrics',
    logo: 'https://example.com/logo11.png',
    thumbnail: '/og.png',
    website: 'https://healthmonitor.com',
    description: 'Monitor your health and fitness metrics.',
    tags: ['60e6ef7c55bd70343b546271'],
    views: 320,
    upvotes: ['60e6ef7c55bd70343b546272'],
    downvotes: ['60e6ef7c55bd70343b546273'],
    comments: ['60e6ef7c55bd70343b546274'],
    author: '60e6ef7c55bd70343b546275',
    status: 'TRENDING',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'EventPlanner',
    slug: 'eventplanner',
    title: 'Plan Your Events Easily',
    logo: 'https://example.com/logo12.png',
    thumbnail: '/og.png',
    website: 'https://eventplanner.com',
    description: 'Plan and manage your events effortlessly.',
    tags: ['60e6ef7c55bd70343b546276'],
    views: 280,
    upvotes: ['60e6ef7c55bd70343b546277'],
    downvotes: ['60e6ef7c55bd70343b546278'],
    comments: ['60e6ef7c55bd70343b546279'],
    author: '60e6ef7c55bd70343b546280',
    status: 'FEATURED',
    createdAt: '2024-06-28T12:34:56Z'
  },
  {
    name: 'BookClub',
    slug: 'bookclub',
    title: 'Join a Book Club',
    logo: 'https://example.com/logo13.png',
    thumbnail: '/og.png',
    website: 'https://bookclub.com',
    description: 'Join a community of book lovers.',
    tags: ['60e6ef7c55bd70343b546281'],
    views: 450,
    upvotes: ['60e6ef7c55bd70343b546282'],
    downvotes: [],
    comments: ['60e6ef7c55bd70343b546283'],
    author: '60e6ef7c55bd70343b546284',
    status: 'NEW',
    createdAt: '2024-06-28T12:34:56Z'
  }
]
