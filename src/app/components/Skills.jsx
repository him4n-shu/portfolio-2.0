'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/skills.css';

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tagCloudRef = useRef(null);

  // Skills for the tag cloud
  const skillsData = [
    'JavaScript', 'Python', 'Java', 'C',
    'React.js', 'Next.js', 'Framer Motion',
    'Node.js', 'Express.js',
    'MySQL', 'MongoDB',
    'Git', 'Figma', 'VSCode',
    'HTML', 'CSS', 'Tailwind',
  ];

  // Categorized skills for the grid with icons
  const categorizedSkills = [
    {
      category: "Language",
      skills: [
        { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
        { name: "Python", icon: "/assets/icons/python.svg" },
        { name: "Java", icon: "/assets/icons/java.svg" }
      ]
    },
    {
      category: "Front-End",
      skills: [
        { name: "React.js", icon: "/assets/icons/react.svg" },
        { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
        { name: "Framer Motion", icon: "/assets/icons/framer.svg" }
      ]
    },
    {
      category: "Back-End",
      skills: [
        { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
        { name: "Express.js", icon: "/assets/icons/express.svg" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: "/assets/icons/mysql.svg" },
        { name: "MongoDB", icon: "/assets/icons/mongodb.svg" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: "/assets/icons/git.svg" },
        { name: "Figma", icon: "/assets/icons/figma.svg" },
        { name: "VSCode", icon: "/assets/icons/vscode.svg" }
      ]
    },
    {
      category: "Others",
      skills: [
        { name: "HTML", icon: "/assets/icons/html.svg" },
        { name: "CSS", icon: "/assets/icons/css.svg" },
        { name: "Tailwind", icon: "/assets/icons/tailwind.svg" }
      ]
    }
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });

    setIsMounted(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only load TagCloud if not mobile
    if (!isMobile) {
      // Load TagCloud script
      const script = document.createElement('script');
      script.src = '/TagCloud.min.js';
      script.async = true;

      script.onload = () => {
        if (window.TagCloud && tagCloudRef.current) {
          const radius = window.innerWidth < 768 ? 120 : window.innerWidth < 1024 ? 180 : 250;

          window.TagCloud(tagCloudRef.current, skillsData, {
            radius,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            direction: 135,
            keep: true,
            useContainerInlineStyles: true,
            containerClass: 'tagcloud',
            itemClass: 'tagcloud--item',
            useItemInlineStyles: true,
          });
        }
      };

      script.onerror = () => {
        console.error('Failed to load TagCloud script');
      };

      document.head.appendChild(script);

      // Handle resize for responsive tag cloud
      const handleResize = () => {
        if (window.TagCloud && tagCloudRef.current && !isMobile) {
          // Remove existing tag cloud
          const elements = tagCloudRef.current.querySelectorAll('.tagcloud--item');
          elements.forEach((el) => el.remove());
          
          // Create new tag cloud with updated radius
          const radius = window.innerWidth < 768 ? 120 : window.innerWidth < 1024 ? 180 : 250;
          window.TagCloud(tagCloudRef.current, skillsData, {
            radius,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            direction: 135,
            keep: true,
            useContainerInlineStyles: true,
            containerClass: 'tagcloud',
            itemClass: 'tagcloud--item',
            useItemInlineStyles: true,
          });
        }
      };

      window.addEventListener('resize', handleResize);

      // Cleanup on unmount
      return () => {
        if (script) {
          script.remove();
        }
        if (tagCloudRef.current && window.TagCloud) {
          const elements = tagCloudRef.current.querySelectorAll('.tagcloud--item');
          elements.forEach((el) => el.remove());
        }
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('resize', checkMobile);
      };
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

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

  return (
    <section id="skills" className="min-h-screen py-12 sm:py-16 md:py-20 bg-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 md:mb-16 pl-4 sm:pl-6 md:pl-8 lg:pl-12">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-[#c778dd]">#</span>skills
          </motion.h2>
          <div className="h-[2px] sm:h-[3px] w-60 sm:w-96 md:w-[30rem] lg:w-[40rem] bg-[#c778dd]"></div>
        </div>
        <div className="relative flex flex-col lg:flex-row">
          {/* Only show tag cloud on non-mobile devices */}
          {!isMobile && isMounted && (
            <div className="w-full lg:w-5/12 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] mb-8 lg:mb-0">
              <div
                ref={tagCloudRef}
                className="tagcloud w-full h-full"
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
            </div>
          )}

          {/* Skills Grid - full width on mobile */}
          <div className={`w-full ${isMobile ? 'w-full' : 'lg:w-7/12'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {categorizedSkills.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  className="border border-gray-700 bg-dark-transparent backdrop-blur-sm p-2 sm:p-3 rounded-md"
                  data-aos="fade-up" 
                  data-aos-delay={categoryIndex * 100}
                >
                  <h3 className="text-base sm:text-lg font-medium mb-2 text-white border-b border-gray-700 pb-1 sm:pb-2">
                    {category.category}
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-1 sm:gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex flex-col items-center justify-center p-1 sm:p-1.5 transition-all duration-300 hover:scale-110"
                        data-aos="fade-up"
                        data-aos-delay={categoryIndex * 100 + skillIndex * 50}
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#24272F] rounded-lg flex items-center justify-center mb-1 sm:mb-1.5 shadow-lg transition-all duration-300 hover:shadow-[#C778DD]/20 hover:shadow-lg">
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/assets/icons/default.svg";
                            }}
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-400 text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;