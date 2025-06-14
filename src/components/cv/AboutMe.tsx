
import { motion } from 'framer-motion';
import { sectionVariant, itemVariant, listVariant } from '@/lib/animations';
import { personImg, placeholderImg } from '@/lib/constants';
import { ElegantCarousel } from './ElegantCarousel';

// You can add more images here for the gallery. I've used the existing ones as a starting point.
const aboutMeImages = [
  { src: personImg, alt: 'John Doe portrait' },
  { src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7', alt: 'Woman using a laptop on a bed' },
  { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', alt: 'Woman in white shirt using a laptop' },
  { src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b', alt: 'Person holding a blue light bulb' },
  { src: placeholderImg, alt: 'A placeholder image representing a workspace' },
];

const AboutMe = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2 variants={itemVariant} className="text-3xl font-bold mb-8 text-gray-900 text-center">About Me</motion.h2>
          
          <motion.div className="w-full mb-12" variants={itemVariant}>
            <ElegantCarousel images={aboutMeImages} />
          </motion.div>
          
          <motion.div variants={listVariant} className="max-w-3xl text-center">
            <motion.p variants={itemVariant} className="text-gray-700 leading-relaxed mb-4">
              Hello! I'm John, a passionate Full Stack Developer with a love for creating intuitive and dynamic user experiences. With a background in computer science and several years of hands-on experience, I've had the opportunity to work on exciting projects and collaborate with talented people.
            </motion.p>
            <motion.p variants={itemVariant} className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
