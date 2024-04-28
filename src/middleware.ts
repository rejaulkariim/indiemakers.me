import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    '/',
    '/blog',
    '/blog/:id',
    '/terms',
    '/privacy',
    '/cookies',
    '/membership',
    '/all-nextjs-boilerplate-and-starterkit',
    '/all-nextjs-boilerplate-and-starterkit/:id',
    '/premium-nextjs-boilerplate-and-starterkit',
    '/premium-nextjs-boilerplate-and-starterkit/:id',
    '/free-nextjs-boilerplate-and-starterkit',
    '/free-nextjs-boilerplate-and-starterkit/:id',
    '/contact',
  ],

  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/api/og'],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
