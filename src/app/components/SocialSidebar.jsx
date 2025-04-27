'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SocialSidebar = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  
  // Animation variants for staggered animation of icons
  const sidebarVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 1 
      }
    }
  };
  
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/him4n-shu', icon: '/assets/images/icons/github.svg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/himanshu-kumar-b4b799208', icon: '/assets/images/icons/linkedin.svg' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100010182331281', icon: '/assets/images/icons/facebook.svg' },
    { name: 'Instagram', url: 'https://www.instagram.com/him4n_shu', icon: '/assets/images/icons/instagram.svg' },
  ];

  return (
    <motion.div 
      className="hidden md:flex fixed left-0 top-0 h-full w-12 sm:w-16 lg:w-20 flex-col items-center justify-center gap-4 sm:gap-6 z-30"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-4 sm:gap-6"
      >
        {socialLinks.map((link, index) => (
          <motion.div 
            key={link.name}
            variants={iconVariants} 
            whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 5 : -5 }}
            className="relative"
            onMouseEnter={() => setActiveTooltip(link.name)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <Link href={link.url} target="_blank" className="transition-opacity block group">
              <Image 
                src={link.icon} 
                alt={link.name} 
                width={24} 
                height={24} 
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:filter group-hover:brightness-125" 
              />
              {activeTooltip === link.name && (
                <motion.div 
                  className="absolute left-14 -top-1 whitespace-nowrap px-2 py-1 bg-gray-800 text-white text-xs rounded-md"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.div>
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SocialSidebar; 