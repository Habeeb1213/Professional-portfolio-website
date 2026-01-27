import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Exceptional work! Delivered ahead of schedule with outstanding quality. Highly recommended for complex projects.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Product Director, InnovateCorp',
      content: 'Transformed our digital presence completely. The attention to detail and technical expertise is remarkable.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emma Williams',
      role: 'CTO, CloudScale',
      content: 'Professional, reliable, and highly skilled. Exceeded all expectations on our platform migration project.',
      rating: 5,
      avatar: 'EW'
    },
    {
      name: 'David Rodriguez',
      role: 'Founder, StartupLabs',
      content: 'The best developer we have worked with. Technical excellence combined with great communication skills.',
      rating: 5,
      avatar: 'DR'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Design, CreativeMinds',
      content: 'Perfectly executed our vision while suggesting improvements we never considered. Brilliant work!',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'Robert Kim',
      role: 'Engineering Manager, ScaleFast',
      content: 'Exceptional problem-solving skills and deep technical knowledge. A true asset to any development team.',
      rating: 5,
      avatar: 'RK'
    }
  ];

  return (
    <div className="max-w-6xl">
      <div className="mb-16">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-6">Testimonials</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          What clients and colleagues say about working with me. Their feedback drives my commitment to excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="mb-6">
              <Quote className="w-10 h-10 text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors" />
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed italic">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-700'}`}
                />
              ))}
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-white font-bold text-lg mr-4">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;