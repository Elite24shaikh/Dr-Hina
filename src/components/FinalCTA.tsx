import { GlassBadge } from "./GlassBadge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

export function FinalCTA() {
  return (
    <section id="contact" className="relative section-container-dark py-28 md:py-36 overflow-hidden">
      {/* Radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] rounded-full bg-emerald-500/[0.08] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[250px] rounded-full bg-sky-500/[0.05] blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <GlassBadge className="mb-6 bg-white/10 text-white border-white/15">
            Take Action
          </GlassBadge>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold tracking-tight leading-[1.1] mb-8 text-white">
            Start Your Health{" "}
            <span className="italic">Journey</span> Today
          </h2>

          <p className="font-body text-lg text-white/50 mb-12 max-w-xl mx-auto font-light leading-[1.8]">
            Join thousands of successful transformations. Download the app or book your first consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA — Download / WhatsApp */}
            <MagneticButton onClick={() => window.open("https://wa.me/917021838835?text=Hello%20Dr.%20Hina%2C%0A%0AI%20am%20reaching%20out%20after%20visiting%20your%20official%20website.%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20consultation%20and%20treatment%20programs.%0A%0AThank%20you.", "_blank")} className="btn-premium bg-white text-foreground rounded-full pl-8 pr-2 py-3 font-body text-base font-medium hover:bg-emerald-50 flex items-center gap-4 group">
              Download App
              <div className="bg-foreground rounded-full p-2.5 group-hover:bg-emerald-900 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </MagneticButton>

            {/* Secondary — Book Consultation (WhatsApp placeholder) */}
            <a
              href="https://wa.me/917021838835?text=Hello%20Dr.%20Hina%2C%0A%0AI%20am%20reaching%20out%20after%20visiting%20your%20official%20website.%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20consultation%20and%20treatment%20programs.%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium border border-white/20 text-white rounded-full px-8 py-3.5 font-body text-base font-medium hover:bg-white/10"
            >
              Book Consultation
            </a>
          </div>

          {/* Store badges row */}
          <div className="mt-10 flex items-center justify-center gap-6 opacity-40">
            {/* Apple Store badge placeholder */}
            {/* <div className="flex items-center gap-2 text-white/80">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-[8px] font-body leading-none">Download on the</p>
                <p className="text-xs font-body font-semibold leading-tight">App Store</p>
              </div>
            </div> */}
            {/* Google Play badge placeholder */}
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m.91-.91L19.85 12 17.72 9.88l-2.28 2.28 2.28 2.05M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
              </svg>
              <div className="text-left">
                <p className="text-[12px] font-body leading-none">GET IT ON</p>
                <p className="text-md font-body font-semibold leading-tight">Google Play</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
