"use client";

import { useState } from "react";

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Stethoscope,
  Upload,
} from "lucide-react";

const faqs = [
  {
    question: "Buổi khám và tư vấn ban đầu kéo dài bao lâu?",
    answer:
      "Thời lượng phụ thuộc vào tình trạng và nội dung cần trao đổi. Với các trường hợp cần đánh giá chuyên sâu, bác sĩ có thể cần thêm thời gian để xem dữ liệu hình ảnh và trao đổi kế hoạch điều trị.",
  },
  {
    question: "Tôi có cần nhịn ăn trước khi chụp ConeBeam CT không?",
    answer:
      "Thông thường không cần nhịn ăn chỉ để chụp ConeBeam CT nha khoa. Khi đến khám, bạn nên thông báo các thông tin sức khỏe cần thiết để nhân viên y tế hướng dẫn phù hợp.",
  },
  {
    question: "Chi phí buổi khám ban đầu được tính như thế nào?",
    answer:
      "Chi phí khám, chụp phim hoặc các dịch vụ liên quan nên được xác nhận dựa trên chính sách thực tế của cơ sở điều trị tại thời điểm đặt lịch.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    service: "",
    date: "",
    time: "09:00 - 10:30",
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

    console.log(form);

    setSubmitted(true);

    setForm({
      fullName: "",
      phone: "",
      service: "",
      date: "",
      time: "09:00 - 10:30",
      note: "",
    });
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FFFF] via-white to-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-[-60px] h-[190px] w-[300px] -translate-x-1/2 rounded-full bg-[#CCFFFF]/40 blur-[60px] sm:h-[320px] sm:w-[520px] sm:blur-[90px] lg:top-[-160px] lg:h-[550px] lg:w-[900px] lg:blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF] bg-white px-2 py-1 sm:gap-1.5 sm:px-3 md:px-4 md:py-1.5 lg:gap-2 lg:py-2">
              <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-600 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2" />

              <span className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.16em]">
                Tư vấn cùng Bác sĩ Trung
              </span>
            </div>

            <h1 className="mt-3 text-[18px] font-extrabold tracking-[-0.045em] text-slate-950 min-[430px]:text-[21px] sm:text-[28px] md:text-[38px] lg:mt-6 lg:text-[60px]">
              Liên hệ &{" "}
              <span className="text-cyan-900">
                đặt lịch thăm khám
              </span>
            </h1>

            <p className="mt-2 max-w-3xl text-[6px] leading-[10px] text-slate-600 sm:mt-3 sm:text-[8px] sm:leading-4 md:text-[11px] md:leading-5 lg:mt-6 lg:text-[18px] lg:leading-8">
              Gửi thông tin để được hỗ trợ đặt lịch và trao đổi trực tiếp
              với Bác sĩ Trung về tình trạng bạn đang quan tâm.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-white px-2 pb-8 sm:px-4 sm:pb-12 md:px-6 md:pb-16 lg:px-10 lg:pb-24">
        {/* LUÔN 5/12 + 7/12 */}
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {/* LEFT */}
          <div className="col-span-5 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
            {/* DOCTOR */}
            <div className="flex items-center gap-1.5 rounded-md border border-slate-100 bg-white p-1.5 shadow-sm sm:gap-2 sm:rounded-lg sm:p-2.5 md:gap-3 md:rounded-xl md:p-4 lg:gap-5 lg:rounded-2xl lg:p-6">
              <div className="h-[55px] w-[46px] shrink-0 overflow-hidden rounded bg-slate-100 sm:h-[72px] sm:w-[60px] sm:rounded-md md:h-[90px] md:w-[76px] md:rounded-lg lg:h-28 lg:w-24 lg:rounded-xl">
                <img
                  src="/images/contact/doctor-trung.jpg"
                  alt="Bác sĩ Trung"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div>
                <div className="text-[3px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[4.5px] md:text-[6px] lg:text-[10px] lg:tracking-[0.14em]">
                  Bác sĩ phụ trách
                </div>

                <h2 className="mt-0.5 text-[6px] font-bold text-slate-950 sm:text-[8px] md:text-[11px] lg:mt-2 lg:text-xl">
                  Bác sĩ Trung
                </h2>

                <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:text-[7px] md:leading-3 lg:mt-2 lg:text-[13px] lg:leading-6">
                  Implant • Phục hình • Khớp cắn • Nha khoa thẩm mỹ
                </p>

                <div className="mt-1 flex items-center gap-1 text-[3.5px] font-semibold text-slate-500 sm:text-[5px] md:text-[7px] lg:mt-3 lg:gap-2 lg:text-[11px]">
                  <BadgeCheck className="h-[6px] w-[6px] text-cyan-700 sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[16px] lg:w-[16px]" />

                  Tư vấn trực tiếp
                </div>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="rounded-md border border-slate-100 bg-white p-2 shadow-sm sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-7">
              <h2 className="text-[3.5px] font-bold uppercase tracking-[0.07em] text-slate-900 sm:text-[5px] md:text-[7px] lg:text-[12px] lg:tracking-[0.14em]">
                Quy trình tư vấn
              </h2>

              <div className="mt-2 space-y-2 sm:mt-3 sm:space-y-3 md:mt-4 md:space-y-4 lg:mt-6 lg:space-y-6">
                {[
                  {
                    icon: LockKeyhole,
                    title: "Trao đổi riêng tư",
                    text:
                      "Thông tin đặt lịch được sử dụng để phục vụ quá trình liên hệ và hỗ trợ tư vấn.",
                  },
                  {
                    icon: Stethoscope,
                    title: "Đánh giá trực tiếp",
                    text:
                      "Bác sĩ đánh giá tình trạng dựa trên thăm khám và dữ liệu cần thiết trước khi tư vấn phương án.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Trao đổi rõ ràng",
                    text:
                      "Người bệnh được giải thích các lựa chọn phù hợp trước khi quyết định điều trị.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#CCFFFF]/55 sm:h-7 sm:w-7 sm:rounded-md md:h-8 md:w-8 lg:h-10 lg:w-10 lg:rounded-xl">
                        <Icon className="h-[8px] w-[8px] text-cyan-800 sm:h-[11px] sm:w-[11px] md:h-[14px] md:w-[14px] lg:h-[19px] lg:w-[19px]" />
                      </div>

                      <div>
                        <h3 className="text-[5px] font-bold text-slate-950 sm:text-[7px] md:text-[10px] lg:text-base">
                          {item.title}
                        </h3>

                        <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:text-[7px] md:leading-3 lg:mt-2 lg:text-[13px] lg:leading-6">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="rounded-md border border-[#CCFFFF] bg-[#F8FFFF] p-2 sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-7">
              <div className="text-[3px] font-bold uppercase tracking-[0.07em] text-slate-400 sm:text-[4.5px] md:text-[6px] lg:text-[10px] lg:tracking-[0.15em]">
                Kênh liên hệ
              </div>

              <div className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5 md:mt-4 md:space-y-2 lg:mt-5 lg:space-y-3">
                <a
                  href="tel:19008899"
                  className="flex items-center justify-between rounded-md bg-white p-1.5 transition hover:shadow-md sm:rounded-lg sm:p-2 md:p-3 lg:rounded-xl lg:p-4"
                >
                  <div className="flex items-center gap-1 sm:gap-2 md:gap-2.5 lg:gap-3">
                    <Phone className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[19px] lg:w-[19px]" />

                    <div>
                      <div className="text-[3px] font-bold uppercase tracking-wide text-slate-400 sm:text-[4px] md:text-[6px] lg:text-[9px]">
                        Hotline
                      </div>

                      <div className="mt-0.5 text-[5px] font-bold text-slate-950 sm:text-[7px] md:text-[10px] lg:mt-1 lg:text-[14px]">
                        1900 8899
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="h-[6px] w-[6px] text-slate-400 sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[16px] lg:w-[16px]" />
                </a>

                <div className="flex items-center gap-1 rounded-md bg-white p-1.5 sm:gap-2 sm:rounded-lg sm:p-2 md:gap-2.5 md:p-3 lg:gap-3 lg:rounded-xl lg:p-4">
                  <Mail className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[19px] lg:w-[19px]" />

                  <div>
                    <div className="text-[3px] font-bold uppercase tracking-wide text-slate-400 sm:text-[4px] md:text-[6px] lg:text-[9px]">
                      Email
                    </div>

                    <div className="mt-0.5 break-all text-[4px] font-semibold text-slate-950 sm:text-[5.5px] md:text-[8px] lg:mt-1 lg:text-[13px]">
                      concierge@drtrung.vn
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-1 rounded-md bg-white p-1.5 sm:gap-2 sm:rounded-lg sm:p-2 md:gap-2.5 md:p-3 lg:gap-3 lg:rounded-xl lg:p-4">
                  <MapPin className="mt-0.5 h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[19px] lg:w-[19px]" />

                  <div>
                    <div className="text-[3px] font-bold uppercase tracking-wide text-slate-400 sm:text-[4px] md:text-[6px] lg:text-[9px]">
                      Địa chỉ
                    </div>

                    <div className="mt-0.5 text-[4px] leading-[6px] text-slate-700 sm:text-[5.5px] sm:leading-[8px] md:text-[8px] md:leading-3 lg:mt-1 lg:text-[13px] lg:leading-6">
                      TP. Hồ Chí Minh
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-md bg-white p-1.5 sm:gap-2 sm:rounded-lg sm:p-2 md:gap-2.5 md:p-3 lg:gap-3 lg:rounded-xl lg:p-4">
                  <Clock className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[19px] lg:w-[19px]" />

                  <div>
                    <div className="text-[3px] font-bold uppercase tracking-wide text-slate-400 sm:text-[4px] md:text-[6px] lg:text-[9px]">
                      Thời gian
                    </div>

                    <div className="mt-0.5 text-[4px] font-semibold text-slate-700 sm:text-[5.5px] md:text-[8px] lg:mt-1 lg:text-[13px]">
                      Thứ Hai – Thứ Bảy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="col-span-7">
            <div className="rounded-lg border border-slate-100 bg-white p-2.5 shadow-[0_8px_25px_rgba(15,23,42,0.04)] sm:rounded-xl sm:p-4 md:rounded-2xl md:p-6 lg:rounded-[28px] lg:p-9 lg:shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4 md:mb-6 lg:mb-8">
                <div>
                  <div className="text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[5px] md:text-[7px] lg:text-[10px] lg:tracking-[0.15em]">
                    Đặt lịch
                  </div>

                  <h2 className="mt-0.5 text-[8px] font-extrabold text-slate-950 sm:text-[11px] md:text-[16px] lg:mt-2 lg:text-2xl">
                    Yêu cầu thăm khám
                  </h2>
                </div>

                <CalendarDays className="h-[9px] w-[9px] text-cyan-700 sm:h-[13px] sm:w-[13px] md:h-[18px] md:w-[18px] lg:h-[24px] lg:w-[24px]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                {/* LUÔN 2 CỘT */}
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 lg:gap-5">
                  <div>
                    <label className="mb-1 block text-[3.5px] font-bold text-slate-700 sm:text-[5px] md:text-[7px] lg:mb-2 lg:text-[11px]">
                      Họ và tên *
                    </label>

                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="Nguyễn Văn An"
                      className="w-full rounded-md border border-slate-200 bg-[#F8FFFF] px-1.5 py-1.5 text-[4px] text-slate-900 outline-none transition focus:border-[#00FFFF] focus:bg-white sm:rounded-lg sm:px-2 sm:py-2 sm:text-[6px] md:px-3 md:py-2.5 md:text-[9px] lg:rounded-xl lg:px-4 lg:py-3.5 lg:text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[3.5px] font-bold text-slate-700 sm:text-[5px] md:text-[7px] lg:mb-2 lg:text-[11px]">
                      Số điện thoại *
                    </label>

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      placeholder="09xx xxx xxx"
                      className="w-full rounded-md border border-slate-200 bg-[#F8FFFF] px-1.5 py-1.5 text-[4px] text-slate-900 outline-none transition focus:border-[#00FFFF] focus:bg-white sm:rounded-lg sm:px-2 sm:py-2 sm:text-[6px] md:px-3 md:py-2.5 md:text-[9px] lg:rounded-xl lg:px-4 lg:py-3.5 lg:text-[14px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[3.5px] font-bold text-slate-700 sm:text-[5px] md:text-[7px] lg:mb-2 lg:text-[11px]">
                    Nhu cầu quan tâm *
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-slate-200 bg-[#F8FFFF] px-1.5 py-1.5 text-[4px] text-slate-900 outline-none transition focus:border-[#00FFFF] focus:bg-white sm:rounded-lg sm:px-2 sm:py-2 sm:text-[6px] md:px-3 md:py-2.5 md:text-[9px] lg:rounded-xl lg:px-4 lg:py-3.5 lg:text-[14px]"
                  >
                    <option value="">Chọn chuyên môn</option>
                    <option value="implant">Cấy ghép Implant</option>
                    <option value="veneer">Veneer / Phục hình sứ</option>
                    <option value="tmj">Khớp cắn / TMJ</option>
                    <option value="esthetic">Nha khoa thẩm mỹ</option>
                    <option value="other">Tư vấn khác</option>
                  </select>
                </div>

                {/* LUÔN 2 CỘT */}
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 lg:gap-5">
                  <div>
                    <label className="mb-1 block text-[3.5px] font-bold text-slate-700 sm:text-[5px] md:text-[7px] lg:mb-2 lg:text-[11px]">
                      Ngày mong muốn *
                    </label>

                    <input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      type="date"
                      className="w-full rounded-md border border-slate-200 bg-[#F8FFFF] px-1.5 py-1.5 text-[4px] outline-none transition focus:border-[#00FFFF] focus:bg-white sm:rounded-lg sm:px-2 sm:py-2 sm:text-[6px] md:px-3 md:py-2.5 md:text-[9px] lg:rounded-xl lg:px-4 lg:py-3.5 lg:text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[3.5px] font-bold text-slate-700 sm:text-[5px] md:text-[7px] lg:mb-2 lg:text-[11px]">
                      Khung giờ *
                    </label>

                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-slate-200 bg-[#F8FFFF] px-1.5 py-1.5 text-[4px] outline-none transition focus:border-[#00FFFF] focus:bg-white sm:rounded-lg sm:px-2 sm:py-2 sm:text-[6px] md:px-3 md:py-2.5 md:text-[9px] lg:rounded-xl lg:px-4 lg:py-3.5 lg:text-[14px]"
                    >
                      <option>09:00 - 10:30</option>
                      <option>10:30 - 12:00</option>
                      <option>14:00 - 15:30</option>
                      <option>16:00 - 17:30</option>
                      <option>17:30 - 18:30</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[3.5px] font-bold text-slate-700 sm:text-[5px] md:text-[7px] lg:mb-2 lg:text-[11px]">
                    Nội dung cần trao đổi
                  </label>

                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Mô tả ngắn tình trạng hoặc mong muốn của bạn..."
                    className="w-full resize-none rounded-md border border-slate-200 bg-[#F8FFFF] px-1.5 py-1.5 text-[4px] outline-none transition focus:border-[#00FFFF] focus:bg-white sm:rounded-lg sm:px-2 sm:py-2 sm:text-[6px] md:px-3 md:py-2.5 md:text-[9px] lg:rounded-xl lg:px-4 lg:py-3.5 lg:text-[14px]"
                  />
                </div>

                {/* UPLOAD LUÔN NẰM NGANG */}
                <div className="flex flex-row items-center justify-between gap-2 rounded-md border border-slate-100 bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2.5 md:p-3 lg:rounded-xl lg:p-4">
                  <div className="flex items-center gap-1 sm:gap-2 md:gap-2.5 lg:gap-3">
                    <Upload className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[20px] lg:w-[20px]" />

                    <div>
                      <div className="text-[4px] font-semibold text-slate-800 sm:text-[5.5px] md:text-[8px] lg:text-[12px]">
                        Có phim hoặc hình ảnh trước đó?
                      </div>

                      <div className="text-[3px] text-slate-400 sm:text-[4px] md:text-[6px] lg:text-[10px]">
                        Có thể bổ sung sau
                      </div>
                    </div>
                  </div>

                  <label className="shrink-0 cursor-pointer text-[3.5px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[5px] md:text-[7px] lg:text-[11px]">
                    Chọn tệp

                    <input
                      type="file"
                      accept="image/*,.pdf"
                      className="hidden"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="group flex min-h-[26px] w-full items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-2 text-[4px] font-bold uppercase tracking-wide text-slate-950 shadow-[0_5px_16px_rgba(0,255,255,0.20)] transition hover:-translate-y-1 hover:bg-[#33FFFF] sm:min-h-[32px] sm:rounded-lg sm:text-[6px] md:min-h-[42px] md:text-[8px] lg:min-h-[56px] lg:gap-3 lg:rounded-xl lg:px-6 lg:text-[12px] lg:shadow-[0_10px_30px_rgba(0,255,255,0.28)]"
                >
                  Gửi yêu cầu đặt lịch

                  <Send className="h-[7px] w-[7px] transition-transform group-hover:translate-x-1 sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[17px] lg:w-[17px]" />
                </button>

                <div className="flex items-center justify-center gap-1 text-[3px] text-slate-400 sm:text-[4.5px] md:text-[6px] lg:gap-2 lg:text-[10px]">
                  <ShieldCheck className="h-[6px] w-[6px] text-cyan-700 sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[14px] lg:w-[14px]" />

                  Thông tin được sử dụng để liên hệ xác nhận lịch hẹn
                </div>
              </form>

              {submitted && (
                <div className="mt-2 flex items-start gap-1.5 rounded-md border border-[#99FFFF] bg-[#EEFFFF] p-1.5 sm:mt-3 sm:gap-2 sm:rounded-lg sm:p-2.5 md:mt-4 md:p-3.5 lg:mt-5 lg:gap-3 lg:rounded-xl lg:p-5">
                  <CheckCircle2 className="mt-0.5 h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[21px] lg:w-[21px]" />

                  <div>
                    <div className="text-[4.5px] font-bold text-slate-950 sm:text-[6px] md:text-[9px] lg:text-base">
                      Đã tiếp nhận yêu cầu
                    </div>

                    <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:text-[7px] md:leading-3 lg:mt-1 lg:text-[12px] lg:leading-6">
                      Thông tin của bạn đã được ghi nhận trên giao diện.
                      Khi kết nối Backend, yêu cầu này sẽ được gửi vào hệ
                      thống quản lý lịch hẹn.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-y border-slate-100 bg-[#F8FFFF] px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        {/* LUÔN 5/12 + 7/12 */}
        <div className="mx-auto grid max-w-7xl grid-cols-12 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm sm:rounded-xl md:rounded-2xl lg:rounded-[28px]">
          <div className="col-span-5 flex flex-col justify-center p-2 sm:p-3 md:p-5 lg:p-10">
            <div className="text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[5px] md:text-[7px] lg:text-[10px] lg:tracking-[0.15em]">
              Vị trí thăm khám
            </div>

            <h2 className="mt-1 text-[11px] font-extrabold tracking-[-0.03em] text-slate-950 sm:text-[15px] md:text-[21px] lg:mt-3 lg:text-3xl">
              Hướng dẫn di chuyển
            </h2>

            <div className="mt-2 space-y-2 sm:mt-3 sm:space-y-3 md:mt-5 md:space-y-4 lg:mt-7 lg:space-y-6">
              <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                <Car className="mt-0.5 h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:mt-1 lg:h-[21px] lg:w-[21px]" />

                <div>
                  <h3 className="text-[4.5px] font-bold text-slate-900 sm:text-[6px] md:text-[9px] lg:text-base">
                    Di chuyển thuận tiện
                  </h3>

                  <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:text-[7px] md:leading-3 lg:mt-2 lg:text-[13px] lg:leading-6">
                    Thông tin hướng dẫn cụ thể sẽ được cập nhật theo địa
                    chỉ phòng khám chính thức.
                  </p>
                </div>
              </div>

              <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                <MapPin className="mt-0.5 h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:mt-1 lg:h-[21px] lg:w-[21px]" />

                <div>
                  <h3 className="text-[4.5px] font-bold text-slate-900 sm:text-[6px] md:text-[9px] lg:text-base">
                    TP. Hồ Chí Minh
                  </h3>

                  <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:text-[7px] md:leading-3 lg:mt-2 lg:text-[13px] lg:leading-6">
                    Địa chỉ chính xác sẽ hiển thị sau khi cập nhật dữ liệu
                    phòng khám.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative col-span-7 min-h-[130px] bg-[#DFFBFB] sm:min-h-[200px] md:min-h-[280px] lg:min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-md border border-white bg-white/95 px-2 py-2 text-center shadow-xl backdrop-blur sm:rounded-lg sm:px-3 sm:py-3 md:rounded-xl md:px-4 md:py-4 lg:rounded-2xl lg:px-6 lg:py-5">
                <MapPin className="mx-auto h-[9px] w-[9px] text-cyan-700 sm:h-[13px] sm:w-[13px] md:h-[18px] md:w-[18px] lg:h-[30px] lg:w-[30px]" />

                <div className="mt-1 text-[4.5px] font-bold text-slate-950 sm:text-[6px] md:text-[9px] lg:mt-3 lg:text-base">
                  DR. TRUNG
                </div>

                <div className="mt-0.5 text-[3px] text-slate-500 sm:text-[4.5px] md:text-[6px] lg:mt-1 lg:text-[11px]">
                  Vị trí bản đồ sẽ được tích hợp sau
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center sm:mb-5 md:mb-7 lg:mb-10">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              Giải đáp trước khi khám
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-3xl">
              Câu hỏi thường gặp
            </h2>
          </div>

          <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-md border border-slate-100 bg-white shadow-sm sm:rounded-lg md:rounded-xl lg:rounded-2xl"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-2 p-2 text-left sm:p-3 md:p-4 lg:gap-5 lg:p-6"
                  >
                    <span className="text-[5px] font-bold text-slate-900 sm:text-[7px] md:text-[10px] lg:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-[7px] w-[7px] shrink-0 text-cyan-700 transition-transform sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[20px] lg:w-[20px] ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="border-t border-slate-100 px-2 pb-2 pt-1.5 sm:px-3 sm:pb-3 sm:pt-2 md:px-4 md:pb-4 md:pt-3 lg:px-6 lg:pb-6 lg:pt-5">
                      <p className="text-[4px] leading-[7px] text-slate-600 sm:text-[5px] sm:leading-[9px] md:text-[7px] md:leading-3 lg:text-[13px] lg:leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}