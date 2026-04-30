"use client";

import { useState, useRef, useEffect } from "react";
import { ShieldCheck, ArrowRight, RefreshCw } from "lucide-react";

export default function TwoFactorPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#050810]">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]"></div>
      
      <div className="w-full max-w-[500px] space-y-8 animate-fade-in relative z-10">
        <div className="text-center space-y-3">
          <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center shadow-2xl shadow-accent/40 mx-auto mb-6">
            <ShieldCheck className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl font-outfit font-bold tracking-tight text-white">Xác thực 2 lớp</h1>
          <p className="text-slate-400">Vui lòng nhập mã bảo mật được gửi đến ứng dụng xác thực của bạn.</p>
        </div>

        <div className="glass-card p-10 rounded-[2.5rem] border-white/10 shadow-2xl bg-white/[0.03]">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-between gap-3">
              {code.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputs.current[i] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-full h-16 bg-white/[0.05] border border-white/10 rounded-2xl text-center text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all font-outfit"
                />
              ))}
            </div>

            <button 
              type="submit"
              disabled={isLoading || code.some(d => !d)}
              className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Xác minh danh tính
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center gap-4">
            <button className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Gửi lại mã mới
            </button>
            <Link href="/login" className="text-xs text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest font-bold">
              Quay lại đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
