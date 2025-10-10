// src/Pages/ProgramDetails.jsx
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle,
  Calendar,
  List,
  Users,
  Award,
} from "lucide-react";
import { programsData } from "../data/ProgramsData";

function ProgramDetails() {
  const { id } = useParams();
  const program = programsData.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="text-center py-28">
        <p className="text-gray-600 mb-6">Program not found.</p>
        <Link to="/programs" className="text-[#C8A44B] font-medium">Back to Programs</Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-[#0A0A0A] font-sans">
      {/* Hero image + title */}
      <section className="relative border-b border-black/10">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-[52vh] object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
              {program.title}
            </h1>
            <p className="text-white/90 mt-2 max-w-3xl">
              {program.short || program.expectation || program.goal}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column: meta */}
          <div className="space-y-6">
            <div className="bg-[#FAFAFA] p-5 rounded-xl border border-black/5">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-[#C8A44B]" />
                <h4 className="font-semibold">Duration</h4>
              </div>
              <p className="text-gray-700">{program.duration}</p>
            </div>

            <div className="bg-[#FAFAFA] p-5 rounded-xl border border-black/5">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-[#C8A44B]" />
                <h4 className="font-semibold">Audience</h4>
              </div>
              <p className="text-gray-700">{program.targetAudience || "Students / Educators"}</p>
            </div>

            <div className="bg-[#FAFAFA] p-5 rounded-xl border border-black/5">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-[#C8A44B]" />
                <h4 className="font-semibold">Outcome</h4>
              </div>
              <p className="text-gray-700">{program.outcome || "Practical project outcomes and applied skills."}</p>
            </div>
          </div>

          {/* Right column: details */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Overview</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {program.expectation || program.goal || program.short}
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <List className="w-5 h-5 text-[#C8A44B]" /> Modules
              </h4>

              <ol className="space-y-3 text-gray-700">
                {program.modules.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8A44B] mt-1 flex-shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4">
              <Link
                to="/partner"
                className="px-6 py-3 bg-[#C8A44B] hover:bg-[#b59642] text-white rounded-full font-semibold shadow-md transition-all"
              >
                Book a Consultation for Pricing
              </Link>

              <Link
                to="/programs"
                className="text-gray-600 hover:text-black ml-2"
              >
                ← Back to Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramDetails;
