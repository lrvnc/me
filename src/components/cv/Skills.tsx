
import { motion } from 'framer-motion';
import { sectionVariant, listVariant, itemVariant } from '@/lib/animations';

const skillsData = {
  frontend: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "HTML5 & CSS3"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  tools: ["Git & GitHub", "Docker", "Webpack", "Jira", "Figma", "CI/CD"],
};

const Skills = () => (
  <motion.section 
    id="skills" 
    className="py-20 bg-white"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
      <motion.div 
        className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow" variants={itemVariant}>
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Frontend</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.frontend.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>)}
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow" variants={itemVariant}>
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Backend</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.backend.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>)}
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow" variants={itemVariant}>
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Tools & DevOps</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.tools.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>)}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default Skills;
