import { GlassBadge } from "./GlassBadge";
import { motion } from "framer-motion";

const transformations = [
  {
    name: "Ayesha K.",
    metric: "-12 kg",
    duration: "12 weeks",
    tag: "Body fat ↓ 6%",
    quote: "The system changed my relationship with food. I never felt like I was on a diet.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Rahul M.",
    metric: "+5 kg",
    duration: "8 weeks",
    tag: "Lean mass ↑ 4 kg",
    quote: "Finally built muscle the right way. The meal plans were perfect for my schedule.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=600&auto=format&fit=crop",
    accent: "bg-sky-100 text-sky-700",
  },
  {
    name: "Priya S.",
    metric: "-8 kg",
    duration: "10 weeks",
    tag: "Body fat ↓ 5%",
    quote: "The weekly reviews kept me accountable. I've never stuck with a plan this long.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
    accent: "bg-purple-100 text-purple-700",
  },
  {
    name: "Vikram D.",
    metric: "-15 kg",
    duration: "16 weeks",
    tag: "Cholesterol ↓ 20%",
    quote: "My doctor couldn't believe the blood work improvements. This system is genuinely life-changing.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    accent: "bg-orange-100 text-orange-700",
  },
];

export function TransformationGallery() {
  return (
    <section className="section-container py-20 md:py-28">
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
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group relative premium-card rounded-[24px] overflow-hidden border border-foreground/[0.04]"
            >
              {/* Image header */}
              <div className="relative h-56 w-full">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`tag-pill text-[10px] font-body font-semibold ${t.accent} border-none`}>
                      {t.tag}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="font-heading text-4xl font-semibold text-white tracking-tight">
                      {t.metric}
                    </div>
                    <p className="font-body text-xs text-white/80 font-light">
                      in {t.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white flex flex-col justify-between h-[180px]">
                <p className="font-body text-sm text-foreground/60 leading-[1.8] font-light italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-foreground/5 mt-auto">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-semibold ${t.accent}`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">{t.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
