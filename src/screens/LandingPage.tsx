import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle, ShieldCheck, Clock, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import Hero from '@/src/components/ui/animated-shader-hero';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navigation - Absolute to overlay on Hero */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">⇌</span>
          </div>
          <span className="text-xl font-bold text-white">SkillSwap</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <button onClick={() => alert('How it works: 1. List a skill. 2. Earn time credits. 3. Spend credits to learn.')} className="hover:text-white transition-colors">How it Works</button>
          <button onClick={() => navigate('/market')} className="hover:text-white transition-colors">Browse Skills</button>
          <Link to="/auth" className="hover:text-white transition-colors">Login</Link>
          <Link to="/auth" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Animated Shader Hero */}
      <Hero
        trustBadge={{
          text: "Join our time-bank community",
          icons: ["✨"]
        }}
        headline={{
          line1: "Exchange Skills,",
          line2: "Not Money"
        }}
        subtitle="Join a thriving local community where your time is the currency. Teach what you love, learn what you need, and grow together without spending a dime."
        buttons={{
          primary: {
            text: "Join the Community",
            onClick: () => navigate('/auth')
          },
          secondary: {
            text: "Watch how it works",
            onClick: () => console.log('Watch video')
          }
        }}
      />

      {/* Features Section */}

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Everything you need to thrive</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our platform is designed to make skill sharing simple, fair, and community-driven.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: 'Skill Sharing', desc: "Everyone has something to offer. Whether it's coding, baking, or gardening, your knowledge is valuable here.", color: 'bg-blue-100 text-blue-600' },
            { icon: Clock, title: 'Time Credits', desc: "One hour of your time equals one credit. No inflation, no complicated math. Pure value-for-value exchange.", color: 'bg-emerald-100 text-emerald-600' },
            { icon: Star, title: 'Community Learning', desc: "Connect with neighbors you'd otherwise never meet. Build friendships while building your skillset.", color: 'bg-purple-100 text-purple-600' }
          ].map((feature, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:shadow-xl transition-all group">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", feature.color)}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{feature.desc}</p>
              <button 
                onClick={() => navigate('/market')}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Active Members', value: '12k+' },
            { label: 'Hours Swapped', value: '45k+' },
            { label: 'Unique Skills', value: '800+' },
            { label: 'Member Satisfaction', value: '98%' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-6">Ready to share your talent?</h2>
        <p className="text-lg text-slate-400 mb-10">
          Join thousands of people who are reimagining value and community. Sign up today and get your first 2 hours of credit for free.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="px-6 py-4 rounded-xl bg-white/5 border-white/10 text-white focus:bg-white/10 focus:ring-2 focus:ring-blue-500 outline-none flex-1 max-w-sm"
          />
          <Link to="/auth" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">⇌</span>
              </div>
              <span className="text-xl font-bold text-white">SkillSwap</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
              The world's leading skill exchange platform built on the philosophy of mutual aid and collective growth.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                <Users size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                <Star size={18} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => alert('How it works...')} className="hover:text-blue-400">How it works</button></li>
              <li><button onClick={() => navigate('/market')} className="hover:text-blue-400">Browse Skills</button></li>
              <li><button onClick={() => alert('Pricing: Every hour is equal!')} className="hover:text-blue-400">Pricing</button></li>
              <li><button onClick={() => alert('Safety guidelines...')} className="hover:text-blue-400">Safety</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => alert('About us...')} className="hover:text-blue-400">About Us</button></li>
              <li><button onClick={() => alert('Blog...')} className="hover:text-blue-400">Blog</button></li>
              <li><button onClick={() => alert('Community guidelines...')} className="hover:text-blue-400">Community Guidelines</button></li>
              <li><button onClick={() => alert('Contact us...')} className="hover:text-blue-400">Contact</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© 2024 SkillSwap Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
