import React, { useState } from 'react';
import axios from 'axios';

const roomTypes = [
  { value: "Standard", label: "Standard – Cozy, Smart Controls" },
  { value: "Deluxe", label: "Deluxe – Balcony, AI Concierge" },
  { value: "Suite", label: "Suite – Jacuzzi, Butler Service" },
  { value: "Rajwada", label: "Rajwada Suite – Private Balcony, AR Tour" },
  { value: "Eco", label: "Eco Room – Green Materials, Air Purifiers" }
];

const aiSuggestions = [
  "Late check-in",
  "Allergy-friendly room",
  "Airport pickup",
  "Birthday decoration",
  "Extra pillows"
];

const BookNow = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'Standard',
    special: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:5000/api/bookings";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAiSuggestion = (suggestion) => {
    setForm((prev) => ({
      ...prev,
      special: prev.special
        ? prev.special + "; " + suggestion
        : suggestion
    }));
    setAiOpen(false);
  };

  const getNights = () => {
    if (!form.checkIn || !form.checkOut) return 0;
    const inDate = new Date(form.checkIn);
    const outDate = new Date(form.checkOut);
    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const getPrice = () => {
    const base = {
      Standard: 2000,
      Deluxe: 3500,
      Suite: 6000,
      Rajwada: 9000,
      Eco: 2500
    };
    const nights = getNights();
    return nights > 0 ? base[form.roomType] * nights : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios.post(API_URL, form);
      setSubmitted(true);
    } catch (err) {
      setError("Booking failed. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-gradient-to-br from-[#1a1333] via-[#f7c873] to-[#0f5132] py-14 px-4">
      <div className="max-w-lg mx-auto bg-gradient-to-br from-[#fffbe6] via-[#fbeee6] to-[#e6e2d3] rounded-[2.5rem] shadow-royal border-t-[10px] border-gold p-10 relative">
        {/* Royal Crown SVG */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
            <path d="M5 35L15 10L30 30L45 10L55 35" stroke="#c59d5f" strokeWidth="4" fill="none"/>
            <circle cx="15" cy="10" r="4" fill="#c59d5f" />
            <circle cx="30" cy="30" r="4" fill="#c59d5f" />
            <circle cx="45" cy="10" r="4" fill="#c59d5f" />
          </svg>
        </div>
        <h2 className="text-4xl font-extrabold text-[#c59d5f] mb-2 text-center drop-shadow font-['Playfair_Display',serif] tracking-wider">
          Royal Reservation
        </h2>
        <p className="text-center text-[#3e2d0c] mb-6 font-medium">
          Secure your <span className="text-gold font-semibold">royal experience</span> at Rathore Hotel.<br />
          Enjoy <span className="text-gold">smart rooms</span>, <span className="text-gold">heritage luxury</span>, and <span className="text-gold">personalized service</span>.
        </p>
        {submitted ? (
          <div className="bg-gradient-to-r from-[#e6e2d3] via-[#fffbe6] to-[#f7c873] text-green-900 p-6 rounded-xl shadow text-center font-semibold animate-fade-in border-2 border-gold/30">
            <span className="text-3xl">🎉</span><br />
            <span className="text-xl font-bold">Thank you for booking!</span>
            <div className="mt-2 text-base">We will contact you soon.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-gradient-to-br from-white via-gold/10 to-[#f7f5e6] p-8 rounded-2xl shadow-xl border border-gold/40">
            {error && (
              <div className="bg-red-100 text-red-700 p-2 rounded text-center font-semibold border border-red-200">{error}</div>
            )}
            <div>
              <label className="block text-sm font-semibold text-[#c59d5f] mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="w-full px-4 py-2 border-2 border-gold/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-[#fffbe6] font-medium text-royal shadow-inner"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#c59d5f] mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full px-4 py-2 border-2 border-gold/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-[#fffbe6] font-medium text-royal shadow-inner"
                placeholder="Valid Email Id"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#c59d5f] mb-1">Mobile</label>
              <input
                type="tel"
                name="mobile"
                pattern="[0-9]{10}"
                maxLength={10}
                value={form.mobile}
                onChange={handleChange}
                required
                autoComplete="tel"
                className="w-full px-4 py-2 border-2 border-gold/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-[#fffbe6] font-medium text-royal shadow-inner"
                placeholder="10 digit Mobile number"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-[#c59d5f] mb-1">Check-In</label>
                <input
                  type="date"
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2 border-2 border-gold/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-[#fffbe6] font-medium text-royal shadow-inner"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-[#c59d5f] mb-1">Check-Out</label>
                <input
                  type="date"
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                  required
                  min={form.checkIn}
                  className="w-full px-4 py-2 border-2 border-gold/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-[#fffbe6] font-medium text-royal shadow-inner"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-[#c59d5f] mb-1">Guests</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="10"
                  value={form.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gold/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-[#fffbe6] font-medium text-royal shadow-inner"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-[#c59d5f] mb-1">Room Type</label>
                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gold/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-[#fffbe6] font-medium text-royal shadow-inner"
                >
                  {roomTypes.map((room) => (
                    <option key={room.value} value={room.value}>{room.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#c59d5f] mb-1 flex items-center gap-2">
                Special Requests
                <button
                  type="button"
                  className="text-xs px-2 py-1 bg-gold/20 text-gold rounded hover:bg-gold/40 transition"
                  onClick={() => setAiOpen((v) => !v)}
                  aria-label="AI Suggestions"
                >
                  <span role="img" aria-label="bulb">💡</span> AI Suggest
                </button>
              </label>
              <textarea
                name="special"
                value={form.special}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gold/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-[#fffbe6] font-medium text-royal shadow-inner"
                placeholder="Let us know if you have any special requests (e.g. late check-in, allergies, etc.)"
                rows={2}
              />
              {aiOpen && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {aiSuggestions.map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      className="bg-gradient-to-r from-[#c59d5f]/20 to-[#f7c873]/40 text-[#7c5a1a] px-3 py-1 rounded-full text-xs font-semibold hover:bg-gold/40 transition border border-gold"
                      onClick={() => handleAiSuggestion(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Price Estimation */}
            <div className="bg-gradient-to-r from-[#fffbe6] via-[#f7c873]/30 to-[#e6e2d3] border border-gold/40 rounded-lg px-4 py-2 text-[#c59d5f] font-semibold text-center shadow-inner">
              {getNights() > 0
                ? <>Estimated Price: <span className="text-gold">₹{getPrice().toLocaleString()}</span> for {getNights()} night(s)</>
                : <>Select check-in and check-out for price estimate</>
              }
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" required className="accent-gold" />
              <span className="text-xs text-[#7c5a1a]">
                I agree to the <a href="#" className="underline text-gold">privacy policy</a>
              </span>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-[#c59d5f] via-[#f7c873] to-[#e6e2d3] text-[#2d1c00] py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:bg-gold transition border-2 border-[#c59d5f] text-lg tracking-wide ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Booking..." : "Book Now"}
            </button>
          </form>
        )}
        <div className="mt-8 text-center">
          <span className="inline-block bg-gradient-to-r from-[#c59d5f]/10 to-[#f7c873]/30 text-[#c59d5f] px-5 py-2 rounded-full font-semibold shadow border border-gold/30">
            Need help? Call our 24/7 reservation desk: <a href="tel:+911234556" className="underline hover:text-[#7c5a1a]">+91-1234556</a>
          </span>
        </div>
        {/* WhatsApp Quick Chat */}
        <div className="mt-5 flex justify-center">
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#e6ffe6] to-[#d3f9d8] text-green-900 px-5 py-2 rounded-full font-semibold shadow hover:bg-green-200 transition border border-green-300"
          >
            <span role="img" aria-label="whatsapp">💬</span> Chat with us on WhatsApp
          </a>
        </div>
        {/* Google Maps Embed */}
        <div className="mt-8 flex justify-center">
          <iframe
            title="Rathore Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902278487893!2d75.8131!3d25.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzQ2LjciTiA3NcKwNDgnNDcuMiJF!5e0!3m2!1sen!2sin!4v1688999999999!5m2!1sen!2sin"
            width="100%"
            height="160"
            style={{ border: 0, borderRadius: "1.5rem", boxShadow: "0 4px 24px #c59d5f33" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookNow;