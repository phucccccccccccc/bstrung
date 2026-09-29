import Link from "next/link";

import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Microscope,
  Palette,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Waves,
} from "lucide-react";

const problems = [
  {
    number: "01",
    icon: Smile,
    title: "Cười hở lợi",
    description:
      "Nướu lộ nhiều khi cười có thể làm thân răng trông ngắn và ảnh hưởng đến tỷ lệ tổng thể của nụ cười.",
    solution: "Đánh giá mô nướu & xương nâng đỡ",
  },
  {
    number: "02",
    icon: Activity,
    title: "Tụt nướu lộ chân răng",
    description:
      "Tụt nướu có thể làm lộ chân răng, gây cảm giác ê buốt hoặc làm đường viền nướu mất cân đối.",
    solution: "Đánh giá ghép mô mềm",
  },
  {
    number: "03",
    icon: ScanLine,
    title: "Viền nướu không đối xứng",
    description:
      "Đường viền nướu giữa các răng có thể không đồng đều, làm tỷ lệ răng và đường cười thiếu hài hòa.",
    solution: "Thiết kế lại đường viền nướu",
  },
  {
    number: "04",
    icon: Palette,
    title: "Nướu thâm sắc tố",
    description:
      "Một số người có sắc tố nướu đậm do cơ địa hoặc các yếu tố khác và muốn cải thiện màu sắc vùng nướu.",
    solution: "Đánh giá xử lý sắc tố",
  },
];

const solutions = [
  {
    number: "01",
    title: "Điều chỉnh đường cười hở lợi",
    description:
      "Tùy nguyên nhân, bác sĩ có thể đánh giá mô nướu, chiều dài thân răng và cấu trúc xương trước khi lựa chọn hướng xử lý.",
    label: "Cười hở lợi",
  },
  {
    number: "02",
    title: "Ghép mô liên kết",
    description:
      "Trong một số trường hợp tụt nướu, ghép mô có thể được cân nhắc để tăng độ dày mô mềm và cải thiện vùng chân răng lộ.",
    label: "Tụt nướu",
  },
  {
    number: "03",
    title: "Tái tạo vùng gai nướu",
    description:
      "Các khoảng tam giác đen giữa răng cần được đánh giá về hình thể răng, xương nâng đỡ và mô mềm trước khi điều trị.",
    label: "Tam giác đen",
  },
  {
    number: "04",
    title: "Điều chỉnh sắc tố nướu",
    description:
      "Một số phương pháp có thể được sử dụng để cải thiện sắc tố nướu, tùy tình trạng mô và đặc điểm từng bệnh nhân.",
    label: "Sắc tố nướu",
  },
];

const technologies = [
  {
    icon: Waves,
    title: "Laser hỗ trợ mô mềm",
    description:
      "Laser có thể được sử dụng trong một số thủ thuật mô mềm nhằm hỗ trợ kiểm soát thao tác và quá trình lành thương.",
  },
  {
    icon: Microscope,
    title: "Kính phóng đại / vi phẫu",
    description:
      "Phóng đại hỗ trợ quan sát chi tiết mô mềm và vùng phẫu thuật khi thực hiện các thao tác chính xác.",
  },
  {
    icon: ScanLine,
    title: "Thiết kế nụ cười số",
    description:
      "Dữ liệu hình ảnh và scan có thể hỗ trợ phân tích tỷ lệ răng, nướu và đường cười trước điều trị.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Khám & phân tích đường cười",
    description:
      "Đánh giá răng, nướu, môi, hình thể khuôn mặt và nguyên nhân của tình trạng thẩm mỹ hiện tại.",
  },
  {
    number: "02",
    title: "Lập kế hoạch cá nhân hóa",
    description:
      "Lựa chọn phương án dựa trên mô mềm, xương nâng đỡ, khớp cắn và mục tiêu thẩm mỹ của từng bệnh nhân.",
  },
  {
    number: "03",
    title: "Can thiệp theo chỉ định",
    description:
      "Thực hiện thủ thuật phù hợp với tình trạng thực tế, có thể kết hợp laser hoặc kỹ thuật vi phẫu nếu cần.",
  },
  {
    number: "04",
    title: "Theo dõi lành thương",
    description:
      "Hướng dẫn chăm sóc và tái khám để đánh giá mô nướu trong quá trình hồi phục.",
  },
];

