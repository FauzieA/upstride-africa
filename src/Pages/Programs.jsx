// src/Pages/Programs.jsx
import { Link } from "react-router-dom";
import {
  Code,
  Cpu,
  Lightbulb,
  Users,
  BookOpen,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { programsData } from "../data/ProgramsData";

const iconMap = {
  Bootcamp: Code,
  Program: Cpu,
  Workshop: Lightbulb,
  "Social Impact": Users,
  default: BookOpen,
};

function Programs() {
  return (
    <div className="w-full bg-white text-[#0A0A0A] font-sans">
      {/* Hero */}
      <section className="text-center py-20 bg-[#FAFAFA] border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Programs
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg font-light">
            Explore our transformative programs — workshops, bootcamps and training designed to
            equip the next generation of African changemakers.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {programsData.map((p) => {
            const Icon = iconMap[p.category] || iconMap.default;
            return (
              <article
                key={p.id}
                className="group flex flex-col bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                aria-labelledby={`title-${p.id}`}
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#C8A44B]/15 p-2 rounded-md">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <span className="text-sm text-gray-500">{p.category}</span>
                    </div>
                    <span className="text-sm text-gray-500">{p.duration}</span>
                  </div>

                  <h3 id={`title-${p.id}`} className="text-xl font-semibold mb-2">{p.title}</h3>

                  <p className="text-gray-700 text-sm mb-6 line-clamp-3">
                    {p.short || p.expectation || p.goal}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <Link
                      to={`/programs/${p.id}`}
                      className="text-[#C8A44B] font-medium hover:underline"
                    >
                      View Details →
                    </Link>

                    <span className="text-xs text-gray-400">Upstride</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Programs;
