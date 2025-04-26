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
      liveLink: "https://comiccrafter.ai",
      codeLink: "https://github.com/him4n-shu/comic-crafter"
    },
    {
      id: 2,
      title: "BharatGPT",
      description: "Language model fine-tuned for Indian languages and context",
      image: "/assets/images/project_image/bharat_gpt.png",
      liveLink: "https://bharatgpt.in",
      codeLink: "https://github.com/him4n-shu/bharatgpt"
    },
    {
      id: 3,
      title: "StreamNest",
      description: "Video streaming platform with social features",
      image: "/assets/images/project_image/stream_nest.png",
      liveLink: "https://streamnest.vercel.app",
      codeLink: "https://github.com/him4n-shu/stream-nest"
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

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#1c1f26]">
      <div className="container mx-auto px-38">
        <div className="flex justify-between items-center mb-12">
          <motion.div 
            className="flex items-center gap-4"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-bold"
            >
              <span className="text-[#C778DD]">#</span>projects
            </motion.h2>
            <div className="h-[3px] w-150 bg-[#C778DD]"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="#all-projects" className="text-white hover:text-[#C778DD] transition-colors">
              View all <span className="ml-1">~~~</span>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              className="border border-gray-700 bg-[#1c1f26] overflow-hidden flex flex-col max-w-sm mx-auto w-full"
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(199, 120, 221, 0.15)",
                borderColor: "#C778DD"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden h-48 relative bg-[#171a21]">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  width={400}
                  height={200}
                />
              </div>
              
              <div className="p-3 border-t border-gray-700 flex-1">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-xs">{project.description}</p>
                
                <div className="flex gap-3 mt-auto">
                  <Link 
                    href={project.liveLink} 
                    target="_blank" 
                    className="border border-[#C778DD] px-4 py-1 text-xs hover:bg-[#C778DD]/10 transition-colors flex items-center gap-1"
                  >
                    Live <span>↗</span>
                  </Link>
                  <Link 
                    href={project.codeLink} 
                    target="_blank"
                    className="border border-gray-700 px-4 py-1 text-xs hover:bg-gray-800 transition-colors"
                  >
                    Code
                  </Link>
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