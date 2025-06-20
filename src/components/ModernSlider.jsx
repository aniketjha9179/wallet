import React, { useState } from "react";


export const ModernSlider = () => {
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
                  <span className="text-black/ text-sm font-medium">Tournament</span>
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
