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
import mapImage from "../assets/map.png";

function Home() {
  return (
    <div className="w-full font-sans bg-white text-[#0A0A0A]">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center border-b border-black/10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>

        {/* Logo */}
        <div className="absolute top-0 left-8 z-20">
          <img
            src={logo}
            alt="Upstride Africa"
            className="h-36 w-auto object-contain"
          />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20">
          <div className="max-w-xl text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-snug">
              Reshaping Africa’s Future <br />{" "}
              <span className="text-[#C8A44B]">
                Through Skills, Innovation & Impact
              </span>
            </h1>
            <p className="text-base md:text-lg font-light mb-6 text-gray-200">
              Exclusive training for schools, companies, and associations — designed for
              transformation, not theory.
            </p>
            <Link
              to="/programs"
              className="px-6 py-3 rounded-full bg-[#C8A44B] hover:bg-[#b59642] text-white font-semibold shadow-md transition-all"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              className="bg-white border border-black/10 hover:border-black/20 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all"
            >
              <Icon className="w-8 h-8 mx-auto text-[#C8A44B] mb-3" />
              <h3 className="text-3xl font-bold text-black">{value}</h3>
              <p className="text-gray-700 mt-1 font-light text-sm md:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

     {/* Why Upstride */}
<section className="relative py-24 bg-white overflow-hidden">
  {/* faint decorative background */}
  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
    <img
      src={mapImage}
      alt="World Map"
      className="w-[90%] max-w-6xl object-contain mix-blend-multiply"
    />
  </div>

  <div className="relative max-w-6xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Why Choose <span className="text-[#C8A44B]">Upstride Africa?</span>
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed font-light">
        We are committed to providing innovative solutions that help create a better tomorrow for everyone. 
        Upstride Africa isn’t just about skill-building — it’s about a mindset shift. We don’t just equip young 
        Africans with tools for the future; we help them see themselves differently — as{" "}
        <span className="font-medium text-black">leaders</span>,{" "}
        <span className="font-medium text-black">innovators</span>, and{" "}
        <span className="font-medium text-black">change-makers</span>.
      </p>
    </div>

    {/* Feature Columns */}
    <div className="grid md:grid-cols-3 gap-12">
      {/* 1 */}
      <div className="group relative pl-6 border-l-4 border-black/10 hover:border-[#C8A44B] transition-all duration-300">
        <h3 className="text-xl font-semibold mb-3 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-[#C8A44B] rounded-full"></span>
          Mindset Shift
        </h3>
        <p className="text-gray-700 leading-relaxed font-light">
          We inspire young Africans to rethink who they are — building confidence, leadership, 
          and a problem-solving attitude that drives meaningful impact.
        </p>
      </div>

      {/* 2 */}
      <div className="group relative pl-6 border-l-4 border-black/10 hover:border-[#C8A44B] transition-all duration-300">
        <h3 className="text-xl font-semibold mb-3 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-[#C8A44B] rounded-full"></span>
          Deep Innovation
        </h3>
        <p className="text-gray-700 leading-relaxed font-light">
          We are committed to creating solutions that empower communities, foster creativity, 
          and prepare learners for a rapidly evolving world.
        </p>
      </div>

      {/* 3 */}
      <div className="group relative pl-6 border-l-4 border-black/10 hover:border-[#C8A44B] transition-all duration-300">
        <h3 className="text-xl font-semibold mb-3 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-[#C8A44B] rounded-full"></span>
          Rapid Value Creation
        </h3>
        <p className="text-gray-700 leading-relaxed font-light">
          We teach learners to build solutions responsibly and sustainably — with ethics, 
          purpose, and a deep understanding of real-world needs.
        </p>
      </div>
    </div>

    {/* Tagline */}
    <div className="mt-20 text-center">
      <p className="text-lg font-medium text-black italic">
        “Where Mindsets Shift & African Impact Begin.”
      </p>
    </div>
  </div>
</section>





      {/* Alternating Sections */}
      {[
        {
          title: "Empowering Students",
          tagline: "Preparing tomorrow’s leaders",
          desc: "We equip students with modern, future-focused learning experiences — from coding and innovation to entrepreneurial thinking — helping schools prepare the next generation for a world of opportunity.",
          img: schoolsImage,
          reverse: false,
        },
        {
          title: "Empowering Educators",
          tagline: "Inspiring impactful teaching",
          desc: "We equip educators with creative, practical teaching tools and digital skills that spark curiosity and innovation in their classrooms — helping them shape the changemakers of tomorrow.",
          img: teachersImage,
          reverse: true,
        },
        {
          title: "Empowering Companies",
          tagline: "Empowering impact through collaboration",
          desc: "We collaborate with companies that want to make a difference — sponsoring hands-on innovation and skills workshops for children and youth, creating real opportunities for growth and transformation.",
          img: companiesImage,
          reverse: false,
        },
      ].map(({ title, tagline, desc, img, reverse }, i) => (
        <section
          key={i}
          className={`${i % 2 === 0 ? "bg-[#FAFAFA]" : "bg-white"} py-20 border-t border-black/5`}
        >
          <div
            className={`max-w-7xl mx-auto px-6 flex flex-col md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } items-center gap-12`}
          >
            {/* Text */}
            <div className="flex-1 relative">
              {/* Black side accent bar */}
              <div className="absolute -left-6 top-0 h-full w-[3px] bg-black/80 hidden md:block"></div>
              <p className="text-[#C8A44B] uppercase tracking-widest font-medium mb-2">
                {tagline}
              </p>
              <h2 className="text-3xl font-bold mb-6 text-black border-l-4 border-[#C8A44B] pl-4">
                {title}
              </h2>
              <p className="text-lg text-gray-700 font-light mb-6">{desc}</p>
              <Link
                to="/programs"
                className="text-black font-medium hover:text-[#C8A44B] transition-all"
              >
                Learn More →
              </Link>
            </div>

            {/* Image */}
            <div className="flex-1 relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-black/80 rounded-lg -z-10"></div>
              <img
                src={img}
                alt={title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>
      ))}

      
    </div>
  );
}

export default Home;
