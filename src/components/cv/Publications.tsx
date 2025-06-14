
import { FileText, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { sectionVariant, listVariant, itemVariant } from '@/lib/animations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const publicationsData = [
  {
    type: 'Conference Paper',
    title: 'A Novel Approach to Machine Learning Models for Natural Language Understanding',
    venue: 'NeurIPS 2019',
    description: 'Co-authored a conference paper on ML models for NLU.',
    icon: FileText,
    url: '#'
  },
  {
    type: 'Journal Article',
    title: 'Novel UI Paradigms in Human-Computer Interaction',
    venue: 'TOCHI 2018',
    description: 'Published a paper on novel UI paradigms based on M.S. research.',
    icon: BookOpen,
    url: '#'
  },
  {
    type: 'Best Presentation Award',
    title: 'Scalable Frontend Architectures',
    venue: 'WebDev Conf 2021',
    description: 'Awarded for a presentation on building scalable frontends with React.',
    icon: Award,
    url: '#'
  }
];

const Publications = () => (
  <motion.section 
    id="publications" 
    className="py-20 bg-gray-50"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Publications & Conferences</h2>
      <motion.div 
        className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {publicationsData.map((item, index) => (
          <motion.a href={item.url} key={index} className="block" variants={itemVariant} target="_blank" rel="noopener noreferrer">
            <Card className="h-full bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                 <div className="p-3 bg-gray-100 rounded-full mt-1">
                    <item.icon className="w-6 h-6 text-gray-800" />
                 </div>
                 <div className="flex-1">
                  <CardTitle className="text-lg font-semibold leading-tight">{item.title}</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{item.venue}</p>
                 </div>
              </CardHeader>
              <CardContent className="pt-2 pl-20">
                 <p className="text-base text-gray-700">{item.description}</p>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Publications;
