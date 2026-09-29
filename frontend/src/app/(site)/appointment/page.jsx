"use client";

import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Send,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment:", form);

    setSubmitted(true);

    setForm({
      fullName: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      note: "",
    });
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FFFF] via-white to-white px-5 py-20 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#CCFFFF]/45 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#99FFFF] bg-white px-4 py-2">
              <CalendarDays size={16} className="text-cyan-700" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-800">
                Lịch hẹn cùng Bác sĩ Trung
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[60px]">
              Đặt lịch thăm khám{" "}
              <span className="text-cyan-900">trực tiếp</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-8 text-slate-600 lg:text-[18px]">
              Gửi thông tin để được hỗ trợ sắp xếp lịch phù hợp và trao đổi
              trực tiếp với Bác sĩ Trung về tình trạng bạn đang quan tâm.
            </p>
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="px-5 pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
          {/* LEFT INFO */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-[26px] border border-[#CCFFFF] bg-[#F8FFFF] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                <Stethoscope size={23} className="text-cyan-800" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-slate-950">
                Quy trình đặt lịch
              </h2>

              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00FFFF] text-[11px] font-bold text-slate-950">
                    1
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Gửi yêu cầu
                    </h3>

                    <p className="mt-1 text-[12px] leading-6 text-slate-600">
                      Điền thông tin cơ bản và thời gian mong muốn.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CCFFFF] text-[11px] font-bold text-cyan-900">
                    2
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Xác nhận lịch
                    </h3>

                    <p className="mt-1 text-[12px] leading-6 text-slate-600">
                      Nhân viên xác nhận lại ngày và khung giờ phù hợp.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CCFFFF] text-[11px] font-bold text-cyan-900">
                    3
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Thăm khám trực tiếp
                    </h3>

                    <p className="mt-1 text-[12px] leading-6 text-slate-600">
                      Bác sĩ đánh giá tình trạng và tư vấn hướng xử lý phù hợp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={21}
                  className="mt-0.5 shrink-0 text-cyan-700"
                />

                <div>
                  <h3 className="font-bold text-slate-950">
                    Bảo mật thông tin
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    Dữ liệu đặt lịch chỉ được sử dụng để liên hệ và xác nhận
                    lịch hẹn.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Clock
                  size={21}
                  className="mt-0.5 shrink-0 text-cyan-700"
                />

                <div>
                  <h3 className="font-bold text-slate-950">
                    Thời gian dự kiến
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    Thứ Hai – Thứ Bảy. Khung giờ cụ thể sẽ được xác nhận lại.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-8">
            <div className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
              <div className="mb-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-800">
                  Phiếu đặt lịch
                </div>

                <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
                  Thông tin lịch hẹn
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[11px] font-bold text-slate-700">
                      Họ và tên *
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Nguyễn Văn An"
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FFFF] px-4 py-3.5 text-[14px] outline-none transition focus:border-[#00FFFF] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-bold text-slate-700">
                      Số điện thoại *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="09xx xxx xxx"
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FFFF] px-4 py-3.5 text-[14px] outline-none transition focus:border-[#00FFFF] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-bold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full rounded-xl border border-slate-200 bg-[#F8FFFF] px-4 py-3.5 text-[14px] outline-none transition focus:border-[#00FFFF] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-bold text-slate-700">
                    Dịch vụ quan tâm *
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-[#F8FFFF] px-4 py-3.5 text-[14px] outline-none transition focus:border-[#00FFFF] focus:bg-white"
                  >
                    <option value="">Chọn chuyên môn</option>
                    <option value="implant">Cấy ghép Implant</option>
                    <option value="veneer">Veneer / Phục hình sứ</option>
                    <option value="tmj">Khớp cắn / TMJ</option>
                    <option value="esthetic">Nha khoa thẩm mỹ</option>
                    <option value="checkup">Khám tổng quát</option>
                    <option value="other">Tư vấn khác</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[11px] font-bold text-slate-700">
                      Ngày mong muốn *
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FFFF] px-4 py-3.5 text-[14px] outline-none transition focus:border-[#00FFFF] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-bold text-slate-700">
                      Khung giờ *
                    </label>

                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FFFF] px-4 py-3.5 text-[14px] outline-none transition focus:border-[#00FFFF] focus:bg-white"
                    >
                      <option value="">Chọn khung giờ</option>
                      <option value="09:00 - 10:30">
                        09:00 - 10:30
                      </option>
                      <option value="10:30 - 12:00">
                        10:30 - 12:00
                      </option>
                      <option value="14:00 - 15:30">
                        14:00 - 15:30
                      </option>
                      <option value="16:00 - 17:30">
                        16:00 - 17:30
                      </option>
                      <option value="17:30 - 18:30">
                        17:30 - 18:30
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-bold text-slate-700">
                    Ghi chú
                  </label>

                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Mô tả ngắn tình trạng hoặc mong muốn của bạn..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-[#F8FFFF] px-4 py-3.5 text-[14px] outline-none transition focus:border-[#00FFFF] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-[#00FFFF] px-6 text-[12px] font-bold uppercase tracking-wide text-slate-950 shadow-[0_10px_30px_rgba(0,255,255,0.28)] transition hover:-translate-y-1 hover:bg-[#33FFFF]"
                >
                  Xác nhận yêu cầu đặt lịch

                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>

              {submitted && (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#99FFFF] bg-[#EEFFFF] p-5">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-cyan-700"
                  />

                  <div>
                    <div className="font-bold text-slate-950">
                      Đã gửi yêu cầu đặt lịch
                    </div>

                    <p className="mt-1 text-[12px] leading-6 text-slate-600">
                      Hiện tại form mới chạy phía Frontend. Khi nối Backend,
                      thông tin này sẽ được lưu vào database để admin xác nhận.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}