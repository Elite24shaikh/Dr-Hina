import { GlassBadge } from "./GlassBadge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Weight Loss Program",
    desc: "A sustainable, science-backed approach to burning fat and building lean muscle — without crash diets. Real food, real results, guided by clinical expertise.",
    img: "../assets/weight.jpg",
    tag: "Most Popular",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    reverse: false,
  },
  {
    title: "Weight Gain Program",
    desc: "Healthy, calorie-dense meal plans designed to help you build lean muscle mass safely and effectively with expert nutritional support and tracking.",
    img: "#",
    tag: "For Athletes",
    tagColor: "bg-sky-50 text-sky-700 border-sky-100",
    reverse: true,
  },
  {
    title: "Detox & Reset Plan",
    desc: "Cleanse your body, boost your immune system, and regain your natural energy with our science-backed guided detox protocols and daily tracking.",
    img: "#",
    tag: "7-Day Reset",
    tagColor: "bg-purple-50 text-purple-700 border-purple-100",
    reverse: false,
  },
];

export function ServicesChess() {
  return (
    <section id="services" className="section-container py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <GlassBadge className="mb-5">Our Programs</GlassBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight leading-[1.15]">
            Designed for <span className="italic">You</span>
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-24">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${prog.reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* Image */}
              <div className="h-[420px] rounded-[28px] overflow-hidden shadow-xl group relative">
                <img
                  src={prog.img}
                  alt={prog.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex flex-col items-start">
                <span
                  className={`tag-pill text-xs font-semibold tracking-widest uppercase mb-5 ${prog.tagColor}`}
                >
                  {prog.tag}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
                  {prog.title}
                </h3>
                <p className="font-body text-foreground/60 text-base mb-8 max-w-md leading-[1.8] font-light">
                  {prog.desc}
                </p>
                <button className="btn-premium bg-foreground text-white rounded-full pl-6 pr-2 py-2.5 font-body text-sm font-medium hover:bg-foreground/90 flex items-center gap-4 group">
                  Learn More
                  <div className="bg-white/10 rounded-full p-2 group-hover:bg-white/20 transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
