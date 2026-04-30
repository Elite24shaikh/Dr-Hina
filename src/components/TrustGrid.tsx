import { GlassBadge } from "./GlassBadge";
import { ShieldCheck, UserCheck, TrendingUp, Lock } from "lucide-react";
import { motion } from "framer-motion";

const trustFeatures = [
  { icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50", title: "Certified Expertise", desc: "Recognized professionals with years of clinical and nutritional experience." },
  { icon: <UserCheck className="w-5 h-5 text-sky-500" />, bg: "bg-sky-50", title: "Personalized Plans", desc: "Every diet is tailored exclusively to your body metrics and goals." },
  { icon: <TrendingUp className="w-5 h-5 text-purple-500" />, bg: "bg-purple-50", title: "Real Results", desc: "Achieve measurable and sustainable health improvements that last." },
  { icon: <Lock className="w-5 h-5 text-orange-400" />, bg: "bg-orange-50", title: "Safe & Guided", desc: "Secure data handling and safe, medically sound dietary advice." }
];

export function TrustGrid() {
  return (
    <section className="py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <GlassBadge className="mb-5">Why Choose Us</GlassBadge>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight leading-[1.1] mb-6">
              Expertise You Can Trust
            </h2>
            <p className="font-body text-foreground/60 text-base mb-8 max-w-md font-light leading-relaxed">
              We combine medical knowledge with modern technology to provide you with the safest, most effective health journey possible.
            </p>
            <button className="bg-emerald-950 text-white rounded-full pl-6 pr-2 py-2 font-body text-sm font-medium hover:bg-emerald-900 transition-all flex items-center gap-4 group">
              Meet the Team
              <div className="bg-white/10 rounded-full p-2 group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {trustFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-emerald-100 p-6 rounded-3xl hover:shadow-md hover:shadow-emerald-50 transition-all"
              >
                <div className={`w-10 h-10 rounded-2xl ${feat.bg} flex items-center justify-center mb-4`}>
                  {feat.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{feat.title}</h3>
                <p className="font-body text-xs text-foreground/55 leading-relaxed font-light">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
