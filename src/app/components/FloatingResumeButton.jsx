'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const FloatingResumeButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="/assets/resume/Himanshu_Kumar_Resume.pdf"
          download="Himanshu_Kumar_Resume.pdf"
          className="fixed bottom-6 right-6 z-50 bg-[#C778DD] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#a551b6] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image 
            src="/assets/icons/download.svg" 
            alt="Download" 
            width={20} 
            height={20}
            className="text-white"
          />
          <span className="hidden sm:inline">Resume</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingResumeButton; 