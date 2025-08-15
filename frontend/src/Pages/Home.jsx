import React, { useState } from 'react';
import { 
  FaSearch, 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaRegBookmark, 
  FaBookmark,
  FaArrowRight,
  FaStar,
  FaUserTie,
  FaLaptopCode,
  FaChartLine,
  FaShieldAlt
} from 'react-icons/fa';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [savedJobs, setSavedJobs] = useState([]);

  // Featured jobs data
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      salary: '$120,000 - $150,000',
      type: 'Full-time',
      posted: '2 days ago',
      isSaved: false,
      logo: 'https://via.placeholder.com/50'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Creative Solutions',
      location: 'New York, NY',
      salary: '$90,000 - $110,000',
      type: 'Full-time',
      posted: '1 week ago',
      isSaved: true,
      logo: 'https://via.placeholder.com/50'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'CloudSystems',
      location: 'Austin, TX',
      salary: '$130,000 - $160,000',
      type: 'Contract',
      posted: '3 days ago',
      isSaved: false,
      logo: 'https://via.placeholder.com/50'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'AnalyticsPro',
      location: 'San Francisco, CA',
      salary: '$140,000 - $180,000',
      type: 'Full-time',
      posted: 'Just now',
      isSaved: false,
      logo: 'https://via.placeholder.com/50'
    }
  ];

  // Job categories
  const categories = [
    { icon: <FaUserTie className="text-blue-500 text-2xl" />, name: 'Business', jobs: 1243 },
    { icon: <FaLaptopCode className="text-blue-500 text-2xl" />, name: 'Technology', jobs: 3562 },
    { icon: <FaChartLine className="text-blue-500 text-2xl" />, name: 'Marketing', jobs: 892 },
    { icon: <FaShieldAlt className="text-blue-500 text-2xl" />, name: 'Security', jobs: 567 }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "I found my dream job within a week of using this platform! The matching algorithm is incredible.",
      name: "Sarah Johnson",
      role: "Product Designer at TechCorp",
      rating: 5
    },
    {
      quote: "The application process was so smooth and I got multiple interview calls within days.",
      name: "Michael Chen",
      role: "Senior Developer at CloudSystems",
      rating: 4
    },
    {
      quote: "Best job portal I've used. The saved jobs feature helped me keep track of opportunities.",
      name: "David Wilson",
      role: "Marketing Manager at CreativeCo",
      rating: 5
    }
  ];

  // Toggle saved status
  const toggleSaved = (id) => {
    const updatedJobs = featuredJobs.map(job => 
      job.id === id ? { ...job, isSaved: !job.isSaved } : job
    );
    setSavedJobs(updatedJobs.filter(job => job.isSaved));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job Today</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Thousands of jobs in technology, business, and more. Start your career journey with us.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">50,000+</h3>
            <p className="text-gray-600">Jobs Available</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">8,000+</h3>
            <p className="text-gray-600">Companies Hiring</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">1M+</h3>
            <p className="text-gray-600">Candidates Hired</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <button className="flex items-center text-blue-600 hover:text-blue-800">
              View all jobs <FaArrowRight className="ml-2" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredJobs.map(job => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <div className="flex items-start space-x-4">
                    <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain" />
                    <div>
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <p className="text-gray-600">{job.company} • {job.location}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleSaved(job.id)}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    {job.isSaved ? <FaBookmark className="text-blue-600" /> : <FaRegBookmark />}
                  </button>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600">
                  <div className="flex items-center">
                    <FaBriefcase className="mr-2 text-blue-500" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    {/* <FaMoneyBillWave className="mr-2 text-blue-500" /> */}
                    <span>{job.salary}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Posted {job.posted}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Categories</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Browse jobs by category to find the perfect match for your skills and interests
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-gray-500">{category.jobs} jobs available</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Hear from people who found their dream jobs through our platform
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take the next step in your career?</h2>
          <p className="text-xl mb-8">
            Create a free account and get matched with your perfect job today.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors">
              Sign Up Now
            </button>
            <button className="border border-white text-white hover:bg-blue-700 py-3 px-8 rounded-md font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;