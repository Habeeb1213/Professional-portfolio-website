import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

const MainLayout = () => {
  const { isSidebarOpen } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Mobile Navbar - Hidden on desktop */}
      <Navbar />
      
      <div className="flex">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        {/* Main Content - Adjust padding based on sidebar state */}
        <main className={`flex-1 min-h-screen transition-all duration-300 ${
          isSidebarOpen ? 'md:pl-72' : 'md:pl-0'
        }`}>
          <div className="p-6 md:p-12 lg:p-16">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;