import React, { useState, useEffect, useRef } from "react";
import BookNow from "./BookNow";
import side5 from "../assets/Side5.webp";
import slide4 from "../assets/slide_4.webp";
import slide2 from "../assets/slide2.webp";

// Example images (local images imported for Vite/CRA compatibility)
const images = [
  side5,
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80",
  slide4,
  slide2,
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80"
];

const features = [
  { title: "Smart Room Controls", desc: "Control lighting, temperature, and entertainment from your phone or voice assistant.", icon: "💡" },
  { title: "Contactless Check-In", desc: "Seamless, secure, and fast check-in with your mobile device or facial recognition.", icon: "📱" },
  { title: "High-Speed Wi-Fi 6", desc: "Enjoy blazing fast, next-gen internet throughout the hotel.", icon: "🚀" },
  { title: "AI Concierge", desc: "24/7 virtual assistant for all your needs, from room service to local tips.", icon: "🤖" },
  { title: "Smart Energy Management", desc: "Eco-friendly rooms with automated energy saving and air quality monitoring.", icon: "🌱" },
  { title: "Digital Key", desc: "Unlock your room with your smartphone or smartwatch—no physical key needed.", icon: "🔑" },
  { title: "Spa & Wellness", desc: "Relax in our luxury spa, gym, and wellness center.", icon: "🧖‍♂️" },
  { title: "Gourmet Dining", desc: "World-class restaurants and bars for every taste.", icon: "🍽️" },
  { title: "Express Luggage", desc: "Smart luggage drop & delivery to your room.", icon: "🧳" },
  { title: "Valet Parking", desc: "Automated valet with real-time car tracking.", icon: "🚗" },
  { title: "In-Room Cinema", desc: "Private movie nights with 4K streaming.", icon: "🎥" },
  { title: "Pet Friendly", desc: "Special amenities and spaces for your furry friends.", icon: "🐾" }
];

const technologies = [
  { icon: "🔒", title: "Face ID Entry", desc: "Unlock your room with facial recognition." },
  { icon: "🛰️", title: "Satellite TV", desc: "200+ channels in every room." },
  { icon: "🛎️", title: "Robot Room Service", desc: "Order and receive items via delivery robots." },
  { icon: "🌐", title: "Multilingual AI", desc: "Instant translation for global guests." },
  { icon: "🧼", title: "UV-C Sanitization", desc: "Rooms sanitized with UV-C tech after every checkout." },
  { icon: "📶", title: "5G Coverage", desc: "Ultra-fast 5G internet throughout the property." }
];

