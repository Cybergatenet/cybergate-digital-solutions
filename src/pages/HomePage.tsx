import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Laptop, Shield, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Professional Training',
      description: 'Industry-standard courses taught by experienced instructors',
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Quality Products',
      description: 'Genuine laptops and accessories with warranty',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Certification',
      description: 'Recognized certificates upon course completion',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 technical support for students and customers',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-royal-blue-600 to-royal-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Gateway to <span className="text-yellow-300">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Premier computer training center and laptop accessories outlet in Nigeria. 
              Empowering individuals and businesses with cutting-edge ICT skills and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/programs" className="btn-primary bg-white text-royal-blue-600 hover:bg-gray-100">
                View Programs <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link to="/register" className="btn-secondary border-white text-white hover:bg-white/10">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Cybergate?</h2>
            <p className="section-subtitle">
              We provide comprehensive ICT solutions that empower your digital journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 bg-royal-blue-100 dark:bg-royal-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-royal-blue-600 dark:text-royal-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful graduates and satisfied customers who have transformed their careers and businesses with our training and products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs" className="btn-primary">
              Explore Programs
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;