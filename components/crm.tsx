export const DashboardWidget = () => (
  <div className="w-full h-full bg-[#FAFAFA] flex flex-col text-slate-800 font-sans shadow-2xl overflow-hidden relative group/dash">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-primary/10 blur-[60px] pointer-events-none" />
    <div className="h-12 md:h-14 border-b border-slate-200/60 flex items-center px-4 justify-between bg-white/80 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm border border-black/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm border border-black/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm border border-black/10" />
      </div>
      <div className="hidden sm:flex w-44 hover:w-56 transition-all duration-300 h-8 bg-slate-100 rounded-md border border-slate-200 items-center px-3 cursor-pointer">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-400"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span className="text-[11px] text-slate-400 ml-2 font-medium">
          Mijoz yoki ID kiriting...
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-500"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white animate-pulse" />
        </div>
        <div className="w-7 h-7 rounded-full bg-linear-to-tr from-blue-600 to-purple-500 border-2 border-white shadow-md cursor-pointer hover:ring-2 ring-blue-primary/30 transition-all" />
      </div>
    </div>

    <div className="flex flex-1 overflow-hidden z-10 relative">
      <div className="w-14 md:w-16 border-r border-slate-200/60 flex flex-col items-center py-4 gap-3 bg-white/50 backdrop-blur-sm">
        {["home", "users", "chart", "settings"].map((icon, i) => (
          <div
            key={i}
            className={`w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-all ${
              i === 0
                ? "bg-blue-primary text-white shadow-lg shadow-blue-primary/30 scale-105"
                : "text-slate-400 hover:bg-slate-100 hover:text-slate-700 active:scale-95"
            }`}
          >
            {i === 0 && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            )}
            {i === 1 && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            )}
            {i === 2 && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            )}
            {i === 3 && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51z"></path>
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="flex-1 p-4 md:p-6 flex flex-col gap-5 overflow-hidden">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] font-bold text-blue-primary tracking-widest uppercase mb-1 opacity-80">
              Asosiy Panel
            </p>
            <h4 className="text-lg md:text-xl font-bold text-slate-800 leading-none">
              Boshqaruv & Savdo
            </h4>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold border border-emerald-100 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Onlayn
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[
            {
              label: "Oylik Tushum",
              value: "428.5 mln",
              change: "+14.2%",
              up: true,
            },
            {
              label: "Muvaffaqiyatli",
              value: "1,284 ta",
              change: "+5.4%",
              up: true,
            },
            {
              label: "Sof Foyda",
              value: "112.4 mln",
              change: "+8.1%",
              up: true,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-3 md:p-4 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 cursor-pointer ${i === 2 ? "hidden md:block" : ""}`}
            >
              <p className="text-[11px] text-slate-500 font-medium mb-1">
                {stat.label}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg md:text-xl font-extrabold text-slate-800 tracking-tight">
                  {stat.value}
                </span>
                <span
                  className={`text-[10px] font-bold ${stat.up ? "text-emerald-500" : "text-red-500"}`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="mt-3 flex gap-0.5 items-end h-6 opacity-60">
                {[30, 40, 20, 50, 45, 70, 65, 80, 90, 85, 100].map((h, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-slate-100 rounded-t-sm transition-all hover:bg-slate-300"
                    style={{ height: `${h}%` }}
                  >
                    <div
                      className={`w-full h-full rounded-t-sm transition-colors ${stat.up ? "bg-blue-primary/20" : "bg-slate-200"}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col relative overflow-hidden group/chart cursor-crosshair">
          <div className="flex justify-between items-center mb-4 z-10">
            <h5 className="text-xs font-bold text-slate-700">
              Kunlik Savdo Dinamikasi
            </h5>
            <div className="text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md uppercase tracking-wider">
              Shu Hafta
            </div>
          </div>

          <div className="flex items-end gap-2 md:gap-3 flex-1 px-1 relative z-10">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="w-full border-t border-dashed border-slate-400" />
              <div className="w-full border-t border-dashed border-slate-400" />
              <div className="w-full border-t border-dashed border-slate-400" />
            </div>

            {[40, 70, 45, 90, 65, 100, 55].map((height, idx) => (
              <div
                key={idx}
                className="group/bar flex-1 relative flex flex-col justify-end h-full"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold py-1 px-2.5 rounded shadow-lg opacity-0 group-hover/bar:opacity-100 group-hover/bar:-translate-y-1 transition-all duration-200 whitespace-nowrap z-20 pointer-events-none">
                  {Math.round(height * 1.5)} mln so'm
                </div>

                <div
                  className="w-full bg-blue-50 border border-blue-100 rounded-t-md transition-all duration-300 group-hover/bar:bg-blue-primary group-hover/bar:shadow-[0_0_15px_rgba(99,91,255,0.4)] relative overflow-hidden"
                  style={{ height: `${height}%` }}
                >
                  {idx === 5 && (
                    <div className="absolute inset-0 bg-blue-primary" />
                  )}
                </div>
                <div className="text-[9px] font-bold text-slate-400 mt-2 text-center uppercase tracking-widest transition-colors group-hover/bar:text-blue-primary">
                  {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"][idx]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
