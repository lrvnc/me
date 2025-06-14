
import { motion } from 'framer-motion';
import { Code, BookOpen, Coffee, Mountain } from 'lucide-react';
import { sectionVariant, itemVariant, listVariant } from './animations';

const hobbiesData = [
  { name: "Coding Pet Projects", Icon: Code },
  { name: "Reading Tech Blogs", Icon: BookOpen },
  { name: "Specialty Coffee", Icon: Coffee },
  { name: "Hiking", Icon: Mountain },
];

const Hobbies = () => (
  <motion.section
    id="hobbies"
    className="py-20 bg-white"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Interests & Hobbies</h2>
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {hobbiesData.map((hobby) => (
          <motion.div key={hobby.name} className="text-center" variants={itemVariant}>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center aspect-square shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1">
              <hobby.Icon className="w-10 h-10 text-gray-700 mb-3" />
              <h3 className="font-semibold text-gray-800">{hobby.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Hobbies;
