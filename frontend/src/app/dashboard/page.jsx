import Link from "next/link";

import {
  ArrowRight,
  CalendarCheck2,
  CalendarClock,
  CalendarDays,
  FileText,
} from "lucide-react";

const cards = [
  {
    title: "Lịch hẹn hôm nay",
    value: "8",
    icon: CalendarDays,
  },
  {
    title: "Chờ xác nhận",
    value: "4",
    icon: CalendarClock,
  },
  {
    title: "Lịch trong tuần",
    value: "36",
    icon: CalendarCheck2,
  },
  {
    title: "Trang đang hoạt động",
    value: "7",
    icon: FileText,
  },
];

const upcomingAppointments = [
  ["09:00", "Nguyễn Hoàng Nam", "Cấy ghép Implant"],
  ["10:30", "Lê Thu Thảo", "Veneer"],
  ["14:00", "Đỗ Minh Ngọc", "Thẩm mỹ nướu"],
];

const updatedPages = [
  ["Trang chủ", "/", "20/09/2026"],
  ["Veneer", "/specialties/veneer", "20/09/2026"],
  [
    "Tái thiết khớp cắn",
    "/specialties/bite-reconstruction",
    "19/09/2026",
  ],
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFB]">
      {/* HEADER */}
      <header
        className="
          flex
          h-[40px]
          items-center
          justify-between
          border-b
          border-slate-100
          bg-white
          px-2

          sm:h-[44px]
          sm:px-3

          md:h-[48px]
          md:px-4

          lg:h-[52px]
          lg:px-5
        "
      >
        <div>
          <div className="text-[3.5px] text-slate-400 sm:text-[5px] md:text-[6px] lg:text-[8px]">
            Dashboard / Tổng quan
          </div>

          <h1 className="mt-0.5 text-[6px] font-bold text-slate-950 sm:text-[8px] md:text-[10px] lg:text-[13px]">
            Tổng quan
          </h1>
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
          <div className="text-right">
            <div className="text-[3.5px] font-bold text-slate-900 sm:text-[5px] md:text-[6px] lg:text-[9px]">
              Bác sĩ Trung
            </div>

            <div className="text-[2.5px] text-cyan-700 sm:text-[3.5px] md:text-[5px] lg:text-[7px]">
              Administrator
            </div>
          </div>

          <div
            className="
              flex
              h-[18px]
              w-[18px]
              items-center
              justify-center
              rounded-full
              bg-[#00696B]
              text-[3px]
              font-bold
              text-white

              sm:h-5
              sm:w-5
              sm:text-[4px]

              md:h-6
              md:w-6
              md:text-[5px]

              lg:h-7
              lg:w-7
              lg:text-[8px]
            "
          >
            DT
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="p-1.5 sm:p-2.5 md:p-3.5 lg:p-5">
        {/* STATS */}
        <div className="grid grid-cols-4 gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
          {cards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-md
                  border
                  border-slate-100
                  bg-white
                  p-1.5
                  shadow-[0_3px_12px_rgba(15,23,42,0.025)]

                  sm:p-2

                  md:rounded-lg
                  md:p-2.5

                  lg:rounded-xl
                  lg:p-3.5
                "
              >
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <div className="text-[2.8px] font-medium text-slate-500 sm:text-[4px] md:text-[5px] lg:text-[8px]">
                      {item.title}
                    </div>

                    <div className="mt-0.5 text-[8px] font-extrabold text-slate-950 sm:text-[11px] md:text-[14px] lg:mt-1 lg:text-[22px]">
                      {item.value}
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      h-[18px]
                      w-[18px]
                      shrink-0
                      items-center
                      justify-center
                      rounded
                      bg-[#EFFFFF]

                      sm:h-5
                      sm:w-5

                      md:h-6
                      md:w-6

                      lg:h-8
                      lg:w-8
                      lg:rounded-lg
                    "
                  >
                    <Icon className="h-[6px] w-[6px] text-[#00696B] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[15px] lg:w-[15px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LOWER AREA */}
        <div className="mt-1.5 grid grid-cols-2 gap-1.5 sm:mt-2 sm:gap-2 md:mt-3 md:gap-3 lg:mt-4 lg:gap-4">
          {/* APPOINTMENTS */}
          <div className="rounded-md border border-slate-100 bg-white p-1.5 sm:p-2 md:rounded-lg md:p-3 lg:rounded-xl lg:p-4">
            <div className="flex items-center justify-between gap-1">
              <div>
                <div className="text-[2.8px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[4px] md:text-[5px] lg:text-[8px]">
                  Lịch hẹn
                </div>

                <h2 className="mt-0.5 text-[5px] font-bold text-slate-950 sm:text-[7px] md:text-[9px] lg:text-[15px]">
                  Lịch sắp tới
                </h2>
              </div>

              <Link
                href="/dashboard/appointments"
                className="flex shrink-0 items-center gap-0.5 text-[2.8px] font-bold uppercase text-cyan-800 sm:text-[4px] md:text-[5px] lg:gap-1 lg:text-[8px]"
              >
                Mở lịch

                <ArrowRight className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px] md:h-[7px] md:w-[7px] lg:h-[11px] lg:w-[11px]" />
              </Link>
            </div>

            <div className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-1.5 md:mt-3 md:space-y-2 lg:mt-4">
              {upcomingAppointments.map(
                ([time, name, service]) => (
                  <div
                    key={`${time}-${name}`}
                    className="flex items-center gap-1 rounded-md bg-[#F8FFFF] p-1 sm:gap-1.5 sm:p-1.5 md:gap-2 md:p-2 lg:gap-3 lg:rounded-lg lg:p-3"
                  >
                    <div className="shrink-0 text-[3px] font-bold text-[#00696B] sm:text-[4.5px] md:text-[6px] lg:text-[10px]">
                      {time}
                    </div>

                    <div className="min-w-0">
                      <div className="truncate text-[3px] font-bold text-slate-900 sm:text-[4.5px] md:text-[6px] lg:text-[9px]">
                        {name}
                      </div>

                      <div className="truncate text-[2.5px] text-slate-500 sm:text-[3.5px] md:text-[5px] lg:text-[8px]">
                        {service}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* UPDATED PAGES */}
          <div className="rounded-md border border-slate-100 bg-white p-1.5 sm:p-2 md:rounded-lg md:p-3 lg:rounded-xl lg:p-4">
            <div className="text-[2.8px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[4px] md:text-[5px] lg:text-[8px]">
              Nội dung
            </div>

            <h2 className="mt-0.5 text-[5px] font-bold text-slate-950 sm:text-[7px] md:text-[9px] lg:text-[15px]">
              Trang vừa cập nhật
            </h2>

            <div className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-1.5 md:mt-3 md:space-y-2 lg:mt-4">
              {updatedPages.map(([name, route, date]) => (
                <div
                  key={route}
                  className="flex items-center justify-between gap-1 rounded-md border border-slate-100 p-1 sm:p-1.5 md:p-2 lg:rounded-lg lg:p-3"
                >
                  <div className="min-w-0">
                    <div className="truncate text-[3px] font-bold text-slate-900 sm:text-[4.5px] md:text-[6px] lg:text-[9px]">
                      {name}
                    </div>

                    <div className="mt-0.5 truncate text-[2.5px] text-slate-400 sm:text-[3.5px] md:text-[5px] lg:text-[8px]">
                      {route}
                    </div>
                  </div>

                  <div className="shrink-0 text-[2.5px] text-slate-500 sm:text-[3.5px] md:text-[5px] lg:text-[8px]">
                    {date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}