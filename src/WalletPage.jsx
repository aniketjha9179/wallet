import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaArrowLeft, FaWallet, FaTrophy, FaGift } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import Logo from "/reapzo.png";

import AutoPlay from "./components/Autoplay";

const WalletPage = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans text-sm sm:text-base">
      {/* Header with Icon and Title */}
      <div className="bg-white py-3 flex justify-center items-center border-b border-gray-200">
        <img src={Logo} className="h-6 w-16 object-contain" />
      </div>

      {/* Back and Title */}
      <div className="bg-black text-white flex items-center px-4 py-3">
        <FaArrowLeft className="mr-3" />
        <h1 className="text-lg font-semibold">My Balance</h1>
      </div>

      {/* Total Balance */}
      <div className="bg-[#f5f5f5] px-4 py-4">
        <p className="w-xs:text-2xl font-bold">₹6.5</p>
        <p className="text-gray-500 text-sm">Total balance</p>
      </div>

      {/* Deposit Section */}
      <div className="mx-4 mt-2 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-white to-green-100 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FaWallet className="text-xl text-green-700" />
              <div>
                <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                  <span className=" text-xs">Deposit</span>
                  <BsInfoCircle className="text-gray-400" />
                </div>
                <p className="w-xs:text-lg font-medium">₹5.93</p>
              </div>
            </div>
            <button className="bg-green-600 text-white text-xs px-2 py-2 rounded-md font-medium">
              ADD CASH
            </button>
          </div>
        </div>
        <div className="bg-white px-4 py-2 flex justify-between items-center">
          <p className="text-gray-500 text-xs">View breakdown</p>
          <span className="text-gray-400">
            <IoIosArrowDown />
          </span>
        </div>
      </div>

      {/* Winnings Section */}
      <div className="bg-white mx-4 mt-4 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaTrophy className="text-xl text-yellow-500" />
            <div>
              <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                <span className="text-xs">Winnings</span>
                <BsInfoCircle className="text-gray-400" />
              </div>
              <p className="w-xs:text-lg font-medium">₹0.5</p>
            </div>
          </div>
          <button className="border border-red-500 text-red-500 px-3 py-1 rounded-md font-semibold text-sm">
            Verify
          </button>
        </div>
        <p className="text-red-500 text-xs pt-2 font-medium">
          Complete KYC to withdraw funds
        </p>
      </div>

      {/* Banner */}
      <div className="mx-4 mt-4">
        <AutoPlay />
      </div>

      {/* Points Section */}
      <div className="bg-white mx-4 mt-4 p-4 rounded-xl shadow-sm">
        <div className="flex items-center gap-3">
          <FaGift className="text-xl text-purple-500" />
          <div>
            <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
              <span className="w-xs:text-lg font-medium">Points</span>
              <BsInfoCircle className="text-gray-400" />
            </div>
            <p className="w-xs:text-lg font-medium">₹0.07</p>
          </div>
        </div>
        <div className="bg-white px-4 py-2 flex justify-between items-center">
          <p className="text-gray-500 text-xs">View breakdown</p>
          <span className="text-gray-600">
            <IoIosArrowDown />
          </span>
        </div>
      </div>

      {/* Transaction History */}
      <div className="mx-4 mt-6">
        <button className="w-full bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
          <div className="text-left">
            <p className="text-black font-medium">Transaction History</p>
            <p className="text-gray-500 text-xs">
              For all balance debits & credits
            </p>
          </div>
          <MdKeyboardArrowRight className="text-gray-600 text-lg" />
        </button>
      </div>

      {/* KYC Verification */}
      <div className="mx-4 mt-2 mb-10">
        <button className="w-full bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
          <div className="text-left">
            <p className="text-black font-semibold">KYC verification</p>
            <p className="text-red-500 text-xs font-medium">Tap to verify</p>
          </div>
          <MdKeyboardArrowRight className="text-gray-600 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default WalletPage;
