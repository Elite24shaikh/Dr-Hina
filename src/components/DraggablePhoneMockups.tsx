import { motion } from "framer-motion";
import { GlassBadge } from "./GlassBadge";
import {
  Apple,
  Droplet,
  Flame,
  Moon,
  Activity,
  Bell,
  ChevronRight,
  Heart,
  Salad,
  TrendingUp,
  Dumbbell,
  Timer,
} from "lucide-react";

/* ───── Individual Screen Content Renderers ───── */

function DashboardScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col bg-gradient-to-b from-emerald-900 to-emerald-950">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">Good Morning</p>
          <p className="font-body text-sm font-semibold text-white">
            Dashboard
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Bell className="w-3.5 h-3.5 text-white/60" />
        </div>
      </div>
      {/* Calories ring */}
      <div className="bg-white/10 rounded-2xl p-4 mb-3 border border-white/5 flex items-center gap-4">
        <div className="relative w-16 h-16 shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="#34d399"
              strokeWidth="3"
              strokeDasharray="69, 100"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Flame className="w-4 h-4 text-emerald-300" />
          </div>
        </div>
        <div>
          <p className="font-body text-[9px] text-white/40">Today's Calories</p>
          <p className="font-heading text-xl font-semibold text-white">
            1,247
          </p>
          <p className="font-body text-[8px] text-emerald-400">/ 1,800 kcal</p>
        </div>
      </div>
      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { icon: <Apple className="w-3 h-3" />, val: "52g", label: "Protein" },
          { icon: <Droplet className="w-3 h-3" />, val: "6/8", label: "Water" },
          { icon: <Moon className="w-3 h-3" />, val: "7.2h", label: "Sleep" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5"
          >
            <div className="text-emerald-400 flex justify-center mb-1">
              {s.icon}
            </div>
            <p className="font-heading text-xs font-semibold text-white">
              {s.val}
            </p>
            <p className="font-body text-[7px] text-white/30">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Activity bar */}
      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <p className="font-body text-[9px] text-white/40">Weekly Activity</p>
          <Activity className="w-3 h-3 text-emerald-400" />
        </div>
        <div className="flex items-end gap-1 h-8">
          {[40, 65, 45, 80, 55, 70, 30].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-emerald-400/30 rounded-sm"
              style={{ height: `${h}%` }}
            >
              <div
                className="w-full bg-emerald-400 rounded-sm"
                style={{ height: `${h > 50 ? 100 : 60}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MealPlanScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col bg-gradient-to-b from-orange-900 to-orange-950">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">Today's Plan</p>
          <p className="font-body text-sm font-semibold text-white">
            Meal Tracker
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Salad className="w-3.5 h-3.5 text-orange-300" />
        </div>
      </div>
      {/* Meals list */}
      {[
        {
          time: "8:00 AM",
          meal: "Breakfast",
          cal: "320 kcal",
          items: "Oats, Banana, Almonds",
          done: true,
        },
        {
          time: "1:00 PM",
          meal: "Lunch",
          cal: "480 kcal",
          items: "Dal, Rice, Salad",
          done: true,
        },
        {
          time: "4:30 PM",
          meal: "Snack",
          cal: "150 kcal",
          items: "Green Tea, Nuts",
          done: false,
        },
        {
          time: "8:00 PM",
          meal: "Dinner",
          cal: "400 kcal",
          items: "Roti, Sabji, Curd",
          done: false,
        },
      ].map((m, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 p-3 rounded-xl mb-2 border ${
            m.done
              ? "bg-white/10 border-white/10"
              : "bg-white/5 border-white/5"
          }`}
        >
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${
              m.done
                ? "bg-orange-400 text-white"
                : "bg-white/10 text-white/40"
            }`}
          >
            {m.done ? "✓" : i + 1}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-body text-xs font-medium text-white truncate">
                {m.meal}
              </p>
              <p className="font-body text-[8px] text-white/30">{m.time}</p>
            </div>
            <p className="font-body text-[8px] text-white/40 truncate">
              {m.items}
            </p>
          </div>
          <p className="font-body text-[9px] text-orange-300 font-medium shrink-0">
            {m.cal}
          </p>
        </div>
      ))}
    </div>
  );
}

function ProgressScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col bg-gradient-to-b from-purple-900 to-purple-950">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">This Month</p>
          <p className="font-body text-sm font-semibold text-white">
            Progress
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <TrendingUp className="w-3.5 h-3.5 text-purple-300" />
        </div>
      </div>
      {/* Weight chart mockup */}
      <div className="bg-white/10 rounded-2xl p-4 mb-3 border border-white/5">
        <div className="flex items-end gap-1.5 mb-2">
          <span className="font-heading text-2xl font-semibold text-white">
            -3.2
          </span>
          <span className="font-body text-[10px] text-purple-300 mb-1">
            kg this month
          </span>
        </div>
        {/* Mini chart */}
        <svg className="w-full h-12" viewBox="0 0 200 40">
          <polyline
            points="0,35 30,30 60,28 90,22 120,20 150,15 180,10 200,8"
            fill="none"
            stroke="#c084fc"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <polyline
            points="0,35 30,30 60,28 90,22 120,20 150,15 180,10 200,8"
            fill="url(#purpleGrad)"
            stroke="none"
          />
          <defs>
            <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(192,132,252,0.3)" />
              <stop offset="100%" stopColor="rgba(192,132,252,0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Stats */}
      {[
        { label: "Body Fat", val: "-1.8%", color: "text-green-400" },
        { label: "Muscle Mass", val: "+0.6 kg", color: "text-purple-300" },
        { label: "BMI", val: "23.4", color: "text-sky-300" },
      ].map((s, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-3 bg-white/5 rounded-xl mb-2 border border-white/5"
        >
          <p className="font-body text-xs text-white/60">{s.label}</p>
          <p className={`font-body text-xs font-semibold ${s.color}`}>
            {s.val}
          </p>
        </div>
      ))}
    </div>
  );
}

function HydrationScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col bg-gradient-to-b from-sky-900 to-sky-950">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">Stay Hydrated</p>
          <p className="font-body text-sm font-semibold text-white">
            Water Tracker
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Droplet className="w-3.5 h-3.5 text-sky-300" />
        </div>
      </div>
      {/* Water progress */}
      <div className="bg-white/10 rounded-2xl p-5 mb-4 border border-white/5 text-center">
        <div className="relative w-20 h-20 mx-auto mb-3">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeDasharray="75, 100"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-heading text-lg font-semibold text-white">6</p>
            <p className="font-body text-[7px] text-white/40">/ 8 glasses</p>
          </div>
        </div>
        <p className="font-body text-[9px] text-sky-300">
          2 more glasses to go!
        </p>
      </div>
      {/* Timeline */}
      <div className="space-y-2">
        {["7 AM", "9 AM", "11 AM", "1 PM", "3 PM", "5 PM"].map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5"
          >
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

function WorkoutScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col bg-gradient-to-b from-rose-900 to-rose-950">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">Today's Workout</p>
          <p className="font-body text-sm font-semibold text-white">
            Activity
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Dumbbell className="w-3.5 h-3.5 text-rose-300" />
        </div>
      </div>
      {/* Active timer */}
      <div className="bg-white/10 rounded-2xl p-4 mb-3 border border-white/5 text-center">
        <p className="font-body text-[9px] text-white/40 mb-1">
          Active Minutes
        </p>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Timer className="w-4 h-4 text-rose-300" />
          <p className="font-heading text-2xl font-semibold text-white">
            32:15
          </p>
        </div>
        <p className="font-body text-[8px] text-rose-300">
          280 cal burned today
        </p>
      </div>
      {/* Exercise list */}
      {[
        { name: "Morning Walk", dur: "20 min", cal: "120 cal", done: true },
        { name: "Yoga Flow", dur: "15 min", cal: "80 cal", done: true },
        { name: "Evening Stretch", dur: "10 min", cal: "40 cal", done: false },
      ].map((e, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 bg-white/5 rounded-xl mb-2 border border-white/5"
        >
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-bold ${
              e.done
                ? "bg-rose-400 text-white"
                : "bg-white/10 text-white/40"
            }`}
          >
            {e.done ? "✓" : "○"}
          </div>
          <div className="flex-1">
            <p className="font-body text-xs text-white font-medium">
              {e.name}
            </p>
            <p className="font-body text-[8px] text-white/30">{e.dur}</p>
          </div>
          <p className="font-body text-[8px] text-rose-300">{e.cal}</p>
        </div>
      ))}
    </div>
  );
}

