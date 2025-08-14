import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'MERN Stack Developer',
      company: 'Freelance & Personal Projects',
      location: 'Amravati, Maharashtra',
      period: '2020 - 2024',
      description: 'Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Built responsive and modern UIs with secure authentication and real-time features.',
      achievements: [
        'Built Store Rating System with multi-role authentication',
        'Developed Real-Time Chat Application with Firebase',
        'Created Image Search App with Unsplash API integration',
      ],
    },
    {
      title: 'Competitive Programmer',
      company: 'TCS CodeVita & Infosys Hackathon',
      location: 'India',
      period: '2023 - 2025',
      description: 'Participated in coding contests and hackathons, solving complex algorithmic problems and building innovative solutions.',
      achievements: [
        'Finalist in Infosys Hackathon 2025 - ChargeSmart project',
        'Global Rank 4296 in TCS CodeVita Season 11',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.E. in Information Technology',
      school: 'Prof. Ram Meghe Institute of Technology and Research, Badnera',
      period: '2020 - 2024',
      details: 'CGPA: 7.61/10 | Amravati, Maharashtra',
    },
  ];

  const certifications = [
    'Core Java - OOP principles, interfaces, inheritance',
    'SQL - Structured query training with MySQL labs',
    'Web Technologies (HTML, CSS, JS) - Frontend fundamentals',
    'Python Essentials - Programming logic and data structures',
    'TCS CodeVita Season 11 - Competitive coding contest participant',
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey through my professional experiences, education, and achievements
            in the world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Calendar className="text-blue-400 mr-3" size={24} />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                    <span className="text-blue-400 font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-300 mb-4">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award className="text-purple-400 mr-3" size={24} />
                Education
              </h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <div className="text-purple-400 font-medium mb-2">{edu.school}</div>
                  <div className="text-gray-400 text-sm mb-3">{edu.period}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award className="text-emerald-400 mr-3" size={24} />
                Certifications
              </h3>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;