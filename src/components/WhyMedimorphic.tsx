import { GlassBadge } from "./GlassBadge";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Ban,
  Scale,
  Leaf,
  Stethoscope,
  Clock,
  Globe,
  Award,
  Users,
  ShieldCheck,
  MessageCircle,
  Smartphone,
  HandHeart,
  Sparkles,
} from "lucide-react";

/* ── Why Not Bullets ── */
const whyNotItems = [
  { icon: <Ban className="w-4 h-4" />, text: "No crash diets" },
  { icon: <Ban className="w-4 h-4" />, text: "No food restriction" },
  {
    icon: <Ban className="w-4 h-4" />,
    text: "No unrealistic body standards",
  },
];

/* ── Experience ── */
const experienceItems = [
  {
    icon: <Stethoscope className="w-4 h-4" />,
    text: "Qualified medical doctor with specialization in nutrition & lifestyle medicine",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    text: "10+ years of clinical experience",
  },
  {
    icon: <Users className="w-4 h-4" />,
    text: "Hundreds of successful patient transformations",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    text: "Trusted by patients across India and internationally",
  },
  {
    icon: <Award className="w-4 h-4" />,
    text: "Recognized for ethical, patient-first healthcare",
  },
];

/* ── Approach ── */
const approachItems = [
  {
    icon: <HeartPulse className="w-4 h-4" />,
    text: "Personalized, non-restrictive nutrition plans",
  },
  {
    icon: <Leaf className="w-4 h-4" />,
    text: "Home-based foods, no unnecessary supplements",
  },
  {
    icon: <Scale className="w-4 h-4" />,
    text: "Root-cause healing, not symptom masking",
  },
  {
    icon: <Ban className="w-4 h-4" />,
    text: "No calorie obsession",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Health improvement without 'dieting' pressure",
  },
  {
    icon: <Leaf className="w-4 h-4" />,
    text: "Lifestyle-focused, sustainable results",
  },
];

/* ── Ethics ── */
const ethicsItems = [
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: "No false promises or shortcuts",
  },
  {
    icon: <HandHeart className="w-4 h-4" />,
    text: "Personalized plans that fit your lifestyle",
  },
  {
    icon: <Users className="w-4 h-4" />,
    text: "One-to-one guidance with regular follow-ups",
  },
  {
    icon: <Smartphone className="w-4 h-4" />,
    text: "Easy support via WhatsApp / app",
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    text: "Focus on safe, sustainable, long-term health",
  },
];

/* ── Bento Data ── */
const bentoCards = [
  {
    title: "Experience",
    subtitle: "Clinical Excellence",
    items: experienceItems,
    icon: <Stethoscope className="w-5 h-5" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Approach",
    subtitle: "Our Method",
    items: approachItems,
    icon: <Leaf className="w-5 h-5" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Ethics & Patient Care",
    subtitle: "Trust First",
    items: ethicsItems,
    icon: <HandHeart className="w-5 h-5" />,
    className: "md:col-span-3",
  },
];

export function WhyMedimorphic() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden rounded-[28px] mx-0 bg-[#0f2d20]">

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <GlassBadge className="mb-5 bg-white/[0.07] text-white/70 border-white/[0.08]">Why Medimorphic</GlassBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-[1.15] mb-6">
            A System Built on{" "}
            <span className="italic text-emerald-300/90">Trust & Science</span>
          </h2>
          <p className="font-body text-white/40 text-lg font-light leading-[1.8] max-w-2xl mx-auto">
            We believe in nutrition and lifestyle changes that fit your real life
            — helping you feel lighter, stronger, more energetic, and healthier
            through simple, sustainable habits.
          </p>
        </div>

        {/* "What we don't do" strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {whyNotItems.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white-500/10 border border-white/10 text-white"
            >
              <span className="text-white-400/70">{item.icon}</span>
              <span className="font-body font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {bentoCards.map((card, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className={`rounded-[24px] p-8 group relative bg-white shadow-xl ${card.className}`}
              >
                {/* Top */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-[14px] bg-emerald-50 flex items-center justify-center text-emerald-600">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-emerald-950">
                      {card.title}
                    </h3>
                    <p className="font-body text-xs text-emerald-900/60">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* Items */}
                <div
                  className={`space-y-3 ${card.className.includes("col-span-3")
                    ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-3 space-y-0"
                    : ""
                    }`}
                >
                  {card.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="w-7 h-7 rounded-[10px] bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600/70 mt-0.5">
                        {item.icon}
                      </div>
                      <p className="font-body text-sm text-emerald-950/70 font-light leading-[1.8]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hover line accent */}
                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-white/20 text-sm font-light italic max-w-lg mx-auto leading-[1.8]">
            Our goal: helping you heal with trust, clarity, and confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
