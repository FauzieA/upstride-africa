import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 w-full z-50 flex justify-center">
      <div
        className={`transition-all duration-300 flex items-center h-12 px-8 rounded-full ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white/90 backdrop-blur-md shadow-sm"
        } max-w-4xl w-full`}
      >
        {/* Center: Nav Links */}
        <div className="flex-grow flex justify-center space-x-10 text-sm">
          <Link
            to="/"
            className="text-[#0a1937] hover:text-[#d76d07] font-light tracking-wide transition-colors"
          >
            Home
          </Link>
          <Link
            to="/OurMission"
            className="text-[#0a1937] hover:text-[#d76d07] font-light tracking-wide transition-colors"
          >
            Our Mission
          </Link>
          <Link
            to="/OurApproach"
            className="text-[#0a1937] hover:text-[#d76d07] font-light tracking-wide transition-colors"
          >
            Our Approach
          </Link>
          <Link
            to="/Programs"
            className="text-[#0a1937] hover:text-[#d76d07] font-light tracking-wide transition-colors"
          >
            Programs & Services
          </Link>
    
        <Link
            to="/Partner"
            className="text-[#0a1937] hover:text-[#d76d07] font-light tracking-wide transition-colors"
          >
            Partner With Us
          </Link>
       </div>

      </div>  
    
    </nav>
      );
}

export default NavBar;
