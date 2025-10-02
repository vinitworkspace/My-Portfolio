import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'VinZie - AI Career Coach',
      description: `Built a responsive career guidance platform using Next.js and Tailwind CSS, delivering personalized recommendations
based on user input.
– Integrated smart backend logic to analyze user goals and provide tailored advice for job roles, skills, and growth paths.
– Designed clean UI/UX for intuitive navigation, ensuring users could easily explore career options and receive actionable
insights.`,
      image: '/public/logo1.png',
      technologies: ['React.js', 'Next.js', 'MySQL', 'NeonDB', 'Clerk'],
      githubUrl: 'https://github.com/vinitworkspace/vinzie-career-coach',
      featured: true,
    },
    {
      title: 'Job Listing App',
      description: 'A responsive and user-friendly job listing platform built using React.js, designed to help users browse, search, and filter job opportunities with ease. The app showcases core frontend development skills including component architecture, state management, and dynamic rendering.',
      image: '/public/job.png',
      technologies: ['React','Tailwind CSS', 'Git'],
      githubUrl: 'https://github.com/vinitworkspace/react-job-board-assignment',
      featured: true,
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
        {/* <div>
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
        </div> */}
      </div>
    </section>
  );
};

export default Projects;