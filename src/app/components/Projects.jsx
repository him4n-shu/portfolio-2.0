'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullSizeImage, setFullSizeImage] = useState(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const projectsData = [
    {
      id: 1,
      title: "Comic Crafter AI",
      description: "AI-powered comic strip generator with custom characters",
      detailedDescription: "Comic Crafter AI is an innovative platform that leverages artificial intelligence to transform text prompts into visually appealing comic strips. Users can create custom characters, define scenes, and generate entire comic narratives through intuitive prompts. The platform uses advanced image generation models to ensure high-quality, consistent character appearances across panels.",
      skills: ["Python", "Gradio", "ControlNet", "PyTorch", "OpenCV", "Pillow", "Accelerate", "NumPy"],
      image: "/assets/images/project_image/comic-crafter-ai/cc1.png",
      screenshots: [
        "/assets/images/project_image/comic-crafter-ai/cc1.png",
        "/assets/images/project_image/comic-crafter-ai/cc2.png",
        "/assets/images/project_image/comic-crafter-ai/cc3.png",
        "/assets/images/project_image/comic-crafter-ai/cc4.png",
        "/assets/images/project_image/comic-crafter-ai/cc5.png"
      ],
      liveLink: "https://github.com/him4n-shu/comic_crafter_ai_using_LLM",
      codeLink: "https://github.com/him4n-shu/comic_crafter_ai_using_LLM"
    },
    {
      id: 2,
      title: "BharatGPT",
      description: "Language model fine-tuned for Indian languages and context",
      detailedDescription: "BharatGPT is a specialized language model fine-tuned specifically for Indian languages and cultural contexts. It supports multiple Indian languages including Hindi, Tamil, Bengali, and more, providing accurate translations, contextual understanding, and culturally relevant responses. The model is optimized to understand and generate content that reflects the linguistic nuances and cultural references unique to India.",
      skills: ["JavaScript", "Next.js", "MongoDB", "APIs", "Tailwind CSS", "OpenAI API", "Framer Motion"],
      image: "/assets/images/project_image/bharat-gpt/bgpt1.png",
      screenshots: [
        "/assets/images/project_image/bharat-gpt/bgpt1.png",
        "/assets/images/project_image/bharat-gpt/bgpt2.png",
        "/assets/images/project_image/bharat-gpt/bgpt3.png",
        "/assets/images/project_image/bharat-gpt/bgpt4.png",
        "/assets/images/project_image/bharat-gpt/bgpt5.png"
      ],
      liveLink: "https://bharat-gpt-six.vercel.app/",
      codeLink: "https://github.com/him4n-shu/BharatGPT"
    },
    {
      id: 4,
      title: "Moment",
      description: "Social media platform for sharing life's special moments with real-time interactions",
      detailedDescription: "Moment is a modern social media platform designed for sharing life's special moments through photos and posts. With a clean, responsive interface and real-time interactions, Moment provides users with a seamless experience across all devices. The platform features user authentication, social networking capabilities, media sharing, real-time messaging, and notifications to create an engaging social experience.",
      skills: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS", "Framer Motion","Google OAuth"],
      image: "/assets/images/project_image/moment/m1.png",
      screenshots: [
        "/assets/images/project_image/moment/m1.png",
        "/assets/images/project_image/moment/m2.png",
        "/assets/images/project_image/moment/m3.png",
        "/assets/images/project_image/moment/m4.png",
        "/assets/images/project_image/moment/m5.png"
      ],
      liveLink: "https://moment-two-rho.vercel.app/",
      codeLink: "https://github.com/him4n-shu/moment"
    },
    {
      id: 3,
      title: "StreamNest",
      description: "Video streaming platform with social features",
      detailedDescription: "StreamNest is a comprehensive video streaming platform that combines high-quality content delivery with robust social features. Users can watch their favorite shows and movies while interacting with other viewers through comments, ratings, and shared watchlists. The platform includes personalized recommendations, watch parties, and integrated social sharing to create a community-focused streaming experience.",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "API", "JavaScript"],
      image: "/assets/images/project_image/stream-nest/sn1.png",
      screenshots: [
        "/assets/images/project_image/stream-nest/sn1.png",
        "/assets/images/project_image/stream-nest/sn2.png",
        "/assets/images/project_image/stream-nest/sn3.png",
        "/assets/images/project_image/stream-nest/sn4.png",
        "/assets/images/project_image/stream-nest/sn5.png"
      ],
      liveLink: "https://stream-nest-pi.vercel.app/",
      codeLink: "https://github.com/him4n-shu/Stream_Nest"
    },
    {
      id: 5,
      title: "MangaMecca",
      description: "E-commerce platform for manga enthusiasts with seamless shopping experience",
      detailedDescription: "MangaMecca is a specialized e-commerce platform built for manga enthusiasts. The site offers a vast collection of manga titles, merchandise, and collectibles with an intuitive shopping experience. Features include detailed product listings, user reviews, personalized recommendations, secure payment processing, and order tracking. The platform's design is inspired by manga aesthetics while maintaining a clean, user-friendly interface.",
      skills: ["Next.js", "Redux", "Stripe", "Firebase", "Tailwind CSS", "Framer Motion"],
      image: "/assets/images/project_image/manga-mecca/mm1.png",
      screenshots: [
        "/assets/images/project_image/manga-mecca/mm1.png",
        "/assets/images/project_image/manga-mecca/mm2.png",
        "/assets/images/project_image/manga-mecca/mm3.png",
        "/assets/images/project_image/manga-mecca/mm4.png",
        "/assets/images/project_image/manga-mecca/mm5.png"
      ],
      liveLink: "https://manga-mecca.vercel.app/",
      codeLink: "https://github.com/him4n-shu/MangaMecca"
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

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);
  
  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const viewFullImage = (imageSrc) => {
    setFullSizeImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeFullImage = () => {
    setFullSizeImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <PageTransition id="projects">
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
            
            {isMounted && (
              <button
                onClick={handleViewAllClick}
                className="text-sm border border-[#C778DD] px-4 py-1 hover:bg-[#C778DD]/10 transition-colors hover:scale-105 active:scale-95"
              >
                {showAll ? "Show Less" : "View All"}
              </button>
            )}
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 ml-0 sm:ml-2 md:ml-4"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            key={showAll ? "all" : "some"}
          >
            {displayedProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="border border-gray-700 bg-[#1c1f26] overflow-hidden flex flex-col w-full h-full cursor-pointer"
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 20px rgba(199, 120, 221, 0.15)",
                  borderColor: "#C778DD"
                }}
                transition={{ duration: 0.3 }}
                onClick={() => openProjectDetails(project)}
              >
                <div className="overflow-hidden h-40 sm:h-48 relative bg-[#171a21]">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    width={400}
                    height={200}
                    priority
                  />
                </div>
                
                <div className="p-3 sm:p-4 border-t border-gray-700 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm flex-grow">{project.description}</p>
                  
                  <div className="flex gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
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

        {/* Project Details Modal */}
        {isMounted && selectedProject && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeProjectDetails}
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto bg-[#1c1f26] border border-gray-700 p-3 sm:p-4 md:p-6 rounded-md">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{selectedProject.title}</h2>
                <button 
                  onClick={closeProjectDetails}
                  className="text-gray-400 hover:text-white text-xl p-1"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Project Description */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-[#C778DD]">Description</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">{selectedProject.detailedDescription}</p>
              </div>

              {/* Skills Used */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-[#C778DD]">Skills Used</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {selectedProject.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs bg-[#2d313a] border border-gray-700 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-[#C778DD]">Screenshots</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-700 overflow-hidden rounded-sm cursor-pointer hover:border-[#C778DD] transition-colors"
                      onClick={() => viewFullImage(screenshot)}
                    >
                      <Image 
                        src={screenshot} 
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4">
                <a 
                  href={selectedProject.liveLink} 
                  target="_blank" 
                  className="border border-[#C778DD] px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-[#C778DD]/10 transition-colors"
                >
                  Live Demo ↗
                </a>
                <a 
                  href={selectedProject.codeLink} 
                  target="_blank"
                  className="border border-[#C778DD] px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-[#C778DD]/10 transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Full Size Image Viewer */}
        {isMounted && fullSizeImage && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={closeFullImage}
            ></div>
            <div className="relative z-[1000] max-w-[70vw] max-h-[70vh]">
              <button
                onClick={closeFullImage}
                className="absolute -top-10 right-0 bg-[#C778DD] text-white p-2 rounded-full z-10 hover:bg-[#a551b6] transition-colors"
                aria-label="Close full image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={fullSizeImage}
                alt="Full size screenshot"
                width={1600}
                height={900}
                className="max-w-[70vw] max-h-[70vh] object-contain rounded shadow-xl"
                priority
              />
            </div>
          </div>
        )}
      </section>
    </PageTransition>
  );
};

export default Projects; 