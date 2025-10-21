// src/Pages/Partner.jsx
import { useState } from "react";
import { Send, Building2, Handshake, Mail } from "lucide-react";
import partnerhero from "../assets/partner-hero.jpg";

function Partner() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="w-full bg-white text-[#0A0A0A] font-sans">
     
     {/* Hero Section */}
<section className="relative flex flex-col md:flex-row items-stretch overflow-hidden">
  {/* Left: Text Section */}
  <div className="relative flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 bg-gradient-to-br from-[#F8F5EB] via-white to-[#FAFAFA] text-[#0A0A0A] z-20">
    <div className="py-28 md:py-32 lg:py-36 max-w-lg relative z-30">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
        Partner <span className="text-[#C8A44B]">With Us</span>
      </h1>
      <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
        Join hands with Upstride Africa to empower youth, transform classrooms,
        and drive meaningful change across communities. Whether you’re an organization,
        educator, or sponsor — your partnership helps us build Africa’s future.
      </p>
      <a
        href="#consultation"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="inline-block px-6 py-3 bg-[#C8A44B] hover:bg-[#b59642] text-white rounded-md font-medium shadow-md transition-all"
      >
        Book a Consultation
      </a>
    </div>

    {/* subtle diagonal overlap onto the image side */}
    <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-[#F8F5EB] via-[#F8F5EB]/90 to-transparent z-10 [clip-path:polygon(100%_0%,0%_0%,100%_100%)]"></div>
  </div>

  {/* Right: Image Section */}
  <div className="flex-1 relative overflow-hidden -ml-12 md:-ml-16 z-10">
    <img
      src={partnerhero}
      alt="Partnership collaboration"
      className="w-full h-full object-cover"
    />

    {/* Black-to-gold blend overlay */}
    <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A]/30 via-[#C8A44B]/15 to-transparent mix-blend-multiply"></div>

    {/* Diagonal mask blending into text side */}
    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F8F5EB] via-[#F8F5EB]/60 to-transparent blur-xl [clip-path:polygon(0%_0%,100%_0%,70%_100%,0%_100%)]"></div>
  </div>
</section>





      {/* Why Partner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-[#0A0A0A]">
            Why Partner With <span className="text-[#C8A44B]">Upstride Africa</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              {
                Icon: Building2,
                title: "Corporate Social Responsibility",
                desc: "Collaborate with us to sponsor transformative workshops for students and educators — creating long-term social value.",
              },
              {
                Icon: Handshake,
                title: "Strategic Collaboration",
                desc: "Work with us to co-develop initiatives in tech, entrepreneurship, or teacher training that create meaningful community impact.",
              },
              {
                Icon: Mail,
                title: "Capacity Building",
                desc: "Empower educators and learners through joint programs that align with your organization’s sustainability and innovation goals.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-[#F8F5EB] rounded-xl shadow-sm hover:shadow-md transition-all p-8 border border-black/10"
              >
                <Icon className="w-10 h-10 mb-4 text-[#C8A44B]" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-24 bg-[#FAFAFA] border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#0A0A0A]">
            Book a Consultation
          </h2>
          <p className="text-gray-700 font-light mb-12 max-w-2xl mx-auto">
            Tell us a bit about your organization and how you'd like to
            collaborate. Our team will reach out to schedule a consultation.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="border border-black/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C8A44B] outline-none"
            />
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              placeholder="Organization Name"
              required
              className="border border-black/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C8A44B] outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="border border-black/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C8A44B] outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-black/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C8A44B] outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your goals or the kind of partnership you’re interested in"
              rows={5}
              className="md:col-span-2 border border-black/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C8A44B] outline-none"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-[#C8A44B] hover:bg-[#b59642] text-white font-semibold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Partner;
