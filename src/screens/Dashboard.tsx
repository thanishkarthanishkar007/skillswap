import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Clock, 
  Plus, 
  Zap, 
  ChevronRight, 
  Star, 
  MoreVertical,
  Check,
  X,
  TrendingUp,
  Calendar,
  HelpCircle
} from 'lucide-react';
import { Sidebar, Header } from '@/src/components/Layout';
import { cn } from '@/src/lib/utils';

export function Dashboard() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([
    { id: 1, name: 'Elena Gilbert', skill: 'React Dev session', avatar: 'https://picsum.photos/seed/elena/100/100' },
    { id: 2, name: 'David Chen', skill: 'Spanish practice', avatar: 'https://picsum.photos/seed/david2/100/100' }
  ]);

  const handleAction = (id: number, action: 'accept' | 'decline') => {
    setRequests(prev => prev.filter(r => r.id !== id));
    alert(`${action === 'accept' ? 'Accepted' : 'Declined'} request from community member.`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          {/* Hero Balance Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10">
              <p className="text-blue-100 font-medium mb-2">Time Credit Balance</p>
              <h2 className="text-7xl font-bold mb-8">12.5 Hours</h2>
              <div className="flex gap-4">
                <button 
                  onClick={() => navigate('/market')}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all"
                >
                  <Plus size={20} />
                  Offer Session
                </button>
                <button 
                  onClick={() => navigate('/market')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all shadow-lg"
                >
                  <Zap size={20} fill="currentColor" />
                  Book a Skill
                </button>
              </div>
            </div>
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10">
              <Clock size={200} />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Offered Skills */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Your Offered Skills</h3>
                  <button 
                    onClick={() => navigate('/market')}
                    className="text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Manage Skills
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'React Development', rating: 4.9, reviews: 18, duration: '1 Hour', icon: '⚛️' },
                    { title: 'Spanish Conversation', rating: 5.0, reviews: 6, duration: '1.5 Hours', icon: '🇪🇸' }
                  ].map((skill, i) => (
                    <div 
                      key={i} 
                      onClick={() => navigate('/market')}
                      className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:shadow-lg transition-all group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl">
                          {skill.icon}
                        </div>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star size={14} fill="currentColor" />
                          <span className="text-sm font-bold">{skill.rating}</span>
                          <span className="text-xs text-slate-400 font-medium">({skill.reviews})</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{skill.title}</h4>
                      <p className="text-sm text-slate-400 mb-4 leading-relaxed">Teaching basics of components, state, and hooks.</p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{skill.duration} / Session</span>
                        <ChevronRight size={18} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learning Path */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Learning Path</h3>
                  <button 
                    onClick={() => navigate('/market')}
                    className="text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Find More
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Digital Photography', instructor: 'Sarah Jenkins', next: 'WED 4PM', progress: 60, avatar: 'https://picsum.photos/seed/sarah/100/100' },
                    { title: 'Intro to Chess', instructor: 'Marcus Thorne', next: 'Completed 2 sessions', progress: 100, avatar: 'https://picsum.photos/seed/marcus/100/100' }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      onClick={() => navigate('/sessions')}
                      className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 flex items-center gap-6 cursor-pointer hover:bg-white/10 transition-all"
                    >
                      <img src={item.avatar} className="w-14 h-14 rounded-xl object-cover" referrerPolicy="no-referrer" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-white">{item.title}</h4>
                          <span className={cn(
                            "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                            item.progress === 100 ? "bg-white/10 text-slate-400" : "bg-amber-500/20 text-amber-400"
                          )}>
                            {item.progress === 100 ? 'Completed' : `Next: ${item.next}`}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-3">with {item.instructor}</p>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={cn("h-full transition-all duration-1000", item.progress === 100 ? "bg-slate-500" : "bg-blue-600")}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recent Activity */}
              <section>
                <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 divide-y divide-white/10">
                  {[
                    { type: 'received', amount: '+1.5 Hours', desc: 'for Spanish Session with Maria.', time: '2 hours ago' },
                    { type: 'spent', amount: '-1.0 Hour', desc: 'booking UI Design with Kevin.', time: 'Yesterday' }
                  ].map((activity, i) => (
                    <div key={i} className="p-5 flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        activity.type === 'received' ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                      )}>
                        {activity.type === 'received' ? <Plus size={18} /> : <X size={18} />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white">
                          <span className="font-bold">{activity.amount}</span> {activity.desc}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-8">
              {/* Impact Level */}
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full">Top Rated</span>
                  <button className="text-slate-400 hover:text-white"><MoreVertical size={18} /></button>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Impact Level</h4>
                <p className="text-sm text-slate-400 mb-6">You've helped 24 community members this month.</p>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-blue-600 w-3/4"></div>
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">75% to Platinum Badge</p>
              </div>

              {/* Pending Requests */}
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-white">Pending Requests</h4>
                  <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] font-bold rounded-full">{requests.length} New</span>
                </div>
                <div className="space-y-6">
                  {requests.length > 0 ? requests.map((req) => (
                    <div key={req.id} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <img src={req.avatar} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                        <div>
                          <p className="text-sm font-bold text-white">{req.name}</p>
                          <p className="text-xs text-slate-400">Wants {req.skill}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => handleAction(req.id, 'accept')}
                          className="py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-all"
                        >
                          Accept
                        </button>
                        <button 
                          onClick={() => handleAction(req.id, 'decline')}
                          className="py-2 bg-white/10 text-slate-300 text-xs font-bold rounded-lg hover:bg-white/20 transition-all"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  )) : (
                    <p className="text-sm text-slate-500 text-center py-4">No pending requests</p>
                  )}
                </div>
              </div>

              {/* Community Pulse */}
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp size={18} className="text-blue-400" />
                  <h4 className="font-bold text-white">Community Pulse</h4>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all">
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">Local Event</p>
                    <p className="text-sm font-bold text-white mb-1">Weekend Skill-Fair in Downtown</p>
                    <p className="text-xs text-slate-400">This Saturday, 10 AM</p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 cursor-pointer hover:bg-emerald-500/20 transition-all">
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">New Skill Trending</p>
                    <p className="text-sm font-bold text-white mb-1">Urban Gardening is 30% up</p>
                    <p className="text-xs text-slate-400">Join the growing group!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Floating Help Button */}
        <button 
          onClick={() => alert('How can we help you today?')}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50"
        >
          <HelpCircle size={24} />
        </button>
      </div>
    </div>
  );
}
