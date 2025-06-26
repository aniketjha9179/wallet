import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function DropshipSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-10">
      <div className="w-full max-w-[420px] mx-auto">
        {/* Logo - Outside the border */}
        <div className="flex justify-center mb-6 sm:mb-10 mt-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src='https://app.dropship.io/static/media/logo.361df1989e707f4fea980743a1f74c18.svg' className='w-7 h-7' />
          </div>
        </div>

        {/* Main container with border and shadow */}
        <div className="bg-white rounded-2xl p-4 sm:p-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
        style={{
   
  }}
        >
          {/* Title */}
          <h1 className="text-sm font-semibold text-gray-900 text-center mb-2">
            Sign in to Dropship
          </h1>
          <p className="text-gray-600 text-xs text-center mb-3">
            Welcome back! Sign in to your account below.
          </p>

          {/* Social Login Buttons */}
          <div className="flex gap-2 mb-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <img src='https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw' className='w-4 h-4' />
              <span className="text-gray-700 font-medium text-xs">Google</span>
            </button>
            
            <button className="flex-1 flex items-center justify-center gap-2 px-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <img src='https://app.dropship.io/static/media/apple.12802961a9493db60b7cd9dcc6e47572.svg' className=' w-4 h-4' />
              <span className="text-gray-700 font-medium text-xs">Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-3">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-[13px] text-gray-700 font-medium">or sign in with email</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-1 border border-gray-300 rounded-lg placeholder:text-xs placeholder:text-gray-400  hover:ring-1 hover:ring-blue-500 focus:ring-1 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-1 pr-12 placeholder:text-xs placeholder:text-gray-400 border border-gray-300 rounded-lg hover:ring-1 hover:ring-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-blue-600 text-white py-[6px] rounded-xl font-semibold hover:bg-blue-700 transition text-sm shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
            Sign In
          </button>
        </div>

        {/* Forgot Password - Outside the border */}
        <div className="text-center mt-2">
          <a href="#" className="text-blue-600 text-xs hover:text-blue-700 font-semibold ">
            Forgot your password?
          </a>
        </div>

        {/* Create Account */}
       
        <div className="text-center text-sm text-gray-600 ">
          New to Dropship?{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}