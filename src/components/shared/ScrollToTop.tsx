'use client';

import { useEffect, useState } from 'react';
import { Icons } from './Icons';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? 'fixed bottom-3 right-2 z-50' : 'hidden'
      } p-2 bg-accent cursor-pointer text-accent-foreground rounded-full focus:outline-none focus:ring-2 focus:ring-muted transition duration-300 ease-in-out`}
      onClick={scrollToTop}
    >
      <Icons.moveUp className="h-6 w-6 text-primary" />
    </div>
  );
}
