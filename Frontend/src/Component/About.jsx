import React from "react";
import { Link } from "react-router-dom";

const technologies = [
  { icon: "🤖", title: "AI Concierge", desc: "24/7 virtual assistant for all your needs." },
  { icon: "📱", title: "Contactless Check-In", desc: "Fast, secure, and touch-free check-in." },
  { icon: "🚀", title: "Wi-Fi 6", desc: "Ultra-fast, reliable internet in every room." },
  { icon: "🔑", title: "Digital Key", desc: "Unlock your room with your smartphone." },
  { icon: "🌱", title: "Smart Energy", desc: "Eco-friendly rooms with automated energy saving." },
  { icon: "🧖‍♂️", title: "Spa & Wellness", desc: "Relax in our luxury spa, gym, and wellness center." },
  { icon: "🍽️", title: "Gourmet Dining", desc: "World-class restaurants and bars for every taste." },
  { icon: "🎉", title: "Event Spaces", desc: "Modern halls for weddings, conferences, and celebrations." },
  { icon: "🧸", title: "Kids Zone", desc: "Fun and safe play areas for children of all ages." },
  { icon: "🛍️", title: "Shopping Arcade", desc: "Boutique shopping for souvenirs and essentials." },
  { icon: "📚", title: "Library Lounge", desc: "Quiet reading spaces with curated collections." },
  { icon: "🛡️", title: "Smart Security", desc: "24x7 surveillance and digital access for your safety." },
  { icon: "🧳", title: "Express Luggage", desc: "Smart luggage drop & delivery to your room." },
  { icon: "🚗", title: "Valet Parking", desc: "Automated valet with real-time car tracking." },
  { icon: "🎥", title: "In-Room Cinema", desc: "Private movie nights with 4K streaming." },
  { icon: "🧑‍💻", title: "Co-Working Lounge", desc: "Modern workspace with high-speed Wi-Fi & coffee." },
  { icon: "🛏️", title: "Pillow Menu", desc: "Choose your perfect pillow for a restful sleep." },
  { icon: "🧺", title: "Laundry Butler", desc: "On-demand laundry & pressing with smart tracking." }
];

