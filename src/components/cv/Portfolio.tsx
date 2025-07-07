import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { sectionVariant, listVariant, itemVariant } from "@/lib/animations";

const portfolioData = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce site with product listings, cart, and checkout.",
    image: "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
    tags: ["React", "Node.js", "Stripe"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A Kanban-style project management app to track tasks and collaborate.",
    image: "/lovable-uploads/e2f944f7-0d40-4c33-8ce1-30ef7cd3a4b0.png",
    tags: ["Vue.js", "Firebase"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Personal Blog",
    description: "A static blog generated with Next.js and Markdown for posts.",
    image: "/lovable-uploads/af5ee2ce-3942-48bb-a2ad-3b49b419daf9.png",
    tags: ["Next.js", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];

const Portfolio = () => (
  <motion.section
    id="portfolio"
    className="py-20 bg-white"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Portfolio
      </h2>
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-auto">
                  <Button asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Portfolio;
