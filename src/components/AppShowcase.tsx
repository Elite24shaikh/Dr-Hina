import { Utensils, Droplet, LineChart, Apple, Activity, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GlassBadge } from "./GlassBadge";

import img1 from "../assets/App/1.jpg";
import img2 from "../assets/App/2.jpg";
import img3 from "../assets/App/3.jpg";
import img4 from "../assets/App/4.jpg";
import img5 from "../assets/App/5.jpg";
import img6 from "../assets/App/6.jpg";

/* ───── Feature Data ───── */
const features = [
  {
    icon: <Utensils className="w-5 h-5" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    activeBg: "bg-emerald-600",
    title: "Home Screen",
    description: "Your personalized dashboard to view daily insights, progress, and goals all in one place.",
    screenGradient: "from-emerald-900 to-emerald-950",
  },
  {
    icon: <Droplet className="w-5 h-5" />,
    color: "text-sky-500",
    bg: "bg-sky-50",
    activeBg: "bg-sky-500",
    title: "Log Screen",
    description: "Easily log your meals, water intake, and daily habits to maintain consistency.",
    screenGradient: "from-sky-900 to-sky-950",
  },
  {
    icon: <Dumbbell className="w-5 h-5" />,
    color: "text-orange-500",
    bg: "bg-orange-50",
    activeBg: "bg-orange-500",
    title: "Programs Screen",
    description: "Access tailored programs and challenges designed for your specific health goals.",
    screenGradient: "from-orange-900 to-orange-950",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    color: "text-purple-500",
    bg: "bg-purple-50",
    activeBg: "bg-purple-500",
    title: "Profile Screen",
    description: "Manage your personal settings, track your history, and update your preferences.",
    screenGradient: "from-purple-900 to-purple-950",
  },
  {
    icon: <Apple className="w-5 h-5" />,
    color: "text-rose-500",
    bg: "bg-rose-50",
    activeBg: "bg-rose-500",
    title: "Add Food",
    description: "Quickly input your meals with a comprehensive database and real-time macros.",
    screenGradient: "from-rose-900 to-rose-950",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    color: "text-amber-500",
    bg: "bg-amber-50",
    activeBg: "bg-amber-500",
    title: "Add Activity",
    description: "Record your daily exercises and stay on top of your physical activity targets.",
    screenGradient: "from-amber-900 to-amber-950",
  },
];

const screens = [
  <img src={img1} alt="Home Screen" className="w-full h-full object-cover" />,
  <img src={img2} alt="Log Screen" className="w-full h-full object-cover" />,
  <img src={img3} alt="Programs Screen" className="w-full h-full object-cover" />,
  <img src={img4} alt="Profile Screen" className="w-full h-full object-cover" />,
  <img src={img5} alt="Add Food" className="w-full h-full object-cover" />,
  <img src={img6} alt="Add Activity" className="w-full h-full object-cover" />
];

/* ───── Main Component ───── */
export function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeat = features[activeIndex];

  return (
    <section id="features" className="relative section-container py-16 md:py-20">
      {/* Header */}
      <div className="pb-12 text-center max-w-2xl mx-auto px-4">
        <GlassBadge className="mb-5">Our App Features</GlassBadge>
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight leading-[1.15]">
          Your Health, <span className="italic">Simplified</span>
        </h2>
        <p className="font-body text-foreground/60 mt-5 text-base font-light leading-[1.8]">
          Everything you need to stay on track, in one beautifully designed app.
        </p>
      </div>

      {/* ── Desktop: Tab-based with animated phone ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          {/* Left — Tabs + content */}
          <div>
            {/* Tab buttons */}
            <div className="flex gap-2 mb-10">
              {features.map((feat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${i === activeIndex
                    ? `${feat.activeBg} text-white shadow-lg`
                    : "bg-foreground/5 text-foreground/50 hover:bg-foreground/10"
                    }`}
                >
                  {feat.icon}
                  <span className="hidden xl:inline">{feat.title}</span>
                </button>
              ))}
            </div>

            {/* Active feature content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="min-h-[240px]"
              >
                <div className={`w-14 h-14 rounded-[18px] ${activeFeat.bg} flex items-center justify-center mb-6 ${activeFeat.color}`}>
                  {activeFeat.icon}
                </div>
                <h3 className="font-heading font-semibold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                  {activeFeat.title}
                </h3>
                <p className="font-body text-foreground/60 text-lg leading-[1.8] font-light max-w-md mb-8">
                  {activeFeat.description}
                </p>

                {/* Progress dots */}
                <div className="flex items-center gap-3">
                  {features.map((_, j) => (
                    <button
                      key={j}
                      onClick={() => setActiveIndex(j)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${j === activeIndex ? "w-10 bg-foreground" : "w-3 bg-foreground/15 hover:bg-foreground/30"
                        }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — Phone mockup */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-16 bg-gradient-to-br from-emerald-100/40 via-transparent to-sky-100/30 rounded-full blur-3xl" />

              <div className="relative w-[280px]">
                <div className="relative bg-[#111] rounded-[2.5rem] p-2 shadow-2xl border border-black/10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#111] rounded-b-2xl z-20" />
                  {/* Screen */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-[2rem] overflow-hidden bg-gradient-to-b ${activeFeat.screenGradient} aspect-[9/19.5]`}
                    >
                      {screens[activeIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile: Stacked cards ── */}
        <div className="lg:hidden">
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="premium-card bg-white border border-emerald-100/60 rounded-[24px] p-7 flex flex-col items-start"
              >
                <div className={`w-12 h-12 rounded-[16px] ${feature.bg} flex items-center justify-center mb-5 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-foreground/60 leading-[1.8] font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
