import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Download, Mail, Linkedin, Github, BookOpen, Coffee, Mountain, Code, GraduationCap } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const placeholderImg = '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png';
const personImg = '/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png';

// Animation Variants
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const listVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HeroCV = () => (
  <section className="relative bg-black text-white text-center py-40 px-4 flex items-center justify-center h-screen min-h-[600px]">
    <div className="absolute inset-0 w-full h-full bg-black">
      <img src={placeholderImg} alt="background" className="w-full h-full object-cover opacity-20" />
    </div>
    <motion.div 
      className="relative z-10"
      initial="hidden"
      animate="visible"
      variants={listVariant}
    >
      <motion.h1 className="text-4xl md:text-6xl font-bold" variants={itemVariant}>John Doe</motion.h1>
      <motion.p className="text-xl md:text-2xl mt-4 text-gray-300" variants={itemVariant}>Full Stack Developer & Tech Enthusiast</motion.p>
      <motion.p className="mt-4 max-w-2xl mx-auto text-gray-400" variants={itemVariant}>
        I build beautiful, functional, and user-centric web applications.
      </motion.p>
      <motion.div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4" variants={itemVariant}>
        <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          <Mail /> Contact Me
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="/cv.pdf" download="John_Doe_CV.pdf">
            <Download /> Download CV
          </a>
        </Button>
      </motion.div>
       <motion.div className="mt-8 flex justify-center gap-6" variants={itemVariant}>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
        </motion.div>
    </motion.div>
  </section>
);

const AboutMe = () => (
  <motion.section 
    id="about" 
    className="py-20 bg-white"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <motion.div className="md:col-span-1" variants={itemVariant}>
            <img src={personImg} alt="John Doe" className="rounded-lg shadow-lg w-full" />
        </motion.div>
        <motion.div className="md:col-span-2" variants={listVariant}>
          <motion.h2 variants={itemVariant} className="text-3xl font-bold mb-4 text-gray-900">About Me</motion.h2>
          <motion.p variants={itemVariant} className="text-gray-700 leading-relaxed mb-4">
            Hello! I'm John, a passionate Full Stack Developer with a love for creating intuitive and dynamic user experiences. With a background in computer science and several years of hands-on experience, I've had the opportunity to work on exciting projects and collaborate with talented people.
          </motion.p>
          <motion.p variants={itemVariant} className="text-gray-700 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
          </motion.p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const experienceData = {
  work: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading the development of a new client-facing dashboard using React and TypeScript. Improved application performance by 30%.",
      logo: "/lovable-uploads/e502f601-c519-43a8-86f5-5fa89ae50d2f.png", // Example company logo
    },
    {
      role: "Full Stack Developer",
      company: "Innovate Co.",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using the MERN stack. Collaborated with a team of 5 developers on various projects.",
      logo: "/lovable-uploads/927dae7e-6aaf-4b76-add2-1287a1dd9dc0.png",
    },
    {
      role: "Junior Developer",
      company: "Web Crafters",
      period: "2019 - 2020",
      description: "Assisted in building and testing responsive websites for various clients using HTML, CSS, and JavaScript, laying a strong foundation in web technologies.",
      logo: "", // No logo fallback
    },
  ],
  research: [
    {
      role: "Research Assistant",
      company: "Stanford AI Lab",
      period: "2018 - 2019",
      description: "Contributed to a project on machine learning models for natural language understanding. Co-authored a conference paper.",
      logo: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
    }
  ]
};

