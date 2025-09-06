import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const roomTypes = [
  { value: "Royal Suite", label: "Royal Suite – Luxury, Jacuzzi, Palace View" },
  { value: "Smart Deluxe Room", label: "Smart Deluxe Room – IoT Controls, Modern Tech" },
  { value: "Premium Room", label: "Premium Room – Elegant, City View, Comfort" },
  { value: "Wellness Suite", label: "Wellness Suite – Spa, Yoga, Relaxation" },
  { value: "Executive Room", label: "Executive Room – Business, Premium, Butler" },
  { value: "Family Room", label: "Family Room – Spacious, Kids-friendly, Kitchenette" },
  { value: "Standard Room", label: "Standard Room – Cozy, Essential Amenities" },
  { value: "Luxury Suite", label: "Luxury Suite – Premium Experience, VIP Services" }
];

const paymentMethods = [
  "Credit Card",
  "UPI",
  "Net Banking",
  "Pay at Hotel",
  "Crypto"
];

const API_BASE_URL = 'http://localhost:5000/api';

const BookNow = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    checkin: "",
    checkout: "",
    guests: 1,
    roomType: "Royal Suite",
    payment: "Credit Card",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [roomPrice, setRoomPrice] = useState(0);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [checkingAvailability, setCheckingAvailability] = useState(false);

  // Sample room prices (these would normally come from your API)
  const roomPrices = {
    "Royal Suite": 25000,
    "Smart Deluxe Room": 15000,
    "Premium Room": 12000,
    "Wellness Suite": 18000,
    "Executive Room": 20000,
    "Family Room": 22000,
    "Standard Room": 8000,
    "Luxury Suite": 30000
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update room price when room type changes
    if (name === 'roomType') {
      setRoomPrice(roomPrices[value] || 0);
    }
  };

  // Check room availability when dates or room type change
  useEffect(() => {
    if (form.checkin && form.checkout && form.roomType) {
      checkAvailability();
    }
  }, [form.checkin, form.checkout, form.roomType]);

  // Set initial room price
  useEffect(() => {
    setRoomPrice(roomPrices[form.roomType] || 0);
  }, []);

  const checkAvailability = async () => {
    if (!form.checkin || !form.checkout) return;
    
    setCheckingAvailability(true);
    try {
      const response = await fetch(`${API_BASE_URL}/rooms/availability`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          checkin: form.checkin,
          checkout: form.checkout,
          guests: form.guests,
          roomType: form.roomType
        })
      });

      if (response.ok) {
        const data = await response.json();
        setAvailableRooms(data.availableRooms);
        setError(null);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to check availability');
        setAvailableRooms([]);
      }
    } catch (error) {
      console.error('Availability check error:', error);
      setError('Unable to check room availability. Please try again.');
      setAvailableRooms([]);
    } finally {
      setCheckingAvailability(false);
    }
  };

  const calculateTotalAmount = () => {
    if (!form.checkin || !form.checkout) return 0;
    const checkinDate = new Date(form.checkin);
    const checkoutDate = new Date(form.checkout);
    const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
    return roomPrice * nights * form.guests;
  };

  const calculateNights = () => {
    if (!form.checkin || !form.checkout) return 0;
    const checkinDate = new Date(form.checkin);
    const checkoutDate = new Date(form.checkout);
    return Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Validate check-in and check-out dates
    if (new Date(form.checkin) >= new Date(form.checkout)) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    // Check if rooms are available
    if (availableRooms.length === 0) {
      setError("No rooms available for selected dates and room type. Please choose different dates or room type.");
      return;
    }

    setLoading(true);

    try {
      const reservationData = {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        checkin: form.checkin,
        checkout: form.checkout,
        guests: parseInt(form.guests),
        roomType: form.roomType,
        requests: form.requests,
        paymentMethod: form.payment
      };

      console.log('Submitting reservation:', reservationData);

      const response = await fetch(`${API_BASE_URL}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData)
      });

      const result = await response.json();

      if (response.ok) {
        setBookingDetails(result.reservation);
        setSubmitted(true);
        setError(null);
      } else {
        throw new Error(result.error || 'Reservation failed');
      }
    } catch (error) {
      console.error('Reservation error:', error);
      setError(error.message || 'Reservation failed. Please check if the server is running and try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      mobile: "",
      checkin: "",
      checkout: "",
      guests: 1,
      roomType: "Royal Suite",
      payment: "Credit Card",
      requests: "",
    });
    setSubmitted(false);
    setError(null);
    setBookingDetails(null);
    setAvailableRooms([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-14 px-2 sm:px-4">
      <div className="w-full max-w-xl mx-auto rounded-3xl shadow-2xl border-t-8 border-gold bg-white/90 backdrop-blur-md p-6 sm:p-10">
        <h2 className="text-3xl font-extrabold text-royal mb-2 text-center drop-shadow font-['Playfair_Display',serif]">
          🏰 Room Reservation
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Reserve your royal stay with smart technology, luxury, and comfort.
        </p>
        <div className="mb-4 text-center">
          <Link
            to="/rooms"
            className="inline-block bg-gradient-to-r from-gold to-yellow-400 text-royal font-bold px-4 py-2 rounded-full shadow hover:scale-105 hover:bg-gold transition border-2 border-royal"
          >
            🏨 View All Rooms
          </Link>
        </div>

        {submitted && bookingDetails ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-semibold mb-4">Reservation Confirmed!</h3>
            <div className="bg-white/80 rounded-lg p-6 mb-6 text-left">
              <h4 className="font-bold text-lg mb-3 text-center">Booking Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Booking ID:</span>
                  <span className="text-blue-600 font-bold">{bookingDetails.bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Guest Name:</span>
                  <span>{bookingDetails.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Room Type:</span>
                  <span>{bookingDetails.roomType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Room Number:</span>
                  <span className="font-bold">{bookingDetails.roomNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Check-in:</span>
                  <span>{new Date(bookingDetails.checkin).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Check-out:</span>
                  <span>{new Date(bookingDetails.checkout).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="text-xl font-bold text-green-600">₹{bookingDetails.totalAmount?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Advance Required:</span>
                  <span className="text-orange-600 font-bold">₹{bookingDetails.advanceAmount?.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <p className="mb-6">
              Thank you, <span className="font-bold">{bookingDetails.name}</span>!<br />
              Your booking is confirmed. A confirmation email has been sent.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-royal via-gold to-yellow-400 text-white font-bold px-4 py-2 rounded-full shadow hover:scale-105 transition"
              >
                🏠 Back to Home
              </Link>
              <button
                onClick={resetForm}
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-4 py-2 rounded-full shadow hover:scale-105 transition"
              >
                📝 New Booking
              </button>
            </div>
          </div>
        ) : (
          <form className="space-y-4 bg-white/80 rounded-xl shadow-lg p-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                <h4 className="font-semibold mb-1">⚠️ Error:</h4>
                <p>{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="10 digit mobile number"
                value={form.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Check-in Date *</label>
                <input
                  type="date"
                  name="checkin"
                  value={form.checkin}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Check-out Date *</label>
                <input
                  type="date"
                  name="checkout"
                  value={form.checkout}
                  onChange={handleChange}
                  min={form.checkin}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Number of Guests *</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="8"
                  value={form.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-royal mb-1">Room Type *</label>
                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  {roomTypes.map((room) => (
                    <option key={room.value} value={room.value}>{room.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Room Availability Status */}
            {form.checkin && form.checkout && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-blue-800">🏨 Room Availability</h4>
                  {checkingAvailability && (
                    <div className="flex items-center text-blue-600">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                      Checking...
                    </div>
                  )}
                </div>
                {availableRooms.length > 0 ? (
                  <div className="text-green-700 bg-green-100 px-3 py-2 rounded-lg">
                    ✅ {availableRooms.length} rooms available for {form.roomType}
                  </div>
                ) : form.checkin && form.checkout && !checkingAvailability ? (
                  <div className="text-red-700 bg-red-100 px-3 py-2 rounded-lg">
                    ❌ No rooms available for selected dates
                  </div>
                ) : null}
              </div>
            )}

            {/* Price Calculation */}
            {form.checkin && form.checkout && roomPrice > 0 && (
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                <h4 className="font-semibold text-royal mb-3">💰 Price Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Room Type:</span>
                    <span className="font-semibold">{form.roomType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price per night:</span>
                    <span>₹{roomPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of nights:</span>
                    <span>{calculateNights()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of guests:</span>
                    <span>{form.guests}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold text-royal">
                    <span>Total Amount:</span>
                    <span>₹{calculateTotalAmount().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-orange-600">
                    <span>Advance Required (30%):</span>
                    <span className="font-bold">₹{(calculateTotalAmount() * 0.3).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Payment Method</label>
              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
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

            <div>
              <label className="block text-sm font-semibold text-royal mb-1">Special Requests</label>
              <textarea
                name="requests"
                placeholder="Any special arrangements or requests..."
                value={form.requests}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                rows={3}
              />
            </div>

            <button
              type="submit"
              disabled={loading || availableRooms.length === 0}
              className={`w-full py-3 rounded-full font-bold shadow hover:scale-105 transition border-2 ${
                loading || availableRooms.length === 0
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed border-gray-400'
                  : 'bg-gradient-to-r from-pink-400 via-gold to-yellow-400 text-royal border-pink-600'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-royal mr-3"></div>
                  Processing Reservation...
                </div>
              ) : availableRooms.length === 0 && form.checkin && form.checkout ? (
                '❌ No Rooms Available'
              ) : (
                '🏰 Reserve Now'
              )}
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

export default BookNow;