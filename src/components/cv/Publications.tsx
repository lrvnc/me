
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sectionVariant, itemVariant, listVariant } from './animations';

const publicationsData = [
  {
    title: "A Novel Approach to User Interface Design",
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    period: "April 2019",
    description: "Presented our paper on creating more intuitive UIs through adaptive layouts. Received positive feedback from peers.",
    url: "#"
  },
  {
    title: "Scalable Backend Architectures for Real-Time Applications",
    venue: "WebDev Summit 2021",
    period: "October 2021",
    description: "Invited talk on best practices for building robust and scalable backends using Node.js and microservices.",
    url: "#"
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
        className="max-w-3xl mx-auto relative border-l-2 border-gray-200"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {publicationsData.map((pub, index) => (
          <motion.div key={index} className="mb-10 ml-6 relative" variants={itemVariant}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-white">
              <BookOpen className="w-4 h-4 text-primary" />
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{pub.title}</h3>
            <p className="text-gray-600 mb-1">{pub.venue}</p>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{pub.period}</time>
            <p className="text-base font-normal text-gray-600 mb-4">{pub.description}</p>
            <Button variant="link" asChild className="p-0 h-auto font-medium text-primary hover:underline">
                <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    View Details
                </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Publications;
