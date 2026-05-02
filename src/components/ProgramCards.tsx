import { GlassBadge } from "./GlassBadge";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Clock, Target, Activity, CalendarDays, Heart, MapPin, X, CheckCircle2 } from "lucide-react";
import weightLossImg from "../assets/WeightLoss.jpg";
import gainImg from "../assets/gain.jpg";
import ramzanImg from "../assets/ramzan.jpg";

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
    image: weightLossImg,
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
    image: gainImg,
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
    image: ramzanImg,
  },
];

export function ProgramCards() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const silverData = {
    title: "Reverse & Renew Program (Silver)",
    tagline: "Don't just manage symptoms — Reverse & Renew your health from within.",
    overview: "Designed to help patients move from symptom management to root-cause recovery. Blends functional nutrition, Unani healing, lifestyle medicine, and mind-body restoration.",
    idealFor: ["PCOS / Hormonal Imbalance", "Thyroid Issues", "Prediabetes / Insulin Resistance", "Weight Gain / Fatigue", "Gut Issues"],
    phases: [
      { name: "Phase 1: Reset", desc: "Gentle detox & gut reset" },
      { name: "Phase 2: Repair", desc: "Hormonal & metabolic correction" },
      { name: "Phase 3: Rebuild", desc: "Strengthening metabolism & energy" },
      { name: "Phase 4: Renew", desc: "Sustainable lifestyle integration" }
    ],
    inclusions: [
      "Customized Weekly Diet Plans",
      "Disease-specific Protocol",
      "Detox & Herbal Guidance",
      "Lifestyle Correction Plan",
      "Daily App Tracking & Alerts"
    ]
  };

  const goldData = {
    title: "Advanced Healing (Gold)",
    tagline: "Deep Healing. Lasting Transformation. Designed for Complete Reversal.",
    overview: "A 90-Day intensive transformation program for patients who need deeper intervention beyond basic lifestyle correction.",
    idealFor: ["Chronic PCOS / Thyroid", "Long-standing insulin resistance", "Weight plateau", "Postpartum weight", "Severe gut issues"],
    phases: [
      { name: "Month 1: Cellular Reset", desc: "Detox, liver support, water balance" },
      { name: "Month 2: Metabolic Repair", desc: "Insulin & hormone correction" },
      { name: "Month 3: Rebuild & Sustain", desc: "Fat loss acceleration & habit automation" }
    ],
    inclusions: [
      "Fully Customized Diet (Weekly Adjusted)",
      "Lab Report Review",
      "Advanced Detox & Herbal Guidance",
      "Priority Direct Chat Support",
      "Detailed Case Analysis"
    ]
  };

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
                <div className="flex items-center gap-3 mt-auto pt-4">
                  <button
                    onClick={() => setSelectedPlan(prog.id === "90-days" ? "gold" : "silver")}
                    className="flex-1 bg-white/10 text-white px-4 py-3 rounded-xl font-body text-sm font-medium hover:bg-white/20 transition-colors text-center"
                  >
                    Learn More
                  </button>
                  <a
                    href={prog.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-[#1B3B2B] px-4 py-3 rounded-xl font-body text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors shadow-lg text-center"
                  >
                    {prog.ctaText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[28px] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className={`p-6 md:p-8 text-white ${selectedPlan === "gold" ? "bg-gradient-to-br from-amber-500 to-amber-700" : "bg-gradient-to-br from-[#1b3b2b] to-[#0f2319]"}`}>
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <GlassBadge className="mb-3 border-white/20 text-white bg-white/10">{selectedPlan === "gold" ? "Gold Membership" : "Silver Membership"}</GlassBadge>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-2">{selectedPlan === "gold" ? goldData.title : silverData.title}</h3>
                <p className="font-body text-white/80 italic text-sm md:text-base">"{selectedPlan === "gold" ? goldData.tagline : silverData.tagline}"</p>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto font-body">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {selectedPlan === "gold" ? goldData.overview : silverData.overview}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-emerald-950 mb-4 border-b pb-2">Ideal For</h4>
                    <ul className="space-y-2">
                      {(selectedPlan === "gold" ? goldData.idealFor : silverData.idealFor).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-emerald-950 mb-4 border-b pb-2">What You Get</h4>
                    <ul className="space-y-2">
                      {(selectedPlan === "gold" ? goldData.inclusions : silverData.inclusions).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h4 className="font-heading font-semibold text-lg text-emerald-950 mb-4 border-b pb-2">Program Structure</h4>
                <div className="space-y-3 mb-6">
                  {(selectedPlan === "gold" ? goldData.phases : silverData.phases).map((phase, idx) => (
                    <div key={idx} className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
                      <span className="font-semibold text-emerald-900 block mb-1">{phase.name}</span>
                      <span className="text-sm text-gray-600">{phase.desc}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/917021838835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#1b3b2b] text-white text-center py-4 rounded-xl font-semibold hover:bg-[#132a1e] transition-colors"
                >
                  Consult Now to Start
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