const badgeColors = [
  "bg-gradient-to-br from-blue-100 via-white to-cyan-100 text-blue-700 border-blue-300",
  "bg-gradient-to-br from-yellow-100 via-white to-yellow-50 text-yellow-700 border-yellow-300",
  "bg-gradient-to-br from-green-100 via-white to-emerald-50 text-green-700 border-green-300",
  "bg-gradient-to-br from-pink-100 via-white to-pink-50 text-pink-700 border-pink-300",
  "bg-gradient-to-br from-cyan-100 via-white to-blue-50 text-cyan-700 border-cyan-300",
  "bg-gradient-to-br from-purple-100 via-white to-purple-50 text-purple-700 border-purple-300"
];

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-14 px-2 sm:px-4">
      {/* Enhanced Royal Crest */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          {/* Animated background glow */}
          <div className="absolute inset-0 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-r from-yellow-400/20 via-gold/30 to-yellow-600/20 rounded-full animate-pulse blur-sm"></div>
          
          {/* Crown container with enhanced styling */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 bg-gradient-to-br from-yellow-50 via-white to-gold/10 rounded-full border-4 border-gold/40 shadow-2xl overflow-hidden flex items-center justify-center backdrop-blur-sm">
            {/* Enhanced crown with fallback */}
            <div className="relative">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/11/crown-1294902_1280.png"
                alt="Royal Crest"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain hover:scale-110 transition-all duration-500 ease-in-out"
                style={{ 
                  filter: "drop-shadow(0 0 15px gold) saturate(1.3) contrast(1.2) brightness(1.1)",
                }}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Fallback emoji crown */}
              <div 
                className="text-6xl sm:text-7xl animate-bounce" 
                style={{ 
                  filter: "drop-shadow(0 0 20px gold)",
                  color: "#f7c873",
                  display: 'none'
                }}
              >
                👑
              </div>
            </div>
          </div>
          
          {/* Decorative sparkles with staggered animations */}
          <div className="absolute -top-2 -left-3 text-2xl opacity-70 animate-pulse" style={{ color: "#f7c873", animationDelay: '0s' }}>✨</div>
          <div className="absolute -top-2 -right-3 text-2xl opacity-70 animate-pulse" style={{ color: "#f7c873", animationDelay: '0.5s' }}>✨</div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xl opacity-80 animate-pulse" style={{ color: "#f7c873", animationDelay: '1s' }}>💎</div>
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-lg opacity-60 animate-pulse" style={{ color: "#f7c873", animationDelay: '1.5s' }}>⭐</div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-lg opacity-60 animate-pulse" style={{ color: "#f7c873", animationDelay: '2s' }}>⭐</div>
        </div>
        
        {/* Enhanced title section */}
        <div className="text-center space-y-3">
          <span className="text-2xl sm:text-3xl font-bold text-yellow-700 tracking-widest block font-['Playfair_Display',serif] drop-shadow-lg">
            Rathore Royal Heritage
          </span>
          <div className="flex items-center justify-center gap-3 text-base text-yellow-600">
            <span className="animate-pulse">⭐</span>
            <span className="tracking-wider font-semibold bg-yellow-100/80 px-3 py-1 rounded-full">
              Luxury • Tradition • Excellence
            </span>
            <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-yellow-500">
            <span className="tracking-widest bg-yellow-100 px-3 py-1.5 rounded-full font-bold shadow-sm border border-yellow-200">
              EST. 2025
            </span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping"></span>
            <span className="tracking-widest bg-yellow-100 px-3 py-1.5 rounded-full font-bold shadow-sm border border-yellow-200">
              RAJASTHAN
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-gradient-to-br from-yellow-50 via-white to-emerald-50 rounded-3xl shadow-2xl border-t-8 border-yellow-700 p-6 sm:p-10 relative overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 text-3xl opacity-10 rotate-12">👑</div>
        <div className="absolute bottom-4 left-4 text-3xl opacity-10 -rotate-12">🏰</div>
        
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-6 text-center drop-shadow font-['Playfair_Display',serif] tracking-wide">
          About <span className="text-purple-700">Rathore Hotel</span>
          <div className="flex justify-center mt-3">
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-700 via-gold to-yellow-700 rounded-full"></div>
          </div>
        </h2>
        
        <p className="text-gray-700 mb-8 text-center text-lg leading-relaxed max-w-4xl mx-auto">
          <span className="font-semibold text-yellow-700">Rathore Hotel</span> blends Rajasthan's royal heritage with modern technology and eco-conscious luxury.<br />
          Our mission is to deliver an unforgettable stay—where tradition meets innovation, and every guest is treated like royalty.
        </p>

        {/* Enhanced Heritage Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-6 shadow-lg border border-yellow-200">
          <div className="relative">
            <img
              src="/Slide/S1.webp"
              alt="Royal Palace"
              className="w-48 h-48 rounded-xl object-cover border-4 border-yellow-700 shadow-lg transform hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=400&fit=crop";
              }}
            />
            <div className="absolute -top-2 -right-2 bg-yellow-700 text-white text-xs px-2 py-1 rounded-full font-bold">
              Heritage
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-yellow-700 mb-4 flex items-center gap-3">
              <span>🏰</span> Our Heritage
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Inspired by the majestic palaces of Rajasthan, our hotel features regal architecture, antique furnishings, and lush gardens. Experience the grandeur of royal living with the comfort of modern amenities and world-class hospitality.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">Royal Architecture</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">Antique Collection</span>
            </div>
          </div>
        </div>

        {/* Enhanced Promise/Features Section */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-700/20 via-yellow-50 to-white rounded-2xl p-8 shadow-lg flex-1 border-l-4 border-yellow-700 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-2xl font-bold text-yellow-700 tracking-tight">Why Choose Us?</h3>
            </div>
            <ul className="text-gray-700 text-base space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✔️</span>
                <span>Prime city location, close to major attractions</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✔️</span>
                <span>Personalized service & 24/7 support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✔️</span>
                <span>Award-winning dining & wellness experiences</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✔️</span>
                <span>Smart rooms with digital controls & eco features</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✔️</span>
                <span>Secure, seamless, and contactless experience</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✔️</span>
                <span>Family & pet friendly, with kids' amenities</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 via-white to-cyan-50 rounded-2xl p-8 shadow-lg flex-1 border-l-4 border-emerald-400 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-2xl font-bold text-yellow-700 tracking-tight">Our Promise</h3>
            </div>
            <ul className="text-gray-700 text-base space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-2xl">🌟</span>
                <span>100% guest satisfaction guarantee</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🌿</span>
                <span>Sustainability at every step</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>Advanced safety & hygiene protocols</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🎉</span>
                <span>Unique experiences for every age</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <span>Innovation in every detail</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Technology Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-yellow-700 mb-8">
            <span className="bg-gradient-to-r from-yellow-700 to-purple-700 bg-clip-text text-transparent">
              Premium Amenities & Technology
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className={`rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 ${badgeColors[idx % badgeColors.length]} hover:border-gold`}
              >
                <div className="text-4xl mb-4 transform hover:scale-110 transition-transform">{tech.icon}</div>
                <h4 className="font-bold text-lg text-yellow-700 mb-2 tracking-wide">{tech.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Call to Action */}
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-yellow-700/10 to-purple-700/10 text-yellow-700 px-8 py-6 rounded-2xl font-semibold shadow-lg text-lg tracking-wide border-2 border-yellow-700/20 hover:border-yellow-700/40 transition-all">
            Discover more about our <span className="text-purple-700 font-bold">unique features</span> and <span className="text-emerald-700 font-bold">guest experiences</span>!
            <div className="mt-2 text-sm text-gray-600">Experience luxury like never before</div>
          </div>
        </div>
        
        {/* Enhanced Awards Section */}
        <div className="mb-10">
          <h4 className="text-2xl font-bold text-center text-yellow-700 mb-6">Awards & Recognition</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 bg-emerald-100 text-emerald-800 px-4 py-3 rounded-xl font-semibold shadow-md border-2 border-emerald-200 hover:shadow-lg transition-shadow">
              <span className="text-2xl">🏆</span> 
              <div>
                <div className="font-bold">Best Smart Hotel</div>
                <div className="text-xs opacity-75">2025 Award</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-blue-100 text-blue-800 px-4 py-3 rounded-xl font-semibold shadow-md border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <span className="text-2xl">🌱</span> 
              <div>
                <div className="font-bold">Green Globe</div>
                <div className="text-xs opacity-75">Certified</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-pink-100 text-pink-800 px-4 py-3 rounded-xl font-semibold shadow-md border-2 border-pink-200 hover:shadow-lg transition-shadow">
              <span className="text-2xl">👨‍👩‍👧‍👦</span> 
              <div>
                <div className="font-bold">Family Friendly</div>
                <div className="text-xs opacity-75">Pet Welcome</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-yellow-100 text-yellow-800 px-4 py-3 rounded-xl font-semibold shadow-md border-2 border-yellow-200 hover:shadow-lg transition-shadow">
              <span className="text-2xl">📶</span> 
              <div>
                <div className="font-bold">Free Wi-Fi</div>
                <div className="text-xs opacity-75">Everywhere</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Contact Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-yellow-600 to-yellow-500 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-pink-600 text-lg"
          >
            <span>👑</span>
            Contact Us for a Royal Experience
            <span>✨</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;