const faqs = [
  {
    question: "Điều chỉnh cười hở lợi có bị mọc nướu trở lại không?",
    answer:
      "Khả năng ổn định phụ thuộc vào nguyên nhân gây hở lợi, kỹ thuật điều trị, cấu trúc xương và quá trình lành thương. Bác sĩ cần đánh giá nguyên nhân cụ thể trước khi dự đoán kết quả lâu dài.",
  },
  {
    question: "Phẫu thuật thẩm mỹ nướu có đau nhiều không?",
    answer:
      "Mức độ khó chịu thay đổi theo từng thủ thuật và từng người. Bác sĩ sẽ sử dụng biện pháp kiểm soát đau phù hợp và hướng dẫn chăm sóc sau điều trị.",
  },
  {
    question: "Sau điều trị nướu bao lâu có thể sinh hoạt bình thường?",
    answer:
      "Thời gian hồi phục tùy vào phạm vi can thiệp và tình trạng mô. Một số thủ thuật nhẹ hồi phục nhanh hơn, trong khi ghép mô hoặc can thiệp rộng cần thời gian theo dõi lâu hơn.",
  },
  {
    question: "Tẩy thâm nướu có duy trì vĩnh viễn không?",
    answer:
      "Màu sắc nướu có thể thay đổi theo cơ địa, sắc tố, thói quen hút thuốc và quá trình lành thương. Không nên coi kết quả là vĩnh viễn cho mọi trường hợp.",
  },
];

