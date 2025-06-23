import React, { useEffect, useState } from "react";
import { Copy, X, Lightbulb } from "lucide-react";
import MoneyImage from "/money image.png";
import { useAnimation, motion } from "framer-motion";

const ReferralPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInvites, setCurrentInvites] = useState("2");
  const [currentAmount, setCurrentAmount] = useState("100");

  const topInviterData = [
    {
      id: 1,
      rank: 2,
      name: "Priya",
      userId: "@priya123",
      earnings: "₹1,71,319",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      rank: 1,
      name: "Krishna",
      userId: "@iamkrishna8u68",
      earnings: "₹6,65,784",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      rank: 3,
      name: "Rahul",
      userId: "@yu007",
      earnings: "₹1,59,255",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText("REA8KD2M");
    alert("Referral code copied!");
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

  const controls = useAnimation();
  const inviteNumberControls = useAnimation();
  const amountNumberControls = useAnimation();
  const moneyImageControls = useAnimation();
  const textShineControls = useAnimation();

  useEffect(() => {
    const startShining = async () => {
      while (true) {
        // Reset position
        await controls.set({ x: "-120%", skewX: -12 });
        // Wait 3 seconds
        await new Promise((resolve) => setTimeout(resolve, 4000));
        // Animate from left to right
        await controls.start({
          x: "200%",
          transition: { duration: 0.8, ease: "easeOut" },
        });
      }
    };

    startShining();
  }, [controls]);

  useEffect(() => {
    const startTextShining = async () => {
      while (true) {
        // Reset position
        await textShineControls.set({ x: "-150%", skewX: -12 });
        // Wait 3 seconds
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Animate from left to right
        await textShineControls.start({
          x: "250%",
          transition: { duration: 1.5, ease: "easeOut" },
        });
      }
    };

    // Start text shine effect after initial text animation
    setTimeout(() => {
      startTextShining();
    }, 2000);
  }, [textShineControls]);

  useEffect(() => {
    const animateNumbers = async () => {
      // Initial animation - slide up from bottom for both numbers
      await Promise.all([
        inviteNumberControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" }
        }),
        amountNumberControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" }
        })
      ]);
      
      // Wait for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Slide down both numbers
      await Promise.all([
        inviteNumberControls.start({
          y: 50,
          opacity: 0,
          transition: { duration: 0.4, ease: "easeIn" }
        }),
        amountNumberControls.start({
          y: 50,
          opacity: 0,
          transition: { duration: 0.4, ease: "easeIn" }
        })
      ]);
      
      // Change numbers
      setCurrentInvites("10");
      setCurrentAmount("500");
      
      // Slide up with new numbers
      await Promise.all([
        inviteNumberControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }),
        amountNumberControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        })
      ]);
    };

    animateNumbers();
  }, [inviteNumberControls, amountNumberControls]);

  // Money image animation effect on page load
  useEffect(() => {
    const animateMoneyImage = async () => {
      // Start from bottom left with initial position and rotation
      await moneyImageControls.set({
        x: -200,
        y: 300,
        rotate: -45,
        opacity: 0,
      });

      // Animate in a half-moon curve path to final position
      await moneyImageControls.start({
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 2.5,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth curve
          x: {
            type: "spring",
            stiffness: 60,
            damping: 15,
          },
          y: {
            type: "spring", 
            stiffness: 40,
            damping: 12,
          },
          rotate: {
            duration: 2.5,
            ease: "easeOut",
          },
          opacity: {
            duration: 0.3,
            delay: 0.2,
          }
        },
      });

      // Add a subtle bounce effect when it settles
      await moneyImageControls.start({
        scale: [1, 1.05, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        }
      });
    };

    // Start animation after a small delay
    setTimeout(() => {
      animateMoneyImage();
    }, 500);
  }, [moneyImageControls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 p-4 pb-20">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl sm:text-2xl">⚡</span>
          <h1
            className="text-base sm:text-lg font-bold text-yellow-400"
            style={{ textShadow: "1px 1px 1px rgba(255, 172, 28)" }}
          >
            INSTANT BONUS
          </h1>
          <span className="text-xl sm:text-2xl">⚡</span>
        </div>

        <h2
          className="text-4xl sm:text-6xl md:text-9xl font-bold text-yellow-400 mb-4 sm:mb-6 relative overflow-hidden"
          style={{ textShadow: "2px 2px 2px rgba(255, 172, 28)" }}
        >
          <div className="relative inline-block">
            {/* Framer Motion Shining effect for text */}
            <motion.div
              animate={textShineControls}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20"
              style={{ 
                skewX: -12,
                width: '30%',
                height: '100%'
              }}
            />
            <span className="relative z-10">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={inviteNumberControls}
                className="inline-block"
              >
                {currentInvites}
              </motion.span>
              {" "}Invite = ₹
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={amountNumberControls}
                className="inline-block"
              >
                {currentAmount}
              </motion.span>
            </span>
          </div>
        </h2>
      </div>

      {/* Money Image Above Top Inviters - Now with Animation */}
      <div className="flex justify-center ">
        <motion.div
          className=""
          animate={moneyImageControls}
          initial={{ x: -200, y: 300, rotate: -45, opacity: 0 }}
        >
          <img
            src={MoneyImage}
            alt="Money and earnings"
            className="w-[400px] h-[260px] sm:w-[600px] sm:h-[350px]  -mb-28 z-0 "
          />
        </motion.div>
      </div>

      {/* Top Inviters Card */}
      <div className="relative bg-white rounded-2xl shadow-lg p-6 mb-6 z-50">
        <h3 className="text-center text-gray-800 font-semibold mb-6">
          TOP INVITERS
        </h3>

        <div className="flex justify-center items-end gap-4 px-2">
          {/* Second Place */}
          <div className="flex flex-col items-center flex-1 max-w-[100px]">
            <div className="relative mb-2">
              <img
                src={topInviterData[0].avatar}
                alt={topInviterData[0].name}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-3 border-yellow-400"
              />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                2
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800 text-sm">
                {topInviterData[0].earnings}
              </div>
              <div className="text-xs text-gray-500 truncate w-full">
                {topInviterData[0].userId}
              </div>
            </div>
          </div>

          {/* First Place - Larger */}
          <div className="flex flex-col items-center flex-1 max-w-[120px]">
            <div className="relative mb-2">
              <img
                src={topInviterData[1].avatar}
                alt={topInviterData[1].name}
                className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-4 border-yellow-500"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800 text-base">
                {topInviterData[1].earnings}
              </div>
              <div className="text-xs text-gray-500 truncate w-full">
                {topInviterData[1].userId}
              </div>
            </div>
          </div>

          {/* Third Place */}
          <div className="flex flex-col items-center flex-1 max-w-[100px]">
            <div className="relative mb-2">
              <img
                src={topInviterData[2].avatar}
                alt={topInviterData[2].name}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-3 border-yellow-400"
              />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                3
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800 text-sm">
                {topInviterData[2].earnings}
              </div>
              <div className="text-xs text-gray-500 truncate w-full">
                {topInviterData[2].userId}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Earnings */}
      <div className="bg-orange-50 rounded-2xl shadow-lg p-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl">💰</div>
          <div>
            <div className="text-gray-600 text-sm">
              Current earnings:{" "}
              <span className=" text-black/90  font-bold">₹ 12,470</span>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Code */}
      <div className="bg-orange-50  rounded-xl shadow-lg p-3 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-700 text-[10px] mb-1">REFERRAL CODE</div>
            <div className="text-sm font-bold text-gray-800">REA8KD2M </div>
          </div>
          <button
            onClick={copyReferralCode}
            className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold px-3 py-1 border border-black/40 rounded-full flex items-center gap-2 transition-colors"
          >
            <Copy size={14} />
            Copy
          </button>
        </div>
      </div>

      {/* Refer & Earn Button */}
      <div className="  mb-10">
        <button className="w-full text-center  bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 p-3 rounded-lg font-medium shadow-[0_8px_15px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.25),0_6px_10px_rgba(0,0,0,0.15),inset_0_3px_6px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(255,255,255,0.4)] transform hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 active:shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.2)] transition-all duration-200 flex items-center justify-center gap-1 group relative overflow-hidden border-b-4 border-yellow-600 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none">
          {/* Framer Motion Shining effect */}
          <motion.div
            animate={controls}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            style={{ skewX: -12 }}
          />

          <span className="text-[18px] relative text-black/70 z-10 font-bold drop-shadow-sm">
            Refer & Earn ₹50 Instantly
          </span>
        </button>
      </div>

      {/* How it works - Clickable */}
      <div className="text-center cursor-pointer" onClick={openModal}>
        <div className="text-gray-600 font-semibold border-b-1 border-dashed border-gray-600 pb-1 inline-block">
          How it works ?
        </div>
        <div className="flex justify-center mt-2">
          {/* <div className="w-12 h-1 bg-gray-300 rounded"></div> */}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-end justify-center z-50"
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
                  <Lightbulb className="w-10 h-10 text-yellow-400 fill-yellow-500" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="absolute -top-5 right-2 w-3 h-3 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute -top-5 right-6 w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                  <div className="absolute -top-1 right-9 w-3 h-3 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-9 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
                  <div className="absolute -top-4 -right-1 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  How it works?
                </h3>
              </div>
            </div>

            {/* Step 1 */}
            {/* Step 1 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-yellow-400 text-white rounded-full flex items-center justify-center text-xs font-bold mb-2"></div>
                <div className="w-0.5 h-20 bg-gray-300"></div>
              </div>
              <div className="flex-1">
                <div className="text-orange-600 font-semibold text-sm mb-2">
                  STEP 1
                </div>
                <h4 className="font-bold text-gray-800 mb-1">
                  Invite your friend
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                 Share your referral link or code. Your friends must sign up using it.

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
                <div className="w-4 h-4 bg-yellow-400 text-white rounded-full flex items-center justify-center text-xs font-bold mb-2"></div>
                <div className="w-0.5 h-20 bg-gray-300"></div>
              </div>
              <div className="flex-1">
                <div className="text-orange-600 font-semibold text-sm mb-2">
                  STEP 2
                </div>
                <h4 className="font-bold text-gray-800 mb-1">
                  Earn 1% Commission
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                Get 1% of your friend's winnings every time they win a game.

                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center gap-2 ">
                {/* <button className="bg-blue-500 text-white px-3 py-1  rounded text-sm">
           
                </button>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded text-sm -ml-4 ">
             
                </button> */}
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-yellow-400 text-white rounded-full flex items-center justify-center text-xs font-bold"></div>
              </div>
              <div className="flex-1">
                <div className="text-orange-600 font-semibold text-sm mb-2">
                  STEP 3
                </div>
                <h4 className="font-bold text-gray-800 mb-1">
                  Track & Grow
                </h4>
                <p className="text-sm text-gray-600">
                  Use the app's dashboard to track referrals and earnings. Remind friends to play and boost your rewards.
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