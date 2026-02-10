import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Loader2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // YOUR ACTUAL FORMSPREE ENDPOINT - Replace with this:
      const response = await fetch('https://formspree.io/f/xaqdnrkz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // This ensures replies go to sender
          _subject: `Portfolio Contact: ${formData.subject}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'iyiadehabeeblah@gmail.com',
      link: 'mailto:iyiadehabeeblah@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+234 813 678 9623',
      link: 'tel:+2348136789623'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: 'Lagos, Nigeria',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', url: 'https://github.com/Habeeb1213' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/habeeblah-iyiade-438b9b371' },
    { icon: <Twitter className="w-6 h-6" />, label: 'X (Twitter)', url: 'https://x.com/AlphaTech93661' },
  ];

  return (
    <div className="max-w-6xl">
      <div className="mb-16">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          Have a project in mind? Send me a message and I'll get back to you within 24 hours.
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
          
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg text-green-800 dark:text-green-300 animate-fade-in">
              ✓ Message sent successfully! I'll get back to you within 24 hours.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg text-red-800 dark:text-red-300 animate-fade-in">
              ✗ Something went wrong. Please try again or email me directly at iyiadehabeeblah@gmail.com
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors disabled:opacity-50"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors disabled:opacity-50"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors disabled:opacity-50"
                placeholder="Project Inquiry"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-5 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none disabled:opacity-50"
                placeholder="Tell me about your project, timeline, and budget..."
                disabled={isSubmitting}
              ></textarea>
            </div>
            
<button
  type="submit"
  disabled={isSubmitting}
  className="w-full md:w-auto flex items-center justify-center px-10 py-5 bg-gray-900 dark:bg-white text-gray-900 dark:text-gray-900 font-bold text-lg rounded-lg border-2 border-black dark:border-white"
>
  {isSubmitting ? (
    <>
      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
      Sending Message...
    </>
  ) : (
    <>
      <Send className="w-5 h-5 mr-3" />
      Send Message
    </>
  )}
</button>
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <p>* Required fields</p>
              <p>I typically respond within 24 hours</p>
              <p>Messages are sent directly to my email via Formspree</p>
            </div>
          </form>
        </div>
      </div>

      {/* Formspree Attribution (Optional but nice) */}
      <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Form powered by{' '}
          <a 
            href="https://formspree.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline"
          >
            Formspree
          </a>
          {' '}• Secure and reliable form handling
        </p>
      </div>
    </div>
  );
};

export default Contact;