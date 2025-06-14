
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { sectionVariant, listVariant, itemVariant } from '@/lib/animations';

const researchExperienceData = [
  {
    role: "Research Assistant",
    company: "Stanford AI Lab",
    period: "2018 - 2019",
    description: "Contributed to a project on machine learning models for natural language understanding. Co-authored a conference paper."
  }
];

const ResearchExperience = () => (
  <motion.section 
    id="research-experience" 
    className="py-20 bg-gray-50"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Research Experience</h2>
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="relative border-l-2 border-gray-200"
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {researchExperienceData.map((job, index) => (
            <motion.div key={index} className="mb-10 ml-6" variants={itemVariant}>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -left-3 ring-8 ring-white">
                <Briefcase className="w-3 h-3 text-white" />
              </motion.span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{job.role} at <span className="text-gray-600 ml-2">{job.company}</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{job.period}</time>
              <p className="text-base font-normal text-gray-600">{job.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default ResearchExperience;