export default function CosmeticPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-700">
      {/* BREADCRUMB */}
      <section className="border-b border-slate-100 bg-[#F8FFFF] px-2 py-2 sm:px-4 md:px-6 lg:px-10 lg:py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[4.5px] text-slate-500 sm:text-[6px] md:text-[8px] lg:gap-2 lg:text-[11px]">
            <Link href="/" className="hover:text-cyan-800">
              Trang chủ
            </Link>

            <ChevronRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[13px] lg:w-[13px]" />

            <Link href="/specialties" className="hover:text-cyan-800">
              Chuyên môn
            </Link>

            <ChevronRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[13px] lg:w-[13px]" />

            <span className="font-semibold text-slate-800">
              Thẩm mỹ nướu
            </span>
          </div>

          <div className="rounded-full bg-[#CCFFFF]/55 px-1.5 py-0.5 text-[3.5px] font-bold uppercase tracking-[0.06em] text-cyan-900 sm:px-2 sm:text-[5px] md:text-[6px] lg:px-3 lg:py-1.5 lg:text-[9px] lg:tracking-[0.12em]">
            Pink Esthetics • Gum Contouring • Microsurgery
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#F8FFFF] via-[#EEFFFF]/40 to-white px-2 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4 md:px-6 lg:px-10 lg:pb-8 lg:pt-7">
        <div className="pointer-events-none absolute right-[12%] top-0 h-[120px] w-[120px] rounded-full bg-[#CCFFFF]/35 blur-[45px] sm:h-[210px] sm:w-[210px] sm:blur-[70px] lg:h-[360px] lg:w-[360px] lg:blur-[100px]" />

        {/* LUÔN 7/12 + 5/12 */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 items-center gap-2 sm:gap-4 md:gap-5 lg:gap-7">
          {/* LEFT */}
          <div className="col-span-7 space-y-1.5 sm:space-y-2.5 lg:space-y-4">
            <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF] bg-white px-1.5 py-1 text-[4px] font-bold uppercase tracking-[0.07em] text-cyan-800 shadow-sm sm:px-2 sm:text-[6px] md:text-[7px] lg:gap-2 lg:px-3 lg:py-1.5 lg:text-[9px] lg:tracking-[0.14em]">
              <Sparkles className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] lg:h-[13px] lg:w-[13px]" />

              Thẩm mỹ nướu & đường cười
            </div>

            <h1 className="max-w-[700px] text-[15px] font-extrabold leading-[1.04] tracking-[-0.04em] text-slate-950 min-[430px]:text-[18px] sm:text-[24px] md:text-[32px] lg:text-[44px]">
              Phẫu thuật thẩm mỹ{" "}
              <span className="relative inline-block text-cyan-900">
                nướu
                <span className="absolute -bottom-[2px] left-0 h-[1px] w-full rounded-full bg-[#00FFFF] sm:h-[2px] lg:-bottom-1 lg:h-[3px]" />
              </span>{" "}
              & cân chỉnh đường cười
            </h1>

            <p className="max-w-2xl text-[5.5px] leading-[9px] text-slate-600 min-[430px]:text-[6.5px] min-[430px]:leading-[11px] sm:text-[8px] sm:leading-[14px] md:text-[10px] md:leading-5 lg:text-[14px] lg:leading-6">
              Đánh giá mối tương quan giữa răng, môi và mô nướu để xây dựng
              kế hoạch điều trị phù hợp với từng tình trạng thẩm mỹ.
            </p>

            {/* 3 METRICS - LUÔN 3 CỘT */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-2.5">
              {[
                {
                  icon: Smile,
                  title: "Đường cười",
                  text: "Phân tích răng • môi • nướu",
                },
                {
                  icon: Microscope,
                  title: "Vi phẫu",
                  text: "Kiểm soát thao tác chi tiết",
                },
                {
                  icon: ShieldCheck,
                  title: "Cá nhân hóa",
                  text: "Phác đồ theo mô mềm thực tế",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-md border border-slate-100 bg-white p-1.5 shadow-sm sm:rounded-lg sm:p-2 md:p-2.5 lg:rounded-xl lg:p-3.5"
                  >
                    <Icon className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[13px] md:w-[13px] lg:h-[17px] lg:w-[17px]" />

                    <div className="mt-1 text-[3.5px] font-bold uppercase text-slate-800 sm:text-[5px] md:text-[7px] lg:mt-2 lg:text-[10px]">
                      {item.title}
                    </div>

                    <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:text-[6px] lg:mt-1 lg:text-[9px] lg:leading-4">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* BUTTONS LUÔN NGANG */}
            <div className="flex flex-row gap-1 pt-0.5 sm:gap-2 lg:gap-3 lg:pt-1">
              <Link
                href="/appointment"
                className="group inline-flex min-h-[24px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-2 text-[4.5px] font-bold uppercase tracking-wide text-slate-950 shadow-sm transition hover:-translate-y-1 hover:bg-[#33FFFF] sm:min-h-[30px] sm:rounded-lg sm:px-3 sm:text-[6px] md:min-h-[36px] md:px-4 md:text-[8px] lg:min-h-[44px] lg:gap-2 lg:rounded-xl lg:px-5 lg:text-[11px]"
              >
                <CalendarDays className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />

                Đặt lịch tư vấn

                <ArrowRight className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />
              </Link>

              <a
                href="#clinical-cases"
                className="inline-flex min-h-[24px] items-center justify-center rounded-md border border-slate-200 bg-white px-2 text-[4.5px] font-bold uppercase tracking-wide text-slate-800 transition hover:border-[#66FFFF] sm:min-h-[30px] sm:rounded-lg sm:px-3 sm:text-[6px] md:min-h-[36px] md:px-4 md:text-[8px] lg:min-h-[44px] lg:rounded-xl lg:px-5 lg:text-[11px]"
              >
                Xem ca điều trị
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative col-span-5 flex justify-center">
            <div className="relative w-full max-w-[150px] min-[430px]:max-w-[180px] sm:max-w-[225px] md:max-w-[280px] lg:max-w-[360px]">
              <div className="absolute -inset-1 rounded-[12px] bg-gradient-to-tr from-[#99FFFF]/55 via-[#CCFFFF]/25 to-transparent blur-md sm:-inset-2 sm:rounded-[20px] lg:-inset-3 lg:rounded-[28px] lg:blur-lg" />

              <div className="relative overflow-hidden rounded-[9px] border border-white bg-white p-0.5 shadow-[0_10px_25px_rgba(0,105,107,0.10)] sm:rounded-[13px] sm:p-1 md:rounded-[16px] lg:rounded-[20px] lg:p-1.5 lg:shadow-[0_20px_50px_rgba(0,105,107,0.12)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[7px] bg-slate-100 sm:rounded-[10px] lg:rounded-[15px]">
                  <img
                    src="/images/specialties/cosmetic-hero.jpg"
                    alt="Thẩm mỹ nướu"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

                  <div className="absolute bottom-1 left-1 right-1 rounded border border-white bg-white/95 p-1 shadow-md backdrop-blur sm:bottom-2 sm:left-2 sm:right-2 sm:rounded-md sm:p-1.5 lg:bottom-3 lg:left-3 lg:right-3 lg:rounded-lg lg:p-3">
                    <div className="flex items-center justify-between gap-1 lg:gap-3">
                      <div>
                        <div className="text-[3px] font-bold uppercase tracking-[0.07em] text-cyan-700 sm:text-[5px] md:text-[6px] lg:text-[8px] lg:tracking-[0.13em]">
                          Pink Esthetics
                        </div>

                        <div className="mt-0.5 text-[4px] font-bold text-slate-950 sm:text-[6px] md:text-[8px] lg:text-[12px]">
                          Thiết kế đường viền nướu phù hợp với nụ cười
                        </div>
                      </div>

                      <BadgeCheck className="h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[10px] sm:w-[10px] lg:h-[17px] lg:w-[17px]" />
                    </div>
                  </div>
                </div>

                {/* 2 CỘT GIỮ NGUYÊN */}
                <div className="grid grid-cols-2 gap-1 p-1 pt-1.5 sm:gap-1.5 sm:p-1.5 sm:pt-2 lg:gap-2 lg:p-2 lg:pt-3">
                  <div className="rounded bg-[#F8FFFF] p-1 sm:rounded-md sm:p-1.5 lg:rounded-lg lg:p-3">
                    <div className="text-[3px] font-bold uppercase text-cyan-800 sm:text-[5px] lg:text-[8px]">
                      Phân tích
                    </div>

                    <div className="mt-0.5 text-[4px] font-semibold text-slate-700 sm:text-[6px] lg:mt-1 lg:text-[10px]">
                      Zenith • Smile Line
                    </div>
                  </div>

                  <div className="rounded bg-[#F8FFFF] p-1 sm:rounded-md sm:p-1.5 lg:rounded-lg lg:p-3">
                    <div className="text-[3px] font-bold uppercase text-cyan-800 sm:text-[5px] lg:text-[8px]">
                      Mô mềm
                    </div>

                    <div className="mt-0.5 text-[4px] font-semibold text-slate-700 sm:text-[6px] lg:mt-1 lg:text-[10px]">
                      Nướu • sắc tố
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUB NAV */}
      <div className="sticky top-[64px] z-30 border-b border-slate-100 bg-white/95 backdrop-blur xl:top-[78px]">
        <div className="mx-auto flex max-w-7xl justify-center gap-2 overflow-x-auto px-2 py-2 text-[4px] font-bold uppercase tracking-wide text-slate-500 sm:gap-3 sm:px-4 sm:text-[6px] md:gap-4 md:px-6 md:text-[8px] lg:gap-6 lg:px-10 lg:py-3 lg:text-[10px]">
          <a href="#problems" className="shrink-0 hover:text-cyan-800">
            01. Vấn đề
          </a>

          <a href="#solutions" className="shrink-0 hover:text-cyan-800">
            02. Giải pháp
          </a>

          <a href="#technology" className="shrink-0 hover:text-cyan-800">
            03. Công nghệ
          </a>

          <a href="#workflow" className="shrink-0 hover:text-cyan-800">
            04. Quy trình
          </a>

          <a
            href="#clinical-cases"
            className="shrink-0 hover:text-cyan-800"
          >
            05. Ca điều trị
          </a>

          <a href="#faq" className="shrink-0 hover:text-cyan-800">
            06. FAQ
          </a>
        </div>
      </div>

      {/* PROBLEMS */}
      <section
        id="problems"
        className="bg-[#F7FDFD] px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              01 // Phân tích tình trạng
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              Các vấn đề thẩm mỹ nướu thường gặp
            </h2>

            <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] sm:leading-3 md:text-[9px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
              Việc điều trị cần bắt đầu từ nguyên nhân cụ thể thay vì chỉ
              chỉnh sửa hình thức bên ngoài.
            </p>
          </div>

          {/* LUÔN 4 CỘT */}
          <div className="mt-4 grid grid-cols-4 gap-1 sm:mt-5 sm:gap-2 md:mt-6 md:gap-3 lg:mt-8 lg:gap-4">
            {problems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="flex flex-col rounded-md border border-slate-100 bg-white p-1.5 shadow-sm transition hover:-translate-y-1 hover:border-[#66FFFF] sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-3.5 lg:rounded-2xl lg:p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-[#EEFFFF] sm:h-7 sm:w-7 sm:rounded-md md:h-9 md:w-9 lg:h-11 lg:w-11 lg:rounded-xl">
                      <Icon className="h-[8px] w-[8px] text-cyan-700 sm:h-[11px] sm:w-[11px] md:h-[15px] md:w-[15px] lg:h-[20px] lg:w-[20px]" />
                    </div>

                    <span className="text-[4px] font-bold text-slate-400 sm:text-[6px] md:text-[8px] lg:text-[10px]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-2 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:mt-3 md:text-[10px] md:leading-4 lg:mt-5 lg:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[3.5px] leading-[6px] text-slate-500 sm:text-[4.5px] sm:leading-[8px] md:mt-2 md:text-[6px] md:leading-3 lg:mt-3 lg:text-[11px] lg:leading-5">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center gap-1 pt-2 text-[3px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[4.5px] md:pt-3 md:text-[6px] lg:gap-2 lg:pt-5 lg:text-[9px]">
                    {item.solution}

                    <ArrowRight className="h-[5px] w-[5px] sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:h-[12px] lg:w-[12px]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="bg-white px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              02 // Giải pháp
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              Các hướng can thiệp thẩm mỹ nướu
            </h2>
          </div>

          {/* LUÔN 2 CỘT */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3 md:mt-6 md:gap-4 lg:mt-8 lg:gap-5">
            {solutions.map((item) => (
              <div
                key={item.number}
                className="rounded-md border border-slate-100 bg-[#F8FFFF] p-2 sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="rounded-full bg-white px-1.5 py-0.5 text-[3.5px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[5px] md:px-2 md:text-[6px] lg:px-3 lg:py-1.5 lg:text-[9px]">
                    {item.number} / {item.label}
                  </span>

                  <Stethoscope className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[13px] md:w-[13px] lg:h-[18px] lg:w-[18px]" />
                </div>

                <h3 className="mt-2 text-[7px] font-bold leading-[10px] text-slate-950 sm:text-[10px] sm:leading-4 md:mt-3 md:text-[14px] md:leading-5 lg:mt-5 lg:text-xl">
                  {item.title}
                </h3>

                <p className="mt-1 text-[4px] leading-[7px] text-slate-600 sm:text-[5px] sm:leading-[9px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[12px] lg:leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="technology"
        className="border-y border-slate-100 bg-[#F7FDFD] px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        {/* LUÔN 6/12 + 6/12 */}
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <div className="col-span-6">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              03 // Công nghệ hỗ trợ
            </div>

            <h2 className="mt-1 text-[13px] font-extrabold text-slate-950 min-[430px]:text-[15px] sm:text-[20px] md:text-[27px] lg:mt-3 lg:text-[38px]">
              Công nghệ hỗ trợ thao tác trên mô mềm
            </h2>

            <p className="mt-1.5 text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:mt-2 md:text-[8px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
              Việc sử dụng laser, phóng đại hoặc thiết kế kỹ thuật số phụ
              thuộc vào từng thủ thuật và chỉ định cụ thể.
            </p>

            <div className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5 md:mt-4 md:space-y-2 lg:mt-6 lg:space-y-3">
              {technologies.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-1 rounded-md border border-slate-100 bg-white p-1.5 sm:gap-2 sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-3 lg:gap-4 lg:rounded-2xl lg:p-4"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#EEFFFF] sm:h-7 sm:w-7 sm:rounded-md md:h-8 md:w-8 lg:h-10 lg:w-10 lg:rounded-xl">
                      <Icon className="h-[8px] w-[8px] text-cyan-700 sm:h-[11px] sm:w-[11px] md:h-[14px] md:w-[14px] lg:h-[18px] lg:w-[18px]" />
                    </div>

                    <div>
                      <h3 className="text-[5px] font-bold leading-[7px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:text-[10px] md:leading-4 lg:text-[14px]">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:text-[6px] md:leading-3 lg:mt-1 lg:text-[11px] lg:leading-5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-6">
            <div className="relative overflow-hidden rounded-md border border-white bg-white p-1 shadow-[0_8px_25px_rgba(0,105,107,0.08)] sm:rounded-lg sm:p-1.5 md:rounded-xl md:p-2 lg:rounded-[22px] lg:shadow-[0_20px_50px_rgba(0,105,107,0.10)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded bg-slate-100 sm:rounded-md md:rounded-lg lg:rounded-[16px]">
                <img
                  src="/images/specialties/cosmetic-tech.jpg"
                  alt="Công nghệ hỗ trợ thẩm mỹ nướu"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                <div className="absolute bottom-1 left-1 right-1 rounded bg-white/95 p-1 backdrop-blur sm:bottom-2 sm:left-2 sm:right-2 sm:rounded-md sm:p-1.5 lg:bottom-3 lg:left-3 lg:right-3 lg:rounded-lg lg:p-3">
                  <div className="text-[3px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[5px] md:text-[6px] lg:text-[8px]">
                    Clinical Technology
                  </div>

                  <div className="mt-0.5 text-[4px] font-bold text-slate-950 sm:text-[6px] md:text-[8px] lg:mt-1 lg:text-[12px]">
                    Laser • Magnification • Digital Planning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="bg-white px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              04 // Quy trình
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              4 bước điều trị thẩm mỹ nướu
            </h2>
          </div>

          {/* LUÔN 4 CỘT */}
          <div className="mt-4 grid grid-cols-4 gap-1 sm:mt-5 sm:gap-2 md:mt-6 md:gap-3 lg:mt-8 lg:gap-4">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="rounded-md border border-slate-100 bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-3.5 lg:rounded-2xl lg:p-5"
              >
                <span className="text-[11px] font-extrabold text-cyan-700 sm:text-[15px] md:text-[20px] lg:text-[28px]">
                  {item.number}
                </span>

                <h3 className="mt-2 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:mt-3 md:text-[10px] md:leading-4 lg:mt-4 lg:text-[15px]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[3.5px] leading-[6px] text-slate-500 sm:text-[4.5px] sm:leading-[8px] md:mt-2 md:text-[6px] md:leading-3 lg:mt-3 lg:text-[11px] lg:leading-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL CASES */}
      <section
        id="clinical-cases"
        className="border-y border-slate-100 bg-[#F7FDFD] px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-row items-end justify-between gap-2">
            <div>
              <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
                05 // Ca lâm sàng
              </div>

              <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
                Hồ sơ thẩm mỹ nướu
              </h2>

              <p className="mt-1.5 max-w-2xl text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:mt-2 md:text-[8px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
                Hình ảnh chỉ nên được công khai khi bệnh nhân đã đồng ý
                phù hợp.
              </p>
            </div>

            <Link
              href="/cases"
              className="inline-flex shrink-0 items-center gap-1 text-[3.5px] font-bold uppercase text-cyan-800 sm:text-[5px] md:text-[7px] lg:gap-2 lg:text-[10px]"
            >
              Xem tất cả ca điều trị

              <ArrowRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[14px] lg:w-[14px]" />
            </Link>
          </div>

          {/* LUÔN 2 CỘT */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3 md:mt-6 md:gap-4 lg:mt-8 lg:gap-6">
            {[1, 2].map((caseNumber) => (
              <div
                key={caseNumber}
                className="rounded-md border border-slate-100 bg-white p-1.5 shadow-sm sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[3.5px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[5px] md:text-[7px] lg:text-[9px]">
                    CASE G-{caseNumber === 1 ? "401" : "215"}
                  </span>

                  <BadgeCheck className="h-[7px] w-[7px] text-cyan-700 sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[17px] lg:w-[17px]" />
                </div>

                <h3 className="mt-1 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:text-[10px] md:leading-4 lg:mt-2 lg:text-[15px]">
                  {caseNumber === 1
                    ? "Điều chỉnh đường cười hở lợi"
                    : "Ghép mô mềm vùng tụt nướu"}
                </h3>

                {/* BEFORE / AFTER LUÔN 2 CỘT */}
                <div className="mt-2 grid grid-cols-2 gap-1 sm:mt-3 sm:gap-2 lg:mt-4 lg:gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded bg-slate-200 sm:rounded-md md:rounded-lg lg:rounded-xl">
                    <img
                      src={`/images/specialties/cosmetic-case-${caseNumber}-before.jpg`}
                      alt="Trước điều trị"
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute bottom-1 left-1 rounded bg-slate-950/80 px-1 py-0.5 text-[3px] font-bold uppercase text-white sm:text-[4px] md:bottom-2 md:left-2 md:text-[6px] lg:rounded-md lg:px-2 lg:py-1 lg:text-[8px]">
                      Trước
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded bg-slate-200 sm:rounded-md md:rounded-lg lg:rounded-xl">
                    <img
                      src={`/images/specialties/cosmetic-case-${caseNumber}-after.jpg`}
                      alt="Sau điều trị"
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute bottom-1 left-1 rounded bg-[#00FFFF] px-1 py-0.5 text-[3px] font-bold uppercase text-slate-950 sm:text-[4px] md:bottom-2 md:left-2 md:text-[6px] lg:rounded-md lg:px-2 lg:py-1 lg:text-[8px]">
                      Sau
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:mt-3 md:text-[7px] md:leading-3 lg:mt-4 lg:text-[11px] lg:leading-5">
                  Kết quả điều trị phụ thuộc vào tình trạng mô, nguyên
                  nhân ban đầu và quá trình lành thương của từng bệnh nhân.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="bg-white px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              06 // Hỏi đáp
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              Bác sĩ Trung giải đáp
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:text-[8px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
              Nội dung tham khảo không thay thế thăm khám trực tiếp.
            </p>
          </div>

          <div className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2 md:mt-6 lg:mt-8 lg:space-y-3">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-md border border-slate-100 bg-[#F8FFFF] p-2 sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-[5.5px] font-bold text-slate-900 sm:text-[7px] md:text-[10px] lg:gap-5 lg:text-[14px]">
                  {item.question}

                  <span className="text-[10px] text-cyan-700 transition group-open:rotate-45 sm:text-sm md:text-base lg:text-xl">
                    +
                  </span>
                </summary>

                <p className="mt-1.5 border-t border-slate-100 pt-1.5 text-[4px] leading-[7px] text-slate-600 sm:text-[5px] sm:leading-[9px] md:mt-2 md:pt-2 md:text-[7px] md:leading-3 lg:mt-4 lg:pt-4 lg:text-[12px] lg:leading-6">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#F7FDFD] px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CCFFFF]/40 blur-[50px] sm:h-[230px] sm:w-[230px] sm:blur-[75px] lg:h-[380px] lg:w-[380px] lg:blur-[110px]" />

        {/* LUÔN 7/12 + 5/12 */}
        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-12 items-center gap-2 rounded-lg border border-[#CCFFFF] bg-white p-3 shadow-[0_8px_25px_rgba(0,180,180,0.06)] sm:gap-3 sm:rounded-xl sm:p-4 md:gap-5 md:rounded-2xl md:p-6 lg:gap-6 lg:rounded-[26px] lg:p-9 lg:shadow-[0_18px_50px_rgba(0,180,180,0.08)]">
          <div className="col-span-7">
            <div className="text-[3.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[5px] md:text-[7px] lg:text-[10px] lg:tracking-[0.15em]">
              Tư vấn thẩm mỹ nướu
            </div>

            <h2 className="mt-1 text-[12px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[14px] sm:text-[18px] md:text-[24px] lg:mt-3 lg:text-3xl">
              Đường viền nướu của bạn có cần điều chỉnh?
            </h2>

            <p className="mt-1.5 max-w-2xl text-[4px] leading-[7px] text-slate-600 sm:text-[5.5px] sm:leading-[9px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-4 lg:text-[13px] lg:leading-6">
              Bác sĩ cần đánh giá trực tiếp mô nướu, răng, môi và cấu trúc
              nâng đỡ trước khi đưa ra phương án phù hợp.
            </p>

            {/* LUÔN 2 CỘT */}
            <div className="mt-2 grid grid-cols-2 gap-1 sm:mt-3 sm:gap-1.5 md:mt-4 md:gap-2 lg:mt-5">
              {[
                "Phân tích đường cười",
                "Đánh giá mô mềm",
                "Xác định nguyên nhân",
                "Trao đổi kế hoạch điều trị",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1 text-[3.5px] text-slate-600 sm:text-[5px] md:text-[7px] lg:gap-2 lg:text-[11px]"
                >
                  <CheckCircle2 className="h-[6px] w-[6px] shrink-0 text-cyan-700 sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[15px] lg:w-[15px]" />

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-5 flex items-center justify-end">
            <Link
              href="/appointment"
              className="group inline-flex min-h-[26px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-2 text-[4px] font-bold uppercase tracking-wide text-slate-950 shadow-sm transition hover:-translate-y-1 hover:bg-[#33FFFF] sm:min-h-[32px] sm:px-3 sm:text-[5.5px] md:min-h-[40px] md:rounded-lg md:px-4 md:text-[7px] lg:min-h-[48px] lg:gap-2 lg:rounded-xl lg:px-7 lg:text-[11px]"
            >
              <CalendarDays className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[16px] lg:w-[16px]" />

              Đặt lịch với Bác sĩ Trung

              <ArrowRight className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}