function MedicineScreen() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col bg-gradient-to-b from-amber-900 to-amber-950">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-body text-[9px] text-white/40">Reminders</p>
          <p className="font-body text-sm font-semibold text-white">
            Medicine
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Heart className="w-3.5 h-3.5 text-amber-300" />
        </div>
      </div>
      {/* Next dose highlight */}
      <div className="bg-white/10 rounded-2xl p-4 mb-3 border border-white/5">
        <p className="font-body text-[9px] text-white/40 mb-1">Next Dose</p>
        <p className="font-heading text-lg font-semibold text-white mb-0.5">
          Vitamin D3
        </p>
        <p className="font-body text-[9px] text-amber-300">
          2:00 PM — 1 capsule
        </p>
        <div className="mt-3 flex gap-2">
          <button className="flex-1 bg-amber-400 rounded-lg py-1.5 text-[9px] font-semibold text-amber-950">
            Take Now
          </button>
          <button className="flex-1 bg-white/10 rounded-lg py-1.5 text-[9px] font-medium text-white/60">
            Skip
          </button>
        </div>
      </div>
      {/* Schedule */}
      {[
        { name: "Multivitamin", time: "8 AM", taken: true },
        { name: "Omega-3", time: "8 AM", taken: true },
        { name: "Vitamin D3", time: "2 PM", taken: false },
        { name: "Probiotic", time: "9 PM", taken: false },
      ].map((m, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl mb-2 border border-white/5"
        >
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] ${
              m.taken ? "bg-amber-400 text-white" : "bg-white/10 text-white/30"
            }`}
          >
            {m.taken ? "✓" : ""}
          </div>
          <div className="flex-1">
            <p
              className={`font-body text-xs ${
                m.taken ? "text-white/40 line-through" : "text-white"
              }`}
            >
              {m.name}
            </p>
          </div>
          <p className="font-body text-[8px] text-white/30">{m.time}</p>
        </div>
      ))}
    </div>
  );
}

/* ───── Phone Shell ───── */
function PhoneShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-[220px] ${className}`}>
      <div className="relative bg-[#111] rounded-[2.2rem] p-1.5 shadow-2xl border border-black/10">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111] rounded-b-2xl z-20" />
        {/* Screen */}
        <div className="rounded-[1.8rem] overflow-hidden aspect-[9/19.5]">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ───── Mockup Data ───── */
