import React from "react";
import { FaWallet } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";

const WalletPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-sm sm:text-base">
    
      <div className="flex justify-between items-center px-4 py-3">
        <img
          src="https://imgs.search.brave.com/GHiCZZJCPxzKQ71fVYHMKHtVGwQQ-PnDml3dxUvn_RA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvcGF5cGFs/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTI3Mzc4/Ny5wbmc"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full shadow">
          <FaRupeeSign className="mr-1" /> 68.5
        </div>
      </div>

    
      <div className="bg-white shadow-md rounded-xl mx-4 p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>Total Balance</span>
              <BsFillInfoCircleFill className="text-gray-800" />
            </div>
            <p className="text-2xl font-bold">₹68.5</p>
          </div>
          <FaWallet className="text-4xl text-purple-300" />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>Deposit Amount</span>
              <BsFillInfoCircleFill className="text-gray-800" />
            </div>
            <p className="text-lg font-semibold">₹68.5</p>
          </div>
          <button className="bg-green-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md whitespace-nowrap">
            + Add Cash
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span >Winning Amount</span>
              <BsFillInfoCircleFill className="text-gray-800" />
            </div>
            <p className="text-lg font-semibold">₹0</p>
          </div>
          <button className="bg-yellow-400 text-black text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md whitespace-nowrap">
            Withdraw
          </button>
        </div>
      </div>


      <div className="mx-4 mt-6">
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
          <div className="flex items-center space-x-2">
            <FaClockRotateLeft className="text-gray-600 text-lg" />
            <span className="text-gray-600 font-bold">Transaction History</span>
          </div>
          <span className="text-gray-500 text-lg">›</span>
        </button>
      </div>

      <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 px-4 flex-wrap">
        <img
          src="https://salesforceventures.com/wp-content/uploads/2022/05/Razorpay.svg?w=1024"
          alt="Razorpay"
          className="h-5 object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/345px-PhonePe_Logo.svg.png?20210407195407"
          alt="PhonePe"
          className="h-6 object-contain"
        />
        <img
          src="https://mma.prnewswire.com/media/1387178/Cashfree_Logo.jpg?w=200"
          alt="Cashfree"
          className="h-5 object-contain"
        />
      </div>
    </div>
  );
};

export default WalletPage;
