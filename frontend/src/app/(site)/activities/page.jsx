import Link from "next/link";

import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  GraduationCap,
  Mic2,
  ScanLine,
  Stethoscope,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Hoạt động chuyên môn | Bác sĩ Trung",
  description:
    "Các hoạt động hội nghị, đào tạo, workshop và nghiên cứu chuyên môn của Bác sĩ Trung.",
};

const metrics = [
  {
    value: "50+",
    label: "Hội nghị & diễn đàn",
    description: "Hoạt động chuyên môn trong và ngoài nước",
  },
  {
    value: "1.000+",
    label: "Bác sĩ tham gia đào tạo",
    description: "Workshop và chương trình chia sẻ chuyên môn",
  },
  {
    value: "15+",
    label: "Năm phát triển chuyên môn",
    description: "Implant và phục hình nha khoa",
  },
];

const conferences = [
  {
    location: "Sydney, Australia",
    title: "Hội nghị Implant khu vực Châu Á - Thái Bình Dương",
    date: "2024",
    description:
      "Chia sẻ kinh nghiệm thực hành lâm sàng và ứng dụng quy trình số hóa trong điều trị Implant.",
  },
  {
    location: "Basel, Switzerland",
    title: "Hội nghị chuyên môn Implant quốc tế",
    date: "2023",
    description:
      "Tham gia trao đổi chuyên môn về vật liệu sinh học, mô mềm và phục hồi trên Implant.",
  },
  {
    location: "Tokyo & Singapore",
    title: "Scientific Summit",
    date: "2023",
    description:
      "Cập nhật những xu hướng mới trong phẫu thuật hướng dẫn và phục hình kỹ thuật số.",
  },
];

const workshops = [
  {
    icon: ScanLine,
    title: "Workshop định vị phẫu thuật 3D",
    description:
      "Chia sẻ quy trình lập kế hoạch, phân tích hình ảnh và ứng dụng dữ liệu số trong điều trị.",
    image: "/images/activities/workshop-1.jpg",
    info1: "Nhóm nhỏ",
    info2: "Thực hành mô hình",
  },
  {
    icon: Stethoscope,
    title: "Hướng dẫn lâm sàng trực tiếp",
    description:
      "Thảo luận ca lâm sàng, phân tích chỉ định và cách tiếp cận từng trường hợp phức tạp.",
    image: "/images/activities/workshop-2.jpg",
    info1: "Live Clinical",
    info2: "Case Discussion",
  },
];

const certificates = [
  {
    icon: Award,
    category: "Implant",
    title: "Đào tạo chuyên sâu Implant",
    description:
      "Các chương trình cập nhật kiến thức và thực hành liên quan đến Implant.",
  },
  {
    icon: GraduationCap,
    category: "International Training",
    title: "Đào tạo chuyên môn quốc tế",
    description:
      "Tham gia các khóa học và chương trình phát triển chuyên môn liên tục.",
  },
  {
    icon: BookOpen,
    category: "Restorative Dentistry",
    title: "Phục hình & bảo tồn",
    description:
      "Đào tạo về phục hình, mô mềm và nguyên tắc bảo tồn mô răng.",
  },
  {
    icon: ScanLine,
    category: "Digital Dentistry",
    title: "Nha khoa kỹ thuật số",
    description:
      "Ứng dụng công nghệ số trong chẩn đoán và lập kế hoạch điều trị.",
  },
];

const gallery = [
  {
    image: "/images/activities/gallery-1.jpg",
    label: "Trao đổi học thuật",
    title: "Thảo luận chuyên môn cùng đồng nghiệp",
    className: "col-span-2",
  },
  {
    image: "/images/activities/gallery-2.jpg",
    label: "Digital Dentistry",
    title: "Phân tích phục hình và quy trình kỹ thuật số",
    className: "col-span-1",
  },
  {
    image: "/images/activities/gallery-3.jpg",
    label: "Workshop",
    title: "Đào tạo và chia sẻ kinh nghiệm lâm sàng",
    className: "col-span-1",
  },
  {
    image: "/images/activities/gallery-4.jpg",
    label: "Nghiên cứu",
    title: "Phân tích dữ liệu hình ảnh trước điều trị",
    className: "col-span-1",
  },
  {
    image: "/images/activities/gallery-5.jpg",
    label: "Hội nghị",
    title: "Báo cáo chuyên môn tại sự kiện nha khoa",
    className: "col-span-3",
  },
];

