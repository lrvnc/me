
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

const Index = () => {

  return (
    <PageLayout>
      <SEO 
        title="John Doe - Full Stack Developer" 
        description="The portfolio of John Doe, a full stack developer specializing in React, Node.js, and modern web technologies."
        imageUrl={personImg}
        keywords={['full stack developer', 'react', 'nodejs', 'portfolio', 'cv', 'john doe', 'publications', 'conferences']}
      />
      <HeroCV />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Publications />
      <Portfolio />
      <CertificationsAndSkills />
    </PageLayout>
  );
};

export default Index;
