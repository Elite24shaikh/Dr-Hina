import { Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GooeyNav from "./GooeyNav";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs-section" },
  { label: "Features", href: "#features" },
  // { label: "Services", href: "#services-section" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-[100] px-4 md:px-8 transition-all duration-300 ${scrolled ? "top-3" : "top-6"
          }`}
      >
        <div
          className={`max-w-[900px] mx-auto flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${scrolled
            ? "bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/30"
            : "bg-transparent"
            }`}
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-2 text-foreground shrink-0">
            <Sparkles className="w-5 h-5" />
            <span className="font-heading font-semibold text-lg tracking-wide">
              Medimorphic
            </span>
          </div>

          {/* Center: GooeyNav */}
          <div className="hidden lg:block">
            <GooeyNav
              items={navItems}
              particleCount={10}
              particleDistances={[70, 10]}
              particleR={80}
              initialActiveIndex={0}
              animationTime={500}
              timeVariance={200}
              colors={[1, 2, 3, 1, 2]}
            />
          </div>

          {/* Right: CTAs */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* <a
              href="#contact"
              className="hidden sm:block rounded-full px-5 py-2 font-body text-sm font-medium text-foreground/70 hover:text-emerald-700 transition-colors duration-300"
            >
              Explore
            </a> */}
            <a
              href="#contact"
              className="hidden sm:block rounded-full px-6 py-2.5 font-body text-sm font-medium bg-[#143928] text-white hover:bg-[#1f4a36] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-foreground hover:bg-foreground/5 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 z-[100] px-4"
          >
            <div className="health-glass-strong rounded-[24px] p-6 flex flex-col gap-2 shadow-2xl max-w-md mx-auto">
              {navItems.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base text-foreground/80 hover:text-foreground px-4 py-3 rounded-2xl hover:bg-foreground/5 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-foreground/10 my-2" />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-foreground text-white rounded-full px-6 py-3 font-body text-sm font-medium text-center hover:bg-foreground/90 transition-all"
              >
                Sign up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
