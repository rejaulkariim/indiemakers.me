export const stripePlan = {
  // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
  plans: [
    {
      name: 'Starter',
      description: 'Perfect for small projects',
      price: 269,
      priceAnchor: 369,
      features: [
        {
          name: 'NextJS Architecture',
          disabled: false,
        },
        { name: 'User Authentication', disabled: false },
        { name: 'Integrated Database', disabled: false },
        { name: 'Email Sending API', disabled: false },
        { name: 'Stripe Payment', disabled: false },
        { name: 'Components & animations', disabled: false },
        { name: 'Integrated Blog', disabled: false },
        { name: "ChatGPT Prompt's for terms & privacy", disabled: true },
        { name: 'Discord Community', disabled: true },
        { name: 'Lifetime Updates', disabled: true },
      ],
    },
    {
      isFeatured: true,
      name: 'Professional',
      description: 'You need more power',
      price: 299,
      priceAnchor: 499,
      features: [
        {
          name: 'NextJS Architecture',
          disabled: false,
        },
        { name: 'User Authentication', disabled: false },
        { name: 'Integrated Database', disabled: false },
        { name: 'Email Sending API', disabled: false },
        { name: 'Stripe Payment', disabled: false },
        { name: 'Components & animations', disabled: false },
        { name: 'Integrated Blog', disabled: false },
        { name: "ChatGPT Prompt's for terms & privacy", disabled: false },
        { name: 'Discord Community', disabled: false },
        { name: 'Lifetime Updates', disabled: false },
      ],
    },
    {
      isFeatured: false,
      name: 'Professional',
      description: 'You need more power',
      price: 399,
      priceAnchor: 599,
      features: [
        {
          name: 'NextJS Architecture',
          disabled: false,
        },
        { name: 'User Authentication', disabled: false },
        { name: 'Integrated Database', disabled: false },
        { name: 'Email Sending API', disabled: false },
        { name: 'Stripe Payment', disabled: false },
        { name: 'Components & animations', disabled: false },
        { name: 'Integrated Blog', disabled: false },
        { name: "ChatGPT Prompt's for terms & privacy", disabled: false },
        { name: 'Discord Community', disabled: false },
        { name: 'Lifetime Updates', disabled: false },
      ],
    },
  ],
};
