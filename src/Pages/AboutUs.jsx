import { Link } from "react-router-dom";
import { Target, Briefcase, GraduationCap, BrainCircuit  } from "lucide-react";
import logo from "../assets/logo.png";

function About() {
  return (
    <div className="w-full font-sans bg-white text-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-44 pb-36 text-center overflow-hidden bg-gradient-to-b from-[#FAFAFA] via-[#F8F5EB] to-white">
        {/* Decorative accents */}
        <div className="absolute -top-32 right-0 w-[450px] h-[450px] bg-[#C8A44B]/10 rotate-45 rounded-3xl blur-3xl"></div>
        <div className="absolute -bottom-24 left-0 w-[400px] h-[400px] bg-[#0A0A0A]/5 rounded-full blur-2xl"></div>

        {/* Logo */}
        <div className="absolute top-0 left-8 z-20 drop-shadow-md">
          <img
            src={logo}
            alt="Upstride Africa"
            className="h-36 w-auto object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A0A0A] leading-snug">
            Empowering the Next Generation of{" "}
            <span className="text-[#C8A44B]">African Innovators</span>
          </h1>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            At Upstride Africa, we believe that education should spark creativity,
            innovation, and purpose — preparing young Africans not just to work,
            but to lead and transform their world.
          </p>
        </div>

        {/* Underline accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-[#C8A44B] to-transparent"></div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Soft gold corner accent */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A44B]/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#C8A44B]/5 rounded-tl-[100px] blur-2xl"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="md:w-3/4">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#C8A44B] pl-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              We are a youth-focused educational initiative dedicated to equipping
              young Africans with the knowledge and skills needed to thrive in a rapidly
              evolving world. We organize workshops and training programs in the areas
              of IT & Tech, Social Business and Entrepreneurship, and Ethical AI —
              empowering the next generation of changemakers to innovate with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C8A44B]/40 to-transparent"></div>

      {/* Mission / Vision / Approach */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        {/* Minimal geometric accent */}
        <div className="absolute -right-16 top-1/4 w-[350px] h-[350px] bg-[#0A0A0A]/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-[#0A0A0A]">
            Our Guiding Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Our Mission",
                desc: "To reshape Africa’s future by empowering young minds with transformative skills, creative confidence, and a mindset for innovation and ethical impact.",
              },
              {
                title: "Our Vision",
                desc: "A generation of young Africans leading change through innovation, empathy, and social responsibility — building the Africa we want.",
              },
              {
                title: "Our Approach",
                desc: "Blending hands-on workshops, mentorship, and real-world problem solving to spark lifelong learning and community transformation.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="text-center border-t-2 border-[#C8A44B]/30 pt-8 hover:border-[#C8A44B]/70 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#C8A44B] uppercase tracking-wide">
                  {title}
                </h3>
                <p className="text-gray-700 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0A0A0A]/10 to-transparent"></div>

      {/* Focus Areas */}
      <section className="py-24 bg-[#F8F5EB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-[#0A0A0A]">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { Icon: BrainCircuit , title: "Tech & IT" },
              { Icon: Briefcase, title: "Entrepreneurship" },
              { Icon: Target, title: "Social Business" },
              { Icon: GraduationCap, title: "Teacher Training" },
            ].map(({ Icon, title }, i) => (
              <div
                key={i}
                className="bg-white shadow-sm border border-[#0A0A0A]/5 hover:shadow-md transition-all rounded-xl py-10 px-6 hover:-translate-y-1"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-[#C8A44B]" />
                <h3 className="font-semibold text-lg text-[#0A0A0A]">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
