import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-20 text-center text-white border-t border-black">
      <h2 className="text-3xl font-bold mb-6">
        Where Mindsets Shift & African Impact Begin.
      </h2>
      <Link
        to="/partner"
        className="px-6 py-3 bg-[#C8A44B] hover:bg-[#b59642] rounded-md font-semibold text-white shadow-md transition-all"
      >
        Partner With Us
      </Link>
      <div className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Upstride Africa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
