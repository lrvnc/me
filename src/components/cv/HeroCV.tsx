
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { listVariant, itemVariant } from '@/lib/animations';
import { placeholderImg, personImg } from '@/lib/constants';
import InstitutionLogos from './InstitutionLogos';

const HeroCV = () => (
  <section className="relative bg-black text-white py-40 px-4 flex items-center h-screen min-h-[600px]">
    <div className="absolute inset-0 w-full h-full bg-black">
      <img src={placeholderImg} alt="background" className="w-full h-full object-cover opacity-20 animate-bg-pulse" />
    </div>
    <div className="relative z-10 container mx-auto">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1 flex justify-center"
        >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg animate-float">
                <img src={personImg} alt="John Doe" className="w-full h-full object-cover" />
            </div>
        </motion.div>
        <motion.div 
          className="md:col-span-2 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={listVariant}
        >
            <motion.h1 className="text-4xl md:text-6xl font-bold" variants={itemVariant}>John Doe</motion.h1>
            <motion.p className="text-xl md:text-2xl mt-4 text-gray-300" variants={itemVariant}>Full Stack Developer & Tech Enthusiast</motion.p>
            <motion.p className="mt-4 max-w-xl mx-auto md:mx-0 text-gray-400" variants={itemVariant}>
                I build beautiful, functional, and user-centric web applications.
            </motion.p>
            <motion.div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4" variants={itemVariant}>
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    <Mail className="mr-2 h-5 w-5" /> Contact Me
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <a href="/cv.pdf" download="John_Doe_CV.pdf">
                        <Download className="mr-2 h-5 w-5" /> Download CV
                    </a>
                </Button>
            </motion.div>
            <motion.div className="mt-8 flex justify-center md:justify-start gap-6" variants={itemVariant}>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
            </motion.div>
        </motion.div>
      </div>
    </div>
    <InstitutionLogos />
  </section>
);

export default HeroCV;