export default function ActivitiesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FFFF] via-white to-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-[-60px] h-[180px] w-[280px] -translate-x-1/2 rounded-full bg-[#CCFFFF]/45 blur-[60px] sm:h-[300px] sm:w-[480px] sm:blur-[90px] lg:top-[-160px] lg:h-[500px] lg:w-[800px] lg:blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF] bg-white px-2 py-1 sm:gap-1.5 sm:px-3 md:px-4 md:py-1.5 lg:gap-2 lg:py-2">
              <Award className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[13px] md:w-[13px] lg:h-[16px] lg:w-[16px]" />

              <span className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.16em]">
                Hoạt động học thuật & đào tạo
              </span>
            </div>

            <h1 className="mt-3 text-[18px] font-extrabold tracking-[-0.045em] text-slate-950 min-[430px]:text-[21px] sm:text-[28px] md:text-[38px] lg:mt-6 lg:text-[60px]">
              Hoạt động chuyên môn &{" "}
              <span className="text-cyan-900">
                hội nhập nha khoa
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-3xl text-[6px] leading-[10px] text-slate-600 sm:mt-3 sm:text-[8px] sm:leading-4 md:text-[11px] md:leading-5 lg:mt-6 lg:text-[18px] lg:leading-8">
              Hành trình cập nhật kiến thức, tham gia hội nghị, đào tạo
              và chia sẻ kinh nghiệm thực hành lâm sàng của Bác sĩ Trung.
            </p>

            {/* LUÔN 3 CỘT */}
            <div className="mt-4 grid grid-cols-3 gap-1 sm:mt-6 sm:gap-2 md:mt-8 md:gap-3 lg:mt-10 lg:gap-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-slate-100 bg-white p-2 shadow-sm sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
                >
                  <div className="text-[12px] font-extrabold text-cyan-800 sm:text-[18px] md:text-[23px] lg:text-3xl">
                    {item.value}
                  </div>

                  <div className="mt-0.5 text-[4px] font-bold text-slate-900 sm:text-[5.5px] md:text-[8px] lg:mt-2 lg:text-[12px]">
                    {item.label}
                  </div>

                  <div className="mt-0.5 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:text-[6.5px] md:leading-3 lg:mt-1 lg:text-[11px] lg:leading-5">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 sm:mb-5 md:mb-7 lg:mb-10">
            <div className="flex items-center gap-1 text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:gap-2 lg:text-[10px] lg:tracking-[0.16em]">
              <Mic2 className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[17px] lg:w-[17px]" />

              Diễn giả & hội nghị
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[42px]">
              Hoạt động báo cáo chuyên môn
            </h2>
          </div>

          {/* LUÔN 7/12 + 5/12 */}
          <div className="grid grid-cols-12 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.04)] sm:rounded-xl md:rounded-2xl lg:rounded-[28px] lg:shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            <div className="relative col-span-7 min-h-[130px] overflow-hidden sm:min-h-[210px] md:min-h-[320px] lg:min-h-[520px]">
              <img
                src="/images/activities/keynote.jpg"
                alt="Bác sĩ Trung tại hội nghị chuyên môn"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

              <div className="absolute left-1 top-1 rounded-full bg-slate-950/75 px-1.5 py-0.5 text-[3px] font-bold uppercase tracking-wide text-white backdrop-blur sm:left-2 sm:top-2 sm:text-[4.5px] md:px-2 md:py-1 md:text-[6px] lg:left-5 lg:top-5 lg:px-4 lg:py-2 lg:text-[10px]">
                Hội nghị chuyên môn
              </div>
            </div>

            <div className="col-span-5 flex flex-col justify-center p-2 sm:p-3 md:p-5 lg:p-10">
              <div className="text-[3px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[4.5px] md:text-[6px] lg:text-[10px] lg:tracking-[0.15em]">
                Keynote / Scientific Session
              </div>

              <h3 className="mt-1.5 text-[7px] font-extrabold leading-[9px] text-slate-950 sm:text-[10px] sm:leading-4 md:mt-3 md:text-[15px] md:leading-5 lg:mt-4 lg:text-[30px] lg:leading-tight">
                Chia sẻ kinh nghiệm ứng dụng kỹ thuật số trong điều trị Implant
              </h3>

              <p className="mt-1 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-5 lg:text-[14px] lg:leading-7">
                Nội dung tập trung vào cách dữ liệu hình ảnh, lập kế hoạch
                số và quy trình phối hợp phục hình có thể hỗ trợ bác sĩ
                kiểm soát tốt hơn quá trình điều trị.
              </p>

              <div className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5 md:mt-4 md:space-y-2 lg:mt-6 lg:space-y-3">
                {[
                  "Phân tích dữ liệu hình ảnh trước điều trị",
                  "Lập kế hoạch phục hình và Implant",
                  "Trao đổi kinh nghiệm lâm sàng thực tế",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-1 text-[3.5px] text-slate-700 sm:text-[5px] md:gap-1.5 md:text-[7px] lg:gap-3 lg:text-[13px]"
                  >
                    <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#CCFFFF] sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6">
                      <Check className="h-[5px] w-[5px] text-cyan-800 sm:h-[7px] sm:w-[7px] md:h-[10px] md:w-[10px] lg:h-[14px] lg:w-[14px]" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-2 flex items-center gap-1 rounded-md bg-[#F8FFFF] p-1.5 sm:mt-3 sm:gap-2 sm:rounded-lg sm:p-2 md:mt-4 md:p-3 lg:mt-7 lg:gap-3 lg:rounded-xl lg:p-4">
                <Mic2 className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[20px] lg:w-[20px]" />

                <div>
                  <div className="text-[3px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[4px] md:text-[6px] lg:text-[10px]">
                    Vai trò
                  </div>

                  <div className="mt-0.5 text-[4px] font-bold text-slate-900 sm:text-[5.5px] md:text-[8px] lg:mt-1 lg:text-[13px]">
                    Báo cáo viên / Người chia sẻ chuyên môn
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONFERENCES - LUÔN 3 CỘT */}
          <div className="mt-3 grid grid-cols-3 gap-1 sm:mt-4 sm:gap-2 md:mt-5 md:gap-3 lg:mt-7 lg:gap-5">
            {conferences.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-slate-100 bg-[#F8FFFF] p-1.5 transition hover:-translate-y-1 hover:border-[#66FFFF] hover:bg-white hover:shadow-lg sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[3px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[4.5px] md:text-[6px] lg:text-[10px] lg:tracking-[0.14em]">
                    {item.location}
                  </span>

                  <span className="rounded-full bg-white px-1 py-0.5 text-[3px] font-semibold text-slate-500 sm:text-[4.5px] md:px-2 md:text-[6px] lg:px-3 lg:py-1 lg:text-[10px]">
                    {item.date}
                  </span>
                </div>

                <h3 className="mt-1.5 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:mt-2 md:text-[10px] md:leading-4 lg:mt-4 lg:text-[17px]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[13px] lg:leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="border-y border-slate-100 bg-[#F8FFFF] px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* HEADER LUÔN NGANG */}
          <div className="mb-3 flex flex-row items-end justify-between gap-2 sm:mb-5 md:mb-7 lg:mb-12">
            <div>
              <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.16em]">
                Chia sẻ chuyên môn
              </div>

              <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[42px]">
                Workshop & đào tạo thực hành
              </h2>
            </div>

            <p className="max-w-[40%] text-[4px] leading-[7px] text-slate-500 sm:text-[5px] sm:leading-[9px] md:text-[7px] md:leading-3 lg:max-w-md lg:text-[13px] lg:leading-6">
              Các hoạt động đào tạo hướng đến trao đổi kỹ thuật và kinh
              nghiệm thực hành giữa các bác sĩ.
            </p>
          </div>

          {/* LUÔN 2 CỘT */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-7">
            {workshops.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-lg border border-slate-100 bg-white p-1.5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:rounded-xl sm:p-2.5 md:rounded-2xl md:p-4 lg:rounded-[26px] lg:p-6"
                >
                  <div className="relative h-[85px] overflow-hidden rounded-md bg-slate-100 sm:h-[135px] sm:rounded-lg md:h-[200px] md:rounded-xl lg:h-72 lg:rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute right-1 top-1 rounded-full bg-white/95 px-1 py-0.5 text-[3px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[4px] md:right-2 md:top-2 md:px-2 md:text-[6px] lg:right-4 lg:top-4 lg:px-3 lg:py-1.5 lg:text-[9px]">
                      Workshop
                    </div>
                  </div>

                  <div className="mt-2 flex items-start gap-1 sm:mt-3 sm:gap-2 md:mt-4 md:gap-3 lg:mt-6 lg:gap-4">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#CCFFFF]/50 sm:h-7 sm:w-7 sm:rounded-md md:h-9 md:w-9 lg:h-11 lg:w-11 lg:rounded-xl">
                      <Icon className="h-[8px] w-[8px] text-cyan-800 sm:h-[11px] sm:w-[11px] md:h-[15px] md:w-[15px] lg:h-[21px] lg:w-[21px]" />
                    </div>

                    <div>
                      <h3 className="text-[6px] font-bold leading-[8px] text-slate-950 sm:text-[8px] sm:leading-3 md:text-[11px] md:leading-4 lg:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[13px] lg:leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* LUÔN 2 CỘT */}
                  <div className="mt-2 grid grid-cols-2 gap-1 sm:mt-3 sm:gap-2 md:mt-4 lg:mt-6 lg:gap-3">
                    <div className="rounded-md bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2 md:p-3 lg:rounded-xl lg:p-4">
                      <div className="text-[3px] font-bold uppercase text-slate-400 sm:text-[4px] md:text-[6px] lg:text-[9px]">
                        Hình thức
                      </div>

                      <div className="mt-0.5 text-[4px] font-bold text-slate-800 sm:text-[5.5px] md:text-[8px] lg:mt-1 lg:text-[12px]">
                        {item.info1}
                      </div>
                    </div>

                    <div className="rounded-md bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2 md:p-3 lg:rounded-xl lg:p-4">
                      <div className="text-[3px] font-bold uppercase text-slate-400 sm:text-[4px] md:text-[6px] lg:text-[9px]">
                        Nội dung
                      </div>

                      <div className="mt-0.5 text-[4px] font-bold text-slate-800 sm:text-[5.5px] md:text-[8px] lg:mt-1 lg:text-[12px]">
                        {item.info2}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-4 max-w-3xl text-center sm:mb-6 md:mb-8 lg:mb-12">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.16em]">
              Đào tạo chuyên môn
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[42px]">
              Chứng nhận & chương trình đào tạo
            </h2>

            <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] sm:leading-3 md:text-[9px] md:leading-4 lg:mt-4 lg:text-[14px] lg:leading-7">
              Các thông tin chứng chỉ nên được cập nhật dựa trên hồ sơ
              thực tế của Bác sĩ Trung.
            </p>
          </div>

          {/* LUÔN 4 CỘT */}
          <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-3 lg:gap-5">
            {certificates.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-md border border-slate-100 bg-white p-1.5 shadow-sm transition hover:-translate-y-1 hover:border-[#66FFFF] hover:shadow-lg sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded bg-[#CCFFFF]/45 sm:h-7 sm:w-7 sm:rounded-md md:h-9 md:w-9 lg:h-12 lg:w-12 lg:rounded-xl">
                    <Icon className="h-[8px] w-[8px] text-cyan-800 sm:h-[11px] sm:w-[11px] md:h-[16px] md:w-[16px] lg:h-[23px] lg:w-[23px]" />
                  </div>

                  <div className="mt-2 text-[3px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[4px] md:mt-3 md:text-[6px] lg:mt-5 lg:text-[9px] lg:tracking-[0.14em]">
                    {item.category}
                  </div>

                  <h3 className="mt-1 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:text-[10px] md:leading-4 lg:mt-2 lg:text-[16px] lg:leading-6">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[12px] lg:leading-6">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-y border-slate-100 bg-[#F8FFFF]/60 px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 sm:mb-5 md:mb-7 lg:mb-10">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.16em]">
              Thư viện hoạt động
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[42px]">
              Khoảnh khắc chuyên môn
            </h2>
          </div>

          {/* LUÔN 4 CỘT */}
          <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-3 lg:gap-5">
            {gallery.map((item) => (
              <div
                key={item.title}
                className={`group relative h-[80px] overflow-hidden rounded-md bg-slate-100 sm:h-[130px] sm:rounded-lg md:h-[190px] md:rounded-xl lg:h-80 lg:rounded-2xl ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2.5 md:p-3.5 lg:p-5">
                  <div className="text-[3px] font-bold uppercase tracking-[0.07em] text-[#66FFFF] sm:text-[4px] md:text-[6px] lg:text-[9px] lg:tracking-[0.15em]">
                    {item.label}
                  </div>

                  <h3 className="mt-0.5 text-[4.5px] font-bold leading-[6px] text-white sm:text-[6px] sm:leading-[9px] md:mt-1 md:text-[9px] md:leading-4 lg:mt-2 lg:text-[16px] lg:leading-6">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute bottom-[-30px] right-0 h-[150px] w-[150px] rounded-full bg-[#CCFFFF]/50 blur-[50px] sm:h-[250px] sm:w-[250px] sm:blur-[80px] lg:bottom-[-100px] lg:h-[450px] lg:w-[450px] lg:blur-[120px]" />

        {/* LUÔN 8/12 + 4/12 */}
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-12 items-center gap-2 rounded-lg border border-[#CCFFFF] bg-[#F8FFFF] p-3 shadow-[0_8px_25px_rgba(0,180,180,0.06)] sm:gap-4 sm:rounded-xl sm:p-4 md:gap-6 md:rounded-2xl md:p-7 lg:gap-8 lg:rounded-[28px] lg:p-12 lg:shadow-[0_20px_60px_rgba(0,180,180,0.08)]">
          <div className="col-span-8">
            <div className="flex items-center gap-1 text-[3.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[5px] md:text-[7px] lg:gap-2 lg:text-[10px] lg:tracking-[0.16em]">
              <Users className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[16px] lg:w-[16px]" />

              Kết nối chuyên môn
            </div>

            <h2 className="mt-1 text-[13px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[15px] sm:text-[20px] md:text-[27px] lg:mt-3 lg:text-[40px]">
              Hợp tác hoặc trao đổi chuyên môn cùng Bác sĩ Trung
            </h2>

            <p className="mt-1.5 max-w-2xl text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:mt-2 md:text-[8px] md:leading-4 lg:mt-4 lg:text-[14px] lg:leading-7">
              Dành cho hoạt động hội nghị, workshop, đào tạo và trao đổi
              kinh nghiệm chuyên môn.
            </p>
          </div>

          {/* VẪN 2 NÚT DỌC TRONG CỘT PHẢI */}
          <div className="col-span-4 flex flex-col gap-1 sm:gap-2 lg:gap-3">
            <Link
              href="/contact"
              className="group inline-flex min-h-[25px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-2 text-[3.5px] font-bold uppercase tracking-wide text-slate-950 transition hover:bg-[#33FFFF] sm:min-h-[31px] sm:text-[5px] md:min-h-[40px] md:rounded-lg md:px-4 md:text-[7px] lg:min-h-[52px] lg:gap-3 lg:rounded-xl lg:px-6 lg:text-[11px]"
            >
              Liên hệ hợp tác

              <ArrowRight className="h-[6px] w-[6px] transition group-hover:translate-x-1 sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[16px] lg:w-[16px]" />
            </Link>

            <Link
              href="/knowledge"
              className="inline-flex min-h-[25px] items-center justify-center gap-1 rounded-md border border-slate-200 bg-white px-2 text-[3.5px] font-bold uppercase tracking-wide text-slate-800 sm:min-h-[31px] sm:text-[5px] md:min-h-[40px] md:rounded-lg md:px-4 md:text-[7px] lg:min-h-[52px] lg:gap-3 lg:rounded-xl lg:px-6 lg:text-[11px]"
            >
              <BookOpen className="h-[6px] w-[6px] text-cyan-700 sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[16px] lg:w-[16px]" />

              Xem kiến thức
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}