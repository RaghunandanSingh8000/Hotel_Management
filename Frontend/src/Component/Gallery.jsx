import React, { useState } from "react";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", category: "Rooms" },
  { url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80", category: "Dining" },
  { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", category: "Spa" },
  { url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80", category: "Events" },
  { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", category: "Rooms" },
  { url: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80", category: "Dining" },
  { url: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80", category: "Spa" },
  { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", category: "Events" }
];

const categories = ["All", "Rooms", "Dining", "Spa", "Events"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImg, setModalImg] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 px-2 sm:px-4 bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132]">
      <h2 className="text-4xl font-extrabold text-royal mb-8 text-center drop-shadow font-['Playfair_Display',serif]">
        Gallery
      </h2>
      <div className="flex justify-center gap-3 sm:gap-4 mb-10 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold shadow transition border-2 ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-pink-400 via-gold to-yellow-400 text-royal border-gold scale-105"
                : "bg-white/80 text-gray-700 border-gray-200 hover:bg-gold/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
        {filteredImages.map((img, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl border-t-4 border-gold hover:scale-105 transition-transform duration-300"
            onClick={() => setModalImg(img.url)}
          >
            <img
              src={img.url}
              alt={img.category}
              className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-base font-semibold tracking-wide opacity-90 flex items-center gap-2">
              {img.category === "Rooms" && <span>🛏️</span>}
              {img.category === "Dining" && <span>🍽️</span>}
              {img.category === "Spa" && <span>💆‍♂️</span>}
              {img.category === "Events" && <span>🎉</span>}
              {img.category}
            </div>
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}
      </div>
      {/* Modal for image preview */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <div className="relative">
            <img
              src={modalImg}
              alt="Preview"
              className="max-w-3xl max-h-[80vh] rounded-2xl shadow-2xl border-4 border-gold"
            />
            <button
              className="absolute top-2 right-2 bg-white/80 text-royal rounded-full p-2 shadow-lg text-2xl font-bold hover:bg-gold transition"
              onClick={e => {
                e.stopPropagation();
                setModalImg(null);
              }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="mt-12 text-center">
        <span className="inline-block bg-gold/10 text-royal px-6 py-3 rounded-full font-semibold shadow text-base">
          Explore our <span className="text-gold">luxury rooms</span>, <span className="text-emerald-700">fine dining</span>, <span className="text-pink-700">spa</span> & <span className="text-blue-700">exclusive events</span>!
        </span>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="px-6 py-2 bg-gradient-to-r from-pink-400 via-gold to-yellow-400 text-royal font-bold rounded-full shadow hover:scale-105 hover:bg-gold transition border-2 border-pink-600"
          >
            Virtual Tour
          </a>
          <a
            href="#"
            className="px-6 py-2 bg-gradient-to-r from-royal via-gold to-yellow-400 text-white font-bold rounded-full shadow hover:scale-105 hover:bg-gold transition border-2 border-gold"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;