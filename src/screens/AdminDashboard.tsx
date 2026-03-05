import React from 'react';
import { 
  Users, 
  Activity, 
  ShieldAlert, 
  TrendingUp, 
  Search, 
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  UserCheck,
  Flag,
  ChevronDown
} from 'lucide-react';
import { Sidebar, Header } from '@/src/components/Layout';
import { cn } from '@/src/lib/utils';

export function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Platform Health</h1>
              <p className="text-slate-400 mt-1">Overview of SkillSwap community activity and moderation.</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => alert('Opening system logs...')}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all"
              >
                System Logs
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Total Users', value: '12,482', change: '+12%', trend: 'up', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/20' },
              { label: 'Active Exchanges', value: '842', change: '+5%', trend: 'up', icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
              { label: 'Flagged Activity', value: '14', change: '-2%', trend: 'down', icon: ShieldAlert, color: 'text-red-400', bg: 'bg-red-500/20' },
              { label: 'Growth Rate', value: '24%', change: '+4%', trend: 'up', icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-500/20' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", stat.bg, stat.color)}>
                    <stat.icon size={20} />
                  </div>
                  <div className={cn(
                    "flex items-center gap-1 text-xs font-bold",
                    stat.trend === 'up' ? "text-emerald-400" : "text-red-400"
                  )}>
                    {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* User Management */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <h3 className="font-bold text-white">Recent User Activity</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search users..." 
                      className="pl-9 pr-4 py-1.5 bg-white/5 border-transparent rounded-lg text-xs focus:bg-white/10 focus:ring-2 focus:ring-blue-500 outline-none w-48 text-white"
                    />
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {[
                    { name: 'Sarah Jenkins', email: 'sarah@example.com', status: 'active', skills: 4, joined: '2 days ago' },
                    { name: 'Marcus Thorne', email: 'marcus@example.com', status: 'active', skills: 2, joined: '5 days ago' },
                    { name: 'Kevin Hart', email: 'kevin@example.com', status: 'flagged', skills: 1, joined: '1 week ago' },
                    { name: 'Elena Gilbert', email: 'elena@example.com', status: 'active', skills: 6, joined: '1 week ago' },
                  ].map((user, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <img src={`https://picsum.photos/seed/${user.name}/100/100`} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                        <div>
                          <p className="text-sm font-bold text-white">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="text-center">
                          <p className="text-xs font-bold text-white">{user.skills}</p>
                          <p className="text-[10px] text-slate-500 uppercase font-bold">Skills</p>
                        </div>
                        <span className={cn(
                          "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          user.status === 'active' ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                        )}>
                          {user.status}
                        </span>
                        <button className="text-slate-500 hover:text-white">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-white/5 text-center">
                  <button 
                    onClick={() => alert('Loading all users...')}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View All Users
                  </button>
                </div>
              </div>
            </div>

            {/* Moderation Queue */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <Flag size={18} className="text-red-400" />
                    Moderation Queue
                  </h3>
                  <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-bold rounded-full">14 New</span>
                </div>
                <div className="space-y-4">
                  {[
                    { user: 'Kevin Hart', reason: 'Suspicious credit transfer', time: '2h ago' },
                    { user: 'Unknown User', reason: 'Flagged skill description', time: '5h ago' },
                    { user: 'David O\'Brien', reason: 'Multiple session cancellations', time: '1d ago' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl space-y-3 border border-white/10">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-white">{item.user}</p>
                        <span className="text-[10px] text-slate-500 font-bold uppercase">{item.time}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.reason}</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => alert('Reviewing user: ' + item.user)}
                          className="flex-1 py-1.5 bg-white/10 border border-white/10 text-[10px] font-bold rounded-lg hover:bg-white/20 transition-all text-white"
                        >
                          Review
                        </button>
                        <button 
                          onClick={() => alert('Dismissing flag for: ' + item.user)}
                          className="flex-1 py-1.5 bg-red-500/20 text-red-400 text-[10px] font-bold rounded-lg hover:bg-red-500/30 transition-all"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-blue-600/20 backdrop-blur-xl rounded-2xl p-6 text-white border border-blue-500/30">
                <h3 className="font-bold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button 
                    onClick={() => alert('Broadcasting message to community...')}
                    className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold flex items-center justify-between px-4 transition-all border border-white/10"
                  >
                    Broadcast Message
                    <ChevronDown size={16} className="-rotate-90" />
                  </button>
                  <button 
                    onClick={() => alert('Opening platform settings...')}
                    className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold flex items-center justify-between px-4 transition-all border border-white/10"
                  >
                    Platform Settings
                    <ChevronDown size={16} className="-rotate-90" />
                  </button>
                  <button 
                    onClick={() => alert('Generating platform report...')}
                    className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold flex items-center justify-between px-4 transition-all border border-white/10"
                  >
                    Generate Report
                    <ChevronDown size={16} className="-rotate-90" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
