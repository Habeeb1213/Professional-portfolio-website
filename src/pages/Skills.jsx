const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 87, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { name: 'CSS', percentage: 80, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { name: 'Tailwind CSS', percentage: 75, color: 'bg-gradient-to-r from-teal-400 to-teal-500' },
    { name: 'JavaScript', percentage: 60, color: 'bg-gradient-to-r from-yellow-400 to-yellow-500' },
    { name: 'React', percentage: 70, color: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
    { name: 'Python', percentage: 65, color: 'bg-gradient-to-r from-green-500 to-green-600' },
    { name: 'Django', percentage: 78, color: 'bg-gradient-to-r from-emerald-500 to-green-600' },
  ];

  return (
    <div className="max-w-6xl">
      <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-12">Technical Skills</h1>
      
      <div className="mb-16">
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
          My technical proficiency across various web development technologies. 
          I continuously learn and improve my skills through hands-on projects.
        </p>
      </div>

      {/* Skills with Percentage Bars */}
      <div className="space-y-10">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900 dark:text-white mr-4">
                  {skill.name}
                </span>
                <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                  {skill.percentage}%
                </span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-lg">
                {skill.percentage >= 80 ? 'Expert' : 
                 skill.percentage >= 70 ? 'Advanced' : 
                 skill.percentage >= 60 ? 'Intermediate' : 'Learning'}
              </div>
            </div>
            
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${skill.color} transition-all duration-1000 ease-out group-hover:scale-y-110`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            
            {/* Percentage indicator dots */}
            <div className="flex justify-between mt-2 px-1">
              {[0, 25, 50, 75, 100].map((percent) => (
                <div
                  key={percent}
                  className={`w-1 h-1 rounded-full ${
                    skill.percentage >= percent 
                      ? 'bg-gray-900 dark:bg-white' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill Categories */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skill Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-300 dark:border-gray-700 p-8 rounded-xl hover:border-black dark:hover:border-white transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend</h3>
            <ul className="space-y-3">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'].map((skill, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-center">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border border-gray-300 dark:border-gray-700 p-8 rounded-xl hover:border-black dark:hover:border-white transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Backend</h3>
            <ul className="space-y-3">
              {['Python', 'Django', 'REST APIs', 'Database Design'].map((skill, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-center">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border border-gray-300 dark:border-gray-700 p-8 rounded-xl hover:border-black dark:hover:border-white transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tools</h3>
            <ul className="space-y-3">
              {['Git & GitHub', 'VS Code', 'Chrome DevTools', 'Postman', 'Figma'].map((skill, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-center">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;