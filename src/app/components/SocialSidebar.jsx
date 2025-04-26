'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
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

  return (
    <motion.div 
      className="fixed left-0 top-0 h-full border-r border-gray-700 w-20 flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6"
      >
        <motion.div variants={iconVariants} whileHover={{ scale: 1.2, rotate: 5 }}>
          <Link href="https://github.com/him4n-shu" target="_blank" className="transition-opacity block">
            <Image src="/assets/images/icons/github.svg" alt="GitHub" width={30} height={30} />
          </Link>
        </motion.div>
        
        <motion.div variants={iconVariants} whileHover={{ scale: 1.2, rotate: -5 }}>
          <Link href="https://www.linkedin.com/in/himanshu-kumar-b4b799208" target="_blank" className="transition-opacity block">
            <Image src="/assets/images/icons/linkedin.svg" alt="LinkedIn" width={30} height={30} />
          </Link>
        </motion.div>
        
        <motion.div variants={iconVariants} whileHover={{ scale: 1.2, rotate: 5 }}>
          <Link href="https://www.facebook.com/profile.php?id=100010182331281" target="_blank" className="transition-opacity block">
            <Image src="/assets/images/icons/facebook.svg" alt="Facebook" width={30} height={30} />
          </Link>
        </motion.div>
        
        <motion.div variants={iconVariants} whileHover={{ scale: 1.2, rotate: -5 }}>
          <Link href="https://www.instagram.com/him4n_shu" target="_blank" className="transition-opacity block">
            <Image src="/assets/images/icons/instagram.svg" alt="Instagram" width={30} height={30} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SocialSidebar; 