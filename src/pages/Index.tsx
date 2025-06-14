import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import {
  HeroCV,
  AboutMe,
  WorkExperience,
  Publications,
  CertificationsAndSkills,
  Education,
  Portfolio,
  Hobbies,
} from '@/components/cv';
import { personImg } from '@/lib/constants';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

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
      <Hobbies />
    </PageLayout>
  );
};

export default Index;
