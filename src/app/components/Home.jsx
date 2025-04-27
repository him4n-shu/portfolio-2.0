'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 0 rgba(199, 120, 221, 0)" },
    animate: {
      boxShadow: [
        "0 0 0 rgba(199, 120, 221, 0)",
        "0 0 10px rgba(199, 120, 221, 0.7)",
        "0 0 20px rgba(199, 120, 221, 0.4)",
        "0 0 0 rgba(199, 120, 221, 0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 md:pt-14">
      <div className="container mx-auto px-6 pl-8 md:pl-12 lg:pl-24 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 w-full">
          {/* Left content */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-5 md:space-y-6 py-4 md:py-8 lg:p-24 lg:pt-20 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight"
              variants={itemVariants}
            >
              <div>I'm Himanshu Kumar,</div>
              <div className="text-[#C778DD] mt-2 sm:mt-3">
                <Typewriter
                  words={["Software Engineer", "Web Developer", "Freelancer", "Tech Enthusiast"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-md leading-relaxed opacity-90 text-gray-300 max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Building digital experiences with code and creativity. Specialized in frontend development with React, Next.js, and modern JavaScript, while also diving into backend technologies and AI/ML solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6"
              variants={itemVariants}
            >
              <motion.a 
                href="#projects" 
                className="border border-[#C778DD] text-white px-5 py-2.5 min-w-[150px] flex items-center justify-center gap-2 transition duration-300 hover:bg-[#C778DD]/20 overflow-hidden group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={glowVariants}
                initial="initial"
                animate="animate"
              >
                <span className="z-10 flex items-center gap-2">
                  View my work 
                  <motion.span
                    variants={bounceVariants}
                    initial="initial"
                    animate="animate"
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
                <motion.span 
                  className="absolute left-0 w-0 h-full bg-[#C778DD]/20"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.button 
                onClick={() => {
                  document.getElementById('contacts').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="border border-[#C778DD] text-white px-5 py-2.5 min-w-[150px] flex items-center justify-center gap-2 transition duration-300 hover:bg-[#C778DD]/20 overflow-hidden group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={glowVariants}
                initial="initial"
                animate="animate"
              >
                <span className="z-10 flex items-center gap-2">
                  Contact me
                  <motion.span
                    variants={bounceVariants}
                    initial="initial"
                    animate="animate"
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
                <motion.span 
                  className="absolute left-0 w-0 h-full bg-[#C778DD]/20"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative px-4 py-6 lg:p-32 lg:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Purple geometric shapes behind image */}
              <motion.div 
                className="absolute top-1/4 -left-4 sm:-left-12 lg:-left-24 z-0 hidden sm:block"
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-[#C778DD] opacity-60"
                  animate={{ 
                    boxShadow: ["0 0 0 rgba(199, 120, 221, 0)", "0 0 10px rgba(199, 120, 221, 0.3)", "0 0 0 rgba(199, 120, 221, 0)"],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    boxShadow: { duration: 3, repeat: Infinity },
                    rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                  }}
                ></motion.div>
                <motion.div 
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-[#C778DD] opacity-60 -mt-8 sm:-mt-10 lg:-mt-12 ml-6 sm:ml-8 lg:ml-12"
                  animate={{ 
                    boxShadow: ["0 0 0 rgba(199, 120, 221, 0)", "0 0 10px rgba(199, 120, 221, 0.3)", "0 0 0 rgba(199, 120, 221, 0)"],
                    rotate: [0, -5, 0, 5, 0]
                  }}
                  transition={{ 
                    boxShadow: { duration: 3, repeat: Infinity, delay: 1.5 },
                    rotate: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                  }}
                ></motion.div>
              </motion.div>
              
              {/* Profile image */}
              <motion.div 
                className="relative z-10 mt-6 sm:mt-10 lg:mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="relative"
                >
                  <Image 
                    src="/assets/images/dp/profile_pic.png"
                    alt="Himanshu Kumar" 
                    width={400} 
                    height={500}
                    className="rounded-sm w-full h-auto max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto"
                    priority
                  />
                  
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-sm"
                    whileHover={{ borderColor: "#C778DD" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                {/* Status badge */}
                <motion.div 
                  className="absolute -bottom-4 sm:bottom-0 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-4 lg:right-0 bg-[#1c1f26] border border-gray-800 py-2 sm:py-3 px-3 sm:px-4 z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05, borderColor: "#C778DD" }}
                >
                  <div className="flex items-center gap-2 px-2 py-1 border border-[#C778DD]">
                    <motion.div 
                      className="h-3 w-3 sm:h-4 sm:w-4 bg-[#ed64a6]"
                      animate={{ 
                        backgroundColor: ["#ed64a6", "#C778DD", "#ed64a6"],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        backgroundColor: { duration: 2, repeat: Infinity },
                        scale: { duration: 1.5, repeat: Infinity }
                      }}
                    ></motion.div>
                    <p className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">Looking for a Part Time Job</p>
                  </div>
                </motion.div>
                
                {/* Dot pattern */}
                <motion.div 
                  className="absolute bottom-8 sm:bottom-12 right-4 sm:right-10 grid grid-cols-4 sm:grid-cols-6 gap-1 sm:gap-2 hidden sm:grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#C778DD]/70"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: i * 0.1 % 1.0 
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Quote */}
        <motion.div
          className="mt-8 sm:mt-12 w-full max-w-4xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div 
            className="relative py-3 sm:py-4 px-4 sm:px-6 border border-gray-700 rounded"
            whileHover={{ 
              boxShadow: "0 0 10px rgba(199, 120, 221, 0.3)",
              borderColor: "#C778DD" 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center">
              <motion.span 
                className="text-3xl sm:text-4xl md:text-6xl text-[#C778DD] font-serif leading-none"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >"</motion.span>
              <div className="flex-1 flex flex-col items-center">
                <motion.h2 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >Hope is not a strategy. Console.log is</motion.h2>
              </div>
              <motion.span 
                className="text-3xl sm:text-4xl md:text-6xl text-[#C778DD] font-serif leading-none self-end"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >"</motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 