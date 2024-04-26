import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  // debug: true,
  // An array of public routes that don't require authentication.
  publicRoutes: [
    '/',
    '/contact',
    '/blog',
    '/blog/:id',
    '/docs',
    '/docs/:id',
    '/cookie',
    '/privacy',
    '/terms',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ],

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
