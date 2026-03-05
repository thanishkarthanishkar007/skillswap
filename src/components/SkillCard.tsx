import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Skill } from '@/src/types';

interface SkillCardProps {
  skill: Skill;
  onExchange?: () => void;
}

export function SkillCard({ skill, onExchange }: SkillCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:shadow-xl transition-all group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={skill.image} 
          alt={skill.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-full text-white">
            {skill.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
            {skill.title}
          </h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={14} fill="currentColor" />
            <span className="text-sm font-bold">{skill.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <img 
            src={skill.provider.avatar} 
            alt={skill.provider.name} 
            className="w-6 h-6 rounded-full"
            referrerPolicy="no-referrer"
          />
          <span className="text-sm text-slate-400">{skill.provider.name}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Clock size={14} />
            <span className="text-sm">{skill.duration} Hour / Session</span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onExchange?.();
            }}
            className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}
