import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Clients Served", desc: "Across all programs" },
  { value: "10kg", label: "Avg. Weight Loss", desc: "In the first 3 months" },
  { value: "90%", label: "Success Rate", desc: "Sustained long-term results" },
  { value: "24/7", label: "Daily Tracking", desc: "Always-on health support" }
];

export function Stats() {
  return (
    <section className="py-20 bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-start justify-center p-8 md:p-10 bg-emerald-950"
            >
              <div className="text-4xl md:text-5xl font-heading font-semibold text-white mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm font-semibold text-white/90 mb-1">
                {stat.label}
              </div>
              <div className="font-body text-xs text-white/40 font-light">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
