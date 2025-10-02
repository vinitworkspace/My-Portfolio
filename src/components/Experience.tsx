import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { Link as LinkIcon } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Techonsy Software Pvt. Ltd.',
      location: 'Pune, Maharashtra',
      period: 'Feb 2025 - May 2025',
      description:
        'Developed full-stack web applications using React.js, Node.js, Next.js and NeonDB. Built responsive and modern UIs with secure authentication and real-time features.',
      achievements: [
        'Built VinZie - AI Career Coach.',
        'Developed Real-Time Chat Application.',
      ],
    },
  ];

  const education = [
    {
      degree: 'MSc. in Computer Applications',
      school: `MAEER's MIT Arts, Commerce and Science College`,
      period: '2023 - 2025',
      details: 'CGPA: 7.95/10 | Pune, Maharashtra',
    },
    {
      degree: 'BSc. in Computer Science',
      school: `Hutatma Rajguru Arts, Science & Commerce College`,
      period: '2020 - 2023',
      details: 'CGPA: 7.61/10 | Pune, Maharashtra',
    },
  ];

 const certifications = [
  {
    title: 'Java Core - OOP principles, interfaces, inheritance',
    url: 'https://drive.google.com/file/d/1qP2Aw6ROaRsRbWHDXtbIZDCPrtNz4gWE/view',
  },
  {
    title: 'Excelr - ChatGPT & Generative AI',
    url: 'https://example.com/web-tech-certificate',
  },
  {
    title: 'AWS - Solutions Architecture Job Simulation',
    url: 'https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_68c45659c5c1406e81ce569f_1758006406796_completion_certificate.pdf',
  },
];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey through my professional experiences, education, and achievements
            in the world of technology.
          </p>
        </div>

        {/* Experience + Education Grid */}
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
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-16 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
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

          {/* Education */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award className="text-purple-400 mr-3" size={24} />
                Education
              </h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 mb-4"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <div className="text-purple-400 font-medium mb-2">{edu.school}</div>
                  <div className="text-gray-400 text-sm mb-3">{edu.period}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-5 flex justify-center">
  <div className="w-full max-w-400">
    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
      <Award className="text-emerald-400 mr-3" size={24} />
      Certifications
    </h3>
    <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-200"
          >
            <LinkIcon size={16} className="text-emerald-400 mr-2 flex-shrink-0" />
            {cert.title}
          </a>
        ))}
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Experience;