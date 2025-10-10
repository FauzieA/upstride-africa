import { Link } from "react-router-dom";
import { Target, Briefcase, GraduationCap, BookOpen } from "lucide-react";
import logo from "../assets/logo.png";

function About() {
  return (
    <div className="w-full font-sans bg-[#FAFAFA] text-[#0A0A0A]">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering the Next Generation of African Innovators
          </h1>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            At Upstride Africa, we believe that education should spark creativity,
            innovation, and purpose — preparing young Africans not just to work,
            but to lead and transform their world.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src={logo}
              alt="Upstride Africa"
              className="w-60 mx-auto md:mx-0 opacity-90"
            />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#0A0A0A] border-l-4 border-[#C8A44B] pl-4">
              Who We Are
            </h2>
            <p className="text-gray-700 font-light text-lg leading-relaxed">
              We are a youth-focused educational initiative dedicated to equipping
              young Africans with the knowledge and skills needed to thrive in a rapidly
              evolving world. We organize workshops and training programs in the areas
              of IT & Tech, Social Business and Entrepreneurship, and Ethical AI.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 text-center">
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
              <div key={i} className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#C8A44B] uppercase tracking-wide">
                  {title}
                </h3>
                <p className="text-gray-700 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-[#F8F5EB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#0A0A0A]">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { Icon: BookOpen, title: "Tech & IT Bootcamp" },
              { Icon: Briefcase, title: "Entrepreneurship Workshop" },
              { Icon: GraduationCap, title: "Teacher Training" },
              { Icon: Target, title: "Social Business Workshop" },
            ].map(({ Icon, title }, i) => (
              <div
                key={i}
                className="bg-white shadow-sm hover:shadow-md transition rounded-xl py-10 px-6"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-[#C8A44B]" />
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default About;
