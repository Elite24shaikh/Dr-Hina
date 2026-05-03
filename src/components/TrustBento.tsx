import { GlassBadge } from "./GlassBadge";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShieldCheck, UserCheck, TrendingUp, Award } from "lucide-react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

function ImageMarquee() {
  const degreeImages = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="relative overflow-hidden py-8 rounded-[24px] mb-16 bg-white/5 p-4 backdrop-blur-sm border border-emerald-500/10">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-emerald-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-emerald-50 to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee gap-8 whitespace-nowrap px-4">
        {[...degreeImages, ...degreeImages].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Degree ${String(idx + 1)}`}
            className="h-48 md:h-64 w-auto object-contain rounded-lg opacity-90 transition-opacity hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
}

/* ---- Animated Counter ---- */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---- Stats Data ---- */
const stats = [
  { value: 200, suffix: "+", unit: "kgs", label: "Total Weight Lost", desc: "Across all programs" },
  { value: 98, suffix: "%", unit: "", label: "Success Rate", desc: "Sustained long-term results" },
  { value: 100, suffix: "+", unit: "", label: "Active Users", desc: "And growing every day" },
];

/* ---- Trust Features ---- */
const trustFeatures = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    bg: "bg-emerald-50",
    title: "Certified Expertise",
    desc: "Recognised clinical nutritionist with years of hands-on experience.",
  },
  {
    icon: <UserCheck className="w-5 h-5 text-sky-500" />,
    bg: "bg-sky-50",
    title: "Personalised Plans",
    desc: "Every diet is tailored exclusively to your metrics and goals.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
    bg: "bg-purple-50",
    title: "Real Results",
    desc: "Measurable, sustainable health improvements that last a lifetime.",
  },
  {
    icon: <Award className="w-5 h-5 text-orange-400" />,
    bg: "bg-orange-50",
    title: "Safe & Guided",
    desc: "Medically sound advice with secure data handling at every step.",
  },
];

/* ---- Marquee Logos ---- */
const marqueeItems = [
  "HealthTech Magazine",
  "Certified Clinical Nutritionist",
  "Digital Health Awards 2025",
  "Wellness India Featured",
  "App Store Top 50 Health",
  "ISO 27001 Compliant",
];

export function TrustBento() {
  return (
    <section className="section-container-tinted py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <GlassBadge className="mb-5">Why Choose Us</GlassBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight leading-[1.15]">
            Expertise You Can Trust
          </h2>
          <p className="font-body text-foreground/60 mt-5 text-base font-light leading-[1.8]">
            We combine medical knowledge with modern technology for the safest, most effective health journey.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* Stats row — spans full width */}
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="premium-card health-glass rounded-[24px] p-8 flex flex-col items-start"
            >
              <div className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-1 tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                {stat.unit && (
                  <span className="text-lg font-body font-light text-foreground/40 ml-1">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="font-body text-sm font-semibold text-foreground/80 mb-0.5">
                {stat.label}
              </p>
              <p className="font-body text-xs text-foreground/40 font-light">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust feature cards — 2x2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {trustFeatures.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="premium-card health-glass rounded-[24px] p-6"
            >
              <div
                className={`w-10 h-10 rounded-[14px] ${feat.bg} flex items-center justify-center mb-4`}
              >
                {feat.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                {feat.title}
              </h3>
              <p className="font-body text-xs text-foreground/55 leading-[1.8] font-light">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <ImageMarquee />

        {/* Marquee */}
        <div className="relative overflow-hidden py-6 rounded-[20px]">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-50/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-50/60 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-3 mx-6 text-foreground/30 font-body text-sm font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-300/60" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
