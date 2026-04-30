"use client";

import { useState } from "react";
import { 
  Map as MapIcon, 
  MapPin, 
  Star, 
  Layers, 
  Activity,
  Plus,
  Eye,
  Settings2,
  Filter,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";

const pois = [
  { id: "POI-01", name: "Cáp treo Hòn Thơm", category: "Tham quan", status: "Active" },
  { id: "POI-02", name: "Chợ Đêm Phú Quốc", category: "Mua sắm/F&B", status: "Active" },
  { id: "POI-03", name: "JW Marriott Emerald Bay", category: "Lưu trú", status: "Active" },
  { id: "POI-04", name: "Bệnh viện ĐK Phú Quốc", category: "Y tế", status: "Active" },
];

const liveEvents = [
  { id: "EV-101", name: "Múa Lửa Bãi Biển", venue: "Sunset Sanato", time: "18:30 - 20:00", status: "Starting Soon" },
  { id: "EV-102", name: "Pháo hoa VinWonders", venue: "Grand World", time: "21:00 - 21:15", status: "Scheduled" },
];

export default function MapAdminPage() {
  const [activeTab, setActiveTab] = useState("poi");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-outfit font-bold tracking-tight">Smart Map Admin</h2>
          <p className="text-muted-foreground text-sm">Quản lý các điểm POI và sự kiện "Sao Vàng" trên bản đồ Phú Quốc.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="glass-button px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium">
            <Layers className="w-4 h-4" />
            Cấu hình Layer
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-primary/20 transition-all">
            <Plus className="w-4 h-4" />
            Thêm điểm mới
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Interactive Map Preview Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-[2.5rem] aspect-video w-full bg-[#0a0d14] relative overflow-hidden border-white/5 shadow-2xl group">
             {/* Mock Map Background */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
             
             {/* Map Controls */}
             <div className="absolute top-6 right-6 space-y-2">
                <button className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"><Plus className="w-5 h-5 text-white" /></button>
                <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors bg-primary/20 border-primary/40"><MapIcon className="w-5 h-5 text-primary" /></div>
                <button className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"><Settings2 className="w-5 h-5 text-white" /></button>
             </div>

             {/* Live Indicators */}
             <div className="absolute top-6 left-6 flex items-center gap-2 glass-card px-4 py-2 rounded-2xl border-white/10">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">42 Sự kiện đang diễn ra</span>
             </div>

             {/* Center Label */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-white/20 font-outfit font-bold text-4xl uppercase tracking-[1em]">Phu Quoc Island</p>
             </div>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden border-white/5">
             <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h4 className="font-bold font-outfit flex items-center gap-2">
                   <MapPin className="w-5 h-5 text-primary" />
                   Danh sách POI
                </h4>
                <div className="flex items-center gap-2">
                   <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                      <input type="text" placeholder="Tìm POI..." className="bg-white/5 border border-white/10 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:border-primary/50" />
                   </div>
                </div>
             </div>
             <div className="divide-y divide-white/5">
                {pois.map((poi) => (
                   <div key={poi.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><MapPin className="w-4 h-4 text-muted-foreground" /></div>
                         <div>
                            <p className="text-sm font-bold">{poi.name}</p>
                            <p className="text-[10px] text-muted-foreground uppercase font-medium">{poi.category}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{poi.status}</span>
                         <button className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground transition-colors"><Eye className="w-4 h-4" /></button>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Column: "Sao Vàng" Control Station */}
        <div className="space-y-6">
           <div className="glass-card p-8 rounded-[2.5rem] border-white/10 bg-gradient-to-br from-primary/10 to-transparent flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/30 animate-pulse">
                 <Star className="text-white w-10 h-10 fill-white" />
              </div>
              <div>
                 <h3 className="text-2xl font-outfit font-bold">Sao Vàng Live</h3>
                 <p className="text-muted-foreground text-sm">Giao tiếp thời gian thực với du khách thông qua sự kiện.</p>
              </div>
              <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 rounded-2xl transition-all flex items-center justify-center gap-2">
                 <Plus className="w-4 h-4" />
                 Tạo sự kiện Live mới
              </button>
           </div>

           <div className="glass-card p-6 rounded-3xl space-y-4">
              <div className="flex items-center justify-between">
                 <h4 className="font-bold font-outfit flex items-center gap-2">
                    <Activity className="w-5 h-5 text-accent" />
                    Sự kiện Live
                 </h4>
                 <button className="text-[10px] font-bold text-primary uppercase hover:underline">Tất cả</button>
              </div>
              
              <div className="space-y-4">
                 {liveEvents.map((event) => (
                    <div key={event.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all space-y-2 group">
                       <div className="flex justify-between items-start">
                          <p className="font-bold text-sm group-hover:text-accent transition-colors">{event.name}</p>
                          <div className={cn(
                             "w-2 h-2 rounded-full",
                             event.status === "Starting Soon" ? "bg-primary animate-ping" : "bg-slate-500"
                          )}></div>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] text-muted-foreground font-medium uppercase">{event.venue}</p>
                          <p className="text-[10px] text-slate-400">{event.time}</p>
                       </div>
                       <div className="pt-2 flex justify-between items-center">
                          <span className="text-[10px] font-bold text-white/40">{event.status}</span>
                          <button className="text-[10px] font-bold text-primary hover:underline">Quản lý</button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="glass-card p-6 rounded-3xl border-white/5 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Phân bổ Layer</h4>
              <div className="space-y-3">
                 {[
                    { label: "Ẩm thực", count: 124, active: true },
                    { label: "Lưu trú", count: 86, active: true },
                    { label: "Check-in", count: 42, active: false },
                    { label: "Y tế", count: 12, active: true },
                 ].map((layer, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                          <span className={cn("w-2 h-2 rounded-full", layer.active ? "bg-emerald-500" : "bg-slate-600")}></span>
                          <span className="text-sm font-medium">{layer.label}</span>
                       </div>
                       <span className="text-xs font-bold text-muted-foreground">{layer.count}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
