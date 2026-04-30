"use client";

import { useState } from "react";
import { 
  Bot, 
  MessageSquare, 
  Database, 
  ShieldCheck, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  MoreVertical, 
  Search,
  BrainCircuit,
  Zap,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  { id: "REV-01", user: "Hải Nam", target: "Tour 4 Đảo", rating: 5, comment: "Trải nghiệm tuyệt vời, hướng dẫn viên rất nhiệt tình và chu đáo. San hô đẹp lộng lẫy!", status: "Pending", date: "10 phút trước" },
  { id: "REV-02", user: "Elena Petrova", target: "Sunset Beach Bar", rating: 2, comment: "Prices are too high for the quality. Music was too loud.", status: "Pending", date: "1 giờ trước" },
];

const kbSources = [
  { name: "Lịch trình Cáp treo 2024", type: "PDF", date: "24/03/2024", status: "Indexed" },
  { name: "Menu Gian hàng F&B", type: "API Sync", date: "Real-time", status: "Active" },
  { name: "Hướng dẫn An toàn Y tế", type: "Markdown", date: "10/02/2024", status: "Indexed" },
];

export default function AIContentPage() {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-outfit font-bold tracking-tight">AI & Vận hành Nội dung</h2>
          <p className="text-muted-foreground text-sm">Quản trị trí tuệ nhân tạo, cơ sở kiến thức và kiểm duyệt phản hồi du khách.</p>
        </div>
        
        <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/10 shrink-0">
          <button onClick={() => setActiveTab("reviews")} className={cn("px-6 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-widest", activeTab === "reviews" ? "bg-primary text-white" : "text-muted-foreground")}>Kiểm duyệt</button>
          <button onClick={() => setActiveTab("ai")} className={cn("px-6 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-widest", activeTab === "ai" ? "bg-primary text-white" : "text-muted-foreground")}>Kiến thức AI</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           {activeTab === "reviews" ? (
              <div className="space-y-6 animate-fade-in">
                 <div className="flex items-center justify-between">
                    <h4 className="font-bold font-outfit flex items-center gap-2">
                       <MessageSquare className="w-5 h-5 text-primary" />
                       Đánh giá chờ kiểm duyệt
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase">
                       Tự động lọc bởi AI: <span className="text-emerald-500">85% Hoàn thành</span>
                    </div>
                 </div>

                 <div className="space-y-4">
                    {reviews.map((rev) => (
                       <div key={rev.id} className="glass-card p-6 rounded-3xl border-white/5 hover:bg-white/[0.03] transition-all grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div className="md:col-span-3 space-y-3">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-sm">{rev.user[0]}</div>
                                <div>
                                   <p className="font-bold text-sm">{rev.user}</p>
                                   <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">Về: {rev.target} • {rev.date}</p>
                                </div>
                                <div className="flex items-center gap-0.5 ml-2">
                                   {[...Array(5)].map((_, i) => (
                                      <Star key={i} className={cn("w-3 h-3 transition-colors", i < rev.rating ? "text-amber-400 fill-amber-400" : "text-slate-600")} />
                                   ))}
                                </div>
                             </div>
                             <p className="text-sm font-medium text-slate-300 leading-relaxed italic border-l-2 border-white/10 pl-4">
                                "{rev.comment}"
                             </p>
                             <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase pt-2">
                                <span className="flex items-center gap-1"><BrainCircuit className="w-3.5 h-3.5 text-emerald-500" /> AI Score: 92/100 (Safe)</span>
                                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Chờ duyệt thủ công</span>
                             </div>
                          </div>
                          <div className="flex flex-col gap-2 justify-center">
                             <button className="w-full bg-emerald-500/10 hover:bg-emerald-500 text-emerald-500 hover:text-white font-bold py-2 rounded-xl text-xs transition-all flex items-center justify-center gap-2 group">
                                <CheckCircle className="w-4 h-4" />
                                Phê duyệt
                             </button>
                             <button className="w-full bg-destructive/10 hover:bg-destructive text-destructive hover:text-white font-bold py-2 rounded-xl text-xs transition-all flex items-center justify-center gap-2 group">
                                <XCircle className="w-4 h-4" />
                                Ẩn đánh giá
                             </button>
                             <button className="text-[10px] font-bold text-muted-foreground hover:text-white uppercase tracking-widest mt-1">Phản hồi</button>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           ) : (
              <div className="space-y-6 animate-fade-in">
                 <div className="glass-card p-0 rounded-3xl overflow-hidden border-white/5">
                    <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                       <h4 className="font-bold font-outfit flex items-center gap-2">
                          <Database className="w-5 h-5 text-primary" />
                          Nguồn dữ liệu Knowledge Base
                       </h4>
                       <button className="bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-xl flex items-center gap-2">
                          <Plus className="w-3.5 h-3.5" />
                          Thêm source mới
                       </button>
                    </div>
                    <div className="divide-y divide-white/5">
                       {kbSources.map((source, i) => (
                          <div key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                   <Database className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <div className="space-y-0.5">
                                   <p className="text-sm font-bold">{source.name}</p>
                                   <p className="text-[10px] text-muted-foreground uppercase font-medium">{source.type} • Last sync: {source.date}</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">{source.status}</span>
                                <button className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground"><MoreVertical className="w-5 h-5" /></button>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="glass-card p-8 rounded-3xl border-white/10 bg-gradient-to-br from-primary/5 to-transparent space-y-6">
                    <div className="flex items-center justify-between">
                       <h4 className="font-bold font-outfit text-lg">Huấn luyện & Re-index</h4>
                       <span className="text-[10px] font-bold text-muted-foreground">Embedding Model: text-embedding-3-small</span>
                    </div>
                    <div className="p-6 bg-black/20 rounded-2xl border border-white/10 flex items-center justify-between">
                       <div className="space-y-1">
                          <p className="text-sm font-bold">Thực hiện Vectorize toàn bộ dữ liệu</p>
                          <p className="text-[10px] text-muted-foreground">Việc này sẽ cập nhật kiến thức mới nhất cho AI Chatbot.</p>
                       </div>
                       <button className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-accent/20">
                          <Zap className="w-4 h-4 fill-white" />
                          Re-index All
                       </button>
                    </div>
                 </div>
              </div>
           )}
        </div>

        {/* AI Performance & Settings */}
        <div className="space-y-6">
           <div className="glass-card p-8 rounded-[2.5rem] border-white/10 bg-[#0a0d14] relative overflow-hidden flex flex-col items-center text-center space-y-4">
              <div className="absolute inset-0 bg-primary/5 -z-10 blur-3xl"></div>
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/30">
                 <Bot className="text-white w-10 h-10" />
              </div>
              <div>
                 <h3 className="text-2xl font-outfit font-bold">PQGO AI Core</h3>
                 <p className="text-muted-foreground text-sm">Hệ thống đang hoạt động trên mô hình <strong>Gemini 1.5 Pro</strong></p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div className="grid grid-cols-2 gap-4 w-full">
                 <div className="text-center">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Confidence</p>
                    <p className="text-lg font-bold font-outfit text-emerald-500">94.2%</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Avg Response</p>
                    <p className="text-lg font-bold font-outfit text-primary">0.8s</p>
                 </div>
              </div>
           </div>

           <div className="glass-card p-6 rounded-3xl border-white/5 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">AI Training Logs</h4>
              <div className="space-y-4">
                 {[
                    { event: "Knowledge Update", target: "Hotels List", status: "Success", time: "2 giờ trước" },
                    { event: "Prompt Engineering", target: "Medical Assist", status: "Updated", time: "Hôm qua" },
                    { event: "Review Filter", target: "Auto-hide spam", status: "Active", time: "Real-time" },
                 ].map((log, i) => (
                    <div key={i} className="flex gap-3 justify-between items-start">
                       <div>
                          <p className="text-xs font-bold">{log.event}</p>
                          <p className="text-[10px] text-muted-foreground font-medium">{log.target}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-bold text-primary">{log.status}</p>
                          <p className="text-[10px] text-slate-500">{log.time}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="glass-card p-6 rounded-3xl border-white/5 bg-slate-900/50 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Trạng thái AI Moderator</span>
                 <div className="w-10 h-5 bg-emerald-500/20 rounded-full relative border border-emerald-500/30">
                    <div className="absolute right-0.5 top-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full"></div>
                 </div>
              </div>
              <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                 Hệ thống tự động ẩn các đánh giá có ngôn từ không phù hợp hoặc mang tính chất spam quảng cáo.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}

import { AlertCircle } from "lucide-react";
