import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-medium">
          HELLO, I'M
        </p>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
          IYIADE
          <span className="block text-4xl md:text-6xl text-gray-500 dark:text-gray-400 mt-4">
            HABEEBLAH
            <span className="block text-2xl md:text-3xl text-gray-400 dark:text-gray-500 mt-4">
              JUNIOR FULL-STACK DEVELOPER
            </span>
          </span>
        </h1>
        
        <div className="h-1 w-40 bg-black dark:bg-white my-12"></div>
        
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl">
          Passionate junior full-stack developer with 2+ years of experience 
          building modern web applications. Specializing in Python/Django backend 
          and React frontend with clean, efficient code.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <a
            href="/portfolio"
            className="group inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-lg hover:opacity-90 transition-all duration-300"
          >
            View My Projects
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
          
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold text-lg rounded-lg hover:border-black dark:hover:border-white transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;