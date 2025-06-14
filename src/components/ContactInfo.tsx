
import React from 'react';
import { Mail, Linkedin, Github, PenSquare } from 'lucide-react';
import { personImg } from '@/lib/constants';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0 mt-4">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to discuss technology, or just say hello!
            </p>
          </div>

          <div>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <Avatar className="w-24 h-24 border-2 border-white flex-shrink-0 shadow-sm">
                    <AvatarImage src={personImg} alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">John Doe</h3>
                    <a href="mailto:john.doe@email.com" className="inline-flex items-center text-gray-700 hover:text-primary transition-colors text-md mt-1">
                      <Mail className="w-5 h-5 mr-2" />
                      <span>john.doe@email.com</span>
                    </a>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 flex justify-center items-center gap-6">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
