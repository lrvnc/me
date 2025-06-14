
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Download, Mail, Linkedin, Github } from 'lucide-react';
import { useEffect } from 'react';

const placeholderImg = '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png';
const personImg = '/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png';

const HeroCV = () => (
  <section className="relative bg-black text-white text-center py-40 px-4 flex items-center justify-center h-screen min-h-[600px]">
    <div className="absolute inset-0 w-full h-full bg-black">
      <img src={placeholderImg} alt="background" className="w-full h-full object-cover opacity-20" />
    </div>
    <div className="relative z-10 animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold">John Doe</h1>
      <p className="text-xl md:text-2xl mt-4 text-gray-300">Full Stack Developer & Tech Enthusiast</p>
      <p className="mt-4 max-w-2xl mx-auto text-gray-400">
        I build beautiful, functional, and user-centric web applications.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          <Mail /> Contact Me
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="/cv.pdf" download="John_Doe_CV.pdf">
            <Download /> Download CV
          </a>
        </Button>
      </div>
       <div className="mt-8 flex justify-center gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
        </div>
    </div>
  </section>
);

const AboutMe = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
            <img src={personImg} alt="John Doe" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hello! I'm John, a passionate Full Stack Developer with a love for creating intuitive and dynamic user experiences. With a background in computer science and several years of hands-on experience, I've had the opportunity to work on exciting projects and collaborate with talented people.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const experienceData = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading the development of a new client-facing dashboard using React and TypeScript. Improved application performance by 30%."
  },
  {
    role: "Full Stack Developer",
    company: "Innovate Co.",
    period: "2020 - 2022",
    description: "Developed and maintained web applications using the MERN stack. Collaborated with a team of 5 developers on various projects."
  },
  {
    role: "Junior Developer",
    company: "Web Crafters",
    period: "2019 - 2020",
    description: "Assisted in building and testing responsive websites for various clients using HTML, CSS, and JavaScript, laying a strong foundation in web technologies."
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Work Experience</h2>
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-gray-200">
          {experienceData.map((job, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -left-3 ring-8 ring-white">
                <Briefcase className="w-3 h-3 text-white" />
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{job.role} at <span className="text-gray-600 ml-2">{job.company}</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{job.period}</time>
              <p className="text-base font-normal text-gray-600">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const skillsData = {
  frontend: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "HTML5 & CSS3"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  tools: ["Git & GitHub", "Docker", "Webpack", "Jira", "Figma", "CI/CD"],
};

const Skills = () => (
  <section id="skills" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Frontend</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.frontend.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>)}
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Backend</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.backend.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>)}
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Tools & DevOps</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.tools.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const portfolioData = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, cart, and checkout.",
    image: "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
    tags: ["React", "Node.js", "Stripe"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    title: "Project Management Tool",
    description: "A Kanban-style project management app to track tasks and collaborate.",
    image: "/lovable-uploads/e2f944f7-0d40-4c33-8ce1-30ef7cd3a4b0.png",
    tags: ["Vue.js", "Firebase"],
    liveUrl: "#",
    sourceUrl: "#"
  },
  {
    title: "Personal Blog",
    description: "A static blog generated with Next.js and Markdown for posts.",
    image: "/lovable-uploads/af5ee2ce-3942-48bb-a2ad-3b49b419daf9.png",
    tags: ["Next.js", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "#"
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Portfolio</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div className="overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-medium">{tag}</span>)}
              </div>
              <p className="text-gray-600 mb-4 h-16">{project.description}</p>
              <div className="flex gap-4">
                <Button asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                <Button variant="outline" asChild><a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Source Code</a></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);


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
      <Portfolio />
    </PageLayout>
  );
};

export default Index;
