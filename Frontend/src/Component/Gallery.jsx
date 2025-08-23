import React, { useState } from "react";

const galleryImages = [
  { url: "/Gallery/G1.webp" },
  { url: "/Gallery/G2.webp" },
  { url: "/Gallery/G3.webp" },
  { url: "/Gallery/G4.webp" },
  { url: "/Slide/S1.webp" },
  { url: "/Slide/S2.webp" },
  { url: "/Slide/S3.webp" },
  { url: "/Room/Room1.webp" },
  { url: "/Room/Room2.webp" },
  { url: "/Room/Room3.jpg" },
  { url: "/Room/Room4.jpg" },
  { url: "/Room/Room5.webp" },
  { url: "/Room/Room6.webp" },
  { url: "/Room/Room7.jpg" },
  { url: "/Room/Room8.webp" },
  { url: "/Room/Room9.jpeg" }
];

const Gallery = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="min-h-screen py-16 px-2 sm:px-4 bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132]">
      <h2 className="text-4xl font-extrabold text-royal mb-8 text-center drop-shadow font-['Playfair_Display',serif]">
        Gallery
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl border-t-4 border-gold hover:scale-105 transition-transform duration-300"
            onClick={() => setModalImg(img.url)}
          >
            <img
              src={img.url}
              alt={`Gallery Image ${idx + 1}`}
              className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                e.target.src = `https://via.placeholder.com/600x400/232946/f7c873?text=Image+${idx + 1}`;
              }}
            />
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
          Explore our <span className="text-gold">luxury hotel</span> gallery with beautiful images!
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