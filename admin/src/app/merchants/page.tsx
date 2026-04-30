"use client";

import { useState } from "react";
import { 
  Building2, 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Plus,
  ArrowUpDown,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

const merchants = [
  { id: "M001", name: "InterContinental PQ", type: "Khách sạn", status: "Verified", owner: "James Wilson", revenue: "420.5M", date: "2024-03-24" },
  { id: "M002", name: "Sunset Beach Bar", type: "Nhà hàng/Bar", status: "Pending", owner: "Nguyễn Văn B", revenue: "85.2M", date: "2024-04-10" },
  { id: "M003", name: "Phu Quoc Express", type: "Vận tải", status: "Verified", owner: "Trần Thị C", revenue: "156.8M", date: "2024-02-15" },
  { id: "M004", name: "VinWonders Safari", type: "Điểm tham quan", status: "Verified", owner: "Vingroup", revenue: "1.2B", date: "2024-01-20" },
  { id: "M005", name: "Làng Chài Hàm Ninh", type: "F&B", status: "Attention", owner: "Lê Văn D", revenue: "42.0M", date: "2024-04-12" },
  { id: "M006", name: "Mango Bay Resort", type: "Khách sạn", status: "Verified", owner: "Sarah Jenkins", revenue: "210.4M", date: "2024-03-05" },
];

export default function MerchantsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Verified": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Pending": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Attention": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Verified": return <CheckCircle2 className="w-3.5 h-3.5" />;
      case "Pending": return <Clock className="w-3.5 h-3.5" />;
      case "Attention": return <AlertCircle className="w-3.5 h-3.5" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-outfit font-bold tracking-tight">Cửa hàng & Đối tác</h2>
          <p className="text-muted-foreground text-sm">Quản lý mạng lưới đơn vị cung cấp dịch vụ trong hệ sinh thái.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="glass-button px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium">
            <Download className="w-4 h-4" />
            Xuất báo cáo
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-primary/20 transition-all">
            <Plus className="w-4 h-4" />
            Thêm đối tác mới
          </button>
        </div>
      </div>

      {/* Analytics Mini-Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Tổng đối tác", value: "248", sub: "+5 trong tháng này" },
          { label: "Đang chờ duyệt", value: "14", sub: "Cần xử lý gấp" },
          { label: "Đối tác Kim cương", value: "32", sub: "Top doanh thu" },
          { label: "Tỷ lệ tăng trưởng", value: "18.5%", sub: "So với quý trước" },
        ].map((item, i) => (
          <div key={i} className="glass-card p-5 rounded-2xl border-white/5 space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</p>
            <h4 className="text-2xl font-bold font-outfit">{item.value}</h4>
            <p className="text-[10px] text-primary font-medium">{item.sub}</p>
          </div>
        ))}
      </div>

      {/* Main Table Interface */}
      <div className="glass-card rounded-[2rem] border-white/5 overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/[0.02]">
          <div className="relative w-full sm:w-80 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Tìm đối tác, mã ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-primary/50 text-sm transition-all"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl hover:bg-white/5 text-muted-foreground border border-transparent hover:border-white/10 transition-all">
              <Filter className="w-5 h-5" />
            </button>
            <div className="w-px h-5 bg-white/10 mx-1"></div>
            <button className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest px-3 py-2 rounded-xl hover:bg-white/5 transition-all">
              <ArrowUpDown className="w-4 h-4" />
              Sắp xếp
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.01]">
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-white/5">Đối tác</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-white/5">Loại hình</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-white/5">Chủ sở hữu</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-white/5">Trạng thái</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-white/5">Ước tính Doanh thu</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-white/5">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {merchants.map((merchant) => (
                <tr key={merchant.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                        <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{merchant.name}</p>
                        <p className="text-[10px] text-muted-foreground uppercase font-medium">{merchant.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-300">{merchant.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{merchant.owner}</p>
                    <p className="text-[10px] text-muted-foreground">{merchant.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold border",
                      getStatusStyle(merchant.status)
                    )}>
                      {getStatusIcon(merchant.status)}
                      {merchant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-sm font-outfit">{merchant.revenue}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">Hiển thị 6 trong số 248 đối tác</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", 12].map((p, i) => (
              <button 
                key={i}
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all",
                  p === 1 ? "bg-primary text-white" : "hover:bg-white/5 text-muted-foreground"
                )}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
