'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/him4n-shu',
      icon: (
        <img src="/assets/images/icons/github.svg" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6" />
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/himanshu-kumar-b4b799208',
      icon: (
        <img src="/assets/images/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
      ),
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100010182331281',
      icon: (
        <img src="/assets/images/icons/facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/him4n_shu',
      icon: (
        <img src="/assets/images/icons/instagram.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
      ),
    },
  ];

  return (
    <footer className="bg-[#1c1f26] text-gray-300">
      <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-8">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 sm:space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#c778dd' }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-400 hover:text-[#c778dd] transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-500 text-xs sm:text-sm"
          >
            <p>©2025 Himanshu. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 