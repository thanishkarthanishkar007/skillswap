import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Info,
  ArrowRight
} from 'lucide-react';
import { Sidebar, Header } from '@/src/components/Layout';
import { cn } from '@/src/lib/utils';

export function BookingPage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [isBooking, setIsBooking] = useState(false);

  const timeSlots = ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '05:30 PM'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleConfirm = () => {
    setIsBooking(true);
    setTimeout(() => {
      alert('Booking confirmed! You will receive a message from the provider shortly.');
      navigate('/history');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          <div 
            onClick={() => navigate('/market')}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 cursor-pointer hover:text-white transition-colors group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Marketplace
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Skill & Provider Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-sm">
                <img 
                  src="https://picsum.photos/seed/spanish/800/600" 
                  className="w-full h-48 object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full">Languages</span>
                    <div className="flex items-center gap-1 text-amber-400 ml-auto">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-bold">4.9</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-white mb-4">Beginner Spanish Tutoring</h1>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    Learn the fundamentals of Spanish conversation, grammar, and vocabulary in a relaxed, friendly environment.
                  </p>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <img src="https://picsum.photos/seed/elena/100/100" className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                    <div>
                      <p className="text-sm font-bold text-white">Elena Rodriguez</p>
                      <p className="text-xs text-slate-500 italic">"Native speaker with 5 years teaching experience"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600/20 backdrop-blur-xl rounded-3xl p-6 text-white shadow-xl border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={24} className="text-blue-400" />
                  <h3 className="font-bold">SkillSwap Guarantee</h3>
                </div>
                <p className="text-sm text-blue-100/80 leading-relaxed mb-6">
                  Your time credits are only transferred after the session is completed and confirmed by both parties.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                  <Info size={14} />
                  Learn about safety
                </div>
              </div>
            </div>

            {/* Middle: Calendar & Time Selection */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white">Select Date & Time</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-white">October 2023</span>
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all text-white border border-white/10"><ChevronLeft size={18} /></button>
                      <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all text-white border border-white/10"><ChevronRight size={18} /></button>
                    </div>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-4 mb-10">
                  {days.map(day => (
                    <div key={day} className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest pb-2">{day}</div>
                  ))}
                  {Array.from({ length: 31 }).map((_, i) => {
                    const day = i + 1;
                    const isSelected = selectedDate === day;
                    const isToday = day === 12;
                    return (
                      <button 
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={cn(
                          "h-12 rounded-xl text-sm font-bold transition-all flex items-center justify-center relative",
                          isSelected ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : 
                          isToday ? "bg-blue-500/20 text-blue-400" : "hover:bg-white/5 text-slate-400 hover:text-white"
                        )}
                      >
                        {day}
                        {isToday && !isSelected && <div className="absolute bottom-1 w-1 h-1 bg-blue-400 rounded-full"></div>}
                      </button>
                    );
                  })}
                </div>

                <h3 className="font-bold text-white mb-6">Available Time Slots</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
                  {timeSlots.map(time => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-3 rounded-xl text-xs font-bold transition-all border",
                        selectedTime === time ? "bg-white border-white text-slate-900 shadow-lg" : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-400 shadow-sm border border-white/10">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Session Duration</p>
                      <p className="text-xs text-slate-500">1 Hour = 1 Time Credit</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleConfirm}
                    disabled={isBooking}
                    className={cn(
                      "bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2",
                      isBooking ? "bg-blue-600/50 cursor-wait" : ""
                    )}
                  >
                    {isBooking ? 'Processing...' : 'Confirm Booking'}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-white mb-8">Recent Reviews</h2>
                <div className="space-y-8">
                  {[
                    { name: 'Sarah J.', rating: 5, comment: 'Elena is a fantastic teacher! She made the basics so easy to understand.', date: '2 weeks ago' },
                    { name: 'Marcus T.', rating: 4, comment: 'Great session, very patient and helpful with my pronunciation.', date: '1 month ago' }
                  ].map((review, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-400 font-bold text-xs border border-white/10">{review.name[0]}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-bold text-white">{review.name}</p>
                          <span className="text-xs text-slate-500">{review.date}</span>
                        </div>
                        <div className="flex gap-0.5 text-amber-400 mb-2">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} size={12} fill={j < review.rating ? "currentColor" : "none"} />
                          ))}
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
