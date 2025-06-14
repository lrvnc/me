
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { listVariant, itemVariant } from '@/lib/animations';
import { placeholderImg } from '@/lib/constants';

const HeroCV = () => (
  <section className="relative bg-black text-white text-center py-40 px-4 flex items-center justify-center h-screen min-h-[600px]">
    <div className="absolute inset-0 w-full h-full bg-black">
      <img src={placeholderImg} alt="background" className="w-full h-full object-cover opacity-20" />
    </div>
    <motion.div 
      className="relative z-10"
      initial="hidden"
      animate="visible"
      variants={listVariant}
    >
      <motion.h1 className="text-4xl md:text-6xl font-bold" variants={itemVariant}>John Doe</motion.h1>
      <motion.p className="text-xl md:text-2xl mt-4 text-gray-300" variants={itemVariant}>Full Stack Developer & Tech Enthusiast</motion.p>
      <motion.p className="mt-4 max-w-2xl mx-auto text-gray-400" variants={itemVariant}>
        I build beautiful, functional, and user-centric web applications.
      </motion.p>
      <motion.div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4" variants={itemVariant}>
        <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          <Mail /> Contact Me
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="/cv.pdf" download="John_Doe_CV.pdf">
            <Download /> Download CV
          </a>
        </Button>
      </motion.div>
       <motion.div className="mt-8 flex justify-center gap-6" variants={itemVariant}>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
        </motion.div>
    </motion.div>
  </section>
);

export default HeroCV;
