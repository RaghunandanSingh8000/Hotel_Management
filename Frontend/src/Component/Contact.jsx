import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [activeTab, setActiveTab] = useState('contact');
  const mapRef = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
      }, 5000);
    }, 1500);
    // Add logic to send the form data to your backend or email service here
  };

  const contactMethods = [
    {
      icon: "👑",
      title: "Royal Concierge",
      value: "+91 1234567890",
      desc: "24/7 Premium Support",
      action: "tel:+911234567890",
      bg: "from-purple-100 to-purple-50",
      text: "text-purple-700",
      border: "border-purple-300"
    },
    {
      icon: "✉️",
      title: "Royal Mail",
      value: "info@rathorehotel.com",
      desc: "Response within 2 hours",
      action: "mailto:info@rathorehotel.com",
      bg: "from-gold/20 to-yellow-50",
      text: "text-yellow-700",
      border: "border-gold"
    },
    {
      icon: "📍",
      title: "Palace Location",
      value: "Heritage Quarter, Rajasthan",
      desc: "Bhilwara, India - 311001",
      action: "#map",
      bg: "from-emerald-100 to-cyan-50",
      text: "text-emerald-700",
      border: "border-emerald-300"
    },
    {
      icon: "💬",
      title: "WhatsApp Royal",
      value: "+91 9876543210",
      desc: "Instant chat support",
      action: "https://wa.me/919876543210",
      bg: "from-green-100 to-green-50",
      text: "text-green-700",
      border: "border-green-300"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: '🏨 General Inquiry', icon: '🏨' },
    { value: 'booking', label: '🛏️ Room Booking', icon: '🛏️' },
    { value: 'events', label: '🎪 Events & Weddings', icon: '🎪' },
    { value: 'dining', label: '🍽️ Restaurant Reservation', icon: '🍽️' },
    { value: 'spa', label: '💆‍♂️ Spa & Wellness', icon: '💆‍♂️' },
    { value: 'corporate', label: '🏢 Corporate Booking', icon: '🏢' },
    { value: 'complaint', label: '⚠️ Complaint/Feedback', icon: '⚠️' }
  ];

  const departments = [
    {
      name: "Reservations Department",
      phone: "+91 1234567891",
      email: "reservations@rathorehotel.com",
      hours: "24/7 Available",
      icon: "🛏️"
    },
    {
      name: "Events & Banquets",
      phone: "+91 1234567892",
      email: "events@rathorehotel.com",
      hours: "9:00 AM - 9:00 PM",
      icon: "🎪"
    },
    {
      name: "Dining Services",
      phone: "+91 1234567893",
      email: "dining@rathorehotel.com",
      hours: "6:00 AM - 11:00 PM",
      icon: "🍽️"
    },
    {
      name: "Spa & Wellness",
      phone: "+91 1234567894",
      email: "spa@rathorehotel.com",
      hours: "8:00 AM - 10:00 PM",
      icon: "💆‍♂️"
    }
  ];

  const socialLinks = [
    { platform: 'Facebook', icon: '📘', url: 'https://facebook.com/rathorehotel', color: 'text-blue-600' },
    { platform: 'Instagram', icon: '📷', url: 'https://instagram.com/rathorehotel', color: 'text-pink-600' },
    { platform: 'Twitter', icon: '🐦', url: 'https://twitter.com/rathorehotel', color: 'text-blue-400' },
    { platform: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/rathorehotel', color: 'text-blue-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 px-4 relative overflow-hidden">
      {/* Royal Pattern Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 viewBox%3D%220 0 100 100%22%3E%3Cpath d%3D%22M50 10l10 30h30l-25 20 10 30-25-20-25 20 10-30-25-20h30z%22 fill%3D%22%23f7c873%22/%3E%3C/svg%3E')] bg-repeat"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-gold via-yellow-400 to-amber-300 rounded-full flex items-center justify-center shadow-2xl border-4 border-gold/30">
              <span className="text-4xl">👑</span>
            </div>
            <div>
              <h1 className="text-6xl font-extrabold tracking-wide font-['Playfair_Display',serif] bg-gradient-to-r from-gold via-yellow-200 to-gold bg-clip-text text-transparent drop-shadow-2xl">
                Royal Contact
              </h1>
              <p className="text-gold/80 text-xl font-semibold tracking-widest">
                YOUR LUXURY AWAITS
              </p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience personalized service fit for royalty. Our dedicated team is here to assist you 
            with reservations, inquiries, and creating unforgettable memories.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`bg-gradient-to-br ${method.bg} backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 border-2 ${method.border} hover:shadow-2xl group cursor-pointer`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{method.icon}</div>
              <h3 className={`${method.text} font-bold text-lg mb-2 font-['Playfair_Display',serif]`}>
                {method.title}
              </h3>
              <p className={`${method.text} font-semibold mb-1`}>{method.value}</p>
              <p className="text-gray-600 text-sm">{method.desc}</p>
            </a>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-gold/30">
            {[
              { id: 'contact', label: '📝 Contact Form', icon: '📝' },
              { id: 'departments', label: '🏢 Departments', icon: '🏢' },
              { id: 'location', label: '🗺️ Find Us', icon: '🗺️' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all mx-1 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-gold via-yellow-400 to-gold text-[#1a1a2e] shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form Tab */}
        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/95 via-gold/5 to-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-gold/30 p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-8xl mb-6">👑</div>
                  <h3 className="text-3xl font-bold text-royal mb-4 font-['Playfair_Display',serif]">
                    Royal Message Received!
                  </h3>
                  <p className="text-xl text-gray-700 mb-8">
                    Thank you for contacting us. Our royal team will respond within 2 hours.
                  </p>
                  <div className="flex justify-center gap-4">
                    <span className="px-6 py-3 bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 rounded-full font-semibold border border-emerald-300">
                      ✨ Confirmation sent to your email
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Inquiry Type Selection */}
                  <div className="mb-8">
                    <label className="block text-lg font-bold text-royal mb-4 font-['Playfair_Display',serif]">
                      👑 Royal Inquiry Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {inquiryTypes.map(type => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({...formData, inquiryType: type.value})}
                          className={`p-3 rounded-xl border-2 transition-all text-sm font-semibold ${
                            formData.inquiryType === type.value
                              ? 'bg-gradient-to-r from-gold to-yellow-400 text-royal border-gold shadow-lg scale-105'
                              : 'bg-white border-gold/30 text-gray-700 hover:border-gold/60 hover:bg-gold/10'
                          }`}
                        >
                          <div className="text-xl mb-1">{type.icon}</div>
                          <div className="text-xs">{type.label.split(' ').slice(1).join(' ')}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-royal font-semibold mb-2">👤 Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Royal Name"
                        className="w-full px-4 py-4 border-2 border-gold/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold bg-white/90 font-medium text-royal placeholder:text-gray-500 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-royal font-semibold mb-2">📧 Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-4 border-2 border-gold/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold bg-white/90 font-medium text-royal placeholder:text-gray-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-royal font-semibold mb-2">📱 Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 Your Phone Number"
                        className="w-full px-4 py-4 border-2 border-gold/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold bg-white/90 font-medium text-royal placeholder:text-gray-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-royal font-semibold mb-2">📋 Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject of your inquiry"
                        className="w-full px-4 py-4 border-2 border-gold/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold bg-white/90 font-medium text-royal placeholder:text-gray-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-royal font-semibold mb-2">💬 Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can make your experience royal..."
                      className="w-full px-4 py-4 border-2 border-gold/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold bg-white/90 font-medium text-royal placeholder:text-gray-500 transition-all resize-none"
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1 accent-gold scale-125" />
                    <label className="text-sm text-gray-600 leading-relaxed">
                      I agree to the <a href="/privacy" className="underline text-gold hover:text-royal font-semibold">Privacy Policy</a> and 
                      consent to be contacted by Rathore Hotel regarding my inquiry. I understand that my information will be handled with royal confidentiality.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-gold via-yellow-400 to-amber-300 text-[#1a1a2e] py-6 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all border-4 border-gold/30 text-xl tracking-wide font-['Playfair_Display',serif] ${
                      loading ? "opacity-60 cursor-not-allowed scale-100" : "hover:shadow-gold/50"
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#1a1a2e]"></div>
                        Sending Royal Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <span>👑</span>
                        Send Royal Message
                        <span>✨</span>
                      </div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Departments Tab */}
        {activeTab === 'departments' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white/95 via-gold/5 to-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-gold/30 hover:border-gold/60 transition-all hover:scale-105 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{dept.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-royal mb-3 font-['Playfair_Display',serif]">
                        {dept.name}
                      </h3>
                      <div className="space-y-2">
                        <a href={`tel:${dept.phone}`} className="flex items-center gap-2 text-gold hover:text-royal transition">
                          <span>📞</span>
                          <span className="font-semibold">{dept.phone}</span>
                        </a>
                        <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-gold hover:text-royal transition">
                          <span>✉️</span>
                          <span className="font-semibold">{dept.email}</span>
                        </a>
                        <div className="flex items-center gap-2 text-gray-600">
                          <span>⏰</span>
                          <span className="font-medium">{dept.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Location Tab */}
        {activeTab === 'location' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white/95 via-gold/5 to-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-gold/30 overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-royal mb-4 font-['Playfair_Display',serif]">
                  🏰 Find Our Royal Palace
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  Located in the heart of Rajasthan's heritage quarter, experience luxury redefined.
                </p>
              </div>
              
              {/* Google Maps */}
              <div className="px-8 pb-8">
                <iframe
                  ref={mapRef}
                  title="Rathore Hotel Royal Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902278487893!2d75.8131!3d25.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzQ2LjciTiA3NcKwNDgnNDcuMiJF!5e0!3m2!1sen!2sin!4v1688999999999!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: "1rem", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Address Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-gold/10 to-transparent">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏰</div>
                  <h4 className="font-bold text-royal mb-1">Royal Address</h4>
                  <p className="text-sm text-gray-600">Heritage Quarter, Near City Palace<br/>Bhilwara, Rajasthan - 311001</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚗</div>
                  <h4 className="font-bold text-royal mb-1">Transportation</h4>
                  <p className="text-sm text-gray-600">Valet Parking Available<br/>Airport Transfer Service</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <h4 className="font-bold text-royal mb-1">Landmarks</h4>
                  <p className="text-sm text-gray-600">City Palace - 2 mins<br/>Railway Station - 15 mins</p>
                </div>
              </div>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Contact;