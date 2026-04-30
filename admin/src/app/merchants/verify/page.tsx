"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  FileText, 
  Image as ImageIcon, 
  CheckCircle, 
  X, 
  Info,
  ChevronLeft,
  Calendar,
  User,
  MapPin,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MerchantVerifyPage() {
  const [activeTab, setActiveTab] = useState("docs");

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center gap-4">
        <Link href="/admin/merchants" className="p-3 glass-card rounded-2xl hover:text-primary transition-colors border-white/5">
           <ChevronLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-3xl font-outfit font-bold tracking-tight">Thẩm định Đối tác</h2>
          <p className="text-muted-foreground text-sm">Xem xét hồ sơ pháp lý và thông tin kinh doanh của đối tác: <span className="text-foreground font-bold font-outfit">Sunset Beach Bar</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Summary Card */}
        <div className="space-y-6">
           <div className="glass-card p-8 rounded-[2.5rem] border-white/10 space-y-6">
              <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/20 mx-auto border-4 border-white/10">
                 <Briefcase className="text-white w-10 h-10" />
              </div>
              <div className="text-center space-y-1">
                 <h3 className="text-xl font-bold font-outfit">Sunset Beach Bar</h3>
                 <p className="text-xs text-muted-foreground uppercase font-medium tracking-widest">Mã ID: M002</p>
                 <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full text-[10px] font-bold mt-2">
                    <Clock className="w-3 h-3" />
                    Chờ thẩm định
                 </span>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                 <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div className="text-xs">
                       <p className="text-muted-foreground font-medium uppercase tracking-tighter">Chủ sở hữu</p>
                       <p className="font-bold">Nguyễn Văn B</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div className="text-xs">
                       <p className="text-muted-foreground font-medium uppercase tracking-tighter">Địa chỉ</p>
                       <p className="font-bold">Khu phố 7, TT Dương Đông, Phú Quốc</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div className="text-xs">
                       <p className="text-muted-foreground font-medium uppercase tracking-tighter">Ngày đăng ký</p>
                       <p className="font-bold">10/04/2026</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="glass-card p-6 rounded-3xl border-white/5 bg-destructive/5 space-y-3">
              <div className="flex items-center gap-2 text-destructive">
                 <AlertCircle className="w-4 h-4" />
                 <h4 className="font-bold text-xs uppercase tracking-widest">Quy định thẩm định</h4>
              </div>
              <p className="text-[11px] text-destructive/80 leading-relaxed italic">
                 Vui lòng kiểm tra kỹ tính hợp lệ của Giấy phép kinh doanh và CCCD. Mọi sai sót có thể ảnh hưởng đến pháp lý của nền tảng PQGO.
              </p>
           </div>
        </div>

        {/* Verification Tabs & Content */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex gap-2 p-1 bg-white/5 rounded-2xl w-fit border border-white/10">
              <button onClick={() => setActiveTab("docs")} className={cn("px-6 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-widest", activeTab === "docs" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground")}>Giấy tờ pháp lý</button>
              <button onClick={() => setActiveTab("info")} className={cn("px-6 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-widest", activeTab === "info" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground")}>Thông tin shop</button>
           </div>

           <div className="glass-card p-8 rounded-[2.5rem] border-white/10 space-y-8 min-h-[500px]">
              {activeTab === "docs" ? (
                 <div className="space-y-8 animate-fade-in">
                    <div className="space-y-4">
                       <h4 className="font-bold text-lg flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary" />
                          Giấy phép kinh doanh
                       </h4>
                       <div className="aspect-[16/9] w-full rounded-3xl bg-white/5 border border-white/10 border-dashed flex flex-col items-center justify-center group hover:bg-white/[0.08] transition-all cursor-zoom-in relative overflow-hidden">
                          <ImageIcon className="w-12 h-12 text-muted-foreground mb-4 group-hover:scale-110 transition-transform" />
                          <p className="text-xs font-bold text-muted-foreground">ANH_GPKD_M002.JPG</p>
                          <p className="text-[10px] text-muted-foreground/50 mt-1">Click để phóng to chi tiết</p>
                          {/* Mock Image Overlay */}
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                             <p className="text-[10px] font-bold uppercase text-muted-foreground">Số giấy phép</p>
                             <p className="font-bold">4102030405</p>
                          </div>
                          <div className="space-y-1 text-right">
                             <p className="text-[10px] font-bold uppercase text-muted-foreground">Ngày cấp</p>
                             <p className="font-bold">12/12/2023</p>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-white/5">
                       <h4 className="font-bold text-lg flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-accent" />
                          CCCD Người đại diện
                       </h4>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="aspect-[3/2] rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Mặt trước</p>
                             <ImageIcon className="w-8 h-8 text-muted-foreground/30" />
                          </div>
                          <div className="aspect-[3/2] rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Mặt sau</p>
                             <ImageIcon className="w-8 h-8 text-muted-foreground/30" />
                          </div>
                       </div>
                    </div>
                 </div>
              ) : (
                 <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Tên hiển thị</p>
                          <p className="font-bold text-lg">Sunset Beach Bar & Dining</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Loại hình</p>
                          <p className="font-bold text-lg">Nhà hàng / Bar</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Giờ mở cửa</p>
                          <p className="font-bold text-lg text-emerald-500">16:00 - 02:00</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Phân khúc giá</p>
                          <p className="font-bold text-lg">$$$ High-end</p>
                       </div>
                    </div>
                    
                    <div className="space-y-4">
                       <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Mô tả giới thiệu</p>
                       <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-sm leading-relaxed text-slate-300">
                          Sở hữu tầm nhìn đắt giá nhất Phú Quốc, Sunset Beach Bar mang đến không gian âm nhạc sôi động, đồ uống cao cấp và những bữa tiệc nướng hải sản đặc trưng dưới ánh hoàng hôn.
                       </div>
                    </div>
                 </div>
              )}
           </div>

           {/* Feedback & Action Area */}
           <div className="glass-card p-8 rounded-[2.5rem] border-white/10 space-y-6">
              <div className="space-y-3">
                 <label className="text-sm font-bold ml-1 flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    Ghi chú / Phản hồi cho đối tác
                 </label>
                 <textarea 
                    placeholder="Nhập lý do nếu từ chối hoặc yêu cầu bổ sung thông tin..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-[120px] focus:outline-none focus:border-primary/50 text-sm"
                 ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                 <button className="flex-1 px-8 py-4 rounded-2xl border border-destructive/30 text-destructive font-bold hover:bg-destructive/10 transition-all flex items-center justify-center gap-2">
                    <X className="w-5 h-5" />
                    Từ chối hồ sơ
                 </button>
                 <button className="flex-1 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Phê duyệt Đối tác
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

import { Clock, AlertCircle } from "lucide-react";
