import React from "react";

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
  // New features
  { icon: "🧑‍💻", title: "Co-Working Lounge", desc: "Modern workspace with high-speed Wi-Fi & coffee." },
  { icon: "🛏️", title: "Pillow Menu", desc: "Choose your perfect pillow for a restful sleep." },
  { icon: "🧺", title: "Laundry Butler", desc: "On-demand laundry & pressing with smart tracking." }
];

const badgeColors = [
  "bg-gradient-to-br from-blue-100 via-white to-cyan-100 text-blue-700",
  "bg-gradient-to-br from-yellow-100 via-white to-yellow-50 text-yellow-700",
  "bg-gradient-to-br from-green-100 via-white to-emerald-50 text-green-700",
  "bg-gradient-to-br from-pink-100 via-white to-pink-50 text-pink-700",
  "bg-gradient-to-br from-cyan-100 via-white to-blue-50 text-cyan-700",
  "bg-gradient-to-br from-purple-100 via-white to-purple-50 text-purple-700"
];

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-14 px-2 sm:px-4">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-yellow-50 via-white to-emerald-50 rounded-3xl shadow-2xl border-t-8 border-gold p-6 sm:p-10">
        <h2 className="text-4xl font-extrabold text-royal mb-4 text-center drop-shadow font-['Playfair_Display',serif] tracking-wide">
          About <span className="text-gold">Rathore Hotel</span>
        </h2>
        <p className="text-gray-700 mb-6 text-center text-lg leading-relaxed">
          <span className="font-semibold text-gold">Rathore Hotel</span> blends Rajasthan’s royal heritage with modern technology and eco-conscious luxury.<br />
          Our mission is to deliver an unforgettable stay—where tradition meets innovation, and every guest is treated like royalty.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
          <div className="bg-gradient-to-r from-gold/30 via-yellow-50 to-white rounded-2xl p-8 shadow-lg flex-1 text-center border-l-4 border-gold">
            <h3 className="text-2xl font-bold text-royal mb-3 tracking-tight">Why Choose Us?</h3>
            <ul className="text-gray-700 text-base space-y-2">
              <li>✔️ Prime city location, close to major attractions</li>
              <li>✔️ Personalized service & 24/7 support</li>
              <li>✔️ Award-winning dining & wellness experiences</li>
              <li>✔️ Smart rooms with digital controls & eco features</li>
              <li>✔️ Secure, seamless, and contactless experience</li>
              <li>✔️ Family & pet friendly, with kids’ amenities</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 via-white to-cyan-50 rounded-2xl p-8 shadow-lg flex-1 text-center border-l-4 border-emerald-400">
            <h3 className="text-2xl font-bold text-royal mb-3 tracking-tight">Our Promise</h3>
            <ul className="text-gray-700 text-base space-y-2">
              <li>🌟 100% guest satisfaction guarantee</li>
              <li>🌿 Sustainability at every step</li>
              <li>🛡️ Advanced safety & hygiene protocols</li>
              <li>🎉 Unique experiences for every age</li>
              <li>💡 Innovation in every detail</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-md p-7 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition border-t-4 ${badgeColors[idx % badgeColors.length]} ${idx > 14 ? "border-pink-400" : ""}`}
            >
              <div className="text-5xl mb-3 drop-shadow">{tech.icon}</div>
              <h3 className="font-bold text-lg text-royal mb-1 tracking-wide">{tech.title}</h3>
              <p className="text-gray-600 text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <span className="inline-block bg-gold/10 text-royal px-7 py-4 rounded-full font-semibold shadow text-lg tracking-wide border border-gold/30">
            Discover more about our <span className="text-gold">unique features</span> and <span className="text-emerald-700">guest experiences</span>!
          </span>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full font-semibold shadow border border-emerald-200">
            <span role="img" aria-label="award">🏆</span> Voted Best Smart Hotel 2025
          </div>
          <div className="flex items-center gap-3 bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold shadow border border-blue-200">
            <span role="img" aria-label="eco">🌱</span> Green Globe Certified
          </div>
          <div className="flex items-center gap-3 bg-pink-100 text-pink-800 px-6 py-3 rounded-full font-semibold shadow border border-pink-200">
            <span role="img" aria-label="family">👨‍👩‍👧‍👦</span> Family & Pet Friendly
          </div>
          <div className="flex items-center gap-3 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold shadow border border-yellow-200">
            <span role="img" aria-label="wifi">📶</span> Free Wi-Fi Everywhere
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-400 via-gold to-yellow-400 text-royal font-bold px-8 py-3 rounded-full shadow hover:scale-105 hover:bg-gold transition border-2 border-pink-600"
          >
            Contact Us for a Royal Experience
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;