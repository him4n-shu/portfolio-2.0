'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Comic Crafter AI",
      description: "AI-powered comic strip generator with custom characters",
      image: "/assets/images/project_image/comic_crafter_ai.png",
      liveLink: "https://github.com/him4n-shu/comic_crafter_ai_using_LLM",
      codeLink: "https://github.com/him4n-shu/comic_crafter_ai_using_LLM"
    },
    {
      id: 2,
      title: "BharatGPT",
      description: "Language model fine-tuned for Indian languages and context",
      image: "/assets/images/project_image/bharat_gpt.png",
      liveLink: "https://bharat-gpt-six.vercel.app/",
      codeLink: "https://github.com/him4n-shu/BharatGPT"
    },
    {
      id: 3,
      title: "StreamNest",
      description: "Video streaming platform with social features",
      image: "/assets/images/project_image/stream_nest.png",
      liveLink: "https://stream-nest-pi.vercel.app/",
      codeLink: "https://github.com/him4n-shu/Stream_Nest"
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1
      }
    }
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
    <section id="projects" className="min-h-screen py-12 sm:py-16 md:py-20 bg-[#1c1f26]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pl-8 md:pl-12 lg:pl-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <motion.div 
            className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-0"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold"
            >
              <span className="text-[#C778DD]">#</span>projects
            </motion.h2>
            <div className="h-[2px] sm:h-[3px] w-48 sm:w-80 md:w-[26rem] lg:w-[34rem] bg-[#C778DD]"></div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 ml-0 sm:ml-2 md:ml-4"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              className="border border-gray-700 bg-[#1c1f26] overflow-hidden flex flex-col w-full h-full"
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(199, 120, 221, 0.15)",
                borderColor: "#C778DD"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden h-40 sm:h-48 relative bg-[#171a21]">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  width={400}
                  height={200}
                />
              </div>
              
              <div className="p-3 sm:p-4 border-t border-gray-700 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm flex-grow">{project.description}</p>
                
                <div className="flex gap-3 mt-auto">
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    className="border border-[#C778DD] px-3 sm:px-4 py-1 text-xs overflow-hidden group relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={glowVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <span className="z-10 flex items-center gap-1 relative">
                      Live 
                      <motion.span
                        variants={bounceVariants}
                        initial="initial"
                        animate="animate"
                        className="inline-block"
                      >
                        ↗
                      </motion.span>
                    </span>
                    <motion.span 
                      className="absolute left-0 w-0 h-full bg-[#C778DD]/20"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  <motion.a 
                    href={project.codeLink} 
                    target="_blank"
                    className="border border-[#C778DD] px-3 sm:px-4 py-1 text-xs overflow-hidden group relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={glowVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <span className="z-10 flex items-center gap-1 relative">
                      Code
                    </span>
                    <motion.span 
                      className="absolute left-0 w-0 h-full bg-[#C778DD]/20"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 