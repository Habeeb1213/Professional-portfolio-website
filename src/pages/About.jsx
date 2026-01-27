const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies Used', value: '8+' },
    { label: 'Code Commits', value: '500+' },
  ];

  const skills = [
    'HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Python', 
    'Django Framework', 'Tailwind CSS', 'REST APIs', 'Git & GitHub'
  ];

  return (
    <div className="max-w-6xl">
      <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-12">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Building Digital Solutions Since 2022
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            I'm a passionate junior full-stack developer with 2+ years of hands-on 
            experience in web development. I specialize in creating responsive, 
            user-friendly web applications using modern technologies.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            My journey started with HTML/CSS/JS and has evolved to include Python/Django 
            for backend development and React for dynamic frontends. I believe in 
            writing clean, maintainable code and continuously learning new technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="border border-gray-300 dark:border-gray-700 p-6 hover:border-black dark:hover:border-white transition-colors">
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technologies I Work With</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;