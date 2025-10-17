import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] text-white py-16 border-t border-[#1A1A1A]/50 overflow-hidden">
      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A44B]/50 to-transparent"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12 relative z-10">
        {/* Left Section */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
            Where Mindsets Shift & African Impact Begin.
          </h2>
          <Link
            to="/partner"
            className="inline-block mt-3 px-6 py-3 bg-[#C8A44B] hover:bg-[#b59642] rounded-md font-semibold text-white shadow-md transition-all"
          >
            Partner With Us
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end justify-between w-full md:w-1/3">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-6 md:mb-0">
            <Link to="/about" className="hover:text-[#C8A44B] transition">About</Link>
            <Link to="/programs" className="hover:text-[#C8A44B] transition">Programs</Link>
            <Link to="/partner" className="hover:text-[#C8A44B] transition">Partner</Link>
            <Link to="/contact" className="hover:text-[#C8A44B] transition">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-gray-400">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C8A44B] transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C8A44B] transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@upstrideafrica.org"
              className="hover:text-[#C8A44B] transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Centered Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-[#C8A44B]/10 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Upstride Africa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
