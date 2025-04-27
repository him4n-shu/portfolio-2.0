'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const getLinkClass = (href) => {
    const isActive = activeLink === href;
    return `px-4 py-2 block ${isActive ? 'text-[#C778DD]' : 'text-white hover:text-[#C778DD]'} transition-colors duration-200`;
  };

  const getMobileLinkClass = (href) => {
    const isActive = activeLink === href;
    return `block w-full text-lg py-4 px-6 border-b border-gray-700 ${isActive ? 'text-[#C778DD]' : 'text-white hover:text-[#C778DD]'} transition-colors duration-200`;
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

  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    },
    exit: { 
      x: '100%', 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const hamburgerSpanClass = "w-6 h-0.5 bg-white transition-all duration-300";

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-[#1c1f26] z-50 flex justify-center items-center py-4"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center px-4 md:px-8">
        <motion.div 
          className="text-2xl font-medium tracking-tight z-20"
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
              height={40} 
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex font-medium text-base tracking-wider"
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

        {/* Mobile Menu Button */}
        <div className="block md:hidden z-20">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="relative w-7 h-6 flex flex-col justify-between"
            aria-label="Toggle mobile menu"
          >
            <span 
              className={`${hamburgerSpanClass} ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
            ></span>
            <span 
              className={`${hamburgerSpanClass} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span 
              className={`${hamburgerSpanClass} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-[#1c1f26] z-10 pt-20 flex flex-col md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col overflow-y-auto h-full">
                <Link 
                  href="#home" 
                  className={getMobileLinkClass('#home')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[#C778DD]">#</span>home
                </Link>
                <Link 
                  href="#projects" 
                  className={getMobileLinkClass('#projects')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[#C778DD]">#</span>projects
                </Link>
                <Link 
                  href="#skills" 
                  className={getMobileLinkClass('#skills')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[#C778DD]">#</span>skills
                </Link>
                <Link 
                  href="#about" 
                  className={getMobileLinkClass('#about')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[#C778DD]">#</span>about
                </Link>
                <Link 
                  href="#contacts" 
                  className={getMobileLinkClass('#contacts')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[#C778DD]">#</span>contacts
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 