import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200); // Simulate async
    // Add logic to send the form data to your backend or email service here
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132] py-14 px-4">
      <div className="max-w-xl mx-auto bg-gradient-to-br from-yellow-50 via-white to-emerald-50 rounded-3xl shadow-2xl border-t-8 border-gold p-8">
        <h2 className="text-4xl font-extrabold text-royal mb-4 text-center drop-shadow font-['Playfair_Display',serif]">
          Contact Us
        </h2>
        <p className="text-lg text-charcoal mb-8 text-center font-semibold">
          Have questions or need assistance? Fill out the form below and our team will get back to you soon.
        </p>
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <span className="bg-gradient-to-r from-royal/10 to-gold/10 text-royal px-4 py-1 rounded-full text-xs font-semibold shadow flex items-center gap-1 border border-gold">
            <span role="img" aria-label="phone">📞</span> +91 1234567890
          </span>
          <span className="bg-gradient-to-r from-gold/10 to-yellow-100 text-gold px-4 py-1 rounded-full text-xs font-semibold shadow flex items-center gap-1 border border-gold">
            <span role="img" aria-label="email">✉️</span> info@rathorehotel.com
          </span>
          <span className="bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-semibold shadow flex items-center gap-1 border border-emerald-300">
            <span role="img" aria-label="location">📍</span> Bhilwara, India
          </span>
        </div>
        {submitted ? (
          <div className="bg-emerald-100 text-emerald-800 p-8 rounded-xl shadow text-center font-bold text-lg border-t-4 border-emerald-400 animate-fade-in">
            🎉 Thank you for reaching out! <br /> We will contact you soon.
          </div>
        ) : (
          <form
            className="space-y-5 bg-gradient-to-br from-white via-gold/10 to-cyan-50 p-8 rounded-2xl shadow-xl border border-gold/30"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white/80 font-medium text-royal"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white/80 font-medium text-royal"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone (optional)"
              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white/80 font-medium text-royal"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white/80 font-medium text-royal"
              rows={4}
              required
            />
            <div className="flex items-center gap-3">
              <label className="flex items-center text-xs text-gray-600">
                <input type="checkbox" required className="mr-2 accent-gold" />
                I agree to the <a href="#" className="underline text-gold ml-1">privacy policy</a>
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-gold via-yellow-400 to-royal text-royal py-3 rounded-full font-extrabold shadow-lg hover:scale-105 hover:bg-gold transition border-2 border-royal text-lg tracking-wide ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
        <div className="mt-8 text-center text-sm text-gray-500">
          <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-semibold shadow border border-pink-200">
            Need urgent help? Try our{" "}
            <a
              href="tel:+919876543210"
              className="underline hover:text-royal font-bold"
            >
              24/7 Helpline
            </a>
          </span>
        </div>
        {/* New Feature: WhatsApp Quick Chat */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://wa.me/91123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 transition border border-green-300"
          >
            <span role="img" aria-label="whatsapp">💬</span> Chat with us on WhatsApp
          </a>
        </div>
        {/* New Feature: Google Maps */}
        <div className="mt-8 flex justify-center">
          <iframe
            title="Rathore Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902278487893!2d75.8131!3d25.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzQ2LjciTiA3NcKwNDgnNDcuMiJF!5e0!3m2!1sen!2sin!4v1688999999999!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0, borderRadius: "1rem", boxShadow: "0 2px 16px #0001" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
