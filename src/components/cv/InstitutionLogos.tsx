
import { motion } from 'framer-motion';
import LogoPlaceholder from './LogoPlaceholder';

const institutions = [
  'UFSCAR',
  'ESPCI Paris',
  'MIT',
  'University of Exeter',
  'University of Queensland'
];

const InstitutionLogos = () => {
  const marqueeInstitutions = [...institutions, ...institutions];
  
  return (
    <div className="absolute bottom-8 left-0 w-full py-4">
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:w-24 before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-24 after:h-full after:bg-gradient-to-l after:from-black after:to-transparent after:z-10">
        <motion.div
          className="flex"
          animate={{
            x: ['0%', '-100%'],
            transition: {
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            },
          }}
        >
          {marqueeInstitutions.map((name, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center mx-10" style={{ minWidth: '180px' }}>
              <LogoPlaceholder name={name} className="h-12 w-32 text-2xl" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InstitutionLogos;
