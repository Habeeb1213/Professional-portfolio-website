import { Download, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');

    // When you have your CV file in public folder:
    link.href = '/cv.pdf';
    link.download = 'Iyiade_Habeeblah_CV.pdf';
    link.click();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-6">My Resume</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Download my complete CV to view detailed experience, education, and skills
        </p>
      </div>

      {/* Download Button Section */}
      <div className="text-center py-20">
        <div className="inline-flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-900/50 mb-12">
          <FileText className="w-24 h-24 text-gray-400 dark:text-gray-600 mb-8" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Download My CV
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Get my complete professional resume including work experience, 
            education, certifications, and technical skills in PDF format.
          </p>
          <button
            onClick={handleDownload}
            className="group inline-flex items-center px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Download CV (PDF)
          </button>
        </div>
      </div>

      {/* Resume Highlights */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Resume Highlights
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 border border-gray-300 dark:border-gray-700 rounded-xl hover:border-black dark:hover:border-white transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Experience
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              2+ years of full-stack development experience with Django and React
            </p>
          </div>
          
          <div className="text-center p-8 border border-gray-300 dark:border-gray-700 rounded-xl hover:border-black dark:hover:border-white transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Education
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Self-taught developer with multiple certifications in web development
            </p>
          </div>
          
          <div className="text-center p-8 border border-gray-300 dark:border-gray-700 rounded-xl hover:border-black dark:hover:border-white transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full mb-6">
              <Award className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Skills
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Full-stack development with focus on Python/Django and modern frontend technologies
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Resume;