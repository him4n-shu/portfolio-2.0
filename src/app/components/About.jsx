"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  // Add glow and bounce variants
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

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -4, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 bg-[#1c1f26]">
      <div className="container mx-auto px-8 pl-12 md:pl-16 lg:pl-30">
        <div className="flex items-center gap-4 mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-[#c778dd]">#</span>about
          </motion.h2>
          <div className="h-[3px] w-100 md:w-150 bg-[#c778dd]"></div>
        </div>
        
        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="text-gray-300 space-y-6 pl-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="text-xl"
              variants={itemVariants}
            >
              Hey, I'm Himanshu
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              A full-stack developer and AI/ML enthusiast from India, passionate about building powerful digital experiences. I create sleek, responsive websites and apps using React, Next.js, Node.js, and more — blending beautiful front-end design with solid backend magic.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              I'm continuously learning new technologies like AI/ML and backend development to stay ahead of the curve and deliver innovative, real-world solutions. Always leveling up, always chasing the next big thing.
              Let's craft the future, one brilliant idea at a time.
            </motion.p>
            
            <motion.button 
              onClick={() => setShowMoreInfo(!showMoreInfo)}
              className="border border-[#C778DD] px-6 py-2 mt-6 text-white overflow-hidden group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={glowVariants}
              initial="initial"
              animate="animate"
            >
              <span className="z-10 flex items-center gap-2 relative">
                {showMoreInfo ? "Show less" : "Read more"} 
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

            {showMoreInfo && (
              <motion.div 
                className="mt-12 space-y-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Fun Facts Section */}
                <div className="mb-12">
                  <motion.h3 
                    className="text-2xl font-mono mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-[#c778dd]">#</span>my-fun-facts
                    <motion.div 
                      className="h-[1px] w-40 bg-[#c778dd] inline-block ml-4"
                      initial={{ width: 0 }}
                      animate={{ width: 160 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                  </motion.h3>
                  
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { 
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div 
                      className="border border-gray-500 px-4 py-2 hover:border-[#c778dd] transition-colors"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05, borderColor: "#c778dd" }}
                    >
                      Late-night coding hits different 🌙
                    </motion.div>
                    <motion.div 
                      className="border border-gray-500 px-4 py-2 hover:border-[#c778dd] transition-colors"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05, borderColor: "#c778dd" }}
                    >
                      Always chasing new tech 🚀
                    </motion.div>
                    <motion.div 
                      className="border border-gray-500 px-4 py-2 hover:border-[#c778dd] transition-colors"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05, borderColor: "#c778dd" }}
                    >
                      Low-key obsessed with AI/ML 🤖
                    </motion.div>
                    <motion.div 
                      className="border border-gray-500 px-4 py-2 hover:border-[#c778dd] transition-colors"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05, borderColor: "#c778dd" }}
                    >
                      Dreaming up game-changing apps 💡
                    </motion.div>
                    <motion.div 
                      className="border border-gray-500 px-4 py-2 hover:border-[#c778dd] transition-colors"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05, borderColor: "#c778dd" }}
                    >
                      BGMI warrior in free time 🎮
                    </motion.div>
                    <motion.div 
                      className="border border-gray-500 px-4 py-2 hover:border-[#c778dd] transition-colors"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05, borderColor: "#c778dd" }}
                    >
                      Cricket lover since forever 🏏
                    </motion.div>
                    <motion.div 
                      className="border border-gray-500 px-4 py-2 hover:border-[#c778dd] transition-colors"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05, borderColor: "#c778dd" }}
                    >
                      Quiet mind, loud dreams 🤫✨
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Current Goal Section */}
                <div>
                  <motion.h3 
                    className="text-2xl font-mono mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-[#c778dd]">#</span>current-goal
                    <motion.div 
                      className="h-[1px] w-60 bg-[#c778dd] inline-block ml-4"
                      initial={{ width: 0 }}
                      animate={{ width: 240 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                  </motion.h3>
                  
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="bg-[#22252c] border border-gray-700 p-4 mb-6 w-full text-center text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 0 10px rgba(199, 120, 221, 0.3)",
                        borderColor: "#c778dd"
                      }}
                    >
                      iQOO Neo9 Pro 5G
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-center relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                    >
                      {/* Decorative background elements */}
                      <motion.div 
                        className="absolute -z-10 w-full h-full rounded-lg border border-[#c778dd] opacity-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1, delay: 1 }}
                        style={{ transform: 'translate(15px, 15px)' }}
                      ></motion.div>
                      
                      <img 
                        src="/assets/images/current_goal/iqoo_neo_9_pro.png" 
                        alt="iQOO Neo9 Pro 5G" 
                        className="max-h-96 object-contain"
                      />
                      
                      {/* Animated dots */}
                      <motion.div 
                        className="absolute -bottom-5 -right-5 grid grid-cols-4 gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                      >
                        {[...Array(12)].map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="w-1.5 h-1.5 bg-[#c778dd] rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: i * 0.1,
                              ease: "easeInOut" 
                            }}
                          ></motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
          
          <div className="relative mx-auto lg:mx-0 max-w-md w-full">  {/* Reduced from max-w-lg to max-w-md */}
            <div className="relative z-10">
              <motion.div 
                className="relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <img 
                  src="/assets/images/dp/profile-pic.png" 
                  alt="Developer profile" 
                  className="w-4/5 h-auto object-cover mx-auto"
                  style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                />
              </motion.div>
              {/* Underline accent */}
              <motion.div 
                className="h-1 w-full bg-[#C778DD]/70 mt-2"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </div>
            
            {/* Geometric shapes around image */}
            <motion.div 
              className="absolute top-8 -left-12 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <motion.div 
                className="w-24 h-24 border border-[#C778DD] opacity-60"
                animate={{ 
                  boxShadow: ["0 0 0 rgba(199, 120, 221, 0)", "0 0 10px rgba(199, 120, 221, 0.3)", "0 0 0 rgba(199, 120, 221, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="w-32 h-32 border border-[#C778DD] opacity-60 -mt-12 ml-12"
                animate={{ 
                  boxShadow: ["0 0 0 rgba(199, 120, 221, 0)", "0 0 10px rgba(199, 120, 221, 0.3)", "0 0 0 rgba(199, 120, 221, 0)"] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              ></motion.div>
            </motion.div>
            
            {/* Animated dots in bottom right */}
            <motion.div 
              className="absolute bottom-8 right-8 grid grid-cols-6 gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {[...Array(24)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-1.5 h-1.5 bg-white rounded-full opacity-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.05,
                    ease: "easeInOut" 
                  }}
                ></motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;