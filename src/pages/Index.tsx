import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import {
  HeroCV,
  AboutMe,
  WorkExperience,
  Publications,
  CertificationsAndSkills,
  Education,
  Portfolio,
} from "@/components/cv";
import { personImg } from "@/lib/constants";

const Index = () => {
  return (
    <PageLayout>
      <SEO
        title="Leandro Risso Venâncio - Joint PhD Student in Physics and Computer Science"
        description="Leandro Venâncio personal webpage."
        imageUrl={personImg}
        keywords={[
          "PhD Student",
          "MSc in Engineering",
          "BSc in Physics Engineering",
          "Portfolio",
          "CV",
          "Leandro Venâncio",
        ]}
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
