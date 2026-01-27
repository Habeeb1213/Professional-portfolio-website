import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'django', 'react'];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping website with user authentication, product catalog, shopping cart, and payment integration using Python Django backend.',
      category: 'django',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'PostgreSQL'],
      // ↓↓↓ UPDATE THIS - Your actual e-commerce links ↓↓↓
      link: 'https://funiture-django.onrender.com/',
      github: 'https://github.com/Habeeb1213/funiture_django',
      // ↓↓↓ UPDATE THIS - Image path (save image in public/images/ecommerce.jpg) ↓↓↓
      image: '/images/ecommerce.png'  // Or use Unsplash URL temporarily
    },
    {
      id: 2,
      title: 'Dictionary Website',
      description: 'Interactive dictionary application with word search, definitions, synonyms, and pronunciation features built with React.',
      category: 'react',
      tags: ['React', 'HTML', 'CSS', 'JavaScript', 'API Integration'],
      // ↓↓↓ UPDATE THIS - Your actual dictionary links ↓↓↓
      link: 'https://dictionary-react-five.vercel.app/',
      github: 'https://github.com/Habeeb1213/dictionary_react',
      // ↓↓↓ UPDATE THIS - Image path (save image in public/images/dictionary.jpg) ↓↓↓
      image: '/images/dictionary.png'  // Or use Unsplash URL temporarily
    },
    {
      id: 3,
      title: 'Game Download Website',
      description: 'Game distribution platform with categories, search functionality, download system, and user ratings.',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      // ↓↓↓ UPDATE THIS - Your actual game website links ↓↓↓
      link: 'https://free-to-game1.netlify.app',
      github: 'https://github.com/Habeeb1213/Free-to-game',
      // ↓↓↓ UPDATE THIS - Image path (save image in public/images/game-download.jpg) ↓↓↓
      image: '/images/game-download.png'  // Or use Unsplash URL temporarily
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Professional portfolio with dark mode, responsive design, and interactive components built with React and Tailwind CSS.',
      category: 'react',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive'],
      // ↓↓↓ UPDATE THIS - Leave as # since not deployed yet ↓↓↓
      link: '#',
      github: '#',
      // ↓↓↓ UPDATE THIS - Image path (save image in public/images/portfolio.jpg) ↓↓↓
      image: '/images/portfolio.png'  // Or use Unsplash URL temporarily
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div>
      <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-12">My Projects</h1>
      
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-black dark:bg-white text-white dark:text-black'
                : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
            }`}
          >
            {filter === 'all' ? 'All Projects' : 
             filter === 'django' ? 'Django Projects' :
             filter === 'react' ? 'React Projects' : 
             'Web Projects'}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Project Image */}
            <div className="h-64 overflow-hidden relative">
              {/* ↓↓↓ This img tag uses the image path from above ↓↓↓ */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.src = `https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              
              {/* Overlay Links */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
                {/* ↓↓↓ GitHub Link - Uses your actual GitHub URLs ↓↓↓ */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-900" />
                </a>
                {/* ↓↓↓ Live Demo Link - Uses your actual project URLs ↓↓↓ */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-5 h-5 text-gray-900" />
                </a>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No projects found in this category
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try selecting a different filter or check back later for new projects.
          </p>
        </div>
      )}

      {/* Project Stats */}
      <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 border border-gray-300 dark:border-gray-700 rounded-xl">
            <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">4</div>
            <div className="text-gray-600 dark:text-gray-400">Total Projects</div>
          </div>
          <div className="text-center p-6 border border-gray-300 dark:border-gray-700 rounded-xl">
            <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-400">React Projects</div>
          </div>
          <div className="text-center p-6 border border-gray-300 dark:border-gray-700 rounded-xl">
            <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">1</div>
            <div className="text-gray-600 dark:text-gray-400">Django Projects</div>
          </div>
          <div className="text-center p-6 border border-gray-300 dark:border-gray-700 rounded-xl">
            <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">1</div>
            <div className="text-gray-600 dark:text-gray-400">Web Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;