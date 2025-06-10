
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold">CINESLICE</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering futures through quality education. Making premium skill-based learning accessible to all.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Core Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Visual Effects (VFX)</li>
              <li className="hover:text-white cursor-pointer transition-colors">Graphic Designing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Video Editing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cloud Engineering</li>
              <li className="hover:text-white cursor-pointer transition-colors">Programming</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cybersecurity</li>
              <li className="hover:text-white cursor-pointer transition-colors">Film Making</li>
              <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Video Editing Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sound Editing Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Coding Solutions</li>
              <li className="hover:text-white cursor-pointer transition-colors">Corporate Training</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Admissions</li>
              <li className="hover:text-white cursor-pointer transition-colors">Career Support</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Cineslice. All rights reserved. Founded by Subramanyam Chowdary.
            </p>
            <p className="text-gray-400 text-center md:text-right">
              Empowering Futures Through Quality Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
