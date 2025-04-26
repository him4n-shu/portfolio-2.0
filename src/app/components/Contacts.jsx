import React from 'react';

const Contacts = () => {
  return (
    <section id="contacts" className="min-h-screen py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-[#C778DD]">#</span>contacts
        </h2>
        
        {/* Contact content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="mb-8">
              I'm interested in freelance opportunities and collaborations. 
              If you have a project that needs some coding magic, don't hesitate to contact me.
            </p>
            
            <div className="border border-[#C778DD] p-4">
              <h3 className="text-xl mb-2">Message me here</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span>Email:</span>
                  <a href="mailto:contact@himanshu.dev" className="text-[#C778DD]">
                    contact@himanshu.dev
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span>LinkedIn:</span>
                  <a href="https://linkedin.com/in/himanshukumar" target="_blank" rel="noopener noreferrer" className="text-[#C778DD]">
                    @himanshukumar
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {/* Contact form could go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts; 