
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { sectionVariant, listVariant, itemVariant, iconVariant } from '@/lib/animations';
import LogoPlaceholder from './LogoPlaceholder';

const educationData = [
  {
    degree: "M.S. in Computer Science",
    university: "Stanford University",
    period: "2017 - 2019",
    description: "Focused on Artificial Intelligence and Human-Computer Interaction. Published a paper on novel UI paradigms."
  },
  {
    degree: "B.S. in Software Engineering",
    university: "University of Waterloo",
    period: "2013 - 2017",
    description: "Graduated with honors. Active member of the coding club and participated in several hackathons."
  },
];

const Education = () => (
  <motion.section
    id="education"
    className="py-20 bg-gray-50"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Education</h2>
      <motion.div
        className="max-w-3xl mx-auto relative border-l-2 border-gray-200"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {educationData.map((edu, index) => (
          <motion.div key={index} className="mb-10 ml-6 relative" variants={itemVariant}>
            <motion.span 
              variants={iconVariant}
              className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -left-9 ring-8 ring-white">
              <GraduationCap className="w-3 h-3 text-white" />
            </motion.span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <div className="flex items-center gap-2 mb-1">
              <LogoPlaceholder name={edu.university} className="w-8 h-8 text-xs bg-gray-200 text-gray-700 border-none rounded-full" />
              <p className="text-gray-600 font-medium">{edu.university}</p>
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{edu.period}</time>
            <p className="text-base font-normal text-gray-600">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Education;
