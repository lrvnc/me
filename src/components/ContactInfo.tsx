
import React from 'react';
import { Mail, Linkedin, Github, PenSquare } from 'lucide-react';
import { personImg } from '@/lib/constants';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-100 to-black py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-right animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0 md:ml-auto mt-4">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="animate-fade-in animation-delay-300">
            <Card className="bg-gray-800/50 border border-gray-700 shadow-lg hover:shadow-xl hover:shadow-white/5 transition-all duration-300 rounded-xl overflow-hidden backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-6 text-center">
                  <Avatar className="w-24 h-24 border-4 border-gray-700 flex-shrink-0 shadow-lg">
                    <AvatarImage src={personImg} alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <a href="mailto:john.doe@email.com" className="inline-flex items-center text-gray-300 hover:text-white transition-colors text-md mt-1">
                      <Mail className="w-5 h-5 mr-2" />
                      <span>john.doe@email.com</span>
                    </a>
                  </div>
                  <div className="flex justify-center space-x-4 pt-4">
                    <a 
                      href="https://linkedin.com/in/johndoe-dev" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/johndoe-dev" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://orcid.org/0000-0000-0000-0000" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                      aria-label="ORCID"
                    >
                      <PenSquare size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
