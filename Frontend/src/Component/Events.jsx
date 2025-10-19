import React from "react";

const events = [
  {
    title: "Live Music Night",
    date: "2025-06-15",
    desc: "Enjoy an evening of live music with local and international artists in our grand ballroom.",
    img: "/Other/Musie night.webp",
    tech: ["🎤 AI Sound", "🎶 Smart Lighting"],
    time: "7:00 PM - 11:00 PM",
    location: "Royal Ballroom",
    highlight: "Complimentary welcome drink"
  },
  {
    title: "Food Festival",
    date: "2025-07-05",
    desc: "Taste a variety of cuisines from around the world, prepared by our master chefs.",
    img: "/Other/Food.avif",
    tech: ["🍽️ Digital Menu", "🤖 Robot Service"],
    time: "12:00 PM - 10:00 PM",
    location: "Heritage Courtyard",
    highlight: "Live cooking stations & chef meet"
  },
  {
    title: "Tech Conference",
    date: "2025-08-20",
    desc: "Join industry leaders and innovators for a day of talks, networking, and workshops.",
    img: "/Other/Tech.webp",
    tech: ["🚀 Wi-Fi 6", "🔒 Smart Security"],
    time: "9:00 AM - 6:00 PM",
    location: "Conference Hall",
    highlight: "Early bird discount available"
  },
  {
    title: "Kids Carnival",
    date: "2025-09-10",
    desc: "A fun-filled day for kids with games, magic shows, and interactive learning zones.",
    img: "/Other/Kids.jpeg",
    tech: ["🧸 AR Games", "🎈 Smart Safety"],
    time: "10:00 AM - 5:00 PM",
    location: "Kids Zone & Lawns",
    highlight: "Free entry for children under 8"
  }
];

const badgeColors = [
  "bg-gradient-to-r from-royal/80 via-gold/40 to-yellow-100 text-royal",
  "bg-gradient-to-r from-yellow-100 via-gold/60 to-royal/10 text-gold",
  "bg-gradient-to-r from-cyan-100 via-blue-100 to-gold/10 text-blue-700",
  "bg-gradient-to-r from-pink-100 via-yellow-50 to-gold/10 text-pink-700"
];

const Events = () => {
  return (
    <div className="min-h-[80vh] py-14 bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-royal mb-8 text-center drop-shadow font-['Playfair_Display',serif]">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl transition p-6 flex flex-col items-center border-t-4 border-gold ${badgeColors[idx % badgeColors.length]}`}
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-40 object-cover rounded-xl mb-4 shadow-lg border-2 border-gold/30"
              />
              <h3 className="text-xl font-bold text-royal mb-1 text-center">{event.title}</h3>
              <span className="text-xs font-semibold mb-2 px-3 py-1 rounded-full bg-gold/10 text-gold shadow">
                {new Date(event.date).toLocaleDateString()} &middot; {event.time}
              </span>
              <span className="block text-xs text-royal mb-2 font-semibold">
                📍 {event.location}
              </span>
              <p className="text-gray-700 text-center mb-3">{event.desc}</p>
              <div className="flex flex-wrap gap-2 mb-2 justify-center">
                {event.tech && event.tech.map((t, i) => (
                  <span key={i} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold shadow">{t}</span>
                ))}
              </div>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold shadow mb-2">
                {event.highlight}
              </span>
              <button className="mt-auto px-5 py-2 bg-gradient-to-r from-royal via-gold to-yellow-400 text-white rounded-full font-bold shadow hover:scale-105 hover:bg-gold transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <span className="inline-block bg-royal/10 text-royal px-4 py-2 rounded-full font-semibold shadow">
            Want to host your event at Rathore Hotel?{" "}
            <a href="mailto:events@rathorehotel.com" className="underline hover:text-gold">Contact our team</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Events;