
import { motion } from 'framer-motion';
import { sectionVariant, itemVariant, listVariant } from '@/lib/animations';
import { personImg } from '@/lib/constants';

const AboutMe = () => (
  <motion.section 
    id="about" 
    className="py-20 bg-white"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <motion.div className="md:col-span-1" variants={itemVariant}>
            <img src={personImg} alt="John Doe" className="rounded-lg shadow-lg w-full" />
        </motion.div>
        <motion.div className="md:col-span-2" variants={listVariant}>
          <motion.h2 variants={itemVariant} className="text-3xl font-bold mb-4 text-gray-900">About Me</motion.h2>
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

export default AboutMe;
