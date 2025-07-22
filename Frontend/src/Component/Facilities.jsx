import React from 'react';

const facilities = [
    {
        name: 'Free Wi-Fi',
        icon: '📶',
        description: 'High-speed internet access throughout the hotel.',
        highlight: 'Wi-Fi 6 enabled for seamless streaming and work.'
    },
    {
        name: 'Swimming Pool',
        icon: '🏊‍♂️',
        description: 'Outdoor pool open from 7am to 10pm.',
        highlight: 'Temperature controlled, poolside café, and kids’ splash zone.'
    },
    {
        name: 'Fitness Center',
        icon: '🏋️‍♀️',
        description: 'Modern gym with 24/7 access for guests.',
        highlight: 'Equipped with smart machines and personal trainers.'
    },
    {
        name: 'Restaurant',
        icon: '🍽️',
        description: 'Multi-cuisine restaurant serving breakfast, lunch, and dinner.',
        highlight: 'Live kitchen, Rajasthani thali, and organic options.'
    },
    {
        name: 'Room Service',
        icon: '🛎️',
        description: '24-hour room service for your convenience.',
        highlight: 'Order via in-room tablet or mobile app.'
    },
    {
        name: 'Children Play Area',
        icon: '🧸',
        description: 'Safe and fun play area for kids of all ages.',
        highlight: 'Supervised, with AR games and creative workshops.'
    },
    {
        name: 'Library',
        icon: '📚',
        description: 'A quiet space with a curated selection of books and magazines.',
        highlight: 'Cozy reading nooks and digital library access.'
    },
    {
        name: 'Shopping Arcade',
        icon: '🛍️',
        description: 'Boutique shops for souvenirs, fashion, and essentials.',
        highlight: 'Local handicrafts, blue pottery, and designer wear.'
    },
    {
        name: 'Concierge',
        icon: '🤵',
        description: 'Personalized assistance for all your travel and stay needs.',
        highlight: 'AI-powered chatbot and local experience planning.'
    },
];

const badgeColors = [
    "#D4AF37", // gold
    "#007F5F", // emerald
    "#800000", // royal maroon
    "#2C2C2C", // charcoal
    "#F5F5DC", // ivory
    "#FFD700", // bright gold
    "#00B4D8", // cyan
    "#A259FF", // purple
    "#FF6F61", // coral
];

const Facilities = () => (
    <section className="py-14 min-h-[80vh] bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132]">
        <h2 className="text-3xl font-extrabold text-royal mb-8 text-center drop-shadow font-['Playfair_Display',serif]">
            Our Signature Facilities
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
            {facilities.map((facility, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-6 w-72 flex flex-col items-center border-t-4"
                    style={{ borderTopColor: badgeColors[idx % badgeColors.length] }}
                >
                    <div className="text-5xl mb-2">{facility.icon}</div>
                    <h3 className="font-bold text-lg text-royal mb-1">{facility.name}</h3>
                    <p className="text-gray-700 text-center mb-2">{facility.description}</p>
                    <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold shadow mb-2">
                        {facility.highlight}
                    </span>
                </div>
            ))}
        </div>
        <div className="mt-10 text-center">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold shadow">
                Need something special? <span className="text-royal">Ask our concierge for a custom experience!</span>
            </span>
        </div>
    </section>
);

export default Facilities;