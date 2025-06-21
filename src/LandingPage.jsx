import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  CreditCard,
  Users,
  Gift,
  Wallet,
  Settings,
  LogOut,
  Play,
  Trophy,
  Plus,
  Aperture,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import Logo from "/FINAL LOGO jpeg.jpg";

const LudoLandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promoCards = [
    {
      id: 1,
      title: "🔥 Summer Special",
      subtitle: "Win Big This Season - Up to ₹50K",
      bgColor: "from-orange-100 to-pink-300",
      icon: "🏆",
    },
    {
      id: 2,
      title: "⚡ Daily Bonus",
      subtitle: "Login & Get ₹500 Free Coins",
      bgColor: "from-green-200 to-purple-800",
      icon: "💰",
    },
    {
      id: 3,
      title: "👑 Mega Tournament",
      subtitle: "₹1 Crore Prize Pool - Join Now!",
      bgColor: "from-purple-100 to-red-300",
      icon: "🎯",
    },
  ];

  const games = [
    {
      id: 1,
      image: "/game IMG_8657.PNG",
      contest: "Mega Contest",
    },
    {
      id: 2,
      image: "/game IMG_8657.PNG",
      contest: "Super Contest",
    },
    {
      id: 3,
      image: "/game IMG_8657.PNG",
      contest: "Premium Contest",
    },
    {
      id: 4,
      image: "/game IMG_8657.PNG",
      contest: "Premium Contest",
      prize: "iPad Pro + AirPods",
      entry: "₹99",
      players: "756",
      timeLeft: "6h 30m",
      difficulty: "Hard",
      winRate: "65%",
    },
  ];

  const menuItems = [
    {
      icon: User,
      label: "My Profile",
      path: "/profile",
      color: "text-green-600",
    },
    {
      icon: Aperture,
      label: "My Trips",
      path: "/history",
      color: "text-pink-500",
    },
    {
      icon: CreditCard,
      label: "Saved Cards",
      path: "/cards",
      color: "text-blue-400",
    },
    {
      icon: Users,
      label: "Saved Travellers",
      path: "/friends",
      color: "text-orange-400",
    },
    {
      icon: Gift,
      label: "Hi-Five",
      path: "/rewards",
      color: "text-purple-400",
    },
    { icon: Wallet, label: "Wallet", path: "/wallet", color: "text-green-400" },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
      color: "text-gray-600",
    },
    {
      icon: ShieldCheck,
      label: "Privacy Rights",
      path: "/privacy",
      color: "text-red-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promoCards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="bg-white/10 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-xl hover:bg-white/10 transition-all duration-200 group"
          >
            <Menu className="h-6 w-6 text-black group-hover:scale-110 transition-transform" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-18 h-10   rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg ">
                <img src={Logo} className=" " />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 ">
            <div className="bg-gradient-to-r from-green-400/10 to-green-500/20 backdrop-blur-md rounded-full px-2 py-2 flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] border border-green-300/50 hover:scale-105 hover:-translate-y-1 transition-all duration-400 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-green-600/30">
  <Wallet className="h-3 w-3 text-green-600 filter drop-shadow-[0_0_4px_rgba(34,197,94,0.8)]" />
  <span className="text-green-700 text-xs font-bold filter drop-shadow-[0_0_2px_rgba(34,197,94,0.6)]">₹2,450</span>
  <button className="bg-green-500 hover:bg-green-600 rounded-full p-1 transition-all duration-200 hover:scale-125 shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]">
    <Plus className="h-3 w-3 text-white" />
  </button>
</div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Enhanced Curved Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-out z-50 flex flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          borderTopRightRadius: "24px",
          borderBottomRightRadius: "24px",
          clipPath: sidebarOpen ? "none" : "inset(0 100% 0 0)",
        }}
      >
        {/* Profile Section */}
        <div
          className="p-6 bg-red-100 text-black relative overflow-hidden"
          style={{ borderTopRightRadius: "24px" }}
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-600 text-sm">You are logged in with</h2>
              <button
                onClick={toggleSidebar}
                className="p-1 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div>
                <div className="text-xl text-black font-bold">Sumit Kumar</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className=" bg-[#e6f5f0] backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CheckCircle className="h-4 w-4 text-[#108943]" />
                <span className="text-sm text-[#108943] font-bold">
                  Verified
                </span>
              </div>
             
              <div className="bg-red-50 backdrop-blur-sm rounded-md px-2 py-1 flex items-center gap-1 shadow-md">
                <Wallet className="h-4 w-4 text-amber-800" />
                <span className="text-amber-800 text-sm font-bold">50,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-1 rounded-xl hover:bg-gray-100 transition-all duration-200 text-gray-700 hover:text-gray-900 group"
                >
                  <div
                    className={`p-2 rounded-lg bg-gray-100 group-hover:bg-white transition-colors ${item.color}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div
          className="p-4 border-t border-gray-200"
          style={{ borderBottomRightRadius: "24px" }}
        >
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors text-red-600 hover:text-red-700 w-full group">
            <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
              <LogOut className="h-5 w-5" />
            </div>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Promotion Cards */}
          <div className="mb-8 relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-[500px] mx-auto">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentPromo * 100}%)` }}
            >
              {promoCards.map((promo) => (
                <div
                  key={promo.id}
                  className={`min-w-full p-3 bg-gradient-to-br ${promo.bgColor} text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-2 right-2 text-2xl">
                    {promo.icon}
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg font-bold mb-2">{promo.title}</h3>
                    <p className="text-white/90 mb-3 text-xs">
                      {promo.subtitle}
                    </p>
                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-black/80 px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105">
                      Claim Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Dots indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {promoCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPromo(index)}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    index === currentPromo
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            🔥 Live Gaming Contests
          </h2>

          {/* Enhanced Game Cards with reduced width */}
          <div className="flex flex-col items-center space-y-5">
            {games.map((game, index) => (
              <div
                key={game.id}
                className="w-full max-w-[500px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={game.image}
                    alt={`${game.gameType} game`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    {/* Additional overlay content can go here */}
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-semibold">
                        LIVE
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    {/* Additional overlay content can go here */}
                  </div>
                </div>

                {/* Enhanced Contest Info */}
                <div className="p-2 bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="h-5 w-5 text-yellow-600" />
                        <h4 className="text-sm font-bold text-gray-800">
                          {game.contest}
                        </h4>
                      </div>
                    </div>

                    <div className="ml-6">
                      <button className="bg-black text-white px-2 p-2 rounded-2xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-1 group">
                        <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span className=" text-xs">Play Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LudoLandingPage;
