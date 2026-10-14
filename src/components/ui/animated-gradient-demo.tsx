import AnimatedGradient from "./animated-gradient";

export default function AnimatedGradientDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 relative rounded-xl overflow-hidden mb-8 border border-[var(--border)]">
      <AnimatedGradient config={{ preset: "Plasma", speed: 40 }} />
      <div className="relative z-10 p-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-center">
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Interactive AI Integrations</h2>
        <p className="text-slate-300">A demonstration of fluid, dynamic interfaces.</p>
      </div>
    </div>
  )
}
