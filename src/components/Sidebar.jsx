import { NavLink } from 'react-router-dom';
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Mail,
  Github,
  Linkedin,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar, isDarkMode, toggleTheme } = useTheme();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/about', label: 'About', icon: <User className="w-5 h-5" /> },
    { path: '/skills', label: 'Skills', icon: <Cpu className="w-5 h-5" /> },
    { path: '/portfolio', label: 'Portfolio', icon: <Briefcase className="w-5 h-5" /> },
    { path: '/resume', label: 'Resume', icon: <FileText className="w-5 h-5" /> },
    { path: '/testimonials', label: 'Testimonials', icon: <MessageSquare className="w-5 h-5" /> },
    { path: '/contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

const socialLinks = [
  { 
    href: 'https://github.com/Habeeb1213', 
    icon: <Github className="w-5 h-5" />, 
    label: 'GitHub' 
  },
  { 
    href: 'https://www.linkedin.com/in/habeeblah-iyiade-438b9b371', 
    icon: <Linkedin className="w-5 h-5" />, 
    label: 'LinkedIn' 
  },
  { 
    href: 'https://x.com/AlphaTech93661', 
    icon: <Twitter className="w-5 h-5" />, 
    label: 'X (Twitter)' 
  },
];
  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-8 left-8 z-50 p-3 rounded-full bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 ${
          isSidebarOpen ? 'left-72' : 'left-8'
        }`}
        aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isSidebarOpen ? (
          <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white" />
        )}
      </button>

      {/* Sidebar */}
      <aside className={`h-screen fixed left-0 top-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black flex flex-col transition-all duration-300 ${
        isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full overflow-hidden'
      }`}>
        {isSidebarOpen && (
          <>
            {/* Top Section with Profile & Theme Toggle */}
            <div className="px-8 py-10 border-b border-gray-100 dark:border-gray-800">
              {/* Profile Section with Your Image */}
              <div className="mb-8">
                <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 mb-6 mx-auto overflow-hidden border-2 border-gray-400 dark:border-gray-600">
                  {/* Your Image Here */}
                  <img 
                    src="images/my-image.jpg" 
                    alt="Iyiade Habeeblah"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add(
                        'bg-gradient-to-br', 
                        'from-gray-300', 
                        'to-gray-500', 
                        'dark:from-gray-700', 
                        'dark:to-gray-900'
                      );
                      const fallbackText = document.createElement('div');
                      fallbackText.className = 'w-full h-full flex items-center justify-center text-white text-3xl font-bold';
                      fallbackText.textContent = 'IH';
                      e.target.parentElement.appendChild(fallbackText);
                    }}
                  />
                </div>
                <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
                  Iyiade Habeeblah
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm font-medium">
                  Junior Full-Stack Developer
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-center text-xs mt-2">
                  2+ Years Experience
                </p>
              </div>

              {/* Theme Toggle at Top Right */}
              <div className="flex justify-center">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center px-4 py-2.5 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 group border border-gray-300 dark:border-gray-700"
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-4 h-4 mr-2 text-yellow-500" />
                      <span className="text-sm font-medium">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 mr-2 text-gray-700 dark:text-gray-300" />
                      <span className="text-sm font-medium">Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Scrollable Navigation */}
            <div className="flex-1 overflow-y-auto py-8 sidebar-scrollbar sidebar-scrollable">
              <nav className="px-6">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center space-x-4 px-6 py-4 rounded-lg transition-all duration-300 ${
                            isActive
                              ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white font-semibold'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                          }`
                        }
                      >
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span className="font-medium whitespace-nowrap">{item.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social Links moved to bottom of scrollable area */}
              <div className="px-8 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-center space-x-6 mb-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                  © {new Date().getFullYear()} Iyiade Habeeblah
                </p>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default Sidebar;