
import { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionVariant, itemVariant, listVariant } from '@/lib/animations';
import { personImg, placeholderImg } from '@/lib/constants';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

// You can add more images here for the gallery. I've used the existing ones as a starting point.
const aboutMeImages = [
  { src: personImg, alt: 'John Doe portrait' },
  { src: placeholderImg, alt: 'A placeholder image representing a workspace' },
];

const AboutMe = () => {
  const [selectedImage, setSelectedImage] = useState(aboutMeImages[0]);

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <motion.div className="md:col-span-1" variants={itemVariant}>
            <div className="space-y-4">
              <Card className="overflow-hidden rounded-lg shadow-lg">
                <CardContent className="flex aspect-[4/5] items-center justify-center p-0">
                  <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-cover transition-opacity duration-300 ease-in-out" key={selectedImage.src} />
                </CardContent>
              </Card>
              <div className="grid grid-cols-4 gap-2">
                {aboutMeImages.map((image) => (
                  <div 
                    key={image.src}
                    onClick={() => setSelectedImage(image)}
                    className={cn(
                      "cursor-pointer rounded-md overflow-hidden border-2 transition-colors aspect-square",
                      selectedImage.src === image.src ? 'border-primary' : 'border-transparent'
                    )}
                  >
                    <img src={image.src} alt={`Thumbnail of ${image.alt}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
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
};

export default AboutMe;
