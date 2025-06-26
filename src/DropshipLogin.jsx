// import { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';

// export default function DropshipSignIn() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 sm:p-10">
//       <div className="w-full max-w-[420px] mx-auto">
//         {/* Logo - Outside the border */}
//         <div className="flex justify-center mb-6 sm:mb-10 mt-3">
//           <div className="w-8 h-8 rounded-lg flex items-center justify-center">
//             <img src='https://app.dropship.io/static/media/logo.361df1989e707f4fea980743a1f74c18.svg' className='w-7 h-7' />
//           </div>
//         </div>

//         {/* Main container with border and shadow */}
//         <div className="bg-white rounded-2xl p-4 sm:p-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
//         style={{
   
//   }}
//         >
//           {/* Title */}
//           <h1 className="text-sm font-semibold text-gray-900 text-center mb-2">
//             Sign in to Dropship
//           </h1>
//           <p className="text-gray-600 text-xs text-center mb-3">
//             Welcome back! Sign in to your account below.
//           </p>

//           {/* Social Login Buttons */}
//           <div className="flex gap-2 mb-4">
//             <button className="flex-1 flex items-center justify-center gap-2 px-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//               <img src='https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw' className='w-4 h-4' />
//               <span className="text-gray-700 font-medium text-xs">Google</span>
//             </button>
            
//             <button className="flex-1 flex items-center justify-center gap-2 px-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//               <img src='https://app.dropship.io/static/media/apple.12802961a9493db60b7cd9dcc6e47572.svg' className=' w-4 h-4' />
//               <span className="text-gray-700 font-medium text-xs">Apple</span>
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="flex items-center mb-3">
//             <div className="flex-1 border-t border-gray-300"></div>
//             <span className="px-4 text-[13px] text-gray-700 font-medium">or sign in with email</span>
//             <div className="flex-1 border-t border-gray-300"></div>
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-1 border border-gray-300 rounded-lg placeholder:text-xs placeholder:text-gray-400  hover:ring-1 hover:ring-blue-500 focus:ring-1 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-6 relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-1 pr-12 placeholder:text-xs placeholder:text-gray-400 border border-gray-300 rounded-lg hover:ring-1 hover:ring-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           {/* Sign In Button */}
//           <button className="w-full bg-blue-600 text-white py-[7px] rounded-xl font-semibold hover:bg-blue-700 transition text-sm shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
//             Sign In
//           </button>
//         </div>

//         {/* Forgot Password - Outside the border */}
//         <div className="text-center mt-2">
//           <a href="#" className="text-blue-700 text-xs hover:text-blue-700 font-semibold ">
//             Forgot your password?
//           </a>
//         </div>

//         {/* Create Account */}
       
//         <div className="text-center text-sm text-gray-600 ">
//           New to Dropship?{' '}
//           <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
//             Create account
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';

// export default function DropshipSignIn() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div className="min-h-screen w-full bg-white">
//       <div className="min-h-screen flex flex-col justify-center items-center px-3 sm:px-5 lg:px-6">
//         <div className="mb-6">
//           <img 
//             alt="Logo" 
//             className="h-7" 
//             src="https://app.dropship.io/static/media/logo.361df1989e707f4fea980743a1f74c18.svg"
//           />
//         </div>
        
//         <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
//           <h2 className="text-1xl font-semibold text-center text-black mb-2">
//             Sign in to Dropship
//           </h2>
//           <p className="text-sm text-black text-center mb-6">
//             Welcome back! Sign in to your account below.
//           </p>
          
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <button className="border border-gray-200 bg-white rounded-xl py-2.5 px-4 flex items-center justify-center hover:bg-gray-100 text-sm shadow-sm text-black">
//               <img 
//                 alt="Google" 
//                 className="h-5 w-5 mr-2" 
//                 src="https://brandlogos.net/wp-content/uploads/2025/05/google_icon_2025-logo_brandlogos.net_qm5ka-512x523.png"
//               />
//               Google
//             </button>
//             <button className="border border-gray-200 bg-white rounded-xl py-2.5 px-4 flex items-center justify-center hover:bg-gray-100 text-sm shadow-sm text-black">
//               <img 
//                 alt="Apple" 
//                 className="h-4 w-4 mr-2" 
//                 src="https://e7.pngegg.com/pngimages/912/682/png-clipart-apple-logo-brand-apple-company-trademark-thumbnail.png"
//               />
//               Apple
//             </button>
//           </div>
          
//           <div className="relative mb-4">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="bg-white px-2 text-black">or sign in with email</span>
//             </div>
//           </div>
          
//           <form className="space-y-4 text-left">
//             <input 
//               placeholder="Email Address" 
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
            
//             <div className="relative">
//               <input 
//                 placeholder="Password" 
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <span 
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//               </span>
//             </div>
            
//             <button 
//               type="submit" 
//               className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition text-sm shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
//             >
//               Sign In
//             </button>
//           </form>
//         </div>
        
//         <div className="text-sm text-center mt-6 text-black">
//           <a href="#" className="text-blue-600 hover:underline block mb-2">
//             Forgot your password?
//           </a>
//         </div>
        
//         <div className="text-sm text-center text-black">
//           <p>
//             New to Dropship?{' '}
//             <a href="#" className="text-blue-600 hover:underline">
//               Create account
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function DropshipSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="min-h-screen flex flex-col justify-center items-center  ">
        <div className=" ">
          <img 
            alt="Logo" 
            className="h-6 mb-7 " 
            src="https://app.dropship.io/static/media/logo.361df1989e707f4fea980743a1f74c18.svg"
          />
        </div>
        
        <div className="w-full bg-white p-6  rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.05)]" style={{maxWidth: '450px'}}>
          <h2 className="text-sm font-semibold text-center text-black mb-2">
            Sign in to Dropship
          </h2>
          <p className="text-xs text-black text-center mb-6">
            Welcome back! Sign in to your account below.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button className="border border-gray-200 bg-white rounded-xl py-2 px-2 flex items-center justify-center hover:bg-gray-100 text-sm  text-black">
              <img 
                alt="Google" 
                className="h-6 w-6 mr-2" 
                src="https://brandlogos.net/wp-content/uploads/2025/05/google_icon_2025-logo_brandlogos.net_qm5ka-512x523.png"
              />
              Google
            </button>
            <button className="border border-gray-200 bg-white rounded-xl py-2 px-2 flex items-center justify-center hover:bg-gray-100 text-sm  text-black">
              <img 
                alt="Apple" 
                className="h-6 w-6 mr-2" 
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  placeholder:text-gray-400 placeholder:text-xs" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <div className="relative">
              <input 
                placeholder="Password" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 placeholder:text-xs"
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
              className="w-full bg-[#2563eb] text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition text-xs shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
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