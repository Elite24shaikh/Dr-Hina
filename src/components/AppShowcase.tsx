import { Utensils, Droplet, Pill, LineChart, Apple, Moon, Activity, Bell, Heart, Timer, Dumbbell, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GlassBadge } from "./GlassBadge";

/* ───── Feature Data ───── */
const features = [
  {
    icon: <Utensils className="w-5 h-5" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    activeBg: "bg-emerald-600",
    title: "Smart Tracking",
    description: "Effortlessly log meals with our intelligent food database. Get real-time caloric breakdowns and macro tracking tailored to your goals.",
    screenGradient: "from-emerald-900 to-emerald-950",
  },
  {
    icon: <Droplet className="w-5 h-5" />,
    color: "text-sky-500",
    bg: "bg-sky-50",
    activeBg: "bg-sky-500",
    title: "Water & Hydration",
    description: "Stay optimally hydrated with smart reminders that adapt to your activity level, climate, and body weight.",
    screenGradient: "from-sky-900 to-sky-950",
  },
  {
    icon: <Pill className="w-5 h-5" />,
    color: "text-orange-500",
    bg: "bg-orange-50",
    activeBg: "bg-orange-500",
    title: "Medicine Reminders",
    description: "Never miss a dose. Set custom medication and supplement schedules with intelligent timing and dosage tracking.",
    screenGradient: "from-orange-900 to-orange-950",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    color: "text-purple-500",
    bg: "bg-purple-50",
    activeBg: "bg-purple-500",
    title: "Progress Analytics",
    description: "Visualise your journey with beautiful charts. Track weight, body fat, energy levels, and more — all in one dashboard.",
    screenGradient: "from-purple-900 to-purple-950",
  },
];

/* ───── Screen Renderers ───── */
function TrackingScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">Good Morning</p>
          <p className="font-body text-sm font-semibold text-white">Dashboard</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Bell className="w-3.5 h-3.5 text-white/60" />
        </div>
      </div>
      <div className="bg-white/10 rounded-2xl p-4 mb-3 border border-white/5 flex items-center gap-4">
        <div className="relative w-14 h-14 shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#34d399" strokeWidth="3" strokeDasharray="69, 100" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="font-body text-[9px] text-white/40">Today's Calories</p>
          <p className="font-heading text-xl font-semibold text-white">1,247</p>
          <p className="font-body text-[8px] text-emerald-400">/ 1,800 kcal</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { icon: <Apple className="w-3 h-3" />, val: "52g", label: "Protein" },
          { icon: <Droplet className="w-3 h-3" />, val: "6/8", label: "Water" },
          { icon: <Moon className="w-3 h-3" />, val: "7.2h", label: "Sleep" },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5">
            <div className="text-emerald-400 flex justify-center mb-1">{s.icon}</div>
            <p className="font-heading text-xs font-semibold text-white">{s.val}</p>
            <p className="font-body text-[7px] text-white/30">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <p className="font-body text-[9px] text-white/40">Weekly Activity</p>
          <Activity className="w-3 h-3 text-emerald-400" />
        </div>
        <div className="flex items-end gap-1 h-8">
          {[40, 65, 45, 80, 55, 70, 30].map((h, i) => (
            <div key={i} className="flex-1 bg-emerald-400/30 rounded-sm" style={{ height: `${h}%` }}>
              <div className="w-full bg-emerald-400 rounded-sm" style={{ height: `${h > 50 ? 100 : 60}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HydrationScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">Stay Hydrated</p>
          <p className="font-body text-sm font-semibold text-white">Water Tracker</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Droplet className="w-3.5 h-3.5 text-sky-300" />
        </div>
      </div>
      <div className="bg-white/10 rounded-2xl p-5 mb-4 border border-white/5 text-center">
        <div className="relative w-20 h-20 mx-auto mb-3">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="75, 100" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-heading text-lg font-semibold text-white">6</p>
            <p className="font-body text-[7px] text-white/40">/ 8 glasses</p>
          </div>
        </div>
        <p className="font-body text-[9px] text-sky-300">2 more glasses to go!</p>
      </div>
      <div className="space-y-2">
        {["7 AM", "9 AM", "11 AM", "1 PM", "3 PM", "5 PM"].map((t, i) => (
          <div key={i} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5">
            <div className="w-5 h-5 rounded-full bg-sky-400/30 flex items-center justify-center">
              <Droplet className="w-2.5 h-2.5 text-sky-300" />
            </div>
            <p className="font-body text-[9px] text-white/50 flex-1">{t}</p>
            <p className="font-body text-[8px] text-sky-300">250ml</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MedicineScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">Reminders</p>
          <p className="font-body text-sm font-semibold text-white">Medicine</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Heart className="w-3.5 h-3.5 text-orange-300" />
        </div>
      </div>
      <div className="bg-white/10 rounded-2xl p-4 mb-3 border border-white/5">
        <p className="font-body text-[9px] text-white/40 mb-1">Next Dose</p>
        <p className="font-heading text-lg font-semibold text-white mb-0.5">Vitamin D3</p>
        <p className="font-body text-[9px] text-orange-300">2:00 PM — 1 capsule</p>
        <div className="mt-3 flex gap-2">
          <button className="flex-1 bg-orange-400 rounded-lg py-1.5 text-[9px] font-semibold text-orange-950">Take Now</button>
          <button className="flex-1 bg-white/10 rounded-lg py-1.5 text-[9px] font-medium text-white/60">Skip</button>
        </div>
      </div>
      {[
        { name: "Multivitamin", time: "8 AM", taken: true },
        { name: "Omega-3", time: "8 AM", taken: true },
        { name: "Vitamin D3", time: "2 PM", taken: false },
        { name: "Probiotic", time: "9 PM", taken: false },
      ].map((m, i) => (
        <div key={i} className="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl mb-2 border border-white/5">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] ${m.taken ? "bg-orange-400 text-white" : "bg-white/10 text-white/30"}`}>
            {m.taken ? "✓" : ""}
          </div>
          <p className={`font-body text-xs flex-1 ${m.taken ? "text-white/40 line-through" : "text-white"}`}>{m.name}</p>
          <p className="font-body text-[8px] text-white/30">{m.time}</p>
        </div>
      ))}
    </div>
  );
}

function ProgressScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">This Month</p>
          <p className="font-body text-sm font-semibold text-white">Progress</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <TrendingUp className="w-3.5 h-3.5 text-purple-300" />
        </div>
      </div>
      <div className="bg-white/10 rounded-2xl p-4 mb-3 border border-white/5">
        <div className="flex items-end gap-1.5 mb-2">
          <span className="font-heading text-2xl font-semibold text-white">-3.2</span>
          <span className="font-body text-[10px] text-purple-300 mb-1">kg this month</span>
        </div>
        <svg className="w-full h-12" viewBox="0 0 200 40">
          <defs>
            <linearGradient id="pGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(192,132,252,0.3)" />
              <stop offset="100%" stopColor="rgba(192,132,252,0)" />
            </linearGradient>
          </defs>
          <polyline points="0,35 30,30 60,28 90,22 120,20 150,15 180,10 200,8" fill="url(#pGrad)" stroke="none" />
          <polyline points="0,35 30,30 60,28 90,22 120,20 150,15 180,10 200,8" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      {[
        { label: "Body Fat", val: "-1.8%", color: "text-green-400" },
        { label: "Muscle Mass", val: "+0.6 kg", color: "text-purple-300" },
        { label: "BMI", val: "23.4", color: "text-sky-300" },
        { label: "Steps Today", val: "8,420", color: "text-amber-300" },
      ].map((s, i) => (
        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl mb-2 border border-white/5">
          <p className="font-body text-xs text-white/60">{s.label}</p>
          <p className={`font-body text-xs font-semibold ${s.color}`}>{s.val}</p>
        </div>
      ))}
      <div className="mt-auto bg-white/5 rounded-xl p-3 border border-white/5 flex items-center gap-3">
        <Dumbbell className="w-4 h-4 text-purple-400" />
        <div className="flex-1">
          <p className="font-body text-[9px] text-white/60">Active Minutes</p>
          <p className="font-body text-xs text-white font-medium">42 min today</p>
        </div>
        <Timer className="w-3 h-3 text-white/30" />
      </div>
    </div>
  );
}

const screens = [<TrackingScreen />, <HydrationScreen />, <MedicineScreen />, <ProgressScreen />];

/* ───── Main Component ───── */
export function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeat = features[activeIndex];

  return (
    <section id="features" className="relative section-container py-16 md:py-20">
      {/* Header */}
      <div className="pb-12 text-center max-w-2xl mx-auto px-4">
        <GlassBadge className="mb-5">App Features</GlassBadge>
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
