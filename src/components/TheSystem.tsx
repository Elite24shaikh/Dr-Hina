import { GlassBadge } from "./GlassBadge";

export function TheSystem() {
  return (
    <section className="section-container-tinted py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <GlassBadge className="mb-5">App Showcase</GlassBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground tracking-tight leading-[1.15] mb-5">
            See the System in Action
          </h2>
          <p className="font-body text-foreground/60 text-base font-light leading-[1.8]">
            Experience how our app seamlessly integrates tracking, insights, and guidance into your daily routine.
          </p>
        </div>

        <div className="relative w-full rounded-[28px] overflow-hidden shadow-2xl border border-foreground/[0.06] bg-black">
          {/* Mock Video Container */}
          <div className="aspect-video w-full relative group">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop"
            >
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
