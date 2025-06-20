import Logo from "/reapzo.png";
import React, { useState } from "react";
import { ArrowLeft, Wallet, Trophy, Gift, Info, ChevronDown, ChevronRight, CreditCard, Star, Zap, Eye, EyeOff } from "lucide-react";

// Modern Slider Component
const ModernSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Cricket Championship",
      subtitle: "Win Big! Join Now",
      gradient: "from-blue-600 via-blue-700 to-purple-800",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      prize: "₹50,000",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
    },
    {
      id: 2,
      title: "Football Fever",
      subtitle: "Score Goals, Win Rewards",
      gradient: "from-green-600 via-green-700 to-emerald-800",
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      prize: "₹30,000",
      bgPattern: "radial-gradient(circle at 30% 40%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
    },
    {
      id: 3,
      title: "Basketball Bonanza",
      subtitle: "Slam Dunk Your Way to Victory",
      gradient: "from-orange-600 via-red-600 to-pink-700",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      prize: "₹25,000",
      bgPattern: "radial-gradient(circle at 60% 30%, rgba(249, 115, 22, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl mx-4 mt-6">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <div 
              className={`bg-gradient-to-br ${slide.gradient} p-6 relative overflow-hidden min-h-[140px] flex items-center justify-between`}
              style={{ background: slide.bgPattern }}
            >
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {slide.icon}
                  <span className="text-black/90 text-sm font-medium">Tournament</span>
                </div>
                <h3 className="text-black text-lg font-bold mb-1">{slide.title}</h3>
                <p className="text-black/80 text-sm mb-3">{slide.subtitle}</p>
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-black/80 text-sm font-semibold">Prize Pool: {slide.prize}</span>
                  </div>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                    Join Now
                  </button>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 translate-x-10"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const WalletPage = () => {
  const [showDepositBreakdown, setShowDepositBreakdown] = useState(false);
  const [showPointsBreakdown, setShowPointsBreakdown] = useState(false);
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex justify-center items-center py-1 px-2">
          <div className="flex items-center space-x-2">
            
            <div className="bg-white py-3 flex justify-center items-center border-b border-gray-200">
         <img src={Logo} className="h-6 w-16 object-contain" />
       </div>
          </div>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center px-4 py-4">
        <ArrowLeft className="w-5 h-5 mr-3" />
        <h1 className="text-lg font-semibold">My Balance</h1>
      </div>

      {/* Total Balance Card */}
      <div className="  ">
        <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-100">
          <div className="ml-8 flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {isBalanceHidden ? '₹****' : '₹6.50'}
              </p>
              <p className="text-gray-500 text-sm">Total Balance</p>
            </div>
            <div className="mr-4">
              <button 
                onClick={toggleBalanceVisibility}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={isBalanceHidden ? 'Show balance' : 'Hide balance'}
              >
                {isBalanceHidden ? (
                  <Eye className="w-5 h-5 text-gray-500" />
                ) : (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
          
          {/* Quick Actions */}
        
        </div>
      </div>

      {/* Deposit Section */}
      <div className="mx-2 mt-5">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-700 text-sm font-medium">Deposit</span>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {isBalanceHidden ? '₹****' : '₹5.93'}
                  </p>
                </div>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                ADD CASH
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => setShowDepositBreakdown(!showDepositBreakdown)}
            className="w-full px-4 py-3 flex justify-between items-center text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm">View breakdown</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showDepositBreakdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showDepositBreakdown && (
            <div className="px-4 pb-4 space-y-2 border-t border-gray-100">
              <div className="flex justify-between text-sm py-2">
                <span className="text-gray-600">Added via UPI</span>
                <span className="font-medium">
                  {isBalanceHidden ? '₹****' : '₹5.93'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Winnings Section */}
      <div className="mx-4 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-700 text-sm font-medium">Winnings</span>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-lg font-bold text-gray-900">
                  {isBalanceHidden ? '₹****' : '₹0.50'}
                </p>
              </div>
            </div>
            <button className="border-2 border-red-500 text-red-500 px-4 py-2 rounded-xl font-semibold hover:bg-red-50 transition-colors">
              Verify
            </button>
          </div>
          <div className="mt-3 p-3 bg-red-50 rounded-xl">
            <p className="text-red-600 text-sm font-medium">
              Complete KYC verification to withdraw your winnings
            </p>
          </div>
        </div>
      </div>

      {/* Banner Slider */}
      <ModernSlider />

      {/* Points Section */}
      <div className="mx-4 mt-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-700 text-sm font-medium">Reward Points</span>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-lg font-bold text-gray-900">
                  {isBalanceHidden ? '₹****' : '₹0.07'}
                </p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setShowPointsBreakdown(!showPointsBreakdown)}
            className="w-full px-4 py-3 flex justify-between items-center text-gray-600 hover:bg-gray-50 transition-colors border-t border-gray-100"
          >
            <span className="text-sm">View breakdown</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showPointsBreakdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showPointsBreakdown && (
            <div className="px-4 pb-4 space-y-2">
              <div className="flex justify-between text-sm py-2">
                <span className="text-gray-600">Daily login bonus</span>
                <span className="font-medium">
                  {isBalanceHidden ? '₹****' : '₹0.05'}
                </span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span className="text-gray-600">Referral bonus</span>
                <span className="font-medium">
                  {isBalanceHidden ? '₹****' : '₹0.02'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mx-4 mt-6 space-y-3">
        <button className="w-full bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center hover:shadow-md transition-shadow border border-gray-100">
          <div className="text-left">
            <p className="text-gray-900 font-semibold">Transaction History</p>
            <p className="text-gray-500 text-sm">View all balance debits & credits</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center hover:shadow-md transition-shadow border border-gray-100">
          <div className="text-left">
            <p className="text-gray-900 font-semibold">KYC Verification</p>
            <p className="text-red-500 text-sm font-medium">⚠️ Complete verification to withdraw</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Bottom spacing */}
      <div className="h-8"></div>
    </div>
  );
};

export default WalletPage;