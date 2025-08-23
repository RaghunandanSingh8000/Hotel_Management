import React, { useState } from "react";
import { Link } from "react-router-dom";

// Fix: Use direct public path instead of import
const Logo = () => (
  <div className="flex items-center gap-2">
    <img
      src="/Slide/Royal_.jpg"
      alt="Rathore Hotel Logo"
      className="w-12 h-12 rounded-full border-4 border-gold shadow-lg object-cover bg-black"
      onError={e => { e.target.style.display = "none"; }}
    />
    <span className="font-['Playfair_Display',serif] text-4xl font-extrabold text-[#c59d5f] tracking-wider drop-shadow-lg">
      Rathore <span className="text-royal">Hotel</span>
    </span>
  </div>
);

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/activities", label: "Activities" },
  { to: "/facilities", label: "Facilities" },
  { to: "/rooms", label: "Rooms" },
  { to: "/events", label: "Events" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admin", label: "Admin" }
];

const Sidebar = ({ open, setOpen }) => (
  <div
    className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#232946] via-[#c59d5f]/90 to-[#0f5132] shadow-2xl z-50 transform ${
      open ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300`}
  >
    <div className="flex items-center justify-between px-6 py-5 border-b border-gold/30">
      <Logo />
      <button
        onClick={() => setOpen(false)}
        className="text-gold text-3xl focus:outline-none"
        aria-label="Close Sidebar"
      >
        &times;
      </button>
    </div>
    <nav className="flex flex-col gap-2 mt-6 px-6">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="text-lg text-gold/90 hover:text-white font-semibold py-2 px-3 rounded transition hover:bg-gold/20"
          onClick={() => setOpen(false)}
        >
          {item.label}
        </Link>
      ))}
      <Link
        to="/book-now"
        className="mt-4 px-4 py-2 bg-gradient-to-r from-gold to-yellow-400 text-royal font-bold rounded-full shadow-lg hover:scale-105 hover:bg-gold transition border-2 border-royal text-center"
        onClick={() => setOpen(false)}
      >
        Book Now
      </Link>
    </nav>
    <div className="mt-auto px-6 py-4 text-xs text-gold/70 border-t border-gold/20">
      <div>🏨 Where Heritage Meets Innovation</div>
      <div>📞 +91 1234567890</div>
      <div>✉️ info@rathorehotel.com</div>
    </div>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay for sidebar */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {/* Sidebar for mobile/tablet */}
      <Sidebar open={open} setOpen={setOpen} />

      <nav className="bg-gradient-to-r from-[#232946] via-[#c59d5f] to-[#0f5132] shadow-xl border-b-4 border-gold relative z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setOpen(true)}
              className="text-gold focus:outline-none"
              aria-label="Open Menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-lg text-white hover:text-gold font-semibold transition relative after:block after:h-0.5 after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/book-now"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-gold to-yellow-400 text-royal font-bold rounded-full shadow-lg hover:scale-105 hover:bg-gold transition border-2 border-royal text-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
        {/* Royal Info Bar */}
        <div className="hidden md:block bg-gradient-to-r from-gold/10 via-[#fffbe6]/60 to-gold/10 text-gold text-xs py-1 text-center font-semibold tracking-wide border-t border-gold/20">
          <span className="mr-4">🏨 Where Heritage Meets Innovation</span>
          <span className="mr-4">📞 +91 1234567890</span>
          <span>✉️ info@rathorehotel.com</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;