import { GlassBadge } from "./GlassBadge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Add your details",
    desc: "Share your health metrics and goals securely in minutes.",
  },
  {
    num: "02",
    title: "Get diet plan",
    desc: "Receive a personalized nutrition plan crafted by experts.",
  },
  {
    num: "03",
    title: "Track daily progress",
    desc: "Log meals, water, and habits with a tap.",
  },
  {
    num: "04",
    title: "Achieve results",
    desc: "Reach your goals with consistent, guided support.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative section-container-dark px-8 py-24 md:py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[28px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
          poster="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2084"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-healthy-food-preparation-5176/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a14] via-[#0f2820] to-[#0a1a14]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <GlassBadge className="mb-5 bg-white/10 text-white border-white/20">
            How It Works
          </GlassBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight leading-[1.15] text-white">
            Simple. Guided. Effective.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="relative flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-[18px] bg-white/10 border border-white/15 flex items-center justify-center mb-6 backdrop-blur-sm">
                <span className="font-heading font-semibold text-white text-lg italic">
                  {step.num}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-white">
                {step.title}
              </h3>
              <p className="font-body text-sm text-white/50 leading-[1.8] font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-16 text-center"
        >
          <button onClick={() => window.open("https://wa.me/917021838835?text=Hello%20Dr.%20Hina%2C%0A%0AI%20am%20reaching%20out%20after%20visiting%20your%20official%20website.%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20consultation%20and%20treatment%20programs.%0A%0AThank%20you.", "_blank")} className="btn-premium bg-white text-foreground rounded-full pl-8 pr-2 py-2.5 font-body text-base font-medium hover:bg-emerald-50 flex items-center gap-4 mx-auto group">
            Start Now
            <div className="bg-foreground rounded-full p-2.5 group-hover:bg-emerald-900 transition-colors duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
