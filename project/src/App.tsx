import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, School, User } from 'lucide-react';

function App() {
  const [currentText, setCurrentText] = useState(0);
  const introTexts = [
    "A Software Developer",
    "A MERN Stack Developer",
    "A Problem Solver",
    "A Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % introTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Suhail Ahmed</h1>
            <div className="flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#achievements" className="text-gray-600 hover:text-gray-900">Achievements</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              👋 Hi, I'm Suhail Ahmed
            </h1>
            <div className="h-20">
              <p className="text-xl text-blue-600 transition-opacity duration-500 animate-fade-in">
                {introTexts[currentText]}
              </p>
            </div>
            <p className="text-lg text-gray-600">
              Passionate about creating impactful solutions and continuous learning in the field of technology.
            </p>
            <div className="flex space-x-4 pt-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                View Projects
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 transition-transform hover:rotate-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
              alt="Coding workspace"
              className="relative rounded-lg shadow-xl transform transition-transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-12">
            <User className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <School className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-600">
                    B.Tech in Electronics and Communication Engineering<br />
                    MNNIT Allahabad<br />
                    CPI: 8.08
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Code className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>Languages: C,C++,JavaScript</li>
                    <li> Problem-Solving: Data Structures & Algorithms</li>
                    <li>Web Development: MERN Stack (MongoDB, Express.js, React, Node.js)</li>
        
                    <li>Tools & Technologies: Git, VS Code, MongoDB, REST APIs</li>
                    <li>Software Development: OOP, DBMS, Operating Systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800">Web Development & Full-Stack Projects</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800">Competitive Programming</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800">Software Development</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800">Leadership & Mentorship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-12">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                alt="Appointment Care"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Appointment Care</h3>
                <p className="text-gray-600 mb-4">
                  A web-based platform for scheduling and managing appointments efficiently.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
                alt="Job Minder"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Job Minder</h3>
                <p className="text-gray-600 mb-4">
                  A job-tracking and reminder system that helps users keep track of applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Express</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-12">
            <Award className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Awards & Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">FPGA Aviskar Electrominia</h3>
              <p className="text-gray-600">First Position (March 2024)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">ResearchGap Aviskar</h3>
              <p className="text-gray-600">Second Position (March 2024)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">LeetCode Contest</h3>
              <p className="text-gray-600">Highest Rank: 2303 (Contest 138)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600">Feel free to reach out for collaborations or just a friendly hello</p>
          </div>

          <div className="flex justify-center space-x-6">
  <a href="mailto:rbsuhail123@gmail.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
    <Mail className="w-6 h-6" />
    <span>Email</span>
  </a>
  <a href="https://www.linkedin.com/in/rbsuhail" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
    <Linkedin className="w-6 h-6" />
    <span>LinkedIn</span>
  </a>
  <a href="https://github.com/RBSuhail/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
    <Github className="w-6 h-6" />
    <span>GitHub</span>
  </a>
</div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Suhail Ahmed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;