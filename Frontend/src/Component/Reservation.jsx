import React, { useState } from "react";
import { Link } from "react-router-dom";

const roomTypes = [
  { value: "Standard", label: "Standard – Cozy, Smart Controls" },
  { value: "Deluxe", label: "Deluxe – Balcony, AI Concierge" },
  { value: "Suite", label: "Suite – Jacuzzi, Butler Service" },
  { value: "Family", label: "Family Room – 2 Queen Beds, Kids Play Area" },
  { value: "Executive", label: "Executive – Workspace, Lounge Access" },
  { value: "Presidential", label: "Presidential Suite – Terrace, Jacuzzi, Butler" },
  { value: "Heritage", label: "Heritage Suite – Antique Decor, Balcony" },
  { value: "RoyalPenthouse", label: "Royal Penthouse – Private Pool, 360° View" },
  { value: "Eco", label: "Eco Room – Green Tech, Air Purifiers" }
];

const paymentMethods = [
  "Credit Card",
  "UPI",
  "Net Banking",
  "Pay at Hotel",
  "Crypto"
];

const Reservation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    checkin: "",
    checkout: "",
    guests: 1,
    roomType: "Standard",
    payment: "Credit Card",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add API/payment gateway integration
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-14 px-2 sm:px-4">
      <div className="w-full max-w-xl mx-auto rounded-3xl shadow-2xl border-t-8 border-gold bg-white/90 backdrop-blur-md p-6 sm:p-10">
        <h2 className="text-3xl font-extrabold text-royal mb-2 text-center drop-shadow font-['Playfair_Display',serif]">
          Room Reservation
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Reserve your royal stay with smart technology, luxury, and comfort.
        </p>
        <div className="mb-4 text-center">
          <Link
            to="/rooms"
            className="inline-block bg-gradient-to-r from-gold to-yellow-400 text-royal font-bold px-4 py-2 rounded-full shadow hover:scale-105 hover:bg-gold transition border-2 border-royal"
          >
            View All Rooms
          </Link>
        </div>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow text-center">
            <h3 className="text-2xl font-semibold mb-2">Reservation Successful!</h3>
            <p>
              Thank you, <span className="font-bold">{form.name}</span>.<br />
              Your booking is confirmed.
            </p>
            <div className="mt-4">
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-royal via-gold to-yellow-400 text-white font-bold px-4 py-2 rounded-full shadow hover:scale-105 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <form className="space-y-4 bg-white/80 rounded-xl shadow-lg p-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Mobile</label>
              <input
                type="tel"
                name="mobile"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="10 digit Mobile number"
                value={form.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Check-in</label>
                <input
                  type="date"
                  name="checkin"
                  value={form.checkin}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Check-out</label>
                <input
                  type="date"
                  name="checkout"
                  value={form.checkout}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Guests</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="10"
                  value={form.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Room Type</label>
                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  {roomTypes.map((room) => (
                    <option key={room.value} value={room.value}>{room.label}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Payment Method */}
            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Payment Method</label>
              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
              <div className="text-xs text-gray-500 mt-1 flex gap-2 flex-wrap">
                <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">🔒 Secure Payment</span>
                <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-semibold">💳 Instant Confirmation</span>
                <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">🪙 Crypto Accepted</span>
              </div>
            </div>
            {/* Special Requests */}
            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Special Requests</label>
              <textarea
                name="requests"
                placeholder="Special Requests (optional)"
                value={form.requests}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 via-gold to-yellow-400 text-royal py-2 rounded-full font-bold shadow hover:scale-105 transition border-2 border-pink-600"
            >
              Reserve Now
            </button>
          </form>
        )}
        <div className="mt-8 text-center text-xs text-gray-500">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold shadow">
            Need help? Call our 24/7 desk: <a href="tel:+9123456789" className="underline hover:text-royal">+91-123456789</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reservation;