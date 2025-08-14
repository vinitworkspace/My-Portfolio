import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Store Rating System',
      description: 'Full-Stack Web Application with multi-role store rating platform supporting Admin, Store Owner, and User roles. Features secure JWT authentication, responsive UI with light/dark mode, real-time search with debounce, and advanced store filtering.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Express.js'],
      liveUrl: 'https://github.com/nishant-bansod/Store-Rating-System',
      githubUrl: 'https://github.com/nishant-bansod/Store-Rating-System',
      featured: true,
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Responsive real-time chat app with Firebase Authentication and Firestore messaging. Integrated contact request system with 24-hour expiry invite links using Firestore timestamp logic.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Firestore', 'Netlify'],
      liveUrl: 'https://nishant-chat-room.netlify.app/',
      githubUrl: 'https://github.com/nishant-bansod/chat-app',
      featured: true,
    },
    {
      title: 'Image Search App',
      description: 'Intuitive image search application with HTML, CSS, and JavaScript. Integrated the Unsplash API to fetch and display high-resolution images based on user queries.',
      image: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Unsplash API'],
      liveUrl: 'https://nishant-bansod.github.io/search_img_app/',
      githubUrl: 'https://github.com/nishant-bansod/search_img_app',
      featured: false,
    },
    {
      title: 'Plant Disease Classification',
      description: 'AI/ML project for plant disease classification developed for AICTE Cycle 4. Uses machine learning algorithms to identify and classify plant diseases from images.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Machine Learning', 'AI', 'Image Processing'],
      liveUrl: 'https://github.com/nishant-bansod/PlantDiseaseClassification_AICTE_Cycle4',
      githubUrl: 'https://github.com/nishant-bansod/PlantDiseaseClassification_AICTE_Cycle4',
      featured: false,
    },
    {
      title: 'URL Shortener',
      description: 'A URL shortening service that converts long URLs into short, manageable links. Features include link tracking and analytics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
      liveUrl: 'https://github.com/nishant-bansod/url-shortener',
      githubUrl: 'https://github.com/nishant-bansod/url-shortener',
      featured: false,
    },
    {
      title: 'Find My EV Station',
      description: 'Electric vehicle charging station finder application. Helps users locate nearby EV charging stations with real-time availability and navigation.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Maps API', 'Location Services'],
      liveUrl: 'https://find-my-ev-station.web.app/',
      githubUrl: 'https://github.com/nishant-bansod/FindMyEVStation',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and side projects. Each project represents
            a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Folder className="text-blue-400 mr-3" size={24} />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Folder className="text-purple-400 mr-3" size={24} />
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="text-purple-400 flex-shrink-0" size={24} />
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{project.title}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;