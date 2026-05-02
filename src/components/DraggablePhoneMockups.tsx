import { motion } from "framer-motion";
import { GlassBadge } from "./GlassBadge";
import { ChevronRight } from "lucide-react";

import img1 from "../assets/App/1.jpg";
import img2 from "../assets/App/2.jpg";
import img3 from "../assets/App/3.jpg";
import img4 from "../assets/App/4.jpg";
import img5 from "../assets/App/5.jpg";
import img6 from "../assets/App/6.jpg";

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
    id: "home",
    label: "Home Screen",
    screen: <img src={img1} alt="Home Screen" className="w-full h-full object-cover" />,
    initialPos: { x: -20, y: 0 },
    rotate: -6,
    zIndex: 6,
  },
  {
    id: "log",
    label: "Log Screen",
    screen: <img src={img2} alt="Log Screen" className="w-full h-full object-cover" />,
    initialPos: { x: 220, y: 40 },
    rotate: 3,
    zIndex: 5,
  },
  {
    id: "programs",
    label: "Programs Screen",
    screen: <img src={img3} alt="Programs Screen" className="w-full h-full object-cover" />,
    initialPos: { x: 460, y: -10 },
    rotate: -4,
    zIndex: 4,
  },
  {
    id: "profile",
    label: "Profile Screen",
    screen: <img src={img4} alt="Profile Screen" className="w-full h-full object-cover" />,
    initialPos: { x: 700, y: 30 },
    rotate: 5,
    zIndex: 3,
  },
  {
    id: "add-food",
    label: "Add Food",
    screen: <img src={img5} alt="Add Food" className="w-full h-full object-cover" />,
    initialPos: { x: 100, y: 380 },
    rotate: 4,
    zIndex: 2,
  },
  {
    id: "add-activity",
    label: "Add Activity",
    screen: <img src={img6} alt="Add Activity" className="w-full h-full object-cover" />,
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
