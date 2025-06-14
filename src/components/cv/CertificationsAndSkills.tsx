import { motion } from 'framer-motion';
import { Award, MessageSquare } from 'lucide-react';
import { sectionVariant, listVariant, itemVariant } from '@/lib/animations';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certificationsData = [
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    year: "2023",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2022",
  },
  {
    name: "Professional Scrum Master™ I (PSM I)",
    issuer: "Scrum.org",
    year: "2021",
  }
];

const skillsData = {
  frontend: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "tRPC"],
  tools: ["Git & GitHub", "Docker", "Webpack", "Jira", "Figma", "CI/CD", "Vite"],
  languages: ["English: Native", "Spanish: Professional", "French: Basic"],
};

const CertificationsAndSkills = () => (
  <motion.section 
    id="certifications" 
    className="py-20 bg-gray-50"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Certifications & Skills</h2>
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariant}>
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {certificationsData.map(cert => (
                  <li key={cert.name}>
                    <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                    <p className="text-sm text-gray-500">{cert.issuer} &bull; {cert.year}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariant}>
          <Card className="bg-white h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Technical Skills & Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.frontend.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.backend.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Tools & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.tools.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.languages.map(lang => <Badge key={lang} variant="secondary">{lang}</Badge>)}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default CertificationsAndSkills;
