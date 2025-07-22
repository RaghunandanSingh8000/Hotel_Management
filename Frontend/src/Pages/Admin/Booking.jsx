import React, { useState } from 'react';

const roomTypes = [
  { value: "standard", label: "Standard" },
  { value: "deluxe", label: "Deluxe" },
  { value: "suite", label: "Suite" },
  { value: "family", label: "Family" },
  { value: "presidential", label: "Presidential" }
];

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save booking to localStorage for admin panel visibility
    const bookingData = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      date: form.checkIn,
      time: "12:00", // Default time, can be customized
      guests: form.guests,
      room: roomTypes.find(rt => rt.value === form.roomType)?.label || "Standard",
      status: "Pending"
    };
    const prev = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...prev, bookingData]));

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setForm({
      name: '',
      email: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      roomType: 'standard',
    });
  };

  return (
    <div className="booking-page min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-10">
      <div className="w-full max-w-md bg-white/90 rounded-3xl shadow-2xl p-8 border-4 border-yellow-400">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#6a4fb6] font-['Playfair_Display',serif]">Book Your Royal Stay</h2>
        {success && (
          <div className="mb-4 p-3 rounded bg-green-100 text-green-700 text-center font-semibold border border-green-300">
            Booking submitted successfully!
          </div>
        )}
        <form onSubmit={handleSubmit} className="booking-form flex flex-col gap-4">
          <label className="font-semibold text-[#232946]">
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </label>
          <label className="font-semibold text-[#232946]">
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </label>
          <div className="flex gap-4">
            <label className="flex-1 font-semibold text-[#232946]">
              Check-In:
              <input
                type="date"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>
            <label className="flex-1 font-semibold text-[#232946]">
              Check-Out:
              <input
                type="date"
                name="checkOut"
                value={form.checkOut}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>
          </div>
          <label className="font-semibold text-[#232946]">
            Guests:
            <input
              type="number"
              name="guests"
              min="1"
              value={form.guests}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </label>
          <label className="font-semibold text-[#232946]">
            Room Type:
            <select
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {roomTypes.map(rt => (
                <option key={rt.value} value={rt.value}>{rt.label}</option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 to-[#6a4fb6] text-white font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;