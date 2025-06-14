
import { motion } from 'framer-motion';
import { Briefcase, BookOpen } from 'lucide-react';
import { sectionVariant, itemVariant, listVariant } from './animations';

const experienceData = {
  work: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading the development of a new client-facing dashboard using React and TypeScript. Improved application performance by 30%.",
    },
    {
      role: "Full Stack Developer",
      company: "Innovate Co.",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using the MERN stack. Collaborated with a team of 5 developers on various projects.",
    },
    {
      role: "Junior Developer",
      company: "Web Crafters",
      period: "2019 - 2020",
      description: "Assisted in building and testing responsive websites for various clients using HTML, CSS, and JavaScript, laying a strong foundation in web technologies.",
    },
  ],
  research: [
    {
      role: "Research Assistant",
      company: "Stanford AI Lab",
      period: "2018 - 2019",
      description: "Contributed to a project on machine learning models for natural language understanding. Co-authored a conference paper.",
    }
  ]
};

const Experience = () => (
  <motion.section 
    id="experience" 
    className="py-20 bg-gray-50"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Experience</h2>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Work Experience</h3>
        <motion.div 
          className="relative border-l-2 border-gray-200"
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceData.work.map((job, index) => (
            <motion.div key={index} className="mb-10 ml-6 relative" variants={itemVariant}>
              <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-white">
                <Briefcase className="w-4 h-4 text-primary" />
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{job.role} at <span className="text-gray-600 ml-2">{job.company}</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{job.period}</time>
              <p className="text-base font-normal text-gray-600">{job.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <h3 className="text-2xl font-semibold text-gray-800 my-8 pt-8 border-t border-gray-200 text-center">Research Experience</h3>
        <motion.div 
          className="relative border-l-2 border-gray-200"
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceData.research.map((job, index) => (
            <motion.div key={index} className="mb-10 ml-6 relative" variants={itemVariant}>
              <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-white">
                <BookOpen className="w-4 h-4 text-primary" />
              </span>
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

export default Experience;
