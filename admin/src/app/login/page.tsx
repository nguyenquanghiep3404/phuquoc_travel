"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      window.location.href = "/login/2fa";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#050810]">
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-[450px] space-y-8 animate-fade-in relative z-10">
        <div className="text-center space-y-2">
          <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 mx-auto mb-6 rotate-3 hover:rotate-0 transition-transform duration-500">
            <span className="text-white font-bold text-4xl font-outfit">P</span>
          </div>
          <h1 className="text-4xl font-outfit font-bold tracking-tight text-white">Chào mừng trở lại!</h1>
          <p className="text-slate-400">Đăng nhập để quản lý hệ sinh thái du lịch PQGO</p>
        </div>

        <div className="glass-card p-8 rounded-[2.5rem] border-white/10 shadow-2xl bg-white/[0.03]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Email quản trị</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                <input 
                  type="email" 
                  required
                  placeholder="admin@pqgo.vn"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-white placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-slate-300">Mật khẩu</label>
                <Link href="#" className="text-xs text-primary hover:text-primary/80 transition-colors">Quên mật khẩu?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-white placeholder:text-slate-600"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5 text-slate-500" /> : <Eye className="w-5 h-5 text-slate-500" />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Đăng nhập hệ thống
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-8">
            Bạn cần hỗ trợ? <Link href="#" className="text-slate-300 hover:text-white transition-colors">Liên hệ kỹ thuật</Link>
          </p>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-center gap-6 text-[11px] text-slate-600 uppercase tracking-widest font-medium">
          <span>Security v2.4</span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span>Phu Quoc Travel Ecosystem</span>
        </div>
      </div>
    </div>
  );
}
