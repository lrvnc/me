import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import {
  sectionVariant,
  listVariant,
  itemVariant,
  iconVariant,
} from "@/lib/animations";
import { countryFlags } from "@/lib/logoMap";

type WorkItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const workExperienceData: WorkItem[] = [
  {
    role: "Full Stack Developer",
    company: "Banco BTG Pactual",
    period: "Nov 2023 - Dec 2024",
    description:
      "Largest investment bank in Latin America. Developed automated systems for internal clients, gaining experience in both frontend and backend development, Amazon AWS, and DevOps. Estimated efficiency gains exceeded 220 hours per month.",
  },
  {
    role: "Research Intern in Computational Neurosciences",
    company: "MIT",
    period: "May 2023 - Nov 2023",
    description:
      "Worked in Prof. Guangyu Robert Yang's lab (now co-founder and CEO of Altera AI) as part of my Master’s degree placement, researching neural activity modeling in the small worm C. elegans using advanced neural networks.",
  },
  {
    role: "Research Intern",
    company: "LightOn",
    period: "Jul 2022 - Dec 2022",
    description:
      "Worked on the Qore Quantum Photonic Processor, a reconfigurable plug-and-play quantum circuit prototype, focusing on stabilization and calibration challenges.",
  },
  {
    role: "Math Tutor",
    company: "UFSCar (Peer Tutoring Program)",
    period: "Mar 2019 - Jul 2021",
    description:
      "Helped students build self-directed learning skills through peer tutoring, problem-set clinics, and exam preparation sessions.",
  },
];

const WorkExperience = () => (
  <motion.section
    id="work-experience"
    className="py-20 bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Work Experience
      </h2>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative border-l-2 border-gray-200"
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {workExperienceData.map((job, index) => {
            const flagData =
              countryFlags[job.company as keyof typeof countryFlags];

            return (
              <motion.div
                key={`${job.company}-${index}`}
                className="mb-10 ml-6 relative"
                variants={itemVariant}
              >
                <motion.span className="absolute -left-9 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 ring-8 ring-white">
                  <Briefcase className="w-3 h-3 text-white" />
                </motion.span>

                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">
                  {flagData && (
                    <span className="mr-2 inline-flex items-center gap-1">
                      {Array.isArray(flagData.flag) ? (
                        flagData.flag.map((src, i) => (
                          <img
                            key={`${src}-${i}`}
                            src={src}
                            alt={flagData.country ?? "Country flag"}
                            className={flagData.className || "w-6 h-auto"}
                            loading="lazy"
                          />
                        ))
                      ) : (
                        <img
                          src={flagData.flag}
                          alt={flagData.country ?? "Country flag"}
                          className={flagData.className || "w-6 h-auto"}
                          loading="lazy"
                        />
                      )}
                    </span>
                  )}
                  {job.role} at{" "}
                  <span className="text-gray-600 ml-2">{job.company}</span>
                </h3>

                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  {job.period}
                </time>

                <p className="text-base font-normal text-gray-600">
                  {job.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default WorkExperience;