const Experience = () => (
  <motion.section 
    id="experience" 
    className="py-20 bg-gray-50"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Experience</h2>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Work Experience</h3>
        <motion.div 
          className="relative border-l-2 border-gray-200"
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceData.work.map((job, index) => (
            <motion.div key={index} className="mb-10 ml-6 relative" variants={itemVariant}>
              <span className="absolute flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-200 rounded-full -left-5 top-1 ring-8 ring-white z-10">
                {job.logo ? (
                  <img src={job.logo} alt={`${job.company} logo`} className="w-6 h-6 object-contain" />
                ) : (
                  <span className="w-3 h-3 bg-gray-400 rounded-full" />
                )}
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{job.role} at <span className="text-gray-600 ml-2">{job.company}</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{job.period}</time>
              <p className="text-base font-normal text-gray-600">{job.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <h3 className="text-2xl font-semibold text-gray-800 my-8 pt-8 border-t border-gray-200 text-center">Research Experience</h3>
        <motion.div 
          className="relative border-l-2 border-gray-200"
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceData.research.map((job, index) => (
            <motion.div key={index} className="mb-10 ml-6 relative" variants={itemVariant}>
              <span className="absolute flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-200 rounded-full -left-5 top-1 ring-8 ring-white z-10">
                {job.logo ? (
                  <img src={job.logo} alt={`${job.company} logo`} className="w-6 h-6 object-contain" />
                ) : (
                  <span className="w-3 h-3 bg-gray-400 rounded-full" />
                )}
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{job.role} at <span className="text-gray-600 ml-2">{job.company}</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{job.period}</time>
              <p className="text-base font-normal text-gray-600">{job.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const skillsData = {
  frontend: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "HTML5 & CSS3"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  tools: ["Git & GitHub", "Docker", "Webpack", "Jira", "Figma", "CI/CD"],
};

const Skills = () => (
  <motion.section 
    id="skills" 
    className="py-20 bg-white"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
      <motion.div 
        className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow" variants={itemVariant}>
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Frontend</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.frontend.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>)}
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow" variants={itemVariant}>
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Backend</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.backend.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>)}
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow" variants={itemVariant}>
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Tools & DevOps</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.tools.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>)}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

const educationData = [
  {
    degree: "M.S. in Computer Science",
    university: "Stanford University",
    period: "2017 - 2019",
    description: "Focused on Artificial Intelligence and Human-Computer Interaction. Published a paper on novel UI paradigms.",
    logo: "/lovable-uploads/af5ee2ce-3942-48bb-a2ad-3b49b419daf9.png"
  },
  {
    degree: "B.S. in Software Engineering",
    university: "University of Waterloo",
    period: "2013 - 2017",
    description: "Graduated with honors. Active member of the coding club and participated in several hackathons.",
    logo: "/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
  },
];

const Education = () => (
  <motion.section
    id="education"
    className="py-20 bg-white"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Education</h2>
      <motion.div
        className="max-w-3xl mx-auto relative border-l-2 border-gray-200"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {educationData.map((edu, index) => (
          <motion.div key={index} className="mb-10 ml-6 relative" variants={itemVariant}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-200 rounded-full -left-5 top-1 ring-8 ring-white z-10">
              {edu.logo ? (
                <img src={edu.logo} alt={`${edu.university} logo`} className="w-6 h-6 object-contain" />
              ) : (
                <span className="w-3 h-3 bg-gray-400 rounded-full" />
              )}
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <p className="text-gray-600 mb-1">{edu.university}</p>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{edu.period}</time>
            <p className="text-base font-normal text-gray-600">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
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
  <motion.section 
    id="portfolio" 
    className="py-20 bg-gray-50"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Portfolio</h2>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolioData.map((project, index) => (
          <motion.div key={index} variants={itemVariant}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-medium">{tag}</span>)}
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <div className="flex gap-4 mt-auto">
                  <Button asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                  <Button variant="outline" asChild><a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Source Code</a></Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

// Update the hobbiesData array to use "Icon" (uppercase) per React best practices
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
              {/* Use Icon (uppercase) and render as <Icon /> */}
              <hobby.Icon className="w-10 h-10 text-gray-700 mb-3" />
              <h3 className="font-semibold text-gray-800">{hobby.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
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
      <Education />
      <Portfolio />
      <Hobbies />
    </PageLayout>
  );
};

export default Index;
