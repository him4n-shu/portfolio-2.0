'use client';

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll function
    const handleSmoothScroll = (e) => {
      // Only handle clicks on anchor links that point to sections within the page
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href === '#' ? 'top' : href.slice(1);
      const targetElement = targetId === 'top' 
        ? document.documentElement 
        : document.getElementById(targetId);
      
      if (!targetElement) return;
      
      e.preventDefault();
      
      // Scroll to the target element with smooth animation
      window.scrollTo({
        top: targetId === 'top' ? 0 : targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    };

    // Add event listener
    document.addEventListener('click', handleSmoothScroll);
    
    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SmoothScroll; 