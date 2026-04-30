import { ArrowRight, ArrowDown, Star, Shield, Leaf, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import heroImg from "../assets/DImage.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Soft gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/40 to-white" />
        {/* Soft radial glows */}
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-100/30 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-50/40 blur-[100px] pointer-events-none" />
      </div>

      {/* ─── Content Grid ─── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── Left: Text Content ─── */}
          <div className="flex flex-col items-start">
            {/* Tag pills row */}
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              {[
                { icon: <Leaf className="w-3 h-3" />, label: "Nutrition" },
                { icon: <Shield className="w-3 h-3" />, label: "Certified" },
                { icon: <Star className="w-3 h-3" />, label: "5★ Rated" },
              ].map((tag, i) => (
                <span
                  key={i}
                  className="tag-pill bg-emerald-50 text-emerald-700 border-emerald-100 text-[11px] font-body"
                >
                  {tag.icon}
                  {tag.label}
                </span>
              ))}
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight leading-[1.08] mb-6 text-foreground"
            >
              Eat Better. {" "} <br /> Feel Lighter.
              <br className="hidden md:block" />
              <span className="text-emerald-600"> Stay Balanced</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="font-body text-lg md:text-xl text-foreground/60 mb-10 max-w-lg font-light leading-[1.8]"
            >
              A Doctor With Years of Clinical Experience <br /> And With A System designed around your life, your habits &amp; your pace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <MagneticButton className="btn-premium bg-emerald-950 text-white hover:bg-emerald-900 rounded-full pl-8 pr-2 py-3 font-body text-lg font-medium flex items-center justify-center gap-4 group">
                Explore now
                <div className="bg-white/15 rounded-full p-2.5 group-hover:bg-white/25 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </MagneticButton>

              {/* Secondary circular icon button */}
              <a
                href="#about"
                className="btn-icon-circle bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 text-sm"
              >
                <ArrowDown className="w-5 h-5 text-emerald-700" />
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {["bg-emerald-200", "bg-sky-200", "bg-purple-200", "bg-orange-200"].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${bg} border-2 border-white flex items-center justify-center`}
                  >
                    <Users className="w-3.5 h-3.5 text-foreground/40" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">500+ Happy Clients</p>
                <p className="font-body text-xs text-foreground/40 font-light">Trusted by families across India</p>
              </div>
            </motion.div>
          </div>

          {/* ─── Right: Premium Image + Floating Cards ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Large rounded image container */}
            <div className="relative w-full max-w-[520px]">
              {/* Soft glow behind */}
              <div className="absolute -inset-8 bg-gradient-to-br from-emerald-200/30 via-transparent to-emerald-100/20 rounded-[3rem] blur-2xl pointer-events-none" />

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-900/10 border border-emerald-100/30">
                <img
                  src={heroImg}
                  alt="Dr. Hina Ansari — Clinical Nutritionist"
                  className="w-full h-[560px] md:h-[620px] object-cover object-center"
                />
                {/* Soft gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* ─── Floating Doctor Badge ─── */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -left-6 md:-left-10 bottom-24 z-20"
              >
                <div className="health-glass-strong rounded-[20px] p-4 flex items-center gap-3 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold text-foreground">Dr. Hina Ansari</p>
                    <p className="font-body text-[10px] text-foreground/40">Clinical Nutritionist</p>
                  </div>
                </div>
              </motion.div> */}

              {/* ─── Floating Testimonial Bubble ─── */}
              {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -right-4 md:-right-8 top-16 z-20"
              >
                <div className="health-glass-strong rounded-[18px] p-4 max-w-[180px] shadow-lg">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-body text-[10px] text-foreground/60 leading-relaxed font-light italic">
                    "Changed my relationship with food completely"
                  </p>
                  <p className="font-body text-[9px] text-foreground/40 mt-2 font-medium">— Ayesha K.</p>
                </div>
              </motion.div> */}

              {/* ─── Floating Stats Card ─── */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -right-2 md:-right-6 bottom-8 z-20"
              >
                <div className="health-glass-strong rounded-[16px] px-4 py-3 flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-semibold text-foreground">98%</p>
                    <p className="font-body text-[9px] text-foreground/40">Success Rate</p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-body text-xs font-light text-foreground/40">
          Scroll to Discover
        </span>
        <ArrowDown className="w-4 h-4 text-foreground/30 animate-bounce" />
      </motion.div>
    </section>
  );
}
