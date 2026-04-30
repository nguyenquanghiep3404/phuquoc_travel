export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-outfit font-bold tracking-tight">Chào buổi sáng, Quản trị viên!</h2>
        <p className="text-muted-foreground">Dưới đây là tổng quan về hệ sinh thái du lịch Phú Quốc hôm nay.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Tổng doanh thu", value: "128,400,000đ", trend: "+12.5%", color: "primary" },
          { label: "Booking mới", value: "48", trend: "+5.2%", color: "accent" },
          { label: "Đối tác mới", value: "12", trend: "+2", color: "primary" },
          { label: "Yêu cầu SOS", value: "2", trend: "0", color: "destructive" },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl space-y-2 hover:scale-[1.02] transition-transform cursor-pointer">
            <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold font-outfit">{stat.value}</h3>
              <span className={`text-xs font-bold px-2 py-1 rounded-lg bg-${stat.color}/10 text-${stat.color}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-8 rounded-3xl min-h-[400px] flex items-center justify-center border-dashed border-2 border-white/5">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg">Biểu đồ tăng trưởng</h4>
            <p className="text-sm text-muted-foreground">Dữ liệu đang được đồng bộ hóa...</p>
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-3xl space-y-6">
          <h4 className="font-bold text-lg font-outfit">Hoạt động gần đây</h4>
          <div className="space-y-4">
            {[
              { type: "Booking", desc: "Nguyễn Văn A vừa đặt Tour 4 đảo", time: "2 phút trước" },
              { type: "Merchant", desc: "Nhà hàng Sunset vừa cập nhật Menu mới", time: "15 phút trước" },
              { type: "System", desc: "Cập nhật thành công hệ thống bản đồ", time: "1 giờ trước" },
              { type: "SOS", desc: "Yêu cầu y tế tại khu vực Bãi Trường", time: "3 giờ trước" },
            ].map((activity, i) => (
              <div key={i} className="flex gap-3 items-start border-l-2 border-primary/20 pl-4 py-1">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-primary uppercase">{activity.type}</p>
                  <p className="text-sm font-medium">{activity.desc}</p>
                  <p className="text-[10px] text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
