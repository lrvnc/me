
import { motion } from 'framer-motion';
import { sectionVariant, itemVariant, listVariant } from '@/lib/animations';
import { personImg, placeholderImg } from '@/lib/constants';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// You can add more images here for the carousel
const aboutMeImages = [
  { src: personImg, alt: 'John Doe portrait' },
  { src: placeholderImg, alt: 'A placeholder image representing a workspace' },
];

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
          <Carousel className="w-full relative" opts={{ loop: true }}>
            <CarouselContent>
              {aboutMeImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden rounded-lg shadow-lg">
                    <CardContent className="flex aspect-[4/5] items-center justify-center p-0">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
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

export default AboutMe;
