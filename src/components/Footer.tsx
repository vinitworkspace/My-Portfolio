import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-lg border-t border-slate-700/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-2" /> Vinit Awate
            </p>
          </div>
          <div className="text-gray-400">
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;