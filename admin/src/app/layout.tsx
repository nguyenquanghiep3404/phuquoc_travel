"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname === "/login/2fa";

  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground flex min-h-screen`}
      >
        {!isLoginPage && <Sidebar />}
        <div className={isLoginPage ? "w-full" : "flex-1 flex flex-col lg:ml-64 min-w-0"}>
          {!isLoginPage && <Navbar />}
          <main className={isLoginPage ? "min-h-screen" : "flex-1 p-4 md:p-8 animate-fade-in relative"}>
            {children}
            
            {/* Background Decorative Elements */}
            <div className="fixed top-[-10%] right-[-10%] w-32 md:w-[500px] h-32 md:h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="fixed bottom-[-10%] left-[20%] w-32 md:w-[400px] h-32 md:h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          </main>
        </div>
      </body>
    </html>
  );
}
