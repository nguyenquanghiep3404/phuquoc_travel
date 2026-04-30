"use client";

import { useState } from "react";
import { 
  ShieldAlert, 
  Stethoscope, 
  PhoneCall, 
  MapPin, 
  Clock, 
  User, 
  CheckCircle2, 
  Navigation,
  Activity,
  AlertTriangle,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const activeSOS = [
  { id: "SOS-501", patient: "Maria Garcia", location: "InterContinental Hotel", status: "Doctor En-route", doctor: "Dr. Nguyễn Văn A", time: "12 phút trước", priority: "High" },
  { id: "SOS-502", patient: "Lê Minh Tuấn", location: "Bãi Trường (Public)", status: "Pending Match", doctor: "Searching...", time: "2 phút trước", priority: "Emergency" },
];

const medicalProviders = [
  { name: "Dr. Trần Thị C", specialty: "Nội khoa", status: "Active", location: "Dương Đông", distance: "2.4 km" },
  { name: "Dr. James Smith", specialty: "Sơ cấp cứu", status: "On-Call", location: "An Thới", distance: "5.8 km" },
  { name: "Phòng khám Sài Gòn - PQ", specialty: "Đa khoa", status: "Active", location: "Dương Đông", distance: "1.2 km" },
];

export default function SafetyPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-outfit font-bold tracking-tight">Y tế & An toàn SOS</h2>
          <p className="text-muted-foreground text-sm">Hệ thống giám sát cứu hộ và dịch vụ y tế tại chỗ (On-demand Medical).</p>
        </div>
        
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 text-xs font-bold">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Hệ thống trực tuyến: 24 Bác sĩ
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active SOS Monitoring */}
        <div className="lg:col-span-2 space-y-6">
           <div className="glass-card p-6 rounded-3xl border-destructive/20 bg-destructive/5 space-y-4">
              <div className="flex items-center justify-between">
                 <h4 className="font-bold font-outfit text-destructive flex items-center gap-2 uppercase tracking-widest text-sm">
                    <ShieldAlert className="w-5 h-5" />
                    Yêu cầu SOS đang hoạt động
                 </h4>
                 <span className="px-2 py-1 bg-destructive text-white text-[10px] font-bold rounded-lg animate-pulse uppercase">Live</span>
              </div>
              
              <div className="space-y-4">
                 {activeSOS.map((sos) => (
                    <div key={sos.id} className="glass-card p-6 rounded-2xl border-white/5 bg-white/[0.02] flex flex-col md:flex-row items-center gap-6 group hover:bg-white/[0.04] transition-all">
                       <div className="flex items-center gap-4 w-full md:w-auto">
                          <div className={cn(
                             "w-12 h-12 rounded-xl flex items-center justify-center border",
                             sos.priority === "Emergency" ? "bg-destructive/20 border-destructive/30 text-destructive" : "bg-amber-500/20 border-amber-500/30 text-amber-500"
                          )}>
                             <AlertTriangle className="w-6 h-6" />
                          </div>
                          <div>
                             <p className="font-bold text-lg leading-tight">{sos.patient}</p>
                             <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{sos.id} • {sos.time}</p>
                          </div>
                       </div>
                       
                       <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase">Vị trí</p>
                             <p className="text-sm font-semibold flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-primary" />
                                {sos.location}
                             </p>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase">Trạng thái</p>
                             <p className="text-sm font-semibold text-primary">{sos.status}</p>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase">Bác sĩ phụ trách</p>
                             <p className="text-sm font-semibold">{sos.doctor}</p>
                          </div>
                       </div>

                       <div className="flex gap-2 w-full md:w-auto">
                          <button className="flex-1 md:flex-none glass-button p-3 rounded-xl hover:text-primary"><Navigation className="w-5 h-5" /></button>
                          <button className="flex-1 md:flex-none bg-primary text-white font-bold px-4 py-3 rounded-xl text-xs whitespace-nowrap">Theo dõi Live</button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="glass-card p-0 rounded-3xl overflow-hidden border-white/5">
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                 <h4 className="font-bold font-outfit flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-primary" />
                    Mạng lưới Y tế trực tuyến
                 </h4>
                 <div className="flex gap-2">
                    <button className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-muted-foreground hover:text-foreground">Tất cả khu vực</button>
                 </div>
              </div>
              <div className="divide-y divide-white/5">
                 {medicalProviders.map((provider, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                             <User className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div>
                             <p className="font-bold text-sm">{provider.name}</p>
                             <p className="text-[10px] text-muted-foreground font-medium uppercase">{provider.specialty} • {provider.location}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-6">
                          <div className="text-right hidden sm:block">
                             <p className="text-xs font-bold">{provider.distance}</p>
                             <p className={cn("text-[10px] font-bold", provider.status === "Active" ? "text-emerald-500" : "text-amber-500")}>
                                {provider.status}
                             </p>
                          </div>
                          <button className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground hover:text-primary transition-colors"><ChevronRight className="w-5 h-5" /></button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Hotlines & Stats */}
        <div className="space-y-6">
           <div className="glass-card p-8 rounded-[2.5rem] border-white/10 bg-gradient-to-br from-destructive/10 to-transparent space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-destructive flex items-center justify-center shadow-xl shadow-destructive/20">
                    <PhoneCall className="text-white w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold font-outfit leading-tight">Hotlines Khẩn cấp</h3>
              </div>
              
              <div className="space-y-4">
                 {[
                    { label: "Cấp cứu Y tế", code: "115", area: "Toàn đảo" },
                    { label: "Cứu hộ Biển", code: "114", area: "An Thới / Dương Đông" },
                    { label: "Công an PQC", code: "113", area: "Toàn đảo" },
                 ].map((h, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-destructive/30 transition-all cursor-pointer group">
                       <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{h.label}</p>
                          <p className="text-lg font-bold font-outfit text-white group-hover:text-destructive transition-colors">{h.code}</p>
                          <p className="text-[10px] text-slate-500">{h.area}</p>
                       </div>
                       <div className="p-2 rounded-xl bg-destructive/10 text-destructive"><PhoneCall className="w-4 h-4" /></div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="glass-card p-8 rounded-3xl border-white/5 space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Thống kê an toàn</h4>
              <div className="space-y-5">
                 {[
                    { label: "Tổng SOS (30 ngày)", value: "142", percent: "+12%" },
                    { label: "Thời gian đáp ứng TB", value: "24 phút", percent: "-8%" },
                    { label: "Tỷ lệ xử lý thành công", value: "98.5%", percent: "+1.2%" },
                 ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <div className="space-y-0.5">
                          <p className="text-xs font-medium text-muted-foreground">{s.label}</p>
                          <p className="text-xl font-bold font-outfit">{s.value}</p>
                       </div>
                       <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-md", s.percent.startsWith("+") ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary")}>
                          {s.percent}
                       </span>
                    </div>
                 ))}
              </div>
              
              <div className="pt-4">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Tải trọng hệ thống</span>
                    <span className="text-[10px] font-bold text-emerald-500">Normal</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[42%] bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                 </div>
              </div>
           </div>

           <div className="glass-card p-6 rounded-3xl border-white/5 bg-accent/5 flex items-center justify-between group cursor-pointer hover:bg-accent/10 transition-all">
              <div className="flex items-center gap-3">
                 <Activity className="w-5 h-5 text-accent" />
                 <span className="text-sm font-bold">Xem nhật ký cứu hộ</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
           </div>
        </div>
      </div>
    </div>
  );
}

import { AlertCircle } from "lucide-react";
