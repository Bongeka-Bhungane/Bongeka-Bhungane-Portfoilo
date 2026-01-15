import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <div className="inline-block">
              <span className="text-blue-600 font-semibold text-lg">
                Hello, I'm
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Bongeka
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Bhungane
              </span>
            </h1>
            <p className="text-2xl text-gray-600 font-medium">
              Mobile & Web Developer
            </p>
            <p className="text-lg text-gray-600 max-w-lg">
              Passionate about building clean, user-friendly interfaces and
              developing efficient, scalable solutions that combine
              functionality with great design.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium"
              >
                View Projects
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Bongeka-Bhungane"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/bongeka-bhungane-623a6a252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:angelabhungane@gmail.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse blur-3xl"></div>
              <div className="relative z-10 w-80 h-80 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl">
                <Code2 size={120} className="text-white animate-float" />
              </div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-lg animate-float-delayed shadow-xl"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-cyan-500 rounded-full animate-float shadow-xl"></div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-blue-400 rounded-lg animate-float-delayed shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
