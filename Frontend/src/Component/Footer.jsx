import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a2238] via-[#f7c873] to-[#0f5132] text-white py-14 mt-14 shadow-inner border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Branding & Copyright */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="text-2xl font-bold tracking-wide font-['Playfair_Display',serif] text-[#f7c873] drop-shadow">
            Rathore Hotel
          </span>
          <span className="text-xs md:ml-4 text-white/80">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/about" className="hover:text-[#f7c873] transition">About</Link>
          <Link to="/facilities" className="hover:text-[#f7c873] transition">Facilities</Link>
          <Link to="/activities" className="hover:text-[#f7c873] transition">Activities</Link>
          <Link to="/contact" className="hover:text-[#f7c873] transition">Contact</Link>
        </div>
      </div>
      {/* Social Links & Contact */}
      <div className="flex flex-col items-center gap-2 mt-10">
        <span className="font-semibold text-sm mb-1">Connect with us:</span>
        <div className="flex space-x-4 mt-1">
          <a href="https://facebook.com/yourhotel" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#4267B2] transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/></svg>
          </a>
          <a href="https://twitter.com/yourhotel" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#1DA1F2] transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.14 12.14 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
          </a>
          <a href="https://instagram.com/yourhotel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E1306C] transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.03 4.92 4.92 0 0 1 1.03 1.77c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.03 1.77 4.92 4.92 0 0 1-1.77 1.03c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.03 4.92 4.92 0 0 1-1.03-1.77c-.17-.46-.354-1.26-.41-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.03-1.77 4.92 4.92 0 0 1 1.77-1.03c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.1.54a6.92 6.92 0 0 0-2.5 1.64A6.92 6.92 0 0 0 .54 4.1c-.228.77-.412 1.67-.47 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.242 2.18.47 2.95a6.92 6.92 0 0 0 1.64 2.5 6.92 6.92 0 0 0 2.5 1.64c.77.228 1.67.412 2.95.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.18-.242 2.95-.47a6.92 6.92 0 0 0 2.5-1.64 6.92 6.92 0 0 0 1.64-2.5c.228-.77.412-1.67.47-2.95.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.242-2.18-.47-2.95a6.92 6.92 0 0 0-1.64-2.5A6.92 6.92 0 0 0 19.9.54c-.77-.228-1.67-.412-2.95-.47C15.668.012 15.264 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
          </a>
        </div>
        <div className="mt-2 text-xs text-white/80">
          <span className="mr-2">📞 +91 1234567890</span>
          <span>✉️ info@rathorehotel.com</span>
        </div>
      </div>
      {/* Newsletter Signup */}
      <div className="flex flex-col items-center mt-10">
        <span className="font-semibold text-sm mb-2">Subscribe to our Newsletter</span>
        <form className="flex flex-col sm:flex-row gap-2 items-center w-full max-w-md">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded-full border-none focus:ring-2 focus:ring-gold text-royal placeholder:text-royal/60"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-gold to-yellow-400 text-royal font-bold rounded-full shadow hover:scale-105 transition border-2 border-gold"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="mt-10 text-center text-xs text-white/70 font-semibold tracking-wide">
        🏨 Where Heritage Meets Innovation &nbsp;|&nbsp; Designed with ❤️ in Rajasthan
      </div>
    </footer>
  );
};

export default Footer;