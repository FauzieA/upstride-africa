import { Link } from "react-router-dom";
import {
  Target,
  Handshake,
  Building2,
  GraduationCap,
  School,
  Briefcase,
  BookOpen,
} from "lucide-react";
import heroImage from "../assets/Home.jpg";
import logo from "../assets/logo.png";
import schoolsImage from "../assets/students.jpg";
import teachersImage from "../assets/teachers.jpg";
import companiesImage from "../assets/companies.jpg";
import mapImage from "../assets/map.jpg"; // ✅ Import your map

function Home() {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Logo on top-left */}
        <div className="absolute top-6 left-8 z-20">
          <img
            src={logo}
            alt="Upstride Africa"
            className="h-20 md:h-30 w-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20">
          <div className="max-w-xl text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-snug">
              Reshaping Africa’s Future <br /> Through Skills, Innovation &
              Impact
            </h1>
            <p className="text-base md:text-lg font-light mb-6 text-gray-200">
              Exclusive training for schools, companies, and associations —
              designed for transformation, not theory.
            </p>
            <Link
              to="/programs"
              className="px-5 py-2.5 rounded-md bg-[#D76D07] hover:bg-[#d76d07cc] text-white font-medium text-sm md:text-base"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Overlapping */}
      <section className="relative z-10 -mt-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            { Icon: GraduationCap, value: "34", label: "Programs Delivered" },
            { Icon: School, value: "500+", label: "Students Trained" },
            { Icon: BookOpen, value: "100+", label: "Teachers Empowered" },
            { Icon: Briefcase, value: "20+", label: "Institutions Partnered" },
          ].map(({ Icon, value, label }, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-4 text-center"
            >
              <Icon className="w-8 h-8 mx-auto text-[#D76D07] mb-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A1937]">
                {value}
              </h3>
              <p className="text-gray-600 mt-1 font-light text-sm md:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Upstride - Refreshed Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background world map overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <img
            src={mapImage} // ✅ Using your local map
            alt="World Map"
            className="w-[90%] max-w-6xl object-contain mix-blend-multiply"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 text-[#0A1937]">
            Why Upstride Africa?
          </h2>

          {/* Benefits in a clean row */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                Icon: Target,
                title: "Future-Ready Skills",
                desc: "Equipping learners with essential digital, creative, and problem-solving skills.",
              },
              {
                Icon: Handshake,
                title: "Hands-On Learning",
                desc: "Real projects and workshops — learning by doing, not just theory.",
              },
              {
                Icon: Building2,
                title: "Tailored for Institutions",
                desc: "Programs designed to transform schools, companies, and associations.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <Icon className="w-12 h-12 text-[#D76D07] mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-[#0A1937]">
                  {title}
                </h3>
                <p className="text-gray-700 font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {[
        {
          title: "Empowering Schools",
          tagline: "Preparing tomorrow’s leaders",
          desc: "We equip schools with modern learning solutions — from coding and AI programs to entrepreneurial thinking, preparing students for the future of work.",
          img: schoolsImage,
          reverse: false,
        },
        {
          title: "Empowering Teachers",
          tagline: "Transforming classrooms",
          desc: "We transform teaching methods with practical training in 21st-century pedagogy, creativity, and digital innovation.",
          img: teachersImage,
          reverse: true,
        },
        {
          title: "Empowering Companies",
          tagline: "Driving innovation & growth",
          desc: "We support organizations with leadership training, innovation workshops, and future-ready skills to drive growth and competitiveness.",
          img: companiesImage,
          reverse: false,
        },
      ].map(({ title, tagline, desc, img, reverse }, i) => (
        <section
          key={i}
          className={`${i % 2 === 0 ? "bg-[#FFF7F0]" : "bg-[#F5F7FA]"} py-20`}
        >
          <div
            className={`max-w-7xl mx-auto px-6 flex flex-col md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } items-center gap-12`}
          >
            {/* Text */}
            <div className="flex-1">
              <p className="text-[#D76D07] uppercase tracking-wide font-medium mb-2">
                {tagline}
              </p>
              <h2 className="text-3xl font-bold mb-6 text-[#0A1937] border-l-4 border-[#D76D07] pl-4">
                {title}
              </h2>
              <p className="text-lg text-gray-700 font-light mb-6">{desc}</p>
              <Link
                to="/programs"
                className="text-[#D76D07] font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
            {/* Image */}
            <div className="flex-1">
              <img
                src={img}
                alt={title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="bg-[#0A1937] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Africa’s Future Together
        </h2>
        <Link
          to="/partner"
          className="px-6 py-3 bg-[#D76D07] hover:bg-[#d76d07cc] rounded-md font-medium"
        >
          Partner With Us
        </Link>
      </section>
    </div>
  );
}

export default Home;
