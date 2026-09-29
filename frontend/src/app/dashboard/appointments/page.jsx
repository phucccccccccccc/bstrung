"use client";

import { useMemo, useState } from "react";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Mail,
  Phone,
  Plus,
  Search,
  UserRound,
  X,
} from "lucide-react";

const START_HOUR = 8;
const END_HOUR = 20;
const HOUR_HEIGHT = 56;

const days = [
  { name: "Thứ 2", date: 21 },
  { name: "Thứ 3", date: 22, today: true },
  { name: "Thứ 4", date: 23 },
  { name: "Thứ 5", date: 24 },
  { name: "Thứ 6", date: 25 },
  { name: "Thứ 7", date: 26 },
  { name: "Chủ nhật", date: 27 },
];

const appointmentsData = [
  {
    id: 1,
    day: 0,
    name: "Nguyễn Hoàng Nam",
    phone: "0912 345 678",
    email: "nam@email.com",
    service: "Cấy ghép Implant",
    start: "09:00",
    end: "10:30",
    status: "confirmed",
    note: "Tư vấn kế hoạch cấy ghép Implant.",
  },
  {
    id: 2,
    day: 0,
    name: "Trần Bích Phượng",
    phone: "0909 111 222",
    email: "phuong@email.com",
    service: "Tái khám khớp cắn TMJ",
    start: "14:00",
    end: "15:00",
    status: "completed",
    note: "Tái khám sau điều trị.",
  },
  {
    id: 3,
    day: 1,
    name: "Lê Thu Thảo",
    phone: "0933 678 999",
    email: "thao@email.com",
    service: "Tư vấn Veneer",
    start: "08:30",
    end: "09:30",
    status: "completed",
    note: "Tư vấn thiết kế nụ cười.",
  },
  {
    id: 4,
    day: 1,
    name: "Đỗ Minh Ngọc",
    phone: "0918 777 555",
    email: "ngoc@email.com",
    service: "Thẩm mỹ nướu",
    start: "14:00",
    end: "15:00",
    status: "pending",
    note: "Quan tâm điều chỉnh cười hở lợi.",
  },
  {
    id: 5,
    day: 2,
    name: "Hoàng Minh Đức",
    phone: "0905 333 222",
    email: "duc@email.com",
    service: "Khớp cắn TMJ",
    start: "09:30",
    end: "11:00",
    status: "confirmed",
    note: "Khám và đánh giá khớp cắn.",
  },
  {
    id: 6,
    day: 3,
    name: "Phạm Thu Hằng",
    phone: "0908 123 456",
    email: "hang@email.com",
    service: "Implant",
    start: "10:00",
    end: "12:00",
    status: "confirmed",
    note: "Hội chẩn Implant.",
  },
  {
    id: 7,
    day: 4,
    name: "Đặng Quốc Hưng",
    phone: "0907 234 567",
    email: "hung@email.com",
    service: "Veneer",
    start: "09:00",
    end: "10:30",
    status: "confirmed",
    note: "Lắp thử phục hình.",
  },
  {
    id: 8,
    day: 5,
    name: "Nguyễn Khánh Linh",
    phone: "0903 111 999",
    email: "linh@email.com",
    service: "Veneer",
    start: "09:00",
    end: "11:30",
    status: "confirmed",
    note: "Theo dõi phục hình Veneer.",
  },
];

function timeToMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function getPosition(start, end) {
  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);

  const base = START_HOUR * 60;

  const top =
    ((startMinutes - base) / 60) * HOUR_HEIGHT;

  const height =
    ((endMinutes - startMinutes) / 60) *
    HOUR_HEIGHT;

  return {
    top,
    height: Math.max(height, 34),
  };
}

const statusStyle = {
  pending: {
    background: "bg-amber-50",
    border: "border-amber-400",
    text: "text-amber-900",
    label: "Chờ xác nhận",
  },
  confirmed: {
    background: "bg-[#E8FFFF]",
    border: "border-[#00CED1]",
    text: "text-[#005354]",
    label: "Đã xác nhận",
  },
  completed: {
    background: "bg-emerald-50",
    border: "border-emerald-500",
    text: "text-emerald-900",
    label: "Hoàn thành",
  },
  cancelled: {
    background: "bg-red-50",
    border: "border-red-400",
    text: "text-red-800",
    label: "Đã hủy",
  },
};

