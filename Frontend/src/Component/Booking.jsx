import React, { useState } from "react";

const Booking = () => {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    special: "",
    eventType: "Dining",
    tableType: "Standard",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Booking failed. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-12 px-2 sm:px-4">
      <div className="max-w-xl mx-auto bg-gradient-to-br from-yellow-50 via-white to-cyan-50 rounded-3xl shadow-2xl border-t-8 border-gold p-8">
        <h2 className="text-4xl font-extrabold text-royal mb-2 text-center drop-shadow font-['Playfair_Display',serif] tracking-wide">
          Book a Table or Event
        </h2>
        <p className="text-center text-gray-700 mb-6 text-lg">
          Reserve your table or event space at <span className="text-gold font-semibold">Rathore Hotel</span> for a memorable experience with gourmet dining, luxury service, and smart hospitality.
        </p>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow text-center">
            <h3 className="text-2xl font-semibold mb-2">Booking Confirmed!</h3>
            <p>
              Thank you, <span className="font-bold">{booking.name}</span>.<br />
              We look forward to welcoming you!
            </p>
            <div className="mt-4">
              <span className="inline-block bg-gold/10 text-royal px-4 py-2 rounded-full font-semibold shadow">
                Need to make changes? <a href="/contact" className="underline hover:text-gold">Contact our team</a>
              </span>
            </div>
          </div>
        ) : (
          <form className="space-y-4 bg-white/90 rounded-2xl shadow-lg p-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-center font-semibold">
                {error}
              </div>
            )}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Event Type</label>
                <select
                  name="eventType"
                  value={booking.eventType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="Dining">Dining</option>
                  <option value="Birthday">Birthday Party</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Table Type</label>
                <select
                  name="tableType"
                  value={booking.tableType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="Standard">Standard</option>
                  <option value="Private">Private Booth</option>
                  <option value="Outdoor">Outdoor Seating</option>
                  <option value="VIP">VIP Lounge</option>
                </select>
              </div>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={booking.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={booking.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={booking.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={booking.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Time</label>
                <input
                  type="time"
                  name="time"
                  value={booking.time}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                max="20"
                value={booking.guests}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <textarea
              name="special"
              placeholder="Special Requests (optional)"
              value={booking.special}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
              rows={3}
            />
            <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-2">
              <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">💡 Smart Lighting Ambience</span>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-semibold">🎶 Live Music Available</span>
              <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">🧑‍🍳 Chef’s Special Menu</span>
              <span className="inline-block bg-pink-100 text-pink-700 px-2 py-1 rounded-full font-semibold">🎂 Custom Cake on Request</span>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-semibold">👑 Royal Decor Setup</span>
              <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">🎥 Live Event Streaming</span>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-royal via-gold to-yellow-400 text-white py-3 rounded-full font-bold shadow-lg hover:scale-105 transition border-2 border-gold text-lg tracking-wide"
            >
              Confirm Booking
            </button>
          </form>
        )}
        <div className="mt-8 text-center text-xs text-gray-500">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold shadow">
            Need help? Call our events desk: <a href="tel:+919876543210" className="underline hover:text-royal">+91-9876543210</a>
          </span>
        </div>
        {/* WhatsApp Quick Chat */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-100 via-emerald-100 to-green-200 text-green-900 px-5 py-2 rounded-full font-semibold shadow hover:bg-green-200 transition border border-green-400"
          >
            <span role="img" aria-label="whatsapp">💬</span> Chat with us on WhatsApp
          </a>
        </div>
        {/* Google Maps Embed */}
        <div className="mt-6 flex justify-center">
          <iframe
            title="Rathore Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902278487893!2d75.8131!3d25.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzQ2LjciTiA3NcKwNDgnNDcuMiJF!5e0!3m2!1sen!2sin!4v1688999999999!5m2!1sen!2sin"
            width="100%"
            height="140"
            style={{ border: 0, borderRadius: "1rem", boxShadow: "0 2px 16px #0001" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Royal Feature Banner */}
        <div className="mt-8 text-center">
          <span className="inline-block bg-gold/10 text-royal px-7 py-3 rounded-full font-semibold shadow text-base tracking-wide border border-gold/30">
            Experience <span className="text-gold">royal hospitality</span> with <span className="text-emerald-700">personalized service</span> & <span className="text-pink-700">luxury ambience</span>!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Booking;