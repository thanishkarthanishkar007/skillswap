import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Globe, Bell, User, ChevronDown, LayoutGrid } from 'lucide-react';
import { Sidebar, Header } from '@/src/components/Layout';
import { SkillCard } from '@/src/components/SkillCard';
import { cn } from '@/src/lib/utils';

const categories = [
  'All Categories',
  'Languages',
  'Tech & Coding',
  'Arts & Crafts',
  'Music & Performance',
  'Gardening & DIY',
  'Academic Tutoring'
];

const initialSkills = [
  { id: '1', title: 'Beginner Spanish Tutoring', category: 'Languages', rating: 4.9, reviewsCount: 42, provider: { name: 'Elena Rodriguez', avatar: 'https://picsum.photos/seed/elena/100/100' }, duration: 1, image: 'https://picsum.photos/seed/spanish/600/400' },
  { id: '2', title: 'Python for Beginners', category: 'Tech', rating: 5.0, reviewsCount: 28, provider: { name: 'Marcus Lee', avatar: 'https://picsum.photos/seed/marcus/100/100' }, duration: 1.5, image: 'https://picsum.photos/seed/python/600/400' },
  { id: '3', title: 'Abstract Oil Painting', category: 'Arts', rating: 4.8, reviewsCount: 15, provider: { name: 'Sarah Jenkins', avatar: 'https://picsum.photos/seed/sarah/100/100' }, duration: 2, image: 'https://picsum.photos/seed/art/600/400' },
  { id: '4', title: 'Urban Balcony Gardening', category: 'Home', rating: 4.7, reviewsCount: 12, provider: { name: 'Tom Harris', avatar: 'https://picsum.photos/seed/garden/600/400' }, duration: 1, image: 'https://picsum.photos/seed/balcony/600/400' },
  { id: '5', title: 'Basic Acoustic Guitar', category: 'Music', rating: 4.9, reviewsCount: 34, provider: { name: "David O'Brien", avatar: 'https://picsum.photos/seed/david/100/100' }, duration: 1, image: 'https://picsum.photos/seed/guitar/600/400' },
  { id: '6', title: 'Social Media Strategy', category: 'Business', rating: 4.6, reviewsCount: 21, provider: { name: 'Lisa Kim', avatar: 'https://picsum.photos/seed/lisa/100/100' }, duration: 1, image: 'https://picsum.photos/seed/social/600/400' },
  { id: '7', title: 'Vinyasa Yoga Flow', category: 'Wellness', rating: 5.0, reviewsCount: 56, provider: { name: 'Amara Singh', avatar: 'https://picsum.photos/seed/yoga/100/100' }, duration: 1, image: 'https://picsum.photos/seed/yoga-img/600/400' },
  { id: '8', title: 'Sourdough Bread Basics', category: 'Cooking', rating: 4.9, reviewsCount: 19, provider: { name: 'Robert Wilson', avatar: 'https://picsum.photos/seed/bread/100/100' }, duration: 3, image: 'https://picsum.photos/seed/bread-img/600/400' },
];

export function Marketplace() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [visibleSkills, setVisibleSkills] = useState(initialSkills);

  const handleLoadMore = () => {
    // Simulate loading more by duplicating
    setVisibleSkills(prev => [...prev, ...initialSkills.map(s => ({ ...s, id: Math.random().toString() }))]);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Special Header for Market */}
        <header className="h-16 bg-white/5 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm font-bold text-white cursor-pointer hover:text-blue-400 transition-colors">
              Explore <ChevronDown size={16} />
            </div>
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="What skill do you want to learn?" 
                className="w-full pl-10 pr-4 py-2 bg-white/5 border-white/10 rounded-lg text-sm focus:bg-white/10 focus:ring-2 focus:ring-blue-500 outline-none text-white transition-all"
                onKeyDown={(e) => e.key === 'Enter' && alert('Searching for: ' + (e.target as HTMLInputElement).value)}
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                <Search size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/dashboard')}
              className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
            >
              My Skills
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              <Globe size={20} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Bell size={20} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <div 
                onClick={() => navigate('/dashboard')}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 font-bold text-xs cursor-pointer hover:bg-white/20 transition-all"
              >
                V
              </div>
            </div>
          </div>
        </header>

        <main className="p-8 space-y-10 max-w-7xl mx-auto w-full">
          {/* Hero Banner */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 flex items-center justify-between border border-white/10 relative overflow-hidden shadow-sm">
            <div className="max-w-lg relative z-10">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Exchange your skills, <br />
                <span className="text-blue-400">grow your community.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                A local time-bank marketplace where every hour is equal. Join thousands of neighbors trading knowledge and talents.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                >
                  List Your Skill
                </button>
                <button 
                  onClick={() => navigate('/')}
                  className="bg-white/10 text-white border border-white/10 px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative z-10">
              <div className="w-80 h-80 bg-white/5 rounded-3xl rotate-6 flex items-center justify-center border border-white/10 shadow-xl overflow-hidden">
                <img src="https://picsum.photos/seed/collab/400/400" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
              </div>
            </div>
            {/* Abstract background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 -skew-x-12 translate-x-1/4"></div>
          </div>

          {/* Browse Skills */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Browse Skills</h2>
              <button 
                onClick={() => alert('Viewing all skills...')}
                className="text-sm font-bold text-blue-400 flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All <ChevronDown size={16} className="-rotate-90" />
              </button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-bold transition-all",
                    activeCategory === cat ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleSkills.map(skill => (
                <div key={skill.id} onClick={() => navigate('/sessions')} className="cursor-pointer">
                  <SkillCard skill={skill as any} onExchange={() => navigate('/sessions')} />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={handleLoadMore}
                className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all shadow-sm"
              >
                Load More Skills
              </button>
              <p className="mt-4 text-sm text-slate-500 font-medium">Showing {visibleSkills.length} of 350+ available skills</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-white/10 mt-auto">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigate('/')}>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">⇌</span>
                </div>
                <span className="text-xl font-bold text-white">SkillSwap</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Building a stronger community through the equal exchange of time and talent.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Marketplace</h4>
              <ul className="space-y-3 text-xs text-slate-500">
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/market')}>Find Skills</li>
                <li className="hover:text-white cursor-pointer transition-colors">Top Contributors</li>
                <li className="hover:text-white cursor-pointer transition-colors">How it Works</li>
                <li className="hover:text-white cursor-pointer transition-colors">Safety Guidelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Community</h4>
              <ul className="space-y-3 text-xs text-slate-500">
                <li className="hover:text-white cursor-pointer transition-colors">Join a Group</li>
                <li className="hover:text-white cursor-pointer transition-colors">Local Events</li>
                <li className="hover:text-white cursor-pointer transition-colors">Success Stories</li>
                <li className="hover:text-white cursor-pointer transition-colors">For Non-Profits</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Connect</h4>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-500 hover:text-white cursor-pointer transition-all"><Globe size={14} /></div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-500 hover:text-white cursor-pointer transition-all"><Bell size={14} /></div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-500 hover:text-white cursor-pointer transition-all"><User size={14} /></div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 mt-12 flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <p>© 2024 SkillSwap Marketplace. All hours are equal.</p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
