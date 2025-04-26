import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-[#C778DD]">#</span>about
        </h2>
        
        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="mb-4">
              Hello! I'm Himanshu Kumar, a passionate full-stack web developer with a strong focus 
              on creating elegant, responsive, and high-performance web applications.
            </p>
            <p className="mb-4">
              With expertise in the MERN stack (MongoDB, Express.js, React, Node.js), 
              I enjoy building everything from small business sites to rich interactive web apps.
            </p>
            <p>
              My approach combines clean code, modern development practices, and a keen eye for UI/UX design.
            </p>
          </div>
          
          <div>
            {/* Additional about content or image could go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 