
// To adjust logo sizes, you can change the `className` for each entry.
// For example, you can use Tailwind CSS height classes like 'h-10', 'h-12', 'h-16', etc.
export const logoMap: { [key: string]: { src: string; className?: string } } = {
  'UFSCAR': { src: '/logos/UFSCar.svg', className: 'h-16' },
  'ESPCI Paris': { src: '/logos/espci.png', className: 'h-20' },
  'MIT': { src: '/logos/mit.svg', className: 'h-14' },
  'University of Exeter': { src: '/logos/uoe.png', className: 'h-24' },
  'University of Queensland': { src: '/logos/UQlogo.png', className: 'h-20' },
  'Stanford University': { src: '' },
  'University of Waterloo': { src: '' },
};

// Country flags for education section
export const countryFlags: { [key: string]: { country: string; flag: string; className?: string } } = {
  'Federal University of São Carlos (UFSCar)': { country: 'Brazil', flag: '🇧🇷', className: 'text-2xl' },
  'ESPCI Paris - PSL': { country: 'France', flag: '🇫🇷', className: 'text-2xl' },
  'University of Queensland & University of Exeter': { country: 'Australia & UK', flag: '🇦🇺🇬🇧', className: 'text-2xl' },
};
