'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/skills.css';

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);
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

    // Load TagCloud script
    const script = document.createElement('script');
    script.src = '/TagCloud.min.js';
    script.async = true;

    script.onload = () => {
      if (window.TagCloud && tagCloudRef.current) {
        const radius = window.innerWidth < 768 ? 120 : 250;

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

    // Cleanup on unmount
    return () => {
      if (script) {
        script.remove();
      }
      if (tagCloudRef.current && window.TagCloud) {
        const elements = tagCloudRef.current.querySelectorAll('.tagcloud--item');
        elements.forEach((el) => el.remove());
      }
    };
  }, []);

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
    <section id="skills" className="min-h-screen py-20 bg-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-16 pl-8 md:pl-30">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-[#c778dd]">#</span>skills
          </motion.h2>
          <div className="h-[3px] w-100 md:w-150 bg-[#c778dd]"></div>
        </div>
        <div className="relative">
          <div className="w-full relative h-[300px] md:h-[400px] lg:h-[500px] mb-12 lg:mb-0">
            {isMounted && (
              <div
                ref={tagCloudRef}
                className="tagcloud w-full h-full"
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
            )}
          </div>

          {/* Skills Grid  */}
          <div className="w-full lg:w-7/12 lg:absolute lg:top-0 lg:right-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categorizedSkills.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  className="border border-gray-700 bg-dark-transparent backdrop-blur-sm p-3 rounded-md"
                  data-aos="fade-up" 
                  data-aos-delay={categoryIndex * 100}
                >
                  <h3 className="text-lg font-medium mb-2 text-white border-b border-gray-700 pb-2">
                    {category.category}
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex flex-col items-center justify-center p-1.5 transition-all duration-300 hover:scale-110"
                        data-aos="fade-up"
                        data-aos-delay={categoryIndex * 100 + skillIndex * 50}
                      >
                        <div className="w-8 h-8 bg-[#24272F] rounded-lg flex items-center justify-center mb-1.5 shadow-lg transition-all duration-300 hover:shadow-[#C778DD]/20 hover:shadow-lg">
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-4 h-4"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/assets/icons/default.svg";
                            }}
                          />
                        </div>
                        <span className="text-xs text-gray-400">{skill.name}</span>
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