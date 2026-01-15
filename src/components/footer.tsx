import { Mail, Phone, MapPin, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Bongeka Bhungane
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Mobile & Web Developer passionate about creating meaningful
              digital experiences.
            </p>
          </div>

          <div
            className="space-y-4 animate-fadeIn"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="mailto:angelabhungane@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={20} className="flex-shrink-0" />
                <span>angelabhungane@gmail.com</span>
              </a>
              <a
                href="tel:+27832964212"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Phone size={20} className="flex-shrink-0" />
                <span>+27 83 296 4212</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0" />
                <span>Durban, Kwa-Zulu Natal</span>
              </div>
            </div>
          </div>

          <div
            className="space-y-4 animate-fadeIn"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Bongeka-Bhungane"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https:www.linkedin.com/in/bongeka-bhungane-623a6a252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:angelabhungane@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Available for freelance projects and collaboration opportunities.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} Bongeka Bhungane. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with{" "}
              <Heart size={16} className="text-red-500 animate-pulse" /> using
              React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
