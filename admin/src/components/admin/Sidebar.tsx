"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Store, 
  CalendarCheck, 
  Map as MapIcon, 
  ShieldAlert, 
  Bot, 
  Settings, 
  Users,
  LogOut,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Store, label: "Cửa hàng & Đối tác", href: "/merchants" },
  { icon: CalendarCheck, label: "Đơn đặt chỗ", href: "/bookings" },
  { icon: MapIcon, label: "Bản đồ & POI", href: "/map" },
  { icon: ShieldAlert, label: "Y tế & SOS", href: "/safety" },
  { icon: Bot, label: "AI & Nội dung", href: "/ai" },
  { icon: Users, label: "Người dùng", href: "/users" },
  { icon: Settings, label: "Cài đặt hệ thống", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on navigation for mobile
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-5 left-5 z-[60] bg-primary p-2.5 rounded-xl text-white shadow-lg shadow-primary/30"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside className={cn(
        "fixed left-0 top-0 h-screen w-64 glass-card border-r border-white/10 flex flex-col z-50 transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-xl font-outfit">P</span>
            </div>
            <div>
              <h1 className="font-outfit font-bold text-lg leading-tight">PQGO Admin</h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Hệ sinh thái du lịch</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto pt-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "group-hover:text-primary transition-colors")} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Đăng xuất</span>
          </button>
        </div>
      </aside>
    </>
  );
}
