import { GlassBadge } from "./GlassBadge";
import { motion } from "framer-motion";
import { Clock, Target, Activity, CalendarDays, Heart, MapPin } from "lucide-react";

const programs = [
  {
    id: "21-days",
    title: "21 Days Reset Program",
    address: "Short-term guided program • Kickstart fat loss",
    features: [
      { icon: <Clock className="w-4 h-4" />, label: "21 Days" },
      { icon: <Target className="w-4 h-4" />, label: "Beginner" },
      { icon: <Activity className="w-4 h-4" />, label: "Reset" },
    ],
    badge: "Quick Start",
    ctaText: "Reserve Now",
    ctaLink:
      "https://wa.me/917021838835?text=Hello%20Dr.%20Hina%2C%0A%0AI%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%2021%20Days%20Program.%0A%0APlease%20guide%20me%20further.%0A%0AThank%20you.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "90-days",
    title: "90 Days Healing",
    address: "Root-cause healing • PCOS & Thyroid focus",
    features: [
      { icon: <CalendarDays className="w-4 h-4" />, label: "90 Days" },
      { icon: <Heart className="w-4 h-4" />, label: "Healing" },
      { icon: <Target className="w-4 h-4" />, label: "Advanced" },
    ],
    badge: "Most Popular",
    ctaText: "Reserve Now",
    ctaLink:
      "https://wa.me/917021838835?text=Hello%20Dr.%20Hina%2C%0A%0AI%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%2090%20Days%20Healing%20Program.%0A%0APlease%20share%20details.%0A%0AThank%20you.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ramzan",
    title: "Ramzan Health",
    address: "Safe fasting • Energy & immunity support",
    features: [
      { icon: <Clock className="w-4 h-4" />, label: "30 Days" },
      { icon: <Activity className="w-4 h-4" />, label: "Energy" },
      { icon: <Heart className="w-4 h-4" />, label: "Immunity" },
    ],
    badge: "Seasonal",
    ctaText: "Reserve Now",
    ctaLink:
      "https://wa.me/917021838835?text=Hello%20Dr.%20Hina%2C%0A%0AI%20found%20your%20website%20and%20I%20am%20interested%20in%20your%20Ramzan%20Health%20Program.%0A%0APlease%20guide%20me.%0A%0AThank%20you.",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=800&auto=format&fit=crop",
  },
];

export function ProgramCards() {
  return (
    <section className="section-container py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <GlassBadge className="mb-5">Programs</GlassBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight leading-[1.15]">
            Choose Your <span className="italic">Transformation</span>
          </h2>
          <p className="font-body text-foreground/60 mt-5 text-base font-light leading-[1.8]">
            Structured programs designed by Dr. Hina for lasting health
            transformation — from quick resets to complete healing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group relative rounded-[32px] overflow-hidden bg-[#243627] text-white flex flex-col shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(20,57,40,0.15)]"
            >
              {/* Image Section */}
              <div className="relative h-[280px] w-full overflow-hidden">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243627] via-transparent to-transparent opacity-90" />
                
                {/* Pagination Dots (Visual Flair) */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm" />
                </div>
              </div>

              {/* Content Section */}
              <div className="px-7 pt-2 pb-7 flex flex-col flex-1 relative z-10 -mt-2">
                <h3 className="font-heading text-2xl font-medium text-white tracking-wide mb-2">
                  {prog.title}
                </h3>
                
                <div className="flex items-center gap-2 text-white/60 mb-6">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <p className="font-body text-sm font-light leading-snug">
                    {prog.address}
                  </p>
                </div>

                {/* Features / Icons row */}
                <div className="flex items-center justify-between text-white/80 border-b border-white/10 pb-6 mb-6">
                  {prog.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="text-white/70">
                        {feat.icon}
                      </div>
                      <span className="font-body text-xs font-medium tracking-wide">
                        {feat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer / CTA row */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-inner">
                    <span className="font-body text-sm font-medium tracking-wide text-white">
                      {prog.badge}
                    </span>
                  </div>
                  <a
                    href={prog.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#1B3B2B] px-7 py-3 rounded-full font-body text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    {prog.ctaText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