const mockups = [
  {
    id: "dashboard",
    label: "Dashboard",
    screen: <DashboardScreen />,
    initialPos: { x: -20, y: 0 },
    rotate: -6,
    zIndex: 6,
  },
  {
    id: "meals",
    label: "Meal Tracker",
    screen: <MealPlanScreen />,
    initialPos: { x: 220, y: 40 },
    rotate: 3,
    zIndex: 5,
  },
  {
    id: "progress",
    label: "Progress",
    screen: <ProgressScreen />,
    initialPos: { x: 460, y: -10 },
    rotate: -4,
    zIndex: 4,
  },
  {
    id: "hydration",
    label: "Hydration",
    screen: <HydrationScreen />,
    initialPos: { x: 700, y: 30 },
    rotate: 5,
    zIndex: 3,
  },
  {
    id: "workout",
    label: "Activity",
    screen: <WorkoutScreen />,
    initialPos: { x: 100, y: 380 },
    rotate: 4,
    zIndex: 2,
  },
  {
    id: "medicine",
    label: "Medicine",
    screen: <MedicineScreen />,
    initialPos: { x: 560, y: 380 },
    rotate: -5,
    zIndex: 1,
  },
];

/* ───── Main Component ───── */
export function DraggablePhoneMockups() {
  return (
    <section className="relative section-container-tinted py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <GlassBadge className="mb-5">App Preview</GlassBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight leading-[1.15]">
            Every Screen,{" "}
            <span className="italic">Designed for You</span>
          </h2>
          <p className="font-body text-foreground/60 mt-5 text-base font-light leading-[1.8]">
            Drag the phones around to explore all the features packed into our
            app. Each screen is crafted for maximum clarity and ease.
          </p>
        </div>

        {/* ── Desktop: Draggable scattered layout ── */}
        <div className="hidden lg:block relative" style={{ height: "820px" }}>
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {mockups.map((mockup) => (
            <motion.div
              key={mockup.id}
              drag
              dragMomentum={false}
              dragElastic={0.1}
              whileDrag={{ scale: 1.08, zIndex: 50, rotate: 0 }}
              whileHover={{ scale: 1.04 }}
              initial={{
                opacity: 0,
                y: 40,
                rotate: mockup.rotate,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: mockup.rotate,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute cursor-grab active:cursor-grabbing"
              style={{
                left: mockup.initialPos.x,
                top: mockup.initialPos.y,
                zIndex: mockup.zIndex,
              }}
            >
              {/* Glow behind phone */}
              <div className="absolute -inset-8 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />
              <PhoneShell>
                {mockup.screen}
              </PhoneShell>
              {/* Label */}
              <div className="mt-3 text-center">
                <span className="tag-pill bg-white shadow-sm border-foreground/5 text-[10px] font-body font-medium text-foreground/60">
                  {mockup.label}
                  <ChevronRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Mobile: Horizontal scroll carousel ── */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory px-2 -mx-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {mockups.map((mockup, i) => (
              <motion.div
                key={mockup.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="snap-center shrink-0 flex flex-col items-center"
              >
                <PhoneShell>
                  {mockup.screen}
                </PhoneShell>
                <div className="mt-3 text-center">
                  <span className="tag-pill bg-white shadow-sm border-foreground/5 text-[10px] font-body font-medium text-foreground/60">
                    {mockup.label}
                    <ChevronRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
