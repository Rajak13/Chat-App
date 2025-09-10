import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Register form */}
      <div className="flex-1 bg-[#fcf5eb] flex flex-col justify-center items-center px-8 md:px-12 py-12 md:py-0">
        <div className="w-full max-w-md">
          <h2 className="text-[#8B1538] text-3xl md:text-5xl font-bold mb-6 md:mb-8">Register</h2>
          
          <p className="text-[#8B1538] mb-6 md:mb-8 text-sm md:text-base">
            Enter your details below to create an account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-[#8B1538] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-16 pr-4 py-4 border-2 border-[#8B1538] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-[#8B1538] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-16 pr-4 py-4 border-2 border-[#8B1538] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                placeholder="Email"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-[#8B1538] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-16 pr-4 py-4 border-2 border-[#8B1538] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                placeholder="Password"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-[#8B1538] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-16 pr-4 py-4 border-2 border-[#8B1538] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="text-center">
              <p className="text-[#8B1538] mb-6">
                Already have an account?{' '}
                <Link to="/login" className="underline font-medium">
                  Login
                </Link>
              </p>

              <button
                type="submit"
                className="bg-[#DC143C] text-white px-12 py-3 rounded-full text-lg font-medium hover:bg-[#B91C3C] transition-colors"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - What we Offer section */}
      <div className="flex-1 bg-[#8B1538] flex flex-col justify-center items-center px-8 md:px-12 py-12 md:py-0">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center">What we Offer?</h1>
        <div className="space-y-4 md:space-y-6 w-full max-w-md">
          <div className="bg-[#fcf5eb] rounded-lg h-12 md:h-16 flex items-center px-4">
            <span className="text-[#8B1538] font-medium">🚀 Fast & Secure Messaging</span>
          </div>
          <div className="bg-[#fcf5eb] rounded-lg h-12 md:h-16 flex items-center px-4">
            <span className="text-[#8B1538] font-medium">💬 Real-time Chat Experience</span>
          </div>
          <div className="bg-[#fcf5eb] rounded-lg h-12 md:h-16 flex items-center px-4">
            <span className="text-[#8B1538] font-medium">🔒 End-to-End Encryption</span>
          </div>
          <div className="bg-[#fcf5eb] rounded-lg h-12 md:h-16 flex items-center px-4">
            <span className="text-[#8B1538] font-medium">📱 Cross-Platform Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;