const testimonials = [
  {
    name: "Amit Sharma",
    country: "India",
    text: "The smart room controls and AI concierge made my stay so comfortable and futuristic. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sophia Lee",
    country: "Singapore",
    text: "Contactless check-in was super fast and the Wi-Fi 6 was perfect for my work meetings.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Lucas Weber",
    country: "Germany",
    text: "Loved the eco-friendly room and the amazing spa! The digital key was so convenient.",
    img: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

const stats = [
  { label: "Happy Guests", value: "12,000+" },
  { label: "Smart Rooms", value: "180+" },
  { label: "Awards", value: "15" },
  { label: "Years of Excellence", value: "10+" }
];

const festivalBanner = (
  <div className="bg-gradient-to-r from-purple-500 via-pink-300 to-yellow-300 text-white px-4 py-2 rounded-full font-semibold shadow text-center mb-6 border-2 border-purple-600 animate-pulse text-sm sm:text-base">
    🎉 Special Monsoon & Diwali Stay Packages Available!{" "}
    <span className="underline cursor-pointer hover:text-blue-700">Book Now</span>
  </div>
);

const Home = () => {
  const [current, setCurrent] = useState(0);
  const progressRef = useRef();
  const [showBookNow, setShowBookNow] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.classList.remove("w-full");
      void progressRef.current.offsetWidth;
      progressRef.current.classList.add("w-full");
    }
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] font-['Playfair_Display',serif] px-2 sm:px-4">
      
      {/* Festival Banner */}
      {festivalBanner}

      {/* Image Slider with Auto Progress Bar */}
      <div className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96 mb-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-purple-600 bg-white/80">
        <img
          src={images[current]}
          alt="Hotel Slide"
          className="object-cover w-full h-full transition-transform duration-[2900ms] ease-in-out scale-100"
          style={{ transform: "scale(1.08)" }}
          key={current}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/60 via-yellow-100/20 to-transparent pointer-events-none"></div>
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-yellow-700 text-white rounded-full p-2 sm:p-3 shadow-lg border-2 border-yellow-400 z-10"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-yellow-700 text-white rounded-full p-2 sm:p-3 shadow-lg border-2 border-yellow-400 z-10"
        >
          &#8594;
        </button>
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full border-2 ${idx === current ? "bg-purple-600 border-purple-600 scale-110" : "bg-white border-purple-600"} transition-all`}
            />
          ))}
        </div>
        {/* Auto-slide progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-yellow-200/60">
          <div
            ref={progressRef}
            key={current}
            className="h-full bg-gradient-to-r from-purple-500 via-yellow-500 to-royal rounded-full transition-all duration-[2900ms]"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>

     
      {/* Welcome Text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-royal mb-2 text-center drop-shadow font-['Playfair_Display',serif] tracking-wide">
        Welcome to <span className="text-purple-600">Rathore Hotel</span>
      </h1>
      <p className="text-base sm:text-lg text-charcoal mb-4 text-center max-w-xl font-semibold">
        Where Heritage Meets <span className="text-purple-600">Innovation</span>
      </p>
      <p className="text-base sm:text-lg text-gray-700 mb-8 text-center max-w-xl">
        Experience luxury, technology, and comfort at our premium hotel. Book your stay now and enjoy the latest in hospitality innovation!
      </p>
      {/* Book Now Button triggers modal */}
      <button
        className="w-full max-w-xs sm:max-w-md px-6 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-purple-400 via-yellow-300 to-yellow-500 text-royal rounded-full font-bold shadow-xl hover:scale-105 hover:bg-yellow-400 transition border-2 border-purple-600 text-base sm:text-lg mb-8"
        onClick={() => setShowBookNow(true)}
      >
        Book Your Royal Stay
      </button>

      {/* BookNow Modal */}
      {showBookNow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2">
          <div className="relative w-full max-w-lg mx-auto">
            <button
              className="absolute top-2 right-2 text-3xl text-gold hover:text-royal z-10"
              onClick={() => setShowBookNow(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="rounded-2xl sm:rounded-3xl overflow-y-auto max-h-[90vh] shadow-2xl bg-white">
              <BookNow />
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="w-full max-w-4xl mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/90 rounded-xl shadow p-4 sm:p-6 flex flex-col items-center border-t-4 border-purple-600">
            <span className="text-xl sm:text-3xl font-bold text-royal">{stat.value}</span>
            <span className="text-xs text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-6xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-white via-yellow-50 to-purple-50 rounded-xl shadow-md p-5 sm:p-7 flex flex-col items-center text-center hover:shadow-xl transition border-t-4 border-purple-600"
          >
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{feature.icon}</div>
            <h3 className="font-bold text-base sm:text-lg text-royal mb-1 sm:mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-xs sm:text-base">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* New Technologies Section */}
      <div className="mt-14 sm:mt-20 w-full max-w-5xl">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4 sm:mb-6 text-center">Next-Gen Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 rounded-xl shadow p-4 sm:p-6 flex flex-col items-center text-center border-t-4 border-yellow-400 hover:shadow-xl transition"
            >
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{tech.icon}</div>
              <h3 className="font-bold text-royal mb-1">{tech.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Testimonials */}
      <div className="mt-14 sm:mt-20 w-full max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-bold text-royal mb-4 sm:mb-6 text-center">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {testimonials.map((guest, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-5 sm:p-7 flex flex-col items-center border-t-4 border-purple-600">
              <img
                src={guest.img}
                alt={guest.name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-2 sm:mb-3 border-2 border-purple-600"
              />
              <p className="text-gray-700 italic mb-2 text-xs sm:text-base">"{guest.text}"</p>
              <span className="font-semibold text-royal">{guest.name}</span>
              <span className="text-xs sm:text-sm text-gray-500">{guest.country}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
