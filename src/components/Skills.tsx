import React from 'react';
import { Code, Palette, Server, Smartphone, Database, Zap, Globe, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    // Frontend Skills
    { name: 'React.js', icon: '⚛️', category: 'Frontend', color: 'blue' },
    { name: 'JavaScript', icon: '🟨', category: 'Frontend', color: 'blue' },
    { name: 'HTML5', icon: '🌐', category: 'Frontend', color: 'blue' },
    { name: 'CSS', icon: '🎨', category: 'Frontend', color: 'blue' },
    { name: 'Tailwind CSS', icon: '💨', category: 'Frontend', color: 'blue' },
    
    // Backend Skills
    { name: 'Node.js', icon: '🟢', category: 'Backend', color: 'emerald' },
    { name: 'MySQL', icon: '🐬', category: 'Backend', color: 'emerald' },
    
    // Tools & Technologies
    { name: 'Git & GitHub', icon: '📚', category: 'Tools', color: 'purple' },
    { name: 'Firebase', icon: '🔥', category: 'Tools', color: 'purple' },
    { name: 'NPM', icon: '📦', category: 'Tools', color: 'purple' },
    
    // Programming & Concepts
    { name: 'Java', icon: '☕', category: 'Programming', color: 'orange' },
    { name: 'Problem Solving', icon: '🧩', category: 'Programming', color: 'orange' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: 'border-blue-500/30',
      emerald: 'border-emerald-500/30',
      purple: 'border-purple-500/30',
      orange: 'border-orange-500/30',
    };
    return colors[color as keyof typeof colors];
  };

  const getHoverColor = (color: string) => {
    const colors = {
      blue: 'hover:border-blue-400/60',
      emerald: 'hover:border-emerald-400/60',
      purple: 'hover:border-purple-400/60',
      orange: 'hover:border-orange-400/60',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and skills I've mastered
            throughout my development journey.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border ${getBorderColor(skill.color)} ${getHoverColor(skill.color)} transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-slate-900/50 cursor-pointer animate-fade-in-up`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 animate-bounce-slow">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <div className={`w-8 h-1 bg-gradient-to-r ${getColorClasses(skill.color)} rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center mb-4">
              <Code className="text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Frontend</h3>
            </div>
            <p className="text-gray-300 text-sm">Modern UI/UX development with responsive design and interactive experiences.</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20">
            <div className="flex items-center mb-4">
              <Server className="text-emerald-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Backend</h3>
            </div>
            <p className="text-gray-300 text-sm">Robust server-side development with databases and API integration.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Zap className="text-purple-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Tools</h3>
            </div>
            <p className="text-gray-300 text-sm">Development tools and technologies for efficient workflow and deployment.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20">
            <div className="flex items-center mb-4">
              <Smartphone className="text-orange-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Programming</h3>
            </div>
            <p className="text-gray-300 text-sm">Core programming concepts and problem-solving methodologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;