
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { sectionVariant, itemVariant, listVariant } from './animations';

const educationData = [
  {
    degree: "M.S. in Computer Science",
    university: "Stanford University",
    period: "2017 - 2019",
    description: "Focused on Artificial Intelligence and Human-Computer Interaction. Published a paper on novel UI paradigms.",
  },
  {
    degree: "B.S. in Software Engineering",
    university: "University of Waterloo",
    period: "2013 - 2017",
    description: "Graduated with honors. Active member of the coding club and participated in several hackathons.",
  },
];

const Education = () => (
  <motion.section
    id="education"
    className="py-20 bg-white"
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
            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-white">
                <GraduationCap className="w-4 h-4 text-primary" />
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <p className="text-gray-600 mb-1">{edu.university}</p>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{edu.period}</time>
            <p className="text-base font-normal text-gray-600">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Education;
