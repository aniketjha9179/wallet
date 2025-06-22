import React, { useState } from 'react';
import { Copy, X, Lightbulb } from 'lucide-react';
import MoneyImage from '/money image.png'

const ReferralPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topInviterData = [
    {
      id: 1,
      rank: 2,
      name: "Priya",
      userId: "@priya123",
      earnings: "₹1,71,319",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      rank: 1,
      name: "Krishna",
      userId: "@iamkrishna8u68",
      earnings: "₹6,65,784",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      rank: 3,
      name: "Rahul",
      userId: "@yu007",
      earnings: "₹1,59,255",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText('XW0QZP');
    alert('Referral code copied!');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 p-4 pb-20">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl sm:text-2xl">⚡</span>
          <h1 className="text-base sm:text-lg font-bold text-orange-800">INSTANT BONUS</h1>
          <span className="text-xl sm:text-2xl">⚡</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">
          10 Invite = ₹500
        </h2>
      </div>

      {/* Money Image Above Top Inviters */}
    <div className="flex justify-center ">
        <div className="">
          <img 
            src={MoneyImage}
            alt="Money and earnings" 
            className="w-[280px] h-[200px] sm:w-[400px] sm:h-[300px]  -mb-28 z-0 "
          />
        </div>
      </div>

      {/* Top Inviters Card */}
      <div className="relative bg-white rounded-2xl shadow-lg p-6 mb-6 z-50">
        <h3 className="text-center text-gray-800 font-semibold mb-6">TOP INVITERS</h3>
        
        <div className="flex justify-center items-end gap-4 px-2">
          {/* Second Place */}
          <div className="flex flex-col items-center flex-1 max-w-[100px]">
            <div className="relative mb-2">
              <img 
                src={topInviterData[0].avatar} 
                alt={topInviterData[0].name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-yellow-400"
              />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                2
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800 text-sm">{topInviterData[0].earnings}</div>
              <div className="text-xs text-gray-500 truncate w-full">{topInviterData[0].userId}</div>
            </div>
          </div>

          {/* First Place - Larger */}
          <div className="flex flex-col items-center flex-1 max-w-[120px]">
            <div className="relative mb-2">
              <img 
                src={topInviterData[1].avatar} 
                alt={topInviterData[1].name}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-4 border-yellow-500"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800 text-base">{topInviterData[1].earnings}</div>
              <div className="text-xs text-gray-500 truncate w-full">{topInviterData[1].userId}</div>
            </div>
          </div>

          {/* Third Place */}
          <div className="flex flex-col items-center flex-1 max-w-[100px]">
            <div className="relative mb-2">
              <img 
                src={topInviterData[2].avatar} 
                alt={topInviterData[2].name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-yellow-400"
              />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                3
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800 text-sm">{topInviterData[2].earnings}</div>
              <div className="text-xs text-gray-500 truncate w-full">{topInviterData[2].userId}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Earnings */}
      <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl">💰</div>
          <div>
            <div className="text-gray-600 text-sm">Current earnings:</div>
            <div className="text-xl font-bold text-gray-800">₹0</div>
          </div>
        </div>
      </div>

      {/* Referral Code */}
      <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-500 text-sm mb-1">REFERRAL CODE</div>
            <div className="text-2xl font-bold text-gray-800">XW0QZP</div>
          </div>
          <button 
            onClick={copyReferralCode}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Copy size={16} />
            Copy
          </button>
        </div>
      </div>

      {/* Refer & Earn Button */}
      <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white py-4 rounded-2xl font-bold text-lg mb-4 shadow-lg">
        Refer & Earn ₹50 Instantly
      </button>

      {/* How it works - Clickable */}
      <div className="text-center cursor-pointer" onClick={openModal}>
        <div className="text-gray-600 font-semibold">How it works?</div>
        <div className="flex justify-center mt-2">
          <div className="w-12 h-1 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white w-full max-w-md rounded-t-3xl p-6 animate-slide-up">
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex justify-end mb-4">
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <Lightbulb className="w-10 h-10 text-yellow-500 fill-yellow-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-800">How it works?</h3>
              </div>
            </div>

            {/* Step 1 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mb-2">
                  
                </div>
                <div className="w-0.5 h-16 bg-gray-200"></div>
              </div>
              <div className="flex-1">
                <div className="text-orange-600 font-semibold text-sm mb-2">STEP 1</div>
                <h4 className="font-bold text-gray-800 mb-1">Invite your friend</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Your friend must sign up using your unique link or referral code
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  SIGN UP
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mb-2">
                  
                </div>
                <div className="w-0.5 h-16 bg-gray-200"></div>
              </div>
              <div className="flex-1">
                <div className="text-orange-600 font-semibold text-sm mb-2">STEP 2</div>
                <h4 className="font-bold text-gray-800 mb-1">Get ₹10 on your friend's first trade on Reapzo</h4>
                <p className="text-sm text-gray-600 mb-3">
                  You can also remind your friend by tapping on bell icon
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                  Yes 5.5
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  
                </div>
              </div>
              <div className="flex-1">
                <div className="text-orange-600 font-semibold text-sm mb-2">STEP 3</div>
                <h4 className="font-bold text-gray-800 mb-1">Get ₹40 when your friend deposits</h4>
                <p className="text-sm text-gray-600">
                  The first deposit should be greater than ₹100 to be eligible for this bonus
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ₹
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    ₹
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center text-gray-500">
            <div className="text-2xl mb-1">🏠</div>
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-500">
            <div className="text-2xl mb-1">🔍</div>
            <span className="text-xs">Explore</span>
          </div>
          <div className="flex flex-col items-center text-gray-500">
            <div className="text-2xl mb-1">📊</div>
            <span className="text-xs">Forecast</span>
          </div>
          <div className="flex flex-col items-center text-gray-500">
            <div className="text-2xl mb-1">💼</div>
            <span className="text-xs">Portfolio</span>
          </div>
          <div className="flex flex-col items-center text-orange-500">
            <div className="text-2xl mb-1">🎁</div>
            <span className="text-xs font-semibold">Rewards</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ReferralPage;