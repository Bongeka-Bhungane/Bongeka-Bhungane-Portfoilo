import {
  Download,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  SquareUser,
} from "lucide-react";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/bongeka-bhungane-flowcv-resume-20260112.pdf";
    link.download = "Bongeka-Bhungane-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slideInLeft">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Personal Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Durban, Kwa-Zulu Natal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:angelabhungane@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      angelabhungane@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:+27832964212"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      +27 83 296 4212
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownloadCV}
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-600" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">
                  Dip ICT: Application Development
                </p>
                <p className="text-gray-600">Durban University of Technology</p>
                <p className="text-sm text-gray-500">Graduated: June 2024</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slideInRight">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <SquareUser className="text-blue-600" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Professional Summary
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Passionate and detail-oriented developer with growing experience
                in technology and design. I focus on building clean,
                user-friendly interfaces and developing efficient, scalable
                solutions. My goal is to create meaningful digital experiences
                that combine functionality with great design.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-600" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Web and Mobile Developer
                  </h4>
                  <p className="text-blue-600 font-medium">Code Tribe</p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        Collaborate with trainees to define and develop
                        requirements
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        Develop applications adhering to business requirements
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Write specifications and design documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        Participate in Scrum events and agile development
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
