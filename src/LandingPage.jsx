import React, { useState, useEffect } from 'react';
import { Menu, X, User, MapPin, CreditCard, Users, Gift, Wallet, Settings, Shield, LogOut, Play, Star, Trophy, Zap, Crown, Coins, CirclePlus, Plus } from 'lucide-react';

const LudoLandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promoCards = [
    {
      id: 1,
      title: "🔥 Summer Special",
      subtitle: "Win Big This Season - Up to ₹50K",
      bgColor: "from-orange-100 to-pink-300",
      icon: "🏆"
    },
    {
      id: 2,
      title: "⚡ Daily Bonus",
      subtitle: "Login & Get ₹500 Free Coins",
      bgColor: "from-green-200 to-purple-800",
      icon: "💰"
    },
    {
      id: 3,
      title: "👑 Mega Tournament",
      subtitle: "₹1 Crore Prize Pool - Join Now!",
      bgColor: "from-purple-100 to-red-300",
      icon: "🎯"
    }
  ];

  const games = [
    {
      id: 1,
      image: "../public/game IMG_8657.PNG",
      contest: "Mega Contest",
      prize: "iPhone 16 Pro",
      entry: "₹49",
      players: "1,247",
      timeLeft: "2h 15m",
      difficulty: "Medium",
      winRate: "78%"
    },
    {
      id: 2,
      image: "../public/game IMG_8657.PNG",
      contest: "Super Contest",
      prize: "Samsung Galaxy S24",
      entry: "₹29",
      players: "2,851",
      timeLeft: "45m",
      difficulty: "Easy",
      winRate: "85%"
    },
    {
      id: 3,
      image: "../public/game IMG_8657.PNG",
      contest: "Premium Contest",
      prize: "iPad Pro + AirPods",
      entry: "₹99",
      players: "756",
      timeLeft: "6h 30m",
      difficulty: "Hard",
      winRate: "65%"
    },
    {
      id: 4,
      image: "../public/game IMG_8657.PNG",
      contest: "Premium Contest",
      prize: "iPad Pro + AirPods",
      entry: "₹99",
      players: "756",
      timeLeft: "6h 30m",
      difficulty: "Hard",
      winRate: "65%"
    }
  ];

  const menuItems = [
    { icon: User, label: "My Profile", path: "/profile", color: "text-blue-600" },
    { icon: MapPin, label: "Game History", path: "/history", color: "text-green-600" },
    { icon: CreditCard, label: "Payment Methods", path: "/cards", color: "text-purple-600" },
    { icon: Users, label: "Friends & Referrals", path: "/friends", color: "text-orange-600" },
    { icon: Gift, label: "Rewards & Bonuses", path: "/rewards", color: "text-pink-600" },
    { icon: Wallet, label: "Wallet", path: "/wallet", color: "text-green-500" },
    { icon: Settings, label: "Settings", path: "/settings", color: "text-gray-600" },
    { icon: Shield, label: "Privacy & Security", path: "/privacy", color: "text-red-600" }
  ];

  const achievements = [
    { icon: "🏆", label: "Winner", count: 156 },
    { icon: "⚡", label: "Speed Games", count: 89 },
    { icon: "👑", label: "Tournaments", count: 23 }
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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎲</span>
            </div>
            <h1 className="text-xl font-bold text-black">Reapzo</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-black/80 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1">
              <Wallet className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-semibold">₹ 2,450</span>
              <div className="bg-green-400 rounded-full p-1">
                <Plus className="h-3 w-3 text-white" />
              </div>
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

      {/* Enhanced Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-out z-50 flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Profile Section */}
        <div className="p-6  bg-gray-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Profile</h2>
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <div className="text-lg font-bold">Sumit Kumar</div>
                <div className="text-white/80 text-sm">Level 12 Player</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                <Crown className="h-4 w-4 text-yellow-300" />
                <span className="text-yellow-300 text-sm font-medium">LOYAL MEMBER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition-all duration-200 text-gray-700 hover:text-gray-900 group"
                >
                  <div className={`p-2 rounded-lg bg-gray-100 group-hover:bg-white transition-colors ${item.color}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
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
         <div className="mb-8 relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-[600px] mx-auto">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentPromo * 100}%)` }}
            >
              {promoCards.map((promo) => (
                <div
                  key={promo.id}
                  className={`min-w-full p-8 bg-gradient-to-br ${promo.bgColor} text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4 text-4xl">{promo.icon}</div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                    <p className="text-white/90 mb-4 text-xs">{promo.subtitle}</p>
                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-black/80 px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105">
                      Claim Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {promoCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPromo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPromo ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
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
                className="w-full max-w-[600px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
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
                    <div className="bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-semibold">LIVE</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    {/* Additional overlay content can go here */}
                  </div>
                </div>

                {/* Enhanced Contest Info */}
                <div className="p-3 bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="h-5 w-5 text-yellow-600" />
                        <h4 className="text-lg font-bold text-gray-800">{game.contest}</h4>
                      </div>
                    </div>

                    <div className="ml-6">
                      <button className="bg-black text-white px-5 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
                        <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span>Play Now</span>
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