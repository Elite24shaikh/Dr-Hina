import { GlassBadge } from "./GlassBadge";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    result: "–12kg in 3 Months",
    text: "The combination of personal consulting and the tracking app changed everything. I finally feel in control of my health.",
    avatar: "SJ",
    color: "bg-emerald-400/15 text-emerald-300",
  },
  {
    name: "Michael Chen",
    result: "+5kg Muscle Mass",
    text: "Meticulous meal plans and constant support. The app makes tracking water and calories completely frictionless.",
    avatar: "MC",
    color: "bg-sky-400/15 text-sky-300",
  },
  {
    name: "Emma Richards",
    result: "Better Energy & Sleep",
    text: "The detox program was gentle but incredibly effective. The professional guidance gave me the confidence to stick with it.",
    avatar: "ER",
    color: "bg-purple-400/15 text-purple-300",
  },
];

export function Testimonials() {
  return (
    <section id="results" className="relative py-20 md:py-28 rounded-[28px] overflow-hidden" style={{
      background: 'linear-gradient(165deg, #1a1a2e 0%, #16213e 35%, #0f3d3e 70%, #1a3c34 100%)',
    }}>
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <GlassBadge className="mb-5 bg-white/[0.07] text-white/70 border-white/[0.08]">Real Results</GlassBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-[1.15]">
            Stories of <span className="italic text-emerald-300/90">Transformation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="premium-card rounded-[24px] p-8 flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex gap-1 mb-6 text-amber-400/80">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="font-body text-base text-white/45 leading-[1.8] mb-8 flex-grow font-light italic">
                "{t.text}"
              </p>

              <div className="pt-6 border-t border-white/[0.06] flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-body font-semibold text-sm ${t.color}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-white/85">
                    {t.name}
                  </h4>
                  <p className="font-body text-xs text-emerald-300/60 font-medium mt-0.5">
                    {t.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