export default function AppointmentsPage() {
  const [appointments, setAppointments] =
    useState(appointmentsData);

  const [selectedAppointment, setSelectedAppointment] =
    useState(null);

  const [search, setSearch] = useState("");

  const hours = useMemo(() => {
    return Array.from(
      { length: END_HOUR - START_HOUR },
      (_, index) => START_HOUR + index
    );
  }, []);

  const filteredAppointments =
    appointments.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.name.toLowerCase().includes(keyword) ||
        item.phone.includes(keyword) ||
        item.service
          .toLowerCase()
          .includes(keyword)
      );
    });

  const changeStatus = (status) => {
    if (!selectedAppointment) return;

    setAppointments((prev) =>
      prev.map((item) =>
        item.id === selectedAppointment.id
          ? { ...item, status }
          : item
      )
    );

    setSelectedAppointment((prev) => ({
      ...prev,
      status,
    }));
  };

  return (
    <main className="min-h-screen w-full bg-[#F8FBFB]">
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
        <div className="text-[3.5px] text-slate-400 sm:text-[5px] md:text-[6px] lg:text-[8px]">
          Dashboard /{" "}
          <span className="font-semibold text-slate-800">
            Lịch hẹn
          </span>
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

          <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#00696B] text-[3px] font-bold text-white sm:h-5 sm:w-5 sm:text-[4px] md:h-6 md:w-6 md:text-[5px] lg:h-7 lg:w-7 lg:text-[8px]">
            DT
          </div>
        </div>
      </header>

      <div className="w-full p-1.5 sm:p-2.5 md:p-3.5 lg:p-5">
        {/* TOOLBAR */}
        <div
          className="
            mb-2
            flex
            flex-row
            items-center
            justify-between
            gap-2
            rounded-md
            border
            border-slate-100
            bg-white
            p-1.5

            sm:mb-3
            sm:rounded-lg
            sm:p-2

            md:rounded-xl
            md:p-3

            lg:mb-4
            lg:rounded-2xl
            lg:p-4
          "
        >
          <div className="flex min-w-0 items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <div className="shrink-0">
              <h1 className="text-[5px] font-bold text-slate-950 sm:text-[7px] md:text-[10px] lg:text-[15px]">
                Lịch hẹn bệnh nhân
              </h1>

              <div className="mt-0.5 text-[2.5px] text-slate-400 sm:text-[3.5px] md:text-[5px] lg:text-[8px]">
                21 - 27 tháng 09, 2026
              </div>
            </div>

            <div className="flex shrink-0 items-center rounded bg-slate-50 p-0.5 sm:rounded-md lg:rounded-lg">
              <button className="flex h-4 w-4 items-center justify-center rounded hover:bg-white sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7">
                <ChevronLeft className="h-[5px] w-[5px] sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:h-[13px] lg:w-[13px]" />
              </button>

              <button className="h-4 rounded bg-white px-1 text-[2.5px] font-bold text-slate-700 shadow-sm sm:h-5 sm:px-1.5 sm:text-[3.5px] md:h-6 md:px-2 md:text-[5px] lg:h-7 lg:px-2.5 lg:text-[8px]">
                Hôm nay
              </button>

              <button className="flex h-4 w-4 items-center justify-center rounded hover:bg-white sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7">
                <ChevronRight className="h-[5px] w-[5px] sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:h-[13px] lg:w-[13px]" />
              </button>
            </div>

            <div className="relative w-[75px] sm:w-[120px] md:w-[170px] lg:w-[230px]">
              <Search className="absolute left-1.5 top-1/2 h-[5px] w-[5px] -translate-y-1/2 text-slate-400 sm:left-2 sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:left-2.5 lg:h-[13px] lg:w-[13px]" />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Tên, SĐT, dịch vụ..."
                className="h-4 w-full rounded bg-slate-50 pl-4 pr-1 text-[2.5px] outline-none focus:ring-1 focus:ring-cyan-300 sm:h-5 sm:rounded-md sm:pl-5 sm:text-[3.5px] md:h-6 md:pl-6 md:text-[5px] lg:h-8 lg:rounded-lg lg:pl-8 lg:pr-2 lg:text-[8px]"
              />
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-1.5 md:gap-2">
            <div className="flex rounded bg-slate-50 p-0.5 sm:rounded-md lg:rounded-lg">
              <button className="rounded px-1 py-1 text-[2.5px] font-semibold text-slate-500 sm:px-1.5 sm:text-[3.5px] md:px-2 md:text-[5px] lg:px-2.5 lg:py-1.5 lg:text-[8px]">
                Tháng
              </button>

              <button className="rounded bg-white px-1 py-1 text-[2.5px] font-bold text-[#00696B] shadow-sm sm:px-1.5 sm:text-[3.5px] md:px-2 md:text-[5px] lg:px-2.5 lg:py-1.5 lg:text-[8px]">
                Tuần
              </button>

              <button className="rounded px-1 py-1 text-[2.5px] font-semibold text-slate-500 sm:px-1.5 sm:text-[3.5px] md:px-2 md:text-[5px] lg:px-2.5 lg:py-1.5 lg:text-[8px]">
                Ngày
              </button>
            </div>

            <button className="flex h-4 items-center gap-0.5 rounded bg-[#00FFFF] px-1 text-[2.5px] font-bold text-slate-950 shadow-sm sm:h-5 sm:px-1.5 sm:text-[3.5px] md:h-6 md:px-2 md:text-[5px] lg:h-8 lg:gap-1 lg:rounded-lg lg:px-3 lg:text-[8px]">
              <Plus className="h-[5px] w-[5px] sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:h-[13px] lg:w-[13px]" />

              Thêm lịch hẹn
            </button>
          </div>
        </div>

        {/* MAIN GRID - LUÔN SIDEBAR + CALENDAR */}
        <div
          className="
            grid
            grid-cols-[74px_minmax(0,1fr)]
            gap-1.5

            sm:grid-cols-[105px_minmax(0,1fr)]
            sm:gap-2

            md:grid-cols-[150px_minmax(0,1fr)]
            md:gap-3

            lg:grid-cols-[190px_minmax(0,1fr)]
            lg:gap-4
          "
        >
          {/* MINI SIDEBAR */}
          <aside className="rounded-md border border-slate-100 bg-white p-1 sm:rounded-lg sm:p-1.5 md:p-2.5 lg:rounded-xl lg:p-4">
            <div className="flex items-center justify-between gap-1">
              <div className="text-[3px] font-bold text-slate-950 sm:text-[4px] md:text-[6px] lg:text-[10px]">
                Tháng 09, 2026
              </div>

              <div className="flex">
                <ChevronLeft className="h-[5px] w-[5px] sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:h-[13px] lg:w-[13px]" />
                <ChevronRight className="h-[5px] w-[5px] sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:h-[13px] lg:w-[13px]" />
              </div>
            </div>

            <div className="mt-1.5 grid grid-cols-7 text-center text-[2px] font-bold text-slate-400 sm:text-[3px] md:mt-2 md:text-[4px] lg:mt-4 lg:text-[7px]">
              {[
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7",
                "CN",
              ].map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-y-0.5 text-center text-[2px] sm:text-[3px] md:text-[4px] lg:mt-2 lg:gap-y-1 lg:text-[7px]">
              {Array.from(
                { length: 30 },
                (_, index) => index + 1
              ).map((date) => (
                <button
                  key={date}
                  className={`mx-auto flex h-[8px] w-[8px] items-center justify-center rounded-full sm:h-[11px] sm:w-[11px] md:h-[15px] md:w-[15px] lg:h-5 lg:w-5 ${
                    date === 22
                      ? "bg-[#00FFFF] font-bold text-slate-950"
                      : date >= 21 &&
                        date <= 27
                      ? "bg-[#EFFFFF] text-[#00696B]"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>

            <div className="my-1.5 border-t border-slate-100 sm:my-2 md:my-3 lg:my-4" />

            <div>
              <div className="text-[2.5px] font-bold uppercase tracking-wide text-slate-500 sm:text-[3px] md:text-[4px] lg:text-[7px]">
                Dịch vụ
              </div>

              <div className="mt-1 space-y-0.5 sm:mt-1.5 md:space-y-1 lg:mt-2 lg:space-y-1.5">
                {[
                  ["Implant", "#00CED1"],
                  ["Veneer", "#64748B"],
                  ["Khớp cắn TMJ", "#00696B"],
                  ["Thẩm mỹ nướu", "#10B981"],
                ].map(([label, color]) => (
                  <div
                    key={label}
                    className="flex items-center gap-0.5 text-[2px] text-slate-600 sm:text-[3px] md:gap-1 md:text-[4px] lg:gap-1.5 lg:text-[7px]"
                  >
                    <span
                      className="h-[3px] w-[3px] rounded-full sm:h-1 sm:w-1 md:h-1.5 md:w-1.5 lg:h-2 lg:w-2"
                      style={{
                        backgroundColor: color,
                      }}
                    />

                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="my-1.5 border-t border-slate-100 sm:my-2 md:my-3 lg:my-4" />

            <div>
              <div className="text-[2.5px] font-bold uppercase tracking-wide text-slate-500 sm:text-[3px] md:text-[4px] lg:text-[7px]">
                Trạng thái
              </div>

              <div className="mt-1 space-y-0.5 text-[2px] sm:text-[3px] md:text-[4px] lg:mt-2 lg:space-y-1.5 lg:text-[7px]">
                <div className="rounded bg-amber-50 px-1 py-0.5 text-amber-800 sm:rounded-md lg:px-2 lg:py-1.5">
                  Chờ xác nhận
                </div>

                <div className="rounded bg-[#E8FFFF] px-1 py-0.5 text-[#00696B] sm:rounded-md lg:px-2 lg:py-1.5">
                  Đã xác nhận
                </div>

                <div className="rounded bg-emerald-50 px-1 py-0.5 text-emerald-800 sm:rounded-md lg:px-2 lg:py-1.5">
                  Hoàn thành
                </div>

                <div className="rounded bg-red-50 px-1 py-0.5 text-red-700 sm:rounded-md lg:px-2 lg:py-1.5">
                  Đã hủy
                </div>
              </div>
            </div>
          </aside>

          {/* CALENDAR */}
          <section className="overflow-hidden rounded-md border border-slate-100 bg-white sm:rounded-lg md:rounded-xl">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[315px] sm:min-w-[500px] md:min-w-[700px] lg:min-w-[850px]">
                {/* DAY HEADER */}
                <div className="grid grid-cols-[22px_repeat(7,minmax(40px,1fr))] border-b border-slate-100 sm:grid-cols-[30px_repeat(7,minmax(60px,1fr))] md:grid-cols-[42px_repeat(7,minmax(82px,1fr))] lg:grid-cols-[50px_repeat(7,minmax(100px,1fr))]">
                  <div className="flex items-center justify-center border-r border-slate-100">
                    <Clock3 className="h-[5px] w-[5px] text-slate-400 sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:h-[13px] lg:w-[13px]" />
                  </div>

                  {days.map((day) => (
                    <div
                      key={day.date}
                      className={`border-r border-slate-100 p-0.5 text-center last:border-r-0 sm:p-1 md:p-1.5 lg:p-2 ${
                        day.today
                          ? "bg-[#F0FFFF]"
                          : ""
                      }`}
                    >
                      <div
                        className={`text-[2px] font-semibold sm:text-[3px] md:text-[4px] lg:text-[7px] ${
                          day.today
                            ? "text-[#00696B]"
                            : "text-slate-400"
                        }`}
                      >
                        {day.name}
                      </div>

                      <div
                        className={`mt-0.5 text-[5px] font-extrabold sm:text-[7px] md:text-[10px] lg:text-[14px] ${
                          day.today
                            ? "text-[#00696B]"
                            : "text-slate-900"
                        }`}
                      >
                        {day.date}
                      </div>
                    </div>
                  ))}
                </div>

                {/* BODY */}
                <div className="grid grid-cols-[22px_repeat(7,minmax(40px,1fr))] sm:grid-cols-[30px_repeat(7,minmax(60px,1fr))] md:grid-cols-[42px_repeat(7,minmax(82px,1fr))] lg:grid-cols-[50px_repeat(7,minmax(100px,1fr))]">
                  {/* HOURS */}
                  <div className="border-r border-slate-100">
                    {hours.map((hour) => (
                      <div
                        key={hour}
                        style={{
                          height: HOUR_HEIGHT,
                        }}
                        className="border-b border-slate-100 pr-0.5 pt-0.5 text-right text-[2px] text-slate-400 sm:text-[3px] md:text-[4px] lg:pr-1 lg:text-[7px]"
                      >
                        {String(hour).padStart(
                          2,
                          "0"
                        )}
                        :00
                      </div>
                    ))}
                  </div>

                  {/* DAYS */}
                  {days.map(
                    (day, dayIndex) => (
                      <div
                        key={day.date}
                        className={`relative border-r border-slate-100 last:border-r-0 ${
                          day.today
                            ? "bg-[#FBFFFF]"
                            : ""
                        }`}
                        style={{
                          height:
                            (END_HOUR -
                              START_HOUR) *
                            HOUR_HEIGHT,
                        }}
                      >
                        {hours.map((hour) => (
                          <div
                            key={hour}
                            style={{
                              height:
                                HOUR_HEIGHT,
                            }}
                            className="border-b border-slate-100"
                          >
                            <div className="h-1/2 border-b border-dashed border-slate-100" />
                          </div>
                        ))}

                        {filteredAppointments
                          .filter(
                            (item) =>
                              item.day ===
                              dayIndex
                          )
                          .map((item) => {
                            const position =
                              getPosition(
                                item.start,
                                item.end
                              );

                            const style =
                              statusStyle[
                                item.status
                              ];

                            return (
                              <button
                                key={item.id}
                                onClick={() =>
                                  setSelectedAppointment(
                                    item
                                  )
                                }
                                style={{
                                  top: position.top,
                                  height:
                                    position.height -
                                    2,
                                }}
                                className={`absolute left-[1px] right-[1px] overflow-hidden rounded-[2px] border-l p-[2px] text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:left-0.5 sm:right-0.5 sm:rounded sm:border-l-2 sm:p-0.5 md:left-1 md:right-1 md:rounded-md md:p-1 lg:rounded-lg lg:border-l-[3px] lg:p-1.5 ${style.background} ${style.border}`}
                              >
                                <div
                                  className={`text-[1.8px] font-bold sm:text-[2.5px] md:text-[3.5px] lg:text-[6px] ${style.text}`}
                                >
                                  {item.start} -{" "}
                                  {item.end}
                                </div>

                                <div className="mt-[1px] truncate text-[2px] font-bold text-slate-950 sm:text-[3px] md:text-[4px] lg:mt-0.5 lg:text-[7px]">
                                  {item.name}
                                </div>

                                <div className="truncate text-[1.8px] text-slate-500 sm:text-[2.5px] md:text-[3px] lg:mt-0.5 lg:text-[6px]">
                                  {item.service}
                                </div>
                              </button>
                            );
                          })}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* DRAWER BACKDROP */}
      {selectedAppointment && (
        <div
          onClick={() =>
            setSelectedAppointment(null)
          }
          className="fixed inset-0 z-[80] bg-slate-950/20 backdrop-blur-[1px]"
        />
      )}

      {/* DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-[90] flex h-screen w-[82%] max-w-[390px] flex-col bg-white shadow-2xl transition-transform duration-300 sm:w-[62%] md:w-[45%] lg:w-[390px] ${
          selectedAppointment
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {selectedAppointment && (
          <>
            <div className="flex items-center justify-between border-b border-slate-100 p-3 sm:p-4 lg:p-5">
              <div>
                <div className="text-[9px] font-bold text-slate-950 sm:text-[11px] md:text-[13px] lg:text-[16px]">
                  Chi tiết lịch hẹn
                </div>

                <div className="mt-0.5 text-[5px] text-slate-400 sm:text-[6px] md:text-[7px] lg:mt-1 lg:text-[9px]">
                  #
                  {String(
                    selectedAppointment.id
                  ).padStart(4, "0")}
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedAppointment(null)
                }
                className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 sm:h-7 sm:w-7 lg:h-9 lg:w-9"
              >
                <X className="h-[9px] w-[9px] sm:h-[11px] sm:w-[11px] lg:h-[17px] lg:w-[17px]" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-3 sm:space-y-4 sm:p-4 lg:space-y-6 lg:p-5">
              <div
                className={`rounded-lg p-2 text-[6px] font-bold sm:text-[7px] lg:rounded-xl lg:p-3 lg:text-[10px] ${
                  statusStyle[
                    selectedAppointment.status
                  ].background
                } ${
                  statusStyle[
                    selectedAppointment.status
                  ].text
                }`}
              >
                {
                  statusStyle[
                    selectedAppointment.status
                  ].label
                }
              </div>

              <div className="rounded-xl border border-slate-100 p-3 lg:rounded-2xl lg:p-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00696B] text-white lg:h-11 lg:w-11">
                    <UserRound className="h-[12px] w-[12px] lg:h-[18px] lg:w-[18px]" />
                  </div>

                  <div>
                    <div className="text-[8px] font-bold text-slate-950 sm:text-[10px] lg:text-[14px]">
                      {
                        selectedAppointment.name
                      }
                    </div>

                    <div className="text-[5px] text-slate-400 lg:text-[9px]">
                      Bệnh nhân
                    </div>
                  </div>
                </div>

                <div className="mt-3 space-y-2 border-t border-slate-100 pt-3 lg:mt-4 lg:space-y-3 lg:pt-4">
                  <div className="flex items-center gap-2 text-[6px] text-slate-600 sm:text-[7px] lg:gap-3 lg:text-[11px]">
                    <Phone className="h-[9px] w-[9px] text-cyan-700 lg:h-[15px] lg:w-[15px]" />

                    {
                      selectedAppointment.phone
                    }
                  </div>

                  <div className="flex items-center gap-2 text-[6px] text-slate-600 sm:text-[7px] lg:gap-3 lg:text-[11px]">
                    <Mail className="h-[9px] w-[9px] text-cyan-700 lg:h-[15px] lg:w-[15px]" />

                    {
                      selectedAppointment.email
                    }
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[5px] font-bold uppercase tracking-wide text-slate-400 lg:text-[9px]">
                  Dịch vụ
                </div>

                <div className="mt-1 rounded-lg bg-[#F8FFFF] p-2 text-[7px] font-bold text-slate-900 lg:mt-2 lg:rounded-xl lg:p-4 lg:text-[12px]">
                  {
                    selectedAppointment.service
                  }
                </div>
              </div>

              <div>
                <div className="text-[5px] font-bold uppercase tracking-wide text-slate-400 lg:text-[9px]">
                  Thời gian
                </div>

                <div className="mt-1 flex items-center gap-2 rounded-lg bg-[#F8FFFF] p-2 lg:mt-2 lg:gap-3 lg:rounded-xl lg:p-4">
                  <CalendarDays className="h-[10px] w-[10px] text-cyan-700 lg:h-[17px] lg:w-[17px]" />

                  <div>
                    <div className="text-[7px] font-bold text-slate-900 lg:text-[12px]">
                      {
                        days[
                          selectedAppointment.day
                        ].name
                      }
                      ,{" "}
                      {
                        days[
                          selectedAppointment.day
                        ].date
                      }
                      /09/2026
                    </div>

                    <div className="mt-0.5 text-[5px] text-slate-500 lg:mt-1 lg:text-[10px]">
                      {
                        selectedAppointment.start
                      }{" "}
                      -{" "}
                      {
                        selectedAppointment.end
                      }
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[5px] font-bold uppercase tracking-wide text-slate-400 lg:text-[9px]">
                  Ghi chú
                </div>

                <div className="mt-1 rounded-lg bg-slate-50 p-2 text-[6px] leading-3 text-slate-600 lg:mt-2 lg:rounded-xl lg:p-4 lg:text-[11px] lg:leading-5">
                  {
                    selectedAppointment.note
                  }
                </div>
              </div>
            </div>

            <div className="space-y-1.5 border-t border-slate-100 p-3 lg:space-y-2 lg:p-5">
              <button
                onClick={() =>
                  changeStatus("confirmed")
                }
                className="w-full rounded-lg bg-[#00FFFF] py-2 text-[6px] font-bold text-slate-950 lg:rounded-xl lg:py-3 lg:text-[11px]"
              >
                Xác nhận lịch
              </button>

              <div className="grid grid-cols-2 gap-1.5 lg:gap-2">
                <button
                  onClick={() =>
                    changeStatus("completed")
                  }
                  className="rounded-lg bg-emerald-50 py-1.5 text-[6px] font-bold text-emerald-800 lg:rounded-xl lg:py-2.5 lg:text-[10px]"
                >
                  Hoàn thành
                </button>

                <button className="rounded-lg bg-slate-100 py-1.5 text-[6px] font-bold text-slate-700 lg:rounded-xl lg:py-2.5 lg:text-[10px]">
                  Đổi lịch
                </button>
              </div>

              <button
                onClick={() =>
                  changeStatus("cancelled")
                }
                className="w-full rounded-lg py-1.5 text-[6px] font-bold text-red-500 hover:bg-red-50 lg:rounded-xl lg:py-2.5 lg:text-[10px]"
              >
                Hủy lịch
              </button>
            </div>
          </>
        )}
      </aside>
    </main>
  );
}