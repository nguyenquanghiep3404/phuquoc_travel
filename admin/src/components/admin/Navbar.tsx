"use client";

import { Bell, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-white/10 bg-background/50 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Tìm kiếm giao dịch, đối tác, booking..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2.5 rounded-xl hover:bg-white/5 relative group transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
        </button>

        <div className="w-px h-6 bg-white/10 mx-2"></div>

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold leading-none">Admin PQGO</p>
            <p className="text-[10px] text-muted-foreground mt-1">Quản trị viên hệ thống</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center border border-white/20 shadow-lg cursor-pointer">
            <User className="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  );
}
