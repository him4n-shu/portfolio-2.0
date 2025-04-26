'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-8 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          {/* Left content */}
          <motion.div 
            className="lg:w-1/2 space-y-8 p-30 pt-27"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-xl md:text-4xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I'm Himanshu Kumar, <span className="text-[#C778DD]">
                <Typewriter
                  words={["Software Engineer", "Web Developer", "Freelancer", "Tech Enthusiast"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-md leading-relaxed opacity-90 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A developer passionate about AI-ML,full-stack 
              web development, and building tech that makes a difference.
              I enjoy solving real-world problems through code and 
              love exploring voice tech,multilingual apps,
              and open-source projects.<br />
              Always curious. Always building.<br />
              <span className="text-[#E0B0FF]">#WebDev
              #CodeCrafting #ML</span>
            </motion.p>
            
            <motion.button 
              className="border border-[#C778DD] px-8 py-3 hover:bg-[#C778DD]/10 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact me!
            </motion.button>
          </motion.div>
          
          {/* Right content - Profile image and status */}
          <motion.div 
            className="lg:w-1/2 relative p-40 pt-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Purple geometric shapes behind image */}
              <motion.div 
                className="absolute top-1/4 -left-24 z-0"
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
              
              {/* Profile image */}
              <motion.div 
                className="relative z-10 mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Image 
                  src="/assets/images/dp/profile_pic.png"
                  alt="Himanshu Kumar" 
                  width={400} 
                  height={500}
                  className="rounded-sm"
                  priority
                />
                
                {/* Status badge */}
                <motion.div 
                  className="absolute bg-[#1c1f26] border border-gray-800 py-4 px-4 z-20 width-100px"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 px-2 py-1 border border-[#C778DD]">
                    <motion.div 
                      className="bg-accent h-4 w-4"
                      animate={{ backgroundColor: ["#ed64a6", "#C778DD", "#ed64a6"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                    <p className="text-gray">Looking for a Part Time Job</p>
                  </div>
                </motion.div>
                
                {/* Dot pattern */}
                <motion.div 
                  className="absolute bottom-12 right-10 grid grid-cols-6 gap-2"
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
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Quote Section - Centered */}
        <motion.div 
          className="w-full max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div 
            className="relative py-4 px-6 border border-gray-700 rounded"
            whileHover={{ 
              boxShadow: "0 0 10px rgba(199, 120, 221, 0.3)",
              borderColor: "#C778DD" 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex">
              <motion.span 
                className="text-6xl text-[#C778DD] font-serif leading-none"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >"</motion.span>
              <div className="flex-1 flex flex-col items-center">
                <motion.h2 
                  className="text-3xl text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >Hope is not a strategy.Console.log is</motion.h2>
              </div>
              <motion.span 
                className="text-6xl text-[#C778DD] font-serif leading-none self-end"
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