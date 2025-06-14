
import { Mail, Linkedin, Github, PenSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { sectionVariant, listVariant, itemVariant } from '@/lib/animations';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-50"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
        </p>
        
        <motion.div 
          className="flex flex-col items-center gap-4"
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.a 
            href="mailto:john.doe@email.com" 
            className="text-lg text-gray-800 hover:text-primary transition-colors flex items-center gap-2"
            variants={itemVariant}
          >
            <Mail size={22} />
            <span>john.doe@email.com</span>
          </motion.a>

          <motion.div className="mt-4 flex justify-center items-center gap-8" variants={itemVariant}>
            <a href="https://linkedin.com/in/johndoe-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin size={28} /></a>
            <a href="https://github.com/johndoe-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="GitHub"><Github size={28} /></a>
            <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="ORCID">
              <PenSquare size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
