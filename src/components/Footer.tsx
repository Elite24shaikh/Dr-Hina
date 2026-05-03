import {
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import logoImg from "../assets/LOGO.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  // { label: "Services", href: "#services-section" },
  { label: "Programs", href: "#programs-section" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Refund Policy", href: "#" },
];

const socialLinks = [
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    href: "https://www.instagram.com/medimorphic.clinic/",
    label: "Instagram",
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "https://in.linkedin.com/in/dr-hina-ansari",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="section-container-tinted bg-olive-300 text-black overflow-hidden mx-3 md:mx-5 mb-3 md:mb-5 mt-6 rounded-[28px] shadow-lg">
      {/* ── Main Footer Content ── */}
      <div className="pt-20 pb-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-full">
          {/* ── Top Grid ── */}
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand */}
            <div className="md:col-span-2 flex flex-col items-start">
              <div className="flex items-center gap-2.5 mb-6">
                <img src={logoImg} alt="Logo" className="h-10 w-auto object-contain" />
                <span className="font-heading font-semibold text-xl text-black">
                  Medimorphic Clinic
                </span>
              </div>
              <p className="font-body text-sm text-black/40 leading-[1.8] max-w-sm font-light mb-8">
                A system-driven digital health platform dedicated to transforming
                lives through personalised nutrition, smart tracking, and expert
                guidance by Dr. Hina Ansari.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-black/40 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/5"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-6 text-black">
                Quick Links
              </h4>
              <div className="flex flex-col gap-3.5 font-body text-sm text-black/80 font-light">
                {quickLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-6 text-black">
                Contact Us
              </h4>
              <div className="space-y-5 font-body text-sm text-black/80 font-light">
                <a
                  href="tel:+917021838835"
                  className="flex items-center gap-3 hover:text-black/40 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-[12px] bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  +91-7021838835</a>
                <a
                  href="https://wa.me/917021838835?text=Hello%20Dr.%20Hina%2C%0A%0AI%20am%20reaching%20out%20after%20visiting%20your%20official%20website.%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20consultation%20and%20treatment%20programs.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-black/40 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-[12px] bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  WhatsApp Us
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-[12px] bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="leading-[1.8]">
                    Shop No 2, Najmunissa Appartment,
                    <br />
                    opposite to Auliya Masjid,
                    <br />
                    Gulzar Nagar, Bhiwandi,
                    <br />
                    Maharashtra 421302
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Legal links bar ── */}
          <div className="border-t border-black/5 pt-8 pb-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-body text-xs text-black/40 font-light">
                &copy; {new Date().getFullYear()} Medimorphic Clinic. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6">
                {legalLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="font-body text-xs text-black/40 hover:text-emerald-400 transition-colors font-light"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {/* <p className="font-body text-xs text-black/25 font-light italic">
                System, not a diet.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* ── Large Brand Name at Extreme Bottom ── */}
      <div className="relative px-1 md:px-2 pb-8">
        <div className="footer-brand-large font-heading text-center w-full text-green-400">
          Medimorphic
        </div>
      </div>
    </footer>
  );
}
