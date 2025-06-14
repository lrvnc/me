
import React from 'react';
import { Mail, Linkedin, Github, PenSquare } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to discuss technology, or just say hello!
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center space-y-6">
                <a href="mailto:john.doe@email.com" className="flex items-center text-gray-700 hover:text-primary transition-colors text-lg">
                  <Mail className="w-6 h-6 mr-3" />
                  <span>john.doe@email.com</span>
                </a>
                
                <div className="flex justify-center items-center gap-6 pt-4">
                    <a href="https://linkedin.com/in/johndoe-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                        <Linkedin size={28} />
                    </a>
                    <a href="https://github.com/johndoe-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="GitHub">
                        <Github size={28} />
                    </a>
                    <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="ORCID">
                      <PenSquare size={28} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
