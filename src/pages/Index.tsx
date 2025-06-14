
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import HeroCV from '@/components/cv/HeroCV';
import AboutMe from '@/components/cv/AboutMe';
import Experience from '@/components/cv/Experience';
import Skills from '@/components/cv/Skills';
import Education from '@/components/cv/Education';
import Portfolio from '@/components/cv/Portfolio';
import Publications from '@/components/cv/Publications';
import Hobbies from '@/components/cv/Hobbies';

const personImg = '/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png';

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
        keywords={['full stack developer', 'react', 'nodejs', 'portfolio', 'cv', 'john doe']}
      />
      <HeroCV />
      <AboutMe />
      <Experience />
      <Skills />
      <Education />
      <Portfolio />
      <Publications />
      <Hobbies />
    </PageLayout>
  );
};

export default Index;
