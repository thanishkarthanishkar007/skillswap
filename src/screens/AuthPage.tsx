import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, X, Plus, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Brand */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-white/5 backdrop-blur-xl text-white relative overflow-hidden border-r border-white/10">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-20">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">⇌</span>
            </div>
            <span className="text-2xl font-bold">SkillSwap</span>
          </div>

          <h1 className="text-7xl font-bold leading-tight mb-8">
            Trade skills, <br />
            <span className="opacity-80">Build community.</span>
          </h1>
          <p className="text-xl opacity-80 max-w-md leading-relaxed">
            Join our time-bank network where an hour of gardening equals an hour of coding. No money, just talent and time.
          </p>
        </div>

        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 max-w-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
                <Plus size={20} />
              </div>
              <p className="text-sm italic leading-relaxed">
                "I taught Sarah guitar, and in return, Marcus helped me fix my laptop. The community here is incredible!"
              </p>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60">— Elena, Local Crafter</p>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 relative">
        <div className="max-w-md w-full mx-auto">
          <div className="flex bg-white/5 p-1 rounded-2xl mb-12 border border-white/10">
            <button 
              onClick={() => setIsLogin(false)}
              className={cn(
                "flex-1 py-3 text-sm font-bold rounded-xl transition-all",
                !isLogin ? "bg-blue-600 shadow-sm text-white" : "text-slate-400 hover:text-white"
              )}
            >
              Sign Up
            </button>
            <button 
              onClick={() => setIsLogin(true)}
              className={cn(
                "flex-1 py-3 text-sm font-bold rounded-xl transition-all",
                isLogin ? "bg-blue-600 shadow-sm text-white" : "text-slate-400 hover:text-white"
              )}
            >
              Login
            </button>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-slate-400">
              {isLogin ? 'Log in to your account to continue' : 'Join the SkillSwap movement today.'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleJoin}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white placeholder:text-slate-600"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white placeholder:text-slate-600"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-3">Skills You Offer</label>
                  <div className="flex flex-wrap gap-2">
                    {['Web Design', 'Gardening'].map(skill => (
                      <span key={skill} className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/30">
                        {skill} <X size={14} className="cursor-pointer" onClick={() => alert('Removing skill...')} />
                      </span>
                    ))}
                    <button 
                      type="button" 
                      onClick={() => {
                        const skill = prompt('Enter a skill you offer:');
                        if (skill) alert(`Added ${skill} to your profile!`);
                      }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 border border-dashed border-white/20 rounded-lg text-xs font-bold text-slate-400 hover:border-blue-500 hover:text-blue-400 transition-all"
                    >
                      + Add Skill
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-3">Skills You Want to Learn</label>
                  <div className="flex flex-wrap gap-2">
                    {['Italian'].map(skill => (
                      <span key={skill} className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-lg text-xs font-bold border border-indigo-500/30">
                        {skill} <X size={14} className="cursor-pointer" onClick={() => alert('Removing skill...')} />
                      </span>
                    ))}
                    <button 
                      type="button" 
                      onClick={() => {
                        const skill = prompt('Enter a skill you want to learn:');
                        if (skill) alert(`Added ${skill} to your wishlist!`);
                      }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 border border-dashed border-white/20 rounded-lg text-xs font-bold text-slate-400 hover:border-blue-500 hover:text-blue-400 transition-all"
                    >
                      + Add Skill
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500" />
                  <p className="text-sm text-slate-400">
                    I agree to the <a href="#" className="text-blue-400 font-bold">Terms of Service</a> and <a href="#" className="text-blue-400 font-bold">Privacy Policy</a>.
                  </p>
                </div>
              </>
            )}

            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 mt-4">
              {isLogin ? 'Login' : 'Join the Community'}
            </button>
          </form>

          <p className="mt-12 text-center text-sm text-slate-500">
            © 2023 SkillSwap. Local Exchange Redefined.
          </p>
        </div>

        {/* Theme Toggle Floating */}
        <div className="absolute bottom-8 right-8">
          <div className="bg-white/5 backdrop-blur-md p-1 rounded-full flex gap-1 shadow-lg border border-white/10">
            <button className="p-2 rounded-full text-slate-400 hover:bg-white/10 hover:text-blue-400 transition-all">
              <Moon size={20} />
            </button>
            <button className="p-2 rounded-full bg-blue-600 text-white shadow-sm">
              <Sun size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
