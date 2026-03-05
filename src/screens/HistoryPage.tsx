import React from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  ArrowDownLeft,
  MoreHorizontal
} from 'lucide-react';
import { Sidebar, Header } from '@/src/components/Layout';
import { cn } from '@/src/lib/utils';

export function HistoryPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Exchange History</h1>
              <p className="text-slate-400 mt-1">Track your contributions and learning sessions.</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => alert('Filtering options coming soon!')}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-400 hover:bg-white/10 hover:text-white transition-all"
              >
                <Filter size={18} />
                Filters
              </button>
              <button 
                onClick={() => alert('Exporting history to CSV...')}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-400 hover:bg-white/10 hover:text-white transition-all"
              >
                <Download size={18} />
                Export
              </button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Total Earned', value: '42.5h', icon: ArrowUpRight, color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
              { label: 'Total Spent', value: '30.0h', icon: ArrowDownLeft, color: 'text-blue-400', bg: 'bg-blue-500/20' },
              { label: 'Active Sessions', value: '3', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/20' },
              { label: 'Completed', value: '28', icon: CheckCircle2, color: 'text-purple-400', bg: 'bg-purple-500/20' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-sm">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", stat.bg, stat.color)}>
                  <stat.icon size={20} />
                </div>
                <p className="text-sm font-medium text-slate-400 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* History Table */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Skill / Session</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Participant</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Amount</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    { skill: 'React Basics', type: 'earned', user: 'Elena Gilbert', date: 'Oct 24, 2023', amount: '+1.5h', status: 'completed' },
                    { skill: 'Spanish Practice', type: 'spent', user: 'Marcus Thorne', date: 'Oct 22, 2023', amount: '-1.0h', status: 'completed' },
                    { skill: 'UI Design', type: 'spent', user: 'Kevin Hart', date: 'Oct 20, 2023', amount: '-2.0h', status: 'active' },
                    { skill: 'Gardening Tips', type: 'earned', user: 'Sarah Jenkins', date: 'Oct 18, 2023', amount: '+1.0h', status: 'completed' },
                    { skill: 'Chess Strategy', type: 'earned', user: 'David Chen', date: 'Oct 15, 2023', amount: '+1.5h', status: 'pending' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center",
                            row.type === 'earned' ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-400"
                          )}>
                            {row.type === 'earned' ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                          </div>
                          <span className="font-bold text-white">{row.skill}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <img src={`https://picsum.photos/seed/${row.user}/100/100`} className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                          <span className="text-sm text-slate-300 font-medium">{row.user}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400 font-medium">{row.date}</td>
                      <td className={cn(
                        "px-6 py-4 text-sm font-bold",
                        row.type === 'earned' ? "text-emerald-400" : "text-blue-400"
                      )}>
                        {row.amount}
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          row.status === 'completed' ? "bg-emerald-500/20 text-emerald-400" : 
                          row.status === 'active' ? "bg-blue-500/20 text-blue-400" : "bg-amber-500/20 text-amber-400"
                        )}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
              <p className="text-xs text-slate-500 font-medium">Showing 5 of 28 transactions</p>
            <div className="flex gap-2">
                <button 
                  onClick={() => alert('Previous page')}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-bold text-slate-400 hover:bg-white/10 disabled:opacity-50 transition-all"
                  disabled
                >
                  Prev
                </button>
                <button 
                  onClick={() => alert('Next page')}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-bold text-slate-400 hover:bg-white/10 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
