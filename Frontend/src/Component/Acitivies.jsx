import React from "react";

const activities = [
  {
    icon: "💃",
    title: "Folk Dance Evenings",
    desc: "Enjoy live Kalbelia and Ghoomar performances every weekend in our heritage courtyard.",
    highlight: "Cultural immersion with local artists"
  },
  {
    icon: "🍳",
    title: "Cooking Classes",
    desc: "Learn to cook authentic Rajasthani dishes with our master chefs.",
    highlight: "Hands-on experience & recipe takeaway"
  },
  {
    icon: "🏹",
    title: "Archery & Traditional Games",
    desc: "Try your hand at archery, chess, and other royal games in our activity zone.",
    highlight: "Fun for all ages"
  },
  {
    icon: "🖼️",
    title: "Art & Craft Workshops",
    desc: "Participate in pottery, phad painting, and blue pottery workshops.",
    highlight: "Create your own souvenir"
  },
  {
    icon: "🌅",
    title: "Sunset Rooftop Yoga",
    desc: "Unwind with guided yoga sessions on our scenic rooftop.",
    highlight: "Complimentary for all guests"
  },
  {
    icon: "🚴",
    title: "Cycling Tours",
    desc: "Explore Bhilwara’s heritage sites and countryside with guided cycling tours.",
    highlight: "Bikes & helmets provided"
  },
  {
    icon: "🎤",
    title: "Live Sufi Nights",
    desc: "Experience soulful Sufi music under the stars at our Sky Lounge.",
    highlight: "Every Friday night"
  },
];

const badgeColors = [
  "bg-yellow-100 text-yellow-700",
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-pink-100 text-pink-700",
  "bg-cyan-100 text-cyan-700",
  "bg-purple-100 text-purple-700",
  "bg-orange-100 text-orange-700"
];

const Activities = () => (
  <section className="py-14 min-h-[80vh] bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132]">
    <h2 className="text-3xl font-extrabold text-royal mb-8 text-center drop-shadow font-['Playfair_Display',serif]">
      Signature Activities & Experiences
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      {activities.map((activity, idx) => (
        <div
          key={idx}
          className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-6 w-72 flex flex-col items-center border-t-4 ${badgeColors[idx % badgeColors.length]}`}
        >
          <div className="text-5xl mb-2">{activity.icon}</div>
          <h3 className="font-bold text-lg text-royal mb-1">{activity.title}</h3>
          <p className="text-gray-700 text-center mb-2">{activity.desc}</p>
          <span className="inline-block bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold shadow mb-2">
            {activity.highlight}
          </span>
        </div>
      ))}
    </div>
    <div className="mt-10 text-center">
      <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold shadow">
        Want a custom experience? <span className="text-royal">Ask our concierge for more activities!</span>
      </span>
    </div>
  </section>
);

export default Activities;