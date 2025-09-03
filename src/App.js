import React, { useState, useEffect } from "react";

import { 
  FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt 
} from "react-icons/fa";

import { 
  SiMongodb, SiMysql, SiTypescript, SiHtml5, SiCss3, SiPhp, 
  SiRedux, SiNextdotjs, SiBootstrap, SiTailwindcss, 
  SiTensorflow, SiPostgresql, SiExpress
} from "react-icons/si";

// Lucide-react
import { 
  Github, Linkedin, Mail, Download, User, 
  MapPin, Code, ExternalLink, Phone 
} from "lucide-react";


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 const skills = [
  { name: "JavaScript", icon: <FaJs size={40} color="#f7df1e" /> },
  { name: "React.js", icon: <FaReact size={40} color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68a063" /> },
  { name: "Express.js", icon: <SiExpress size={40} color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#00758f" /> },
  { name: "Python", icon: <FaPython size={40} color="#3776ab" /> },
  { name: "Java", icon: <FaJava size={40} color="#007396" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178c6" /> },
  { name: "HTML5", icon: <SiHtml5 size={40} color="#e34f26" /> },
  { name: "CSS3", icon: <SiCss3 size={40} color="#1572b6" /> },
  { name: "PHP", icon: <SiPhp size={40} color="#777bb4" /> },
  { name: "Redux", icon: <SiRedux size={40} color="#764abc" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={40} color="#7952b3" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38b2ac" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#f34f29" /> },
  { name: "Docker", icon: <FaDocker size={40} color="#0db7ed" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={40} color="#ff6f00" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
 
 // used Microsoft logo for Excel
];
 const projects = [
  {
    title: 'Cybersecurity Predictive Risk Scoring System',
    description:
      'Built a full-stack cybersecurity risk platform with modern React.js dashboard, Python ML backend, and Java risk engine for real-time network scanning and risk scoring using Isolation Forest and Random Forest models.',
    technologies: ['React.js', 'Python', 'Java', 'Machine Learning', 'TensorFlow'],
    year: '2025',
    category: 'AI/ML & Security',
    image: 'project5.jpg', // file inside /public/images/
    liveDemo: '#',
    codeLink: 'https://github.com/Tejaswicsd/cyberguard-risk-system.git',
  },
  {
    title: 'TechWave - AI-Powered Learning Platform',
    description:
      'Architected full-stack learning platform with intelligent quiz system and AI chatbot, achieving 90% user satisfaction. Implemented JWT authentication, role-based access control, and real-time features for 500+ users.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'AI'],
    year: '2024',
    category: 'AI/ML & Education',
    image: 'project6.jpg', // added for consistency
    liveDemo: '#',
    codeLink: 'https://github.com/Tejaswicsd/Tech-Wave.git',
  },
  {
    title: 'Urban Sound Classification using Deep Learning',
    description:
      'Achieved 89% accuracy on UrbanSound8K dataset using deep neural networks and feature extraction. Developed end-to-end ML pipeline with preprocessing, model optimization, and deployment strategies.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'MFCC', 'Deep Learning'],
    year: '2025',
    category: 'AI/ML',
    image: 'project4.jpg',
    liveDemo: '#',
    codeLink: 'https://github.com/Tejaswicsd/Audio-classification-Deeplearning.git',
  },
];

  const experience = [
    {
      period: 'Jan 2023 – Dec 2023',
      title: 'Full Stack Web Developer',
      company: 'MCR Web Solutions',
      location: 'Bhimavaram, Andhra Pradesh',
      description: [
        'Developed a responsive AICTE Faculty Development Programme website ',
        'Built and deployed SVCET College website achieving a 40% performance improvement through code optimization',
        'Implemented cross-browser compatibility and mobile-first design principles, enhancing user engagement by 45%'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design']
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science & Design',
      institution: 'Sagi Ramakrishnam Raju Engineering College, Bhimavaram',
      period: '2023 – 2026',
      cgpa: '7.93/10'
    },
    {
      degree: 'Diploma in AI & Computer Science',
      institution: 'ISTS Women\'s Engineering College, Rajanagaram',
      period: '2020 – 2023',
      cgpa: '9.5/10'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-blue-500 ${
                    activeSection === item.toLowerCase() ? 'text-blue-500' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="ml-8 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
              🌙
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <p className="text-lg text-gray-600 mb-4 animate-slide-up">
              Developing Inventive Thoughts Into Immersive User Journeys
            </p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Tejaswi Guttula
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up delay-200">
              Software Developer — Full Stack Developer — MERN Stack Developer from INDIA
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-8 animate-slide-up delay-300">
              {[
                { icon: Github, href: 'https://github.com/Tejaswicsd/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/tejaswi-guttula-36ba44298/' },
                { icon: Mail, href: 'mailto:tejaswiguttula1@gmail.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up delay-400">
              <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center">
                <a
  href="/Teju resume.pdf"
  download
  className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
></a>
                <Download size={20} className="mr-2" />
                Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-lg">
               <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
  <img
    src="/images/teju photo.jpg"   // <- put your image inside /public/images folder
    alt="Tejaswi Guttula"
    className="w-full h-full object-cover"
  />
</div>

              </div>
            </div>
            <div className="animate-slide-right">
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Results-driven final-year Computer Science student with expertise in full-stack development, 
                  MERN stack, and cloud technologies. Currently pursuing B.Tech in Computer Science & Design 
                  at SRKR Engineering College with a CGPA of 7.93.
                </p>
                <p className="mb-6">
                  My journey includes building scalable web applications, optimizing system performance, 
                  and implementing AI/ML solutions. I have proven experience at MCR Web Solutions where 
                  I developed responsive websites serving 2000+ educators nationwide and achieved 40% 
                  performance improvements.
                </p>
                <p className="mb-6">
                  I specialize in modern frameworks including React.js, Node.js, Express.js, and have 
                  strong problem-solving abilities with hands-on experience in cloud technologies, 
                  databases, and AI/ML implementations using TensorFlow and Keras.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Education</h4>
                    <p className="text-sm">B.Tech CSE (7.93 CGPA)</p>
                    <p className="text-sm">Diploma AI & CS (9.5 CGPA)</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Experience</h4>
                    <p className="text-sm">Full Stack Developer</p>
                    <p className="text-sm">MERN Stack Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2 flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {exp.description.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Education Section within Experience */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-blue-600">{edu.degree}</h4>
                    <span className="text-gray-500 text-sm">{edu.period}</span>
                  </div>
                  <p className="text-gray-700 mb-1">{edu.institution}</p>
                  <p className="text-gray-600 font-medium">CGPA: {edu.cgpa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {skills.map((skill, index) => (
        <div 
          key={index}
          className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg flex flex-col items-center justify-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {skill.icon}
          <span className="text-gray-700 font-medium text-sm mt-2">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projects Section */}
    {/* Projects Section */}
<section id="projects" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Projects</h2>

    <div className="space-y-12">
      {projects.map((project, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        >
          {/* Left - Project Image */}
          <div className="w-full h-56 md:h-64 overflow-hidden rounded-lg">
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right - Project Details */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <a
                href={project.liveDemo || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center text-sm"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Link
              </a>
              <a
                href={project.codeLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white flex items-center text-sm"
              >
                <Github size={16} className="mr-2" />
                Code Base
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-16">Get in Touch</h2>
          <div className="animate-fade-in">
            <p className="text-blue-500 text-lg mb-4 flex items-center justify-center">
              <MapPin size={20} className="mr-2" />
              Bhimavaram, Andhra Pradesh, India
            </p>
            <p className="text-blue-500 text-lg mb-4">+91-630-089-6766</p>
            <p className="text-blue-500 text-lg mb-8">tejaswiguttula1@gmail.com</p>
            
            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Phone, href: 'tel:+916300896766', label: 'Call' },
                { icon: Mail, href: 'mailto:tejaswiguttula1@gmail.com', label: 'Email' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/tejaswi-guttula-36ba44298/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/Tejaswicsd', label: 'GitHub' }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-100 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 group"
                  title={contact.label}
                >
                  <contact.icon size={24} />
                </a>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-gray-50 rounded-lg p-8 inline-block">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Achievements & Certifications</h3>
              <div className="text-left space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Smart India Hackathon 2024 Participant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">JavaScript Certification (Sololearn)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Problem Solving (HackerRank)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Active GitHub Contributor - 15+ repositories, 50+ commits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 z-50"
      >
        ↑
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;