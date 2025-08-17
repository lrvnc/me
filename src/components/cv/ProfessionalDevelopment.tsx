import { motion } from "framer-motion";
import { Rocket, BookCopy, Users, Award } from "lucide-react";
import { sectionVariant, listVariant, itemVariant } from "@/lib/animations";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const developmentData = [
  {
    title: "Conference Speaker",
    description:
      "Speaker at React Conf 2024 on 'State Management in Micro-Frontends'.",
    icon: Rocket,
    tags: ["React", "Public Speaking", "Micro-Frontends"],
  },
  {
    title: "Open Source Contributor",
    description:
      "Active contributor to the `tRPC` library, focusing on documentation and type safety.",
    icon: Users,
    tags: ["tRPC", "TypeScript", "OSS"],
  },
  {
    title: "Advanced TypeScript Course",
    description:
      "Completed 'Mastering TypeScript' on Frontend Masters, deepening expertise in advanced types.",
    icon: BookCopy,
    tags: ["TypeScript", "Online Course", "Frontend Masters"],
  },
  {
    title: "Internal Tech Talks",
    description:
      "Regularly host internal workshops on topics like 'Effective CI/CD Pipelines' and 'GraphQL Best Practices'.",
    icon: Award,
    tags: ["CI/CD", "GraphQL", "Mentoring"],
  },
];

const ProfessionalDevelopment = () => (
  <motion.section
    id="professional-development"
    className="py-20 bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Professional Development
      </h2>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {developmentData.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariant}
            className="h-full"
          >
            <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <item.icon className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1" />
                  <span className="text-xl">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-600 mb-4 flex-grow">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default ProfessionalDevelopment;
