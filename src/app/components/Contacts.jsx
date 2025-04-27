'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // EmailJS configuration with template fields
    const templateParams = {
      subject: "New Message from Portfolio",
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: "Himanshu",
      reply_to: form.email
    };

    emailjs.send(
      'service_02yj8j1', 
      'template_ze0jqvb', 
      templateParams,
      'kXx-F1fn8qUueTUfn'
    )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          message: '',
        });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
        setTimeout(() => setError(false), 5000);
      });
  };

  // Animation variants
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

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
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
    <section id="contacts" className="min-h-screen py-12 sm:py-16 md:py-20 bg-[#1c1f26]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pl-8 md:pl-12 lg:pl-24">
        <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-[#c778dd]">#</span>contacts
          </motion.h2>
          <div className="h-[2px] sm:h-[3px] w-60 sm:w-96 md:w-[30rem] lg:w-[40rem] bg-[#c778dd]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 ml-0 sm:ml-2 md:ml-4">
          <div>
            <motion.p 
              className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Open for freelance gigs and creative collabs!<br />
              Whether you have a project, a question,<br />
              or just a crazy idea —
              Hit me up! <br />
              Let's bring it to life together. 
            </motion.p>

            <motion.form 
              ref={formRef}
              onSubmit={handleSubmit}
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="bg-[#2d313a] text-gray-300 border border-gray-700 px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-[#c778dd] transition-colors w-full text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="bg-[#2d313a] text-gray-300 border border-gray-700 px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-[#c778dd] transition-colors w-full text-sm sm:text-base"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={6}
                className="bg-[#2d313a] text-gray-300 border border-gray-700 px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-[#c778dd] transition-colors w-full resize-none text-sm sm:text-base"
              />
              <motion.button
                type="submit"
                className={`border ${loading ? 'border-gray-500 text-gray-500' : 'border-[#c778dd]'} px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base overflow-hidden relative`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={loading ? {} : glowVariants}
                initial="initial"
                animate={loading ? "initial" : "animate"}
                disabled={loading}
              >
                <span className="z-10 flex items-center gap-2 relative">
                  {loading ? 'Sending...' : (
                    <>
                      Send
                      <motion.span
                        variants={bounceVariants}
                        initial="initial"
                        animate="animate"
                        className="inline-block"
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </span>
                {!loading && (
                  <motion.span 
                    className="absolute left-0 w-0 h-full bg-[#c778dd]/20"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
              
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 mt-2 text-sm sm:text-base"
                >
                  Your message has been sent successfully!
                </motion.div>
              )}
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 mt-2 text-sm sm:text-base"
                >
                  Failed to send message. Please try again later.
                </motion.div>
              )}
            </motion.form>
          </div>
          
          <div className="flex flex-col space-y-6 sm:space-y-8 mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-gray-700 p-4 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#c778dd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <a href="mailto:himanshu7554@gmail.com" className="text-gray-300 hover:text-[#c778dd] transition-colors text-sm sm:text-base">
                      himanshu7554@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#c778dd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-gray-700 p-4 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Social Profiles</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <a 
                  href="https://github.com/him4n-shu" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#c778dd] transition-colors text-sm sm:text-base"
                >
                  <img src="/assets/images/icons/github.svg" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/himanshu-kumar-b4b799208" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#c778dd] transition-colors text-sm sm:text-base"
                >
                  <img src="/assets/images/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://www.instagram.com/him4n_shu" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#c778dd] transition-colors text-sm sm:text-base"
                >
                  <img src="/assets/images/icons/instagram.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100010182331281" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#c778dd] transition-colors text-sm sm:text-base"
                >
                  <img src="/assets/images/icons/facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Facebook</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts; 