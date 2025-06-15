
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import {
  HeroCV,
  AboutMe,
  WorkExperience,
  Publications,
  CertificationsAndSkills,
  Education,
  Portfolio,
} from '@/components/cv';
import { personImg } from '@/lib/constants';
import { motion } from 'framer-motion';
import { sectionVariant } from '@/lib/animations';

const Index = () => {
  const sections = [
    { component: <AboutMe />, id: 'about' },
    { component: <Education />, id: 'education' },
    { component: <WorkExperience />, id: 'work' },
    { component: <Publications />, id: 'publications' },
    { component: <Portfolio />, id: 'portfolio' },
    { component: <CertificationsAndSkills />, id: 'skills' },
  ];

  return (
    <PageLayout>
      <SEO 
        title="John Doe - Full Stack Developer" 
        description="The portfolio of John Doe, a full stack developer specializing in React, Node.js, and modern web technologies."
        imageUrl={personImg}
        keywords={['full stack developer', 'react', 'nodejs', 'portfolio', 'cv', 'john doe', 'publications', 'conferences']}
      />
      <HeroCV />
      {sections.map((section) => (
        <motion.section
          key={section.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          {section.component}
        </motion.section>
      ))}
    </PageLayout>
  );
};

export default Index;
