import Image from "next/image";

export const LmsWidget = () => (
  <div className="w-full h-full bg-[#FCFCFD] flex flex-col text-slate-800 font-sans shadow-2xl overflow-hidden relative group/lms">
    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] pointer-events-none rounded-full" />

    <div className="h-12 md:h-14 border-b border-slate-200/60 flex items-center px-4 justify-between bg-white/80 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm border border-black/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm border border-black/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm border border-black/10" />
      </div>

      <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
        <div className="w-4 h-4 rounded-full bg-purple-500 text-white flex items-center justify-center text-[8px] font-bold">
          A
        </div>
        <span className="text-[10px] font-bold text-slate-600 tracking-wide uppercase">
          Admin Panel
        </span>
      </div>

      <div className="flex items-center gap-3">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-400 hover:text-purple-500 transition-colors cursor-pointer"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>

        <div className="w-7 h-7 p-1 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
          <Image
            src="/it-house.webp"
            alt="IT House logo"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>

    <div className="flex flex-col flex-1 p-4  gap-2 z-10 relative overflow-hidden">
      <div className="flex justify-between items-end">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-slate-800 leading-none mb-1">
            IT House
          </h4>
          <p className="text-[11px] font-medium text-slate-500">
            Jami 23 ta guruh faol
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-purple-300 group/stat cursor-pointer">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
            O&apos;quvchilar
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-slate-800">842</span>
            <span className="text-[10px] font-bold text-emerald-500">
              +24 ta
            </span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-purple-300 group/stat cursor-pointer">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
            Davomat
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-slate-800">94%</span>
            <span className="text-[10px] font-bold text-emerald-500">A&apos;lo</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-900 rounded-xl p-4 text-white shadow-lg relative overflow-hidden group/live cursor-pointer transform transition-transform hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/30 blur-[40px]" />

        <div className="flex justify-between items-start relative z-10">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              <span className="text-[9px] font-bold text-red-400 uppercase tracking-widest">
                Jonli Dars
              </span>
            </div>
            <h5 className="text-sm font-bold">Backend Dasturlash</h5>
            <p className="text-[10px] text-slate-400 mt-0.5">
              O&apos;qituvchi: Jamshid Ch.
            </p>
          </div>

          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-slate-900 z-30" />
            <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 z-20" />
            <div className="w-6 h-6 rounded-full bg-amber-500 border-2 border-slate-900 z-10" />
            <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[8px] font-bold z-0">
              +42
            </div>
          </div>
        </div>

        <div className="mt-4 relative z-10">
          <div className="flex justify-between text-[9px] text-slate-300 font-bold mb-1.5">
            <span>Dars vaqti</span>
            <span>42 / 90 daq</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div className="w-[75%] h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full relative">
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 animate-[ping_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 mt-1">
        <h5 className="text-xs font-bold text-slate-700">
          Guruhlar o&apos;zlashtirishi
        </h5>

        {[
          { name: "IELTS Intensive", progress: 85, color: "bg-emerald-500" },
        ].map((course, i) => (
          <div
            key={i}
            className="group/course relative flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-100 shadow-sm hover:border-purple-200 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="absolute -top-7 right-0 bg-slate-800 text-white text-[9px] font-bold py-1 px-2 rounded opacity-0 group-hover/course:opacity-100 transition-opacity z-20 pointer-events-none">
              O&apos;rtacha ball: {course.progress}%
            </div>

            <div className="flex items-center gap-3 w-1/2">
              <div className={`w-2 h-2 rounded-full ${course.color}`} />
              <span className="text-[11px] font-bold text-slate-700 truncate">
                {course.name}
              </span>
            </div>

            <div className="w-1/3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${course.color} rounded-full transition-all duration-700 group-hover/course:brightness-110`}
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
