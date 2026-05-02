import { GlassBadge } from "./GlassBadge";
import { motion } from "framer-motion";
import { useState } from "react";

import pat1 from "../assets/Patient/1.jpg";
import pat2 from "../assets/Patient/2.jpg";
import pat3 from "../assets/Patient/3.jpg";
import pat4 from "../assets/Patient/4br.jpg";
import pat5 from "../assets/Patient/5br.jpg";
import pat6 from "../assets/Patient/6br.jpg";
import pat7 from "../assets/Patient/7br.jpg";
import pat8 from "../assets/Patient/8br.jpg";
import pat9 from "../assets/Patient/9br.jpg";
import pat10 from "../assets/Patient/10br.jpg";
import pat11 from "../assets/Patient/11br.jpg";
import pat12 from "../assets/Patient/12br.jpg";
import pat13 from "../assets/Patient/13br.jpg";
import pat14 from "../assets/Patient/14br.jpg";
import pat15 from "../assets/Patient/IMG-20260419-WA0035.jpg";

const patientImages = [pat1, pat2, pat3, pat4, pat5, pat6, pat7, pat8, pat9, pat10, pat11, pat12, pat13, pat14, pat15];

const detailedTransformations = [
  {
    name: "Ayesha K.",
    metric: "-12 kg",
    duration: "12 weeks",
    tag: "Body fat ↓ 6%",
    quote: "The system changed my relationship with food. I never felt like I was on a diet.",
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Rahul M.",
    metric: "+5 kg",
    duration: "8 weeks",
    tag: "Lean mass ↑ 4 kg",
    quote: "Finally built muscle the right way. The meal plans were perfect for my schedule.",
    accent: "bg-sky-100 text-sky-700",
  },
  {
    name: "Priya S.",
    metric: "",
    duration: "",
    tag: "Body fat ↓ 5%",
    quote: "The weekly reviews kept me accountable. I've never stuck with a plan this long.",
    accent: "bg-purple-100 text-purple-700",
  },
  {
    name: "Vikram D.",
    metric: "",
    duration: "",
    tag: "Cholesterol ↓ 20%",
    quote: "My doctor couldn't believe the blood work improvements. This system is genuinely life-changing.",
    accent: "bg-orange-100 text-orange-700",
  },
];

export function TransformationGallery() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <section id="results" className="section-container py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <GlassBadge className="mb-5">Transformations</GlassBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight leading-[1.15]">
            Real People, Real Results
          </h2>
          <p className="font-body text-foreground/60 mt-5 text-base font-light leading-[1.8]">
            Every transformation is backed by science, guided by experts, and powered by our system.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {patientImages.slice(0, visibleCount).map((img, i) => {
            const data = detailedTransformations[i];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.4 }}
                className="group relative premium-card rounded-[24px] overflow-hidden border border-foreground/[0.04] bg-white flex flex-col"
              >
                {/* Image header */}
                <div className="relative h-64 w-full shrink-0">
                  <img src={img} alt={`Transformation ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                  {data && (
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`tag-pill text-[10px] font-body font-semibold ${data.accent} border-none`}>
                          {data.tag}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <div className="font-heading text-3xl font-semibold text-white tracking-tight">
                          {data.metric}
                        </div>
                        <p className="font-body text-xs text-white/80 font-light">
                          {data.duration}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                {data && (
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <p className="font-body text-sm text-foreground/70 leading-[1.6] font-light italic mb-4">
                      "{data.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-foreground/5 mt-auto">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-semibold ${data.accent}`}>
                        {data.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="font-body text-sm font-medium text-foreground">{data.name}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {visibleCount < patientImages.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-full bg-emerald-600 text-white font-body font-medium transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
