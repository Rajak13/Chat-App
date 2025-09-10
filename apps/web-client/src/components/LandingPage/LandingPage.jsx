import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Content */}
      <div className="flex-1 bg-[#fcf5eb] flex flex-col justify-center px-8 md:px-16 py-12 md:py-0">
        <h1 className="text-[#8B1538] text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Looking for a<br />
          new chat<br />
          experience?
        </h1>
        
        <p className="text-[#8B1538] text-lg md:text-xl mb-4">
          Here's a unique way to chat
        </p>
        
        <p className="text-[#8B1538] text-lg md:text-xl italic mb-12">
          See it for yourself
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <Link 
            to="/login"
            className="px-8 py-3 border-2 border-[#8B1538] text-[#8B1538] text-lg font-medium rounded-md hover:bg-[#8B1538] hover:text-white transition-colors text-center"
          >
            Login
          </Link>
          <Link 
            to="/register"
            className="px-8 py-3 border-2 border-[#8B1538] text-[#8B1538] text-lg font-medium rounded-md hover:bg-[#8B1538] hover:text-white transition-colors text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 bg-[#8B1538] flex justify-center items-center py-12 md:py-0">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Person using smartphone for chat"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
export default LandingPage;