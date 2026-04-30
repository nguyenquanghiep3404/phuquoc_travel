"use client";

import { useState } from "react";
import { 
  Ticket, 
  Search, 
  MapPin, 
  Calendar, 
  CreditCard,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const bookings = [
  { id: "BK-8821", customer: "Nguyễn Thu Hà", service: "Tour 4 Đảo Snorkeling", date: "2024-04-15", amount: "1.250.000đ", status: "Confirmed", payment: "VNPay" },
  { id: "BK-8822", customer: "John Doe", service: "VinWonders PQC Ticket", date: "2024-04-15", amount: "950.000đ", status: "Completed", payment: "Stripe" },
  { id: "BK-8823", customer: "Trần Minh Tâm", service: "Cáp treo Hòn Thơm", date: "2024-04-16", amount: "650.000đ", status: "Pending", payment: "MoMo" },
  { id: "BK-8824", customer: "Lê Thị Lan", service: "InterContinental Resort (2 Đêm)", date: "2024-04-20", amount: "8.400.000đ", status: "Confirmed", payment: "Bank Transfer" },
  { id: "BK-8825", customer: "Michael Chen", service: "Vé tàu cao tốc Rạch Giá", date: "2024-04-14", amount: "340.000đ", status: "Cancelled", payment: "ZaloPay" },
];

export default function BookingsPage() {
  const [filter, setFilter] = useState("All");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "text-blue-500 bg-blue-500/10 border-blue-500/20";
      case "Completed": return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      case "Pending": return "text-amber-500 bg-amber-500/10 border-amber-500/20";
      case "Cancelled": return "text-destructive bg-destructive/10 border-destructive/20";
      default: return "text-slate-500 bg-slate-500/10 border-slate-500/20";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-outfit font-bold tracking-tight">Quản lý Đặt chỗ</h2>
          <p className="text-muted-foreground text-sm">Theo dõi và xử lý các giao dịch đặt tour, khách sạn và vé tham quan.</p>
        </div>
      </div>

      <div className="flex gap-2 p-1 bg-white/5 rounded-2xl w-fit border border-white/10">
        {["All", "Pending", "Confirmed", "Completed", "Cancelled"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider",
              filter === f ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="glass-card p-6 rounded-3xl hover:bg-white/[0.03] transition-all border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6 group">
            <div className="flex items-center gap-5 w-full lg:w-auto">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 shadow-inner group-hover:border-primary/30 transition-colors">
                <Ticket className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-lg leading-none">{booking.customer}</h4>
                  <span className={cn("px-2 py-0.5 rounded-md text-[10px] font-bold border", getStatusColor(booking.status))}>
                    {booking.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
                  <span className="text-primary font-bold">{booking.id}</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                  {booking.service}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 w-full lg:w-auto px-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Ngày sử dụng</span>
                </div>
                <p className="text-sm font-semibold">{booking.date}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Thanh toán</span>
                </div>
                <p className="text-sm font-semibold">{booking.payment}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Khách hàng yêu cầu</span>
                </div>
                <p className="text-sm font-semibold">01 Người lớn</p>
              </div>

              <div className="space-y-1 text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Số tiền thanh toán</p>
                <p className="text-lg font-bold font-outfit text-primary">{booking.amount}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
              <button className="glass-button p-3 rounded-xl hover:text-primary transition-colors border border-white/5">
                <Search className="w-5 h-5" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white font-bold px-5 py-3 rounded-xl transition-all flex items-center gap-2 border border-white/10 text-sm whitespace-nowrap">
                Chi tiết
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <button className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 uppercase tracking-widest">
          Xem thêm lịch sử đặt chỗ
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
