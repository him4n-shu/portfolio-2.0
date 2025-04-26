'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveLink(`#${sectionId}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClass = (href) => {
    const isActive = activeLink === href;
    return `px-4 py-2 block ${isActive ? 'text-[#C778DD]' : 'text-white hover:text-[#C778DD]'} transition-colors duration-200`;
  };

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-[#1c1f26] z-50 flex justify-center items-center py-4 border-b border-gray-800"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center px-8">
        <motion.div 
          className="text-2xl font-medium tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
        >
          <Link href="#home">
            <Image 
              src="/assets/images/ja-logo.svg" 
              alt="JA Logo" 
              width={40} 
              height={45} 
            />
          </Link>
        </motion.div>
        <motion.div 
          className="flex font-medium text-base tracking-wider"
          variants={linkContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={linkVariants} whileHover={{ scale: 1.05 }}>
            <Link href="#home" className={getLinkClass('#home')}>
              <span className="text-[#C778DD]">#</span>home
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover={{ scale: 1.05 }}>
            <Link href="#projects" className={getLinkClass('#projects')}>
              <span className="text-[#C778DD]">#</span>projects
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover={{ scale: 1.05 }}>
            <Link href="#skills" className={getLinkClass('#skills')}>
              <span className="text-[#C778DD]">#</span>skills
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover={{ scale: 1.05 }}>
            <Link href="#about" className={getLinkClass('#about')}>
              <span className="text-[#C778DD]">#</span>about
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover={{ scale: 1.05 }}>
            <Link href="#contacts" className={getLinkClass('#contacts')}>
              <span className="text-[#C778DD]">#</span>contacts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 