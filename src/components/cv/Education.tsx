
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { sectionVariant, listVariant, itemVariant, iconVariant } from '@/lib/animations';
import { countryFlags } from '@/lib/logoMap';

const educationData = [
  {
    degree: "Joint PhD in Physics",
    university: "University of Queensland & University of Exeter",
    period: "Jan 2025 - Present",
    description: "Thesis: Machine learning with optical wave propagation in disordered media."
  },
  {
    degree: "M.Sc. in Engineering",
    university: "ESPCI Paris - PSL",
    period: "Aug 2021 - Aug 2023",
    description: "Specialization in physics, with emphasis on computer science, quantum computing, and optics."
  },
  {
    degree: "B.Sc. in Physics Engineering",
    university: "Federal University of São Carlos (UFSCar)",
    period: "Mar 2018 - Nov 2024",
    description: ""
  }
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
        {educationData.map((edu, index) => {
          const flagData = countryFlags[edu.university];
          return (
            <motion.div key={index} className="mb-10 ml-6 relative" variants={itemVariant}>
              <motion.span 
                variants={iconVariant}
                className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -left-9 ring-8 ring-white">
                <GraduationCap className="w-3 h-3 text-white" />
              </motion.span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{edu.degree}</h3>
              <div className="flex items-center gap-2 mb-1">
                {flagData ? (
                  <div className="flex items-center gap-2">
                    {Array.isArray(flagData.flag) ? (
                      // Se houver múltiplas bandeiras (ex: ['au.svg', 'gb.svg'])
                      flagData.flag.map((flagUrl, index) => (
                        <img
                          key={index}
                          src={flagUrl}
                          alt={`Flag ${index}`}
                          className={flagData.className || 'w-6 h-auto'}
                        />
                      ))
                    ) : (
                      <img
                        src={flagData.flag}
                        alt={`${flagData.country} Flag`}
                        className={flagData.className || 'w-6 h-auto'}
                      />
                    )}
                    <span className="text-sm text-gray-500">{flagData.country}</span>
                  </div>
                ) : (
                  <span className="text-2xl">🏫</span>
                )}
                <p className="text-gray-600 font-medium">{edu.university}</p>
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{edu.period}</time>
              <p className="text-base font-normal text-gray-600">{edu.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </motion.section>
);

export default Education;
