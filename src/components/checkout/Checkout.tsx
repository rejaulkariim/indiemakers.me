import { Button } from '@/components/ui/button';
import { checkoutOrder } from '@/lib/actions/order.action';
import { TStripePlan } from '@/types';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ plan, userId }: { plan: TStripePlan; userId: string }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      buyerId: userId,
      name: plan.name,
      description: plan.description,
      price: plan.price,
    };
    await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="post">
      <Button
        type="submit"
        role="link"
        size="lg"
        className="button w-full sm:w-full"
      >
        Get App Brews
      </Button>
    </form>
  );
};

export default Checkout;
