import React from "react";
import { Link } from "react-router-dom";



const rooms = [
  {
    name: "Standard Room",
    img: "/public/Room/Room1.webp", // Use direct path
    desc: "A cozy room with all basic amenities, perfect for solo travelers or couples.",
    price: "₹2,500/night",
    features: ["Free Wi-Fi", "Queen Bed", "Smart TV", "AC", "Digital Key"],
    tech: ["🔑 Digital Key", "🚀 Wi-Fi 6"],
    size: "220 sq.ft",
    view: "City View",
    offer: "Early check-in available"
  },
  {
    name: "Deluxe Room",
    img: "/public/Room/Room2.webp", // Use direct path
    desc: "Spacious room with a beautiful view, modern decor, and extra comfort.",
    price: "₹4,000/night",
    features: ["King Bed", "Balcony", "Mini Bar", "AI Concierge", "Smart Lighting"],
    tech: ["🤖 AI Concierge", "💡 Smart Lighting"],
    size: "320 sq.ft",
    view: "Garden View",
    offer: "Complimentary breakfast"
  },
  {
    name: "Suite",
    img: "/public/Room/Room3.jpg",
    desc: "Luxury suite with living area, premium amenities, and exclusive services.",
    price: "₹7,500/night",
    features: ["Living Room", "Digital Key", "Jacuzzi", "Personal Butler", "Smart Energy"],
    tech: ["🌱 Smart Energy", "🛁 Jacuzzi"],
    size: "500 sq.ft",
    view: "Pool & City View",
    offer: "Private lounge access"
  },
  {
    name: "Family Room",
    img: "/public/Room/Room4.jpg",
    desc: "Perfect for families, with two queen beds, play area, and extra space.",
    price: "₹5,500/night",
    features: ["2 Queen Beds", "Kids Play Area", "Smart TV", "Mini Fridge", "Digital Key"],
    tech: ["🔑 Digital Key", "🎮 Kids Entertainment"],
    size: "400 sq.ft",
    view: "Courtyard View",
    offer: "Kids stay free"
  },
  {
    name: "Executive Room",
    img: "/public/Room/Room5.webp",
    desc: "Designed for business travelers, with workspace, fast Wi-Fi, and lounge access.",
    price: "₹6,000/night",
    features: ["King Bed", "Workspace", "Lounge Access", "Coffee Machine", "Smart Lighting"],
    tech: ["💻 Work Desk", "🚀 Wi-Fi 6"],
    size: "350 sq.ft",
    view: "City Skyline",
    offer: "Free airport transfer"
  },
  {
    name: "Presidential Suite",
    img: "/public/Room/Room6.webp",
    desc: "Ultimate luxury with private terrace, jacuzzi, and personal butler service.",
    price: "₹15,000/night",
    features: ["Private Terrace", "Jacuzzi", "Butler", "Bar", "Smart Energy"],
    tech: ["🌱 Smart Energy", "🛁 Jacuzzi", "🤖 AI Concierge"],
    size: "900 sq.ft",
    view: "Panoramic City View",
    offer: "Champagne on arrival"
  },
  {
    name: "Heritage Suite",
    img: "/public/Room/Room7.jpg",
    desc: "Experience royal heritage with antique decor, private balcony, and luxury amenities.",
    price: "₹10,000/night",
    features: ["Antique Decor", "Private Balcony", "Butler", "Smart TV", "Digital Key"],
    tech: ["🔑 Digital Key", "🖼️ Heritage Decor"],
    size: "600 sq.ft",
    view: "Palace View",
    offer: "Free heritage tour"
  },
  {
    name: "Royal Penthouse",
    img: "/public/Room/Room8.webp",
    desc: "Top-floor penthouse with panoramic views, private pool, and exclusive lounge.",
    price: "₹20,000/night",
    features: ["Private Pool", "Lounge", "King Bed", "Bar", "Smart Energy"],
    tech: ["🌱 Smart Energy", "🏊 Private Pool", "🤖 AI Concierge"],
    size: "1200 sq.ft",
    view: "360° City View",
    offer: "Private airport pickup"
  },
  {
    name: "Eco Room",
    img: "/public/Room/Room9.jpeg",
    desc: "Eco-friendly room with green tech, air purification, and natural materials.",
    price: "₹3,500/night",
    features: ["Green Tech", "Air Purifier", "Natural Decor", "Smart Lighting", "Digital Key"],
    tech: ["🌱 Smart Energy", "💡 Smart Lighting"],
    size: "250 sq.ft",
    view: "Garden View",
    offer: "Plant a tree with your stay"
  }
];

