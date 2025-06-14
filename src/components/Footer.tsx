
import { Linkedin, Github, PenSquare, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        
        <h3 className="text-2xl font-bold mb-2">John Doe</h3>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          A passionate Full Stack Developer building modern, responsive, and user-friendly web applications.
        </p>

        <div className="flex justify-center space-x-4 mb-10">
          <a 
            href="https://linkedin.com/in/johndoe-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-primary hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/johndoe-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-primary hover:text-white"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://orcid.org/0000-0000-0000-0000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-primary hover:text-white"
            aria-label="ORCID"
          >
            <PenSquare size={20} />
          </a>
           <a 
            href="mailto:john.doe@email.com"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-primary hover:text-white"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
