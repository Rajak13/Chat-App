import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Red section with "What we plan on?" */}
      <div className="flex-1 bg-[#8B1538] flex flex-col justify-center items-center px-8 md:px-12 py-12 md:py-0">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center">What we plan on?</h1>
        <div className="space-y-4 md:space-y-6 w-full max-w-md">
          <div className="bg-[#fcf5eb] rounded-lg h-12 md:h-16 flex items-center px-4">
            <span className="text-[#8B1538] font-medium">🎯 Enhanced User Experience</span>
          </div>
          <div className="bg-[#fcf5eb] rounded-lg h-12 md:h-16 flex items-center px-4">
            <span className="text-[#8B1538] font-medium">🌟 Advanced Chat Features</span>
          </div>
          <div className="bg-[#fcf5eb] rounded-lg h-12 md:h-16 flex items-center px-4">
            <span className="text-[#8B1538] font-medium">🔧 Regular Updates & Support</span>
          </div>
          <div className="bg-[#fcf5eb] rounded-lg h-12 md:h-16 flex items-center px-4">
            <span className="text-[#8B1538] font-medium">🚀 Performance Improvements</span>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 bg-[#fcf5eb] flex flex-col justify-center items-center px-8 md:px-12 py-12 md:py-0">
        <div className="w-full max-w-md">
          <h2 className="text-[#8B1538] text-3xl md:text-5xl font-bold mb-6 md:mb-8">Login</h2>
          
          <p className="text-[#8B1538] mb-6 md:mb-8 text-sm md:text-base">
            If you have an already existing account, enter the details below:
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-16 pr-4 py-4 border-2 border-[#8B1538] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                placeholder="Password"
                required
              />
            </div>

            <div className="text-center">
              <p className="text-[#8B1538] mb-6">
                If you want to create a new account or don't have an account?{' '}
                <Link to="/register" className="underline font-medium">
                  Sign Up
                </Link>
              </p>

              <button
                type="submit"
                className="bg-[#DC143C] text-white px-12 py-3 rounded-full text-lg font-medium hover:bg-[#B91C3C] transition-colors"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;