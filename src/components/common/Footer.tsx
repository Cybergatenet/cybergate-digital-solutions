import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-royal-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">CYBERGATE</h2>
                <p className="text-sm text-gray-400">Digital Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Leading computer training center and laptop accessories outlet in Nigeria. 
              Providing quality ICT education and technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-400 hover:text-white transition-colors">
                  Laptop Accessories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white transition-colors">
                  Student Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/programs?category=certificate" className="text-gray-400 hover:text-white transition-colors">
                  Certificate Courses
                </Link>
              </li>
              <li>
                <Link to="/programs?category=diploma" className="text-gray-400 hover:text-white transition-colors">
                  Diploma Courses
                </Link>
              </li>
              <li>
                <Link to="/programs?category=special-package" className="text-gray-400 hover:text-white transition-colors">
                  Special Packages
                </Link>
              </li>
              <li>
                <Link to="/programs?category=executive" className="text-gray-400 hover:text-white transition-colors">
                  Executive Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-royal-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">123 Tech Street</p>
                  <p className="text-gray-400">Computer Village</p>
                  <p className="text-gray-400">Ikeja, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-royal-blue-400" />
                <a href="tel:+2348012345678" className="text-gray-400 hover:text-white transition-colors">
                  +234 801 234 5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-royal-blue-400" />
                <a href="mailto:info@cybergate.com" className="text-gray-400 hover:text-white transition-colors">
                  info@cybergate.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Cybergate Digital Solutions. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Registered Computer Training Center • Laptop & Accessories Outlet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;