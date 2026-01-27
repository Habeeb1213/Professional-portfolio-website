import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    details: 'iyiadehabeeblah@gmail.com', // Add your email here
    link: 'mailto:iyiadehabeeblah@gmail.com'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    details: '+234 706 745 9781', // Add your phone here
    link: 'tel:+2347067459781'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    details: 'Lagos, Nigeria',
    link: '#'
  }
];

const socialLinks = [
  { 
    icon: <Github className="w-6 h-6" />, 
    label: 'GitHub', 
    url: 'https://github.com/Habeeb1213' 
  },
  { 
    icon: <Linkedin className="w-6 h-6" />, 
    label: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/habeeblah-iyiade-438b9b371' 
  },
  { 
    icon: <Twitter className="w-6 h-6" />, 
    label: 'X (Twitter)', 
    url: 'https://x.com/AlphaTech93661' 
  },
];

  return (
    <div className="max-w-6xl">
      <div className="mb-16">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          Have a project in mind? Let's discuss how we can work together to create something exceptional.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Contact Information</h2>
          
          <div className="space-y-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-start group"
              >
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 group-hover:bg-black dark:group-hover:bg-white transition-colors mr-6">
                  <div className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors">
                    {info.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {info.details}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-5 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-lg hover:opacity-90 transition-all duration-300"
            >
              <Send className="w-5 h-5 mr-3" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;