
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Separator className="mb-8 bg-gray-200/20" />
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
