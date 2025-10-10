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
    <nav className="fixed top-10 w-full z-50 flex justify-center">
      <div
        className={`transition-all duration-300 flex items-center h-12 px-8 rounded-full backdrop-blur-md ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white/80 shadow-sm border border-[#eaeaea]/50"
        } max-w-4xl w-full`}
      >
        {/* Center Nav Links */}
        <div className="flex-grow flex justify-center space-x-10 text-sm">
          {[
            { name: "Home", to: "/" },
            { name: "About Us", to: "/about" },
            { name: "Programs & Services", to: "/Programs" },
            { name: "Partner With Us", to: "/Partner" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="text-[#0A0A0A] hover:text-[#C8A44B] font-light tracking-wide transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