const badgeColors = [
  "bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] text-blue-900",
  "bg-gradient-to-br from-yellow-50 via-[#f7c873] to-yellow-100 text-yellow-900",
  "bg-gradient-to-br from-green-50 via-[#f7c873] to-emerald-100 text-green-900",
  "bg-gradient-to-br from-pink-50 via-[#f7c873] to-pink-100 text-pink-900",
  "bg-gradient-to-br from-purple-50 via-[#f7c873] to-purple-100 text-purple-900",
  "bg-gradient-to-br from-orange-50 via-[#f7c873] to-yellow-100 text-orange-900"
];

const featureIcons = {
  "Free Wi-Fi": "📶",
  "Queen Bed": "🛏️",
  "King Bed": "🛏️",
  "Smart TV": "📺",
  "AC": "❄️",
  "Digital Key": "🔑",
  "Balcony": "🌅",
  "Mini Bar": "🍸",
  "AI Concierge": "🤖",
  "Smart Lighting": "💡",
  "Living Room": "🛋️",
  "Jacuzzi": "🛁",
  "Personal Butler": "🧑‍💼",
  "Smart Energy": "🌱",
  "Kids Play Area": "🎠",
  "Mini Fridge": "🧊",
  "Workspace": "💻",
  "Lounge Access": "🛋️",
  "Coffee Machine": "☕",
  "Private Terrace": "🌇",
  "Butler": "🧑‍💼",
  "Bar": "🍸",
  "Private Pool": "🏊",
  "Antique Decor": "🖼️",
  "Natural Decor": "🌿",
  "Air Purifier": "🌬️",
  "Green Tech": "🌳",
  "Kids Entertainment": "🎮"
};

const roomRatings = [4.2, 4.7, 4.9, 4.5, 4.6, 5.0, 4.8, 5.0, 4.3];

const Rooms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-14 px-2 sm:px-4">
      <h2 className="text-4xl font-extrabold text-royal mb-10 text-center drop-shadow font-['Playfair_Display',serif]">
        Our Signature Rooms
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className={`relative ${badgeColors[idx % badgeColors.length]} rounded-3xl shadow-2xl hover:shadow-gold transition-all p-7 flex flex-col items-center border-t-8 border-gold`}
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-48 object-cover rounded-xl mb-5 shadow-lg border-2 border-gold/30"
            />
            <h3 className="text-2xl font-bold text-royal mb-2 text-center">{room.name}</h3>
            <div className="mb-2 flex items-center justify-center">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="ml-1 font-semibold text-yellow-700">{roomRatings[idx % roomRatings.length]}</span>
              <span className="ml-1 text-xs text-gray-600">(Guest Rating)</span>
            </div>
            <p className="text-gray-800 mb-3 text-center">{room.desc}</p>
            <div className="flex flex-wrap gap-2 mb-2 justify-center">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
                {room.size}
              </span>
              <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
                {room.view}
              </span>
            </div>
            <ul className="mb-2 text-sm text-gray-700 flex flex-wrap gap-2 justify-center">
              {room.features.map((feature, i) => (
                <li key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1">
                  {featureIcons[feature] && <span>{featureIcons[feature]}</span>}
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-2 justify-center">
              {room.tech && room.tech.map((t, i) => (
                <span key={i} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold shadow">{t}</span>
              ))}
            </div>
            <span className="font-semibold text-lg text-royal bg-gold/20 px-4 py-1 rounded-full shadow mb-2">{room.price}</span>
            <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold shadow mb-2">
              {room.offer}
            </span>
            <Link
              to="/reservation"
              className="mt-2 px-6 py-2 bg-gradient-to-r from-royal via-gold to-yellow-400 text-white rounded-full font-bold shadow hover:scale-105 hover:bg-gold transition text-center"
            >
              Book This Room
            </Link>
            
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <span className="inline-block bg-royal/10 text-royal px-5 py-2 rounded-full font-semibold shadow">
          Need help choosing? <Link to="/contact" className="underline hover:text-gold">Contact our team</Link>
        </span>
        
      </div>
      <a
        href="https://wa.me/919999999999?text=Hi%20I%20need%20help%20with%20room%20booking"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        style={{
          background: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
        title="Chat with our AI assistant on WhatsApp"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: "36px", height: "36px" }} />
      </a>
    </div>
  );
};

export default Rooms;