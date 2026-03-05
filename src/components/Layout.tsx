import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  Calendar, 
  MessageSquare, 
  Wallet, 
  LogOut,
  Menu,
  X,
  Bell,
  Moon,
  Sun
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Search, label: 'Explore Market', href: '/market' },
  { icon: Calendar, label: 'Sessions', href: '/sessions' },
  { icon: MessageSquare, label: 'Messages', href: '/messages' },
  { icon: Wallet, label: 'Wallet', href: '/history' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">⇌</span>
        </div>
        <span className="text-xl font-bold text-white">SkillSwap</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium",
                isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={() => {
            if (confirm('Are you sure you want to sign out?')) {
              window.location.href = '/auth';
            }
          }}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-colors font-medium"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="h-16 bg-white/5 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search skills or people..." 
            className="w-full pl-10 pr-4 py-2 bg-white/5 border-white/10 text-white rounded-full text-sm focus:bg-white/10 focus:ring-2 focus:ring-blue-500 transition-all outline-none placeholder:text-slate-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                navigate('/market');
              }
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-white transition-colors">
          <Moon size={20} />
        </button>
        <button className="text-slate-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="text-right">
            <p className="text-sm font-semibold text-white">Alex Rivera</p>
            <p className="text-xs text-slate-400">Expert Member</p>
          </div>
          <img 
            src="https://picsum.photos/seed/alex/100/100" 
            alt="Avatar" 
            className="w-10 h-10 rounded-full border-2 border-blue-500/50"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
