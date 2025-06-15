
// To adjust logo sizes, you can change the `className` for each entry.
// For example, you can use Tailwind CSS height classes like 'h-10', 'h-12', 'h-16', etc.
export const logoMap: { [key: string]: { src: string; className?: string } } = {
  'UFSCAR': { src: '/logos/UFSCar.svg', className: 'h-16' },
  'ESPCI Paris': { src: '/logos/espci.png', className: 'h-20' },
  'MIT': { src: '/logos/mit.svg', className: 'h-14' },
  'University of Exeter': { src: '/logos/uoe.png', className: 'h-24' },
  'University of Queensland': { src: '/logos/UQlogo.png', className: 'h-20' },
};

// Country flags for education section
export const countryFlags = {
  'Federal University of São Carlos (UFSCar)': {
    country: 'Brazil',
    flag: 'https://flagcdn.com/w40/br.png',
    className: 'w-6 h-auto',
  },
  'ESPCI Paris - PSL': {
    country: 'France',
    flag: 'https://flagcdn.com/w40/fr.png',
    className: 'w-6 h-auto',
  },
  'University of Queensland & University of Exeter': {
    country: 'Australia & UK',
    flag: [
      'https://flagcdn.com/w40/au.png',
      'https://flagcdn.com/w40/gb.png',
    ],
    className: 'w-6 h-auto',
  },
};
