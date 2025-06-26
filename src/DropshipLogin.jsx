
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function DropshipSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full bg-white p-4">
      <div className="min-h-screen flex flex-col justify-center items-center  ">
        <div className=" ">
          <img 
            alt="Logo" 
            className="h-8 mb-7 " 
            src="https://app.dropship.io/static/media/logo.361df1989e707f4fea980743a1f74c18.svg"
          />
        </div>
        
        <div className="w-full bg-white p-6  rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.05)]" style={{maxWidth: '370px'}}>
          <h2 className="text-sm font-semibold text-center text-black mb-2">
            Sign in to Dropship
          </h2>
          <p className="text-xs text-black text-center mb-6">
            Welcome back! Sign in to your account below.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button className="border border-gray-200 bg-white rounded-xl py-2 px-1 flex items-center justify-center hover:bg-gray-100 text-sm  text-black">
              <img 
                alt="Google" 
                className="h-5 w-5 mr-2" 
                src="https://brandlogos.net/wp-content/uploads/2025/05/google_icon_2025-logo_brandlogos.net_qm5ka-512x523.png"
              />
              Google
            </button>
            <button className="border border-gray-200 bg-white rounded-xl py-2 px-2 flex items-center justify-center hover:bg-gray-100 text-sm  text-black">
              <img 
                alt="Apple" 
                className="h-5 w-5 mr-2" 
                src="https://e7.pngegg.com/pngimages/912/682/png-clipart-apple-logo-brand-apple-company-trademark-thumbnail.png"
              />
              Apple
            </button>
          </div>
          
          <div className="relative mb-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-black">or sign in with email</span>
            </div>
          </div>
          
          <div className="space-y-3 text-left">
            <input 
              placeholder="Email Address" 
              className="w-full border h-[37px] border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  placeholder:text-gray-400 placeholder:text-xs" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <div className="relative">
              <input 
                placeholder="Password" 
                className="w-full border h-[37px] border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 placeholder:text-xs"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span 
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </span>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#1d1d1e] border border-[#fff3] bg-gradient-to-b from-[#ffffff26] to-[#fff0]  text-white py-[8px] rounded-md   transition text-[12px] font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
            
            >
              Sign In
            </button>
          </div>
        </div>
        
        <div className="text-sm text-center mt-10 text-black">
          <a href="#" className="text-blue-600 hover:underline block mb-2">
            Forgot your password?
          </a>
        </div>
        
        <div className="text-sm text-center text-black">
          <p>
            New to Dropship?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}