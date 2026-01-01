import React from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ArrowRight, Sparkles, Zap, Layers } from 'lucide-react';
export function App() {
  return <div className="min-h-screen w-full relative text-white font-sans selection:bg-cyan-500 selection:text-black">
      <AnimatedBackground />

      {/* Content Layer */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8 pt-20 pb-32">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-1.5 border border-white/10 mb-4 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-100">
              Neural Interface v2.0
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2 animate-fade-in-up delay-100">
            Liquid Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Experiences
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Immerse yourself in a fluid, responsive environment where data flows
            like water and interfaces adapt to your presence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up delay-300">
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
              <span className="relative z-10 flex items-center">
                Get Started{' '}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold text-lg text-white transition-all hover:bg-white/10 hover:border-white/20">
              View Documentation
            </button>
          </div>
        </div>

        {/* Feature Grid to show scroll parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-32">
          {[{
          icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
          title: 'Fluid Dynamics',
          desc: 'Interfaces that respond naturally to user input with physics-based motion.'
        }, {
          icon: <Layers className="h-8 w-8 text-purple-400" />,
          title: 'Deep Layering',
          desc: 'Multi-dimensional z-space management for immersive depth perception.'
        }, {
          icon: <Zap className="h-8 w-8 text-pink-400" />,
          title: 'Neural Speed',
          desc: 'Optimized rendering pipeline ensuring 60fps performance on all devices.'
        }].map((feature, i) => <div key={i} className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-100/60 leading-relaxed">{feature.desc}</p>
            </div>)}
        </div>
      </main>
    </div>;
}