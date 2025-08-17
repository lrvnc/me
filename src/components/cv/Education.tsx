import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import {
  sectionVariant,
  listVariant,
  itemVariant,
  iconVariant,
} from "@/lib/animations";
import { countryFlags } from "@/lib/logoMap";

type Edu = {
  degree: string;
  university: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

const educationData: Edu[] = [
  {
    degree: "Joint PhD in Physics",
    university: "University of Queensland & University of Exeter",
    period: "Jan 2025 - Present",
    location: "Brisbane, AU & Exeter, UK",
    description:
      "Joint PhD between UQ (Go8) and the University of Exeter (Russell Group).",
    highlights: [
      "Thesis: Machine learning with optical wave propagation in disordered media",
      // "Topics: optical/photonic computing and reservoir computing",
    ],
  },
  {
    degree: "M.Sc. in Engineering",
    university: "ESPCI Paris - PSL",
    period: "Aug 2021 - Aug 2023",
    location: "Paris, France",
    description:
      "Grande École within Université PSL at the physics-chemistry interface, with extensive research training. Home to six Nobel Prizes; former directors include Marie Curie and Pierre-Gilles de Gennes. I chose to specialize in quantum and optical physics, and in scientific computing.",
    highlights: [
      "Awarded with the Excellence Scholarship from the ESPCI Fonds",
      // "GPA: 4.0/4.0",
    ],
  },
  {
    degree: "B.Sc. in Engineering Physics",
    university: "Federal University of São Carlos (UFSCar)",
    period: "Mar 2018 - Nov 2024",
    location: "São Carlos - SP, Brazil",
    description:
      "The Federal University of São Carlos is a leading Brazilian university and the first to offer an Engineering Physics program—establishing the course’s standards and tradition—with strong foundations in physics, mathematics, and computation.",
    highlights: [
      // "Extracurriculars: robotics team, junior enterprise, and tutoring",
      // "GPA: 8.46/10",
    ],
  },
  {
    degree: "Technical Certificate in Chemistry (Chemical Technician)",
    university: "ETEC Trajano Camargo",
    period: "Jan 2015 - Dec 2017",
    location: "Limeira - SP, Brazil",
    description:
      "Three-year technical program in chemistry with intensive laboratory practice for the chemical industry.",
    highlights: [
      "🏆 Prêmio Troféu Fumagalli — Outstanding Public High School Student (Limeira)",
    ],
  },
];

const Education = () => (
  <motion.section
    id="education"
    className="py-20 bg-gray-50"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Education
      </h2>
      <motion.div
        className="max-w-3xl mx-auto relative border-l-2 border-gray-200"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {educationData.map((edu, index) => {
          const flagData = countryFlags[edu.university];
          return (
            <motion.div
              key={index}
              className="mb-10 ml-6 relative"
              variants={itemVariant}
            >
              <motion.span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -left-9 ring-8 ring-white">
                <GraduationCap className="w-3 h-3 text-white" />
              </motion.span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">
                {edu.degree}
              </h3>
              <div className="flex items-center gap-2 mb-1">
                {flagData ? (
                  <div className="flex items-center gap-2">
                    {Array.isArray(flagData.flag) ? (
                      flagData.flag.map((flagUrl, index) => (
                        <img
                          key={index}
                          src={flagUrl}
                          alt={`Flag ${index}`}
                          className={flagData.className || "w-6 h-auto"}
                        />
                      ))
                    ) : (
                      <img
                        src={flagData.flag}
                        alt={`${flagData.country} Flag`}
                        className={flagData.className || "w-6 h-auto"}
                      />
                    )}
                    <span className="text-sm text-gray-500">
                      {flagData.country}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl">🏫</span>
                )}
                <p className="text-gray-600 font-medium">{edu.university}</p>
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                {edu.period}
              </time>
              <div className="mt-3 text-gray-600" />

              {edu.highlights?.length ? (
                <ul className="mt-3 ml-5 list-disc space-y-1 text-gray-600">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </motion.section>
);

export default Education;
