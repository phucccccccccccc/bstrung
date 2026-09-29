import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Bone,
  CalendarDays,
  Check,
  CircleHelp,
  Crosshair,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Syringe,
  Target,
  Toothbrush,
} from "lucide-react";

export const metadata = {
  title: "Cấy ghép Implant | Bác sĩ Trung",
  description:
    "Tìm hiểu phương pháp cấy ghép Implant, quy trình điều trị, công nghệ và các ca điều trị của Bác sĩ Trung.",
};

const candidates = [
  {
    icon: Toothbrush,
    title: "Mất một răng",
    description:
      "Phục hồi độc lập vị trí răng mất, hạn chế ảnh hưởng đến các răng kế cận và hỗ trợ duy trì chức năng ăn nhai.",
    label: "Implant đơn lẻ",
  },
  {
    icon: Bone,
    title: "Mất nhiều răng",
    description:
      "Đánh giá khoảng mất răng, cấu trúc xương và khớp cắn để xây dựng giải pháp phục hồi phù hợp.",
    label: "Implant nhiều đơn vị",
  },
  {
    icon: Target,
    title: "Mất răng toàn hàm",
    description:
      "Có thể được đánh giá các phương án phục hồi toàn hàm dựa trên tình trạng xương, sức khỏe và nhu cầu thực tế.",
    label: "Phục hồi toàn hàm",
  },
];

const processSteps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Thăm khám & chẩn đoán",
    description:
      "Khám trực tiếp, đánh giá tình trạng răng miệng và dữ liệu hình ảnh cần thiết.",
    note: "Đánh giá tổng thể",
  },
  {
    number: "02",
    icon: Crosshair,
    title: "Lập kế hoạch điều trị",
    description:
      "Phân tích vị trí răng mất, cấu trúc xương và hướng phục hình dự kiến.",
    note: "Cá nhân hóa",
  },
  {
    number: "03",
    icon: Syringe,
    title: "Thực hiện cấy ghép",
    description:
      "Tiến hành đặt Implant theo kế hoạch đã thống nhất và điều kiện lâm sàng thực tế.",
    note: "Kiểm soát lâm sàng",
    highlight: true,
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Theo dõi lành thương",
    description:
      "Tái khám theo chỉ định để theo dõi mô mềm, xương và quá trình tích hợp.",
    note: "Theo dõi định kỳ",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Hoàn thiện phục hình",
    description:
      "Thực hiện mão hoặc cầu răng trên Implant khi điều kiện lâm sàng phù hợp.",
    note: "Phục hồi chức năng",
  },
];

const technologies = [
  {
    title: "Chẩn đoán hình ảnh 3D",
    subtitle: "Digital Diagnosis",
    description:
      "Hỗ trợ bác sĩ đánh giá cấu trúc giải phẫu, vùng xương và các yếu tố liên quan trước điều trị.",
    features: [
      "Hỗ trợ phân tích cấu trúc xương",
      "Hỗ trợ lập kế hoạch điều trị",
    ],
  },
  {
    title: "Quy trình phục hình số",
    subtitle: "Digital Workflow",
    description:
      "Dữ liệu kỹ thuật số có thể hỗ trợ quá trình thiết kế và phối hợp giữa lâm sàng với phục hình.",
    features: [
      "Hỗ trợ thiết kế phục hình",
      "Giảm các bước thủ công không cần thiết",
    ],
  },
  {
    title: "Vật liệu Implant",
    subtitle: "Implant Systems",
    description:
      "Hệ thống Implant được lựa chọn dựa trên chỉ định chuyên môn và tình trạng thực tế của bệnh nhân.",
    features: [
      "Nguồn gốc và thông tin rõ ràng",
      "Lựa chọn theo từng trường hợp",
    ],
  },
];

const faqs = [
  {
    question: "Cấy ghép Implant có đau không?",
    answer:
      "Trong quá trình thực hiện, bác sĩ sẽ áp dụng phương pháp kiểm soát đau phù hợp. Mức độ khó chịu sau điều trị khác nhau tùy cơ địa, phạm vi can thiệp và tình trạng lâm sàng của từng người.",
  },
  {
    question: "Trồng một răng Implant mất bao lâu?",
    answer:
      "Thời gian phụ thuộc vào vị trí răng, chất lượng xương, tình trạng mô mềm và khả năng lành thương. Bác sĩ cần thăm khám trước khi đưa ra mốc thời gian phù hợp.",
  },
  {
    question: "Mất răng lâu năm có cấy Implant được không?",
    answer:
      "Nhiều trường hợp mất răng lâu năm vẫn có thể được xem xét điều trị. Tuy nhiên cần đánh giá lượng xương còn lại, tình trạng xoang, mô mềm và sức khỏe toàn thân.",
  },
  {
    question: "Implant sử dụng được bao lâu?",
    answer:
      "Tuổi thọ phụ thuộc vào nhiều yếu tố như chất lượng điều trị, vệ sinh răng miệng, khớp cắn, hút thuốc, bệnh toàn thân và lịch tái khám. Không nên đưa ra một thời hạn cố định cho mọi bệnh nhân.",
  },
];

export default function ImplantPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* BREADCRUMB */}
      <div className="border-b border-slate-100 bg-[#F8FFFF]">
        <div
          className="
            mx-auto flex max-w-7xl
            items-center gap-1
            whitespace-nowrap
            px-2 py-2
            text-[4.5px]
            font-semibold uppercase
            tracking-wide
            text-slate-500

            sm:gap-1.5
            sm:px-4
            sm:text-[6px]

            md:px-6
            md:text-[8px]

            lg:gap-2
            lg:px-10
            lg:py-3
            lg:text-[11px]
          "
        >
          <Link href="/" className="transition hover:text-cyan-700">
            Trang chủ
          </Link>

          <span>/</span>

          <Link
            href="/specialties"
            className="transition hover:text-cyan-700"
          >
            Chuyên môn
          </Link>

          <span>/</span>

          <span className="text-slate-900">
            Cấy ghép Implant
          </span>
        </div>
      </div>

      {/* HERO */}
      <section
        className="
          relative overflow-hidden
          border-b border-slate-100
          bg-gradient-to-b
          from-[#F8FFFF]
          via-[#EEFFFF]/50
          to-white

          px-2 pb-3 pt-3

          sm:px-4
          sm:pb-4
          sm:pt-4

          md:px-6

          lg:px-10
          lg:pb-7
          lg:pt-7
        "
      >
        <div
          className="
            pointer-events-none
            absolute right-[10%] top-0
            h-[120px] w-[120px]
            rounded-full
            bg-[#CCFFFF]/35
            blur-[45px]

            sm:h-[210px]
            sm:w-[210px]
            sm:blur-[65px]

            lg:h-[360px]
            lg:w-[360px]
            lg:blur-[95px]
          "
        />

        <div
          className="
            relative z-10
            mx-auto grid max-w-7xl
            grid-cols-12
            items-center
            gap-2

            sm:gap-4
            md:gap-5
            lg:gap-7
          "
        >
          {/* LEFT */}
          <div className="col-span-7 space-y-1.5 sm:space-y-2.5 lg:space-y-4">
            <div
              className="
                inline-flex items-center
                gap-1
                rounded-full
                border border-[#99FFFF]
                bg-white
                px-1.5 py-1
                text-[4px]
                font-bold uppercase
                tracking-[0.07em]
                text-cyan-800
                shadow-sm

                sm:px-2
                sm:text-[6px]

                md:text-[7px]

                lg:gap-2
                lg:px-3
                lg:py-1.5
                lg:text-[9px]
                lg:tracking-[0.14em]
              "
            >
              <span className="h-1 w-1 rounded-full bg-[#00FFFF] sm:h-1.5 sm:w-1.5" />
              Chuyên môn của Bác sĩ Trung
            </div>

            <h1
              className="
                max-w-[680px]
                text-[15px]
                font-extrabold
                leading-[1.04]
                tracking-[-0.04em]
                text-slate-950

                min-[430px]:text-[18px]

                sm:text-[24px]

                md:text-[32px]

                lg:text-[44px]
              "
            >
              Cấy ghép Implant{" "}
              <span className="relative inline-block text-cyan-900">
                cùng Bác sĩ Trung

                <span className="absolute -bottom-[2px] left-0 h-[1px] w-full rounded-full bg-[#00FFFF] sm:h-[2px] lg:-bottom-1 lg:h-[3px]" />
              </span>
            </h1>

            <p
              className="
                max-w-xl
                text-[5.5px]
                leading-[9px]
                text-slate-600

                min-[430px]:text-[6.5px]
                min-[430px]:leading-[11px]

                sm:text-[8px]
                sm:leading-[14px]

                md:text-[10px]
                md:leading-5

                lg:text-[14px]
                lg:leading-6
              "
            >
              Đánh giá toàn diện tình trạng mất răng, cấu trúc xương,
              mô mềm và chức năng nhai để xây dựng kế hoạch phục hồi
              phù hợp với từng bệnh nhân.
            </p>

            {/* 3 STEP CARDS - LUÔN 3 CỘT */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-2.5">
              {[
                ["01", "Chẩn đoán", "Đánh giá trước điều trị"],
                ["02", "Cá nhân hóa", "Phác đồ theo từng tình trạng"],
                ["03", "Theo dõi", "Tái khám sau điều trị"],
              ].map(([number, title, description], index) => (
                <div
                  key={number}
                  className="
                    rounded-md
                    border border-slate-100
                    bg-white
                    p-1.5
                    shadow-sm

                    sm:rounded-lg
                    sm:p-2

                    md:p-2.5

                    lg:rounded-xl
                    lg:p-3.5
                  "
                >
                  <div
                    className={`text-[9px] font-extrabold sm:text-[13px] md:text-[16px] lg:text-[20px] ${
                      index === 0
                        ? "text-cyan-800"
                        : index === 1
                          ? "text-slate-950"
                          : "text-cyan-600"
                    }`}
                  >
                    {number}
                  </div>

                  <div className="mt-0.5 text-[3.5px] font-bold uppercase tracking-wide text-slate-800 sm:text-[5px] md:text-[6px] lg:mt-1 lg:text-[9px]">
                    {title}
                  </div>

                  <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:text-[6px] lg:mt-1 lg:text-[9px] lg:leading-4">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTONS - LUÔN NGANG */}
            <div className="flex flex-row gap-1 pt-0.5 sm:gap-2 lg:gap-3 lg:pt-1">
              <Link
                href="/appointment"
                className="
                  group inline-flex
                  min-h-[24px]
                  items-center justify-center
                  gap-1
                  rounded-md
                  bg-[#00FFFF]
                  px-2
                  text-[4.5px]
                  font-bold uppercase
                  tracking-wide
                  text-slate-950
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:bg-[#33FFFF]

                  sm:min-h-[30px]
                  sm:rounded-lg
                  sm:px-3
                  sm:text-[6px]

                  md:min-h-[36px]
                  md:px-4
                  md:text-[8px]

                  lg:min-h-[44px]
                  lg:gap-2
                  lg:rounded-xl
                  lg:px-5
                  lg:text-[11px]
                "
              >
                <CalendarDays className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />

                Đặt lịch tư vấn

                <ArrowRight className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />
              </Link>

              <a
                href="#clinical-cases"
                className="
                  inline-flex
                  min-h-[24px]
                  items-center justify-center
                  gap-1
                  rounded-md
                  border border-slate-200
                  bg-white
                  px-2
                  text-[4.5px]
                  font-bold uppercase
                  tracking-wide
                  text-slate-800
                  transition
                  hover:border-[#66FFFF]

                  sm:min-h-[30px]
                  sm:rounded-lg
                  sm:px-3
                  sm:text-[6px]

                  md:min-h-[36px]
                  md:px-4
                  md:text-[8px]

                  lg:min-h-[44px]
                  lg:rounded-xl
                  lg:px-5
                  lg:text-[11px]
                "
              >
                Xem ca điều trị
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative col-span-5 flex justify-center">
            <div className="relative w-full max-w-[150px] min-[430px]:max-w-[180px] sm:max-w-[225px] md:max-w-[280px] lg:max-w-[360px]">
              <div className="absolute -inset-1 rounded-[12px] bg-gradient-to-tr from-[#99FFFF]/55 via-[#CCFFFF]/25 to-transparent blur-md sm:-inset-2 sm:rounded-[20px] lg:-inset-3 lg:rounded-[28px] lg:blur-lg" />

              <div className="relative overflow-hidden rounded-[9px] border border-white bg-white p-0.5 shadow-[0_10px_25px_rgba(0,105,107,0.10)] sm:rounded-[13px] sm:p-1 md:rounded-[16px] lg:rounded-[20px] lg:p-1.5 lg:shadow-[0_20px_50px_rgba(0,105,107,0.12)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[7px] bg-slate-100 sm:rounded-[10px] lg:rounded-[15px]">
                  <img
                    src="/images/specialties/implant-hero.jpg"
                    alt="Bác sĩ Trung tư vấn Implant"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

                  <div className="absolute bottom-1 left-1 right-1 rounded border border-white bg-white/95 p-1 shadow-md backdrop-blur sm:bottom-2 sm:left-2 sm:right-2 sm:rounded-md sm:p-1.5 lg:bottom-3 lg:left-3 lg:right-3 lg:rounded-lg lg:p-3">
                    <div className="text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-700 sm:text-[5px] md:text-[6px] lg:text-[8px] lg:tracking-[0.13em]">
                      Quy trình cá nhân hóa
                    </div>

                    <div className="mt-0.5 text-[4.5px] font-bold text-slate-950 sm:text-[6px] md:text-[8px] lg:text-[12px]">
                      Bác sĩ Trung trực tiếp đánh giá & lập kế hoạch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className="sticky top-[64px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl xl:top-[78px]">
        <div
          className="
            mx-auto flex
            max-w-7xl
            items-center
            gap-2
            overflow-x-auto
            px-2 py-2

            sm:gap-3
            sm:px-4

            md:gap-4
            md:px-6

            lg:gap-7
            lg:px-10
            lg:py-4
          "
        >
          {[
            ["#overview", "Tổng quan"],
            ["#candidates", "Ai phù hợp"],
            ["#process", "Quy trình"],
            ["#technology", "Công nghệ"],
            ["#clinical-cases", "Ca điều trị"],
            ["#faq", "Giải đáp"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap text-[4.5px] font-bold uppercase tracking-wide text-slate-500 transition hover:text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[11px]"
            >
              {label}
            </a>
          ))}

          <Link
            href="/appointment"
            className="ml-auto shrink-0 whitespace-nowrap rounded bg-slate-950 px-1.5 py-1 text-[4px] font-bold uppercase tracking-wide text-white sm:rounded-md sm:px-2 sm:text-[6px] md:text-[7px] lg:rounded-lg lg:px-4 lg:py-2 lg:text-[10px]"
          >
            Đặt lịch
          </Link>
        </div>
      </nav>

      {/* OVERVIEW */}
      <section
        id="overview"
        className="scroll-mt-36 bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24"
      >
        {/* LUÔN 5/12 + 7/12 */}
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-12">
          <div className="col-span-5 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
            <div className="text-[4.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[11px] lg:tracking-[0.15em]">
              01 // Tổng quan
            </div>

            <h2 className="text-[13px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[15px] sm:text-[20px] md:text-[27px] lg:text-[40px]">
              Phục hồi chức năng trên nền tảng chẩn đoán chính xác
            </h2>

            <p className="text-[5px] leading-[8px] text-slate-600 sm:text-[7px] sm:leading-3 md:text-[10px] md:leading-5 lg:text-[15px] lg:leading-8">
              Implant là một trong những lựa chọn phục hồi răng mất.
              Trước khi điều trị, cần đánh giá tình trạng xương, mô mềm,
              khớp cắn và sức khỏe tổng quát để xác định phương án phù hợp.
            </p>

            <div className="rounded-md border border-[#CCFFFF] bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6">
              <div className="flex items-center gap-1 text-[4.5px] font-bold text-cyan-800 sm:text-[6px] md:gap-2 md:text-[8px] lg:gap-3 lg:text-base">
                <BadgeCheck className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[13px] md:w-[13px] lg:h-[21px] lg:w-[21px]" />
                Nguyên tắc của Bác sĩ Trung
              </div>

              <p className="mt-1 text-[4px] leading-[7px] text-slate-600 sm:text-[5px] sm:leading-[9px] md:mt-2 md:text-[7px] md:leading-4 lg:mt-3 lg:text-[13px] lg:leading-7">
                Không lựa chọn kỹ thuật chỉ vì công nghệ mới. Công nghệ
                chỉ được sử dụng khi hỗ trợ chẩn đoán, nâng cao khả năng
                kiểm soát hoặc phù hợp với tình trạng cụ thể.
              </p>
            </div>
          </div>

          {/* CANDIDATES - LUÔN 3 CỘT */}
          <div
            id="candidates"
            className="col-span-7 grid scroll-mt-36 grid-cols-3 gap-1 sm:gap-2 md:gap-3 lg:gap-5"
          >
            {candidates.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex flex-col justify-between rounded-md border border-slate-200 bg-white p-1.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#66FFFF] hover:shadow-lg sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
                >
                  <div>
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-[#EEFFFF] text-cyan-800 transition group-hover:bg-[#00FFFF] group-hover:text-slate-950 sm:h-7 sm:w-7 sm:rounded-md md:h-9 md:w-9 lg:h-12 lg:w-12 lg:rounded-xl">
                      <Icon className="h-[9px] w-[9px] sm:h-[13px] sm:w-[13px] md:h-[17px] md:w-[17px] lg:h-[23px] lg:w-[23px]" />
                    </div>

                    <h3 className="mt-2 text-[6px] font-bold leading-[8px] text-slate-950 sm:text-[8px] sm:leading-3 md:mt-3 md:text-[11px] lg:mt-5 lg:text-[17px]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[4px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[13px] lg:leading-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-2 border-t border-slate-100 pt-1.5 text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[5px] md:mt-3 md:pt-2 md:text-[6px] lg:mt-6 lg:pt-5 lg:text-[10px] lg:tracking-[0.14em]">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="scroll-mt-36 border-y border-slate-100 bg-[#F8FFFF] px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-4 max-w-3xl text-center sm:mb-6 md:mb-8 lg:mb-12">
            <div className="text-[4.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[11px] lg:tracking-[0.15em]">
              02 // Quy trình điều trị
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[40px]">
              Quy trình Implant 5 bước
            </h2>

            <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] sm:leading-3 md:text-[9px] md:leading-4 lg:mt-4 lg:text-[14px] lg:leading-7">
              Quy trình thực tế có thể thay đổi tùy tình trạng từng bệnh
              nhân và chỉ được xác định sau khi thăm khám.
            </p>
          </div>

          {/* LUÔN 5 CỘT */}
          <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-3 lg:gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`group flex min-h-[115px] flex-col justify-between rounded-md bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 sm:min-h-[160px] sm:rounded-lg sm:p-2.5 md:min-h-[210px] md:rounded-xl md:p-4 lg:min-h-[290px] lg:rounded-2xl lg:p-6 ${
                    step.highlight
                      ? "border border-[#66FFFF] shadow-[0_6px_20px_rgba(0,206,209,0.08)] lg:border-2 lg:shadow-[0_12px_35px_rgba(0,206,209,0.10)]"
                      : "border border-slate-200 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`rounded px-1 py-0.5 text-[3.5px] font-bold sm:text-[5px] md:rounded-md md:px-1.5 md:text-[6px] lg:rounded-lg lg:px-3 lg:py-1 lg:text-[10px] ${
                          step.highlight
                            ? "bg-[#00FFFF] text-slate-950"
                            : "bg-[#EEFFFF] text-cyan-800"
                        }`}
                      >
                        BƯỚC {step.number}
                      </span>

                      <Icon className="h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[9px] sm:w-[9px] md:h-[13px] md:w-[13px] lg:h-[20px] lg:w-[20px]" />
                    </div>

                    <h3 className="mt-2 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:mt-3 md:text-[10px] md:leading-4 lg:mt-5 lg:text-[15px] lg:leading-6">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-[3.5px] leading-[6px] text-slate-600 sm:text-[4.5px] sm:leading-[8px] md:mt-2 md:text-[6px] md:leading-3 lg:mt-3 lg:text-[12px] lg:leading-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-2 border-t border-slate-100 pt-1 text-[3.5px] font-semibold text-slate-500 sm:text-[4.5px] md:mt-3 md:pt-2 md:text-[6px] lg:mt-5 lg:pt-4 lg:text-[10px]">
                    {step.note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="technology"
        className="scroll-mt-36 bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl rounded-lg border border-slate-200 bg-white p-3 shadow-[0_6px_20px_rgba(15,23,42,0.03)] sm:rounded-xl sm:p-4 md:rounded-2xl md:p-6 lg:rounded-3xl lg:p-12 lg:shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
          {/* LUÔN NẰM NGANG */}
          <div className="flex flex-row items-end justify-between gap-2 border-b border-slate-100 pb-3 sm:gap-4 sm:pb-4 md:pb-6 lg:gap-5 lg:pb-8">
            <div>
              <div className="text-[4.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[11px] lg:tracking-[0.15em]">
                03 // Công nghệ
              </div>

              <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[40px]">
                Công nghệ hỗ trợ điều trị
              </h2>
            </div>

            <p className="max-w-[40%] text-[4px] leading-[7px] text-slate-600 sm:text-[5px] sm:leading-[9px] md:text-[7px] md:leading-3 lg:max-w-md lg:text-[13px] lg:leading-6">
              Thiết bị và vật liệu chỉ là công cụ hỗ trợ. Chỉ định chuyên
              môn vẫn dựa trên đánh giá của bác sĩ.
            </p>
          </div>

          {/* LUÔN 3 CỘT */}
          <div className="mt-3 grid grid-cols-3 gap-1 sm:mt-4 sm:gap-2 md:mt-6 md:gap-4 lg:mt-8 lg:gap-6">
            {technologies.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-[#CCFFFF] bg-[#F8FFFF] p-1.5 transition hover:-translate-y-1 hover:shadow-lg sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
              >
                <div className="text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[5px] md:text-[6px] lg:text-[10px] lg:tracking-[0.14em]">
                  {item.subtitle}
                </div>

                <h3 className="mt-1 text-[6px] font-bold leading-[8px] text-slate-950 sm:text-[8px] md:text-[11px] lg:mt-2 lg:text-lg">
                  {item.title}
                </h3>

                <p className="mt-1 text-[4px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-4 lg:text-[13px] lg:leading-6">
                  {item.description}
                </p>

                <div className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5 md:mt-4 md:space-y-2 lg:mt-5 lg:space-y-3">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-1 text-[3.5px] leading-[6px] text-slate-700 sm:text-[5px] sm:leading-[8px] md:text-[6.5px] md:leading-3 lg:gap-2 lg:text-[12px]"
                    >
                      <Check className="mt-[1px] h-[6px] w-[6px] shrink-0 text-cyan-700 sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[16px] lg:w-[16px]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section
        id="clinical-cases"
        className="scroll-mt-36 border-y border-slate-100 bg-[#F8FFFF] px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 flex flex-row items-end justify-between gap-2 sm:mb-5 md:mb-7 lg:mb-10">
            <div>
              <div className="text-[4.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[11px] lg:tracking-[0.15em]">
                04 // Ca điều trị
              </div>

              <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[40px]">
                Ca điều trị liên quan
              </h2>
            </div>

            <Link
              href="/cases"
              className="group inline-flex shrink-0 items-center gap-1 text-[4px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[6px] md:text-[8px] lg:gap-2 lg:text-[11px]"
            >
              Xem tất cả ca điều trị

              <ArrowRight className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[16px] lg:w-[16px]" />
            </Link>
          </div>

          {/* LUÔN 2 CỘT */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-5 lg:gap-7">
            {[1, 2].map((item) => (
              <article
                key={item}
                className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl"
              >
                {/* BEFORE / AFTER LUÔN 2 CỘT */}
                <div className="grid grid-cols-2">
                  <div className="relative h-[75px] overflow-hidden bg-slate-100 sm:h-[120px] md:h-[180px] lg:h-64">
                    <img
                      src={`/images/specialties/case-${item}-before.jpg`}
                      alt="Trước điều trị"
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute left-1 top-1 rounded bg-white/90 px-1 py-0.5 text-[3.5px] font-bold uppercase tracking-wide text-slate-700 sm:text-[5px] md:left-2 md:top-2 md:px-2 md:text-[7px] lg:left-3 lg:top-3 lg:rounded-lg lg:px-3 lg:py-1 lg:text-[9px]">
                      Trước
                    </span>
                  </div>

                  <div className="relative h-[75px] overflow-hidden bg-slate-100 sm:h-[120px] md:h-[180px] lg:h-64">
                    <img
                      src={`/images/specialties/case-${item}-after.jpg`}
                      alt="Sau điều trị"
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute left-1 top-1 rounded bg-[#00FFFF] px-1 py-0.5 text-[3.5px] font-bold uppercase tracking-wide text-slate-950 sm:text-[5px] md:left-2 md:top-2 md:px-2 md:text-[7px] lg:left-3 lg:top-3 lg:rounded-lg lg:px-3 lg:py-1 lg:text-[9px]">
                      Sau
                    </span>
                  </div>
                </div>

                <div className="p-1.5 sm:p-2.5 md:p-4 lg:p-6">
                  <div className="text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[5px] md:text-[7px] lg:text-[10px] lg:tracking-[0.14em]">
                    Case Implant #{item}
                  </div>

                  <h3 className="mt-1 text-[6px] font-bold leading-[8px] text-slate-950 sm:text-[8px] sm:leading-3 md:text-[11px] md:leading-4 lg:mt-2 lg:text-lg">
                    {item === 1
                      ? "Phục hồi răng mất đơn lẻ vùng thẩm mỹ"
                      : "Phục hồi chức năng ở trường hợp mất nhiều răng"}
                  </h3>

                  <p className="mt-1 text-[4px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[13px] lg:leading-6">
                    Phân tích tình trạng ban đầu, mục tiêu điều trị,
                    phương án đã lựa chọn và quá trình theo dõi sau điều trị.
                  </p>

                  <Link
                    href="/cases"
                    className="group mt-2 inline-flex items-center gap-1 text-[4px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[5px] md:mt-3 md:text-[7px] lg:mt-5 lg:gap-2 lg:text-[11px]"
                  >
                    Xem case

                    <ArrowRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[14px] lg:w-[14px]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-3 text-center text-[4px] leading-[7px] text-slate-400 sm:text-[5px] md:mt-4 md:text-[7px] md:leading-3 lg:mt-6 lg:text-[11px] lg:leading-5">
            Hình ảnh ca điều trị chỉ sử dụng khi có quyền công khai phù
            hợp. Kết quả điều trị có thể khác nhau giữa từng bệnh nhân.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-36 bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 max-w-3xl sm:mb-5 md:mb-7 lg:mb-10">
            <div className="text-[4.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[11px] lg:tracking-[0.15em]">
              05 // Bác sĩ Trung giải đáp
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[40px]">
              Những câu hỏi thường gặp về Implant
            </h2>
          </div>

          {/* LUÔN 2 CỘT */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-md border border-slate-200 bg-white p-1.5 transition hover:border-[#66FFFF] sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
              >
                <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                  <CircleHelp className="mt-0.5 h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[9px] sm:w-[9px] md:h-[13px] md:w-[13px] lg:h-[21px] lg:w-[21px]" />

                  <div>
                    <h3 className="text-[5px] font-bold leading-[7px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:text-[10px] md:leading-4 lg:text-base">
                      {faq.question}
                    </h3>

                    <p className="mt-1 text-[4px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[13px] lg:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FFFF] via-[#EEFFFF] to-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute -bottom-16 right-0 h-[160px] w-[160px] rounded-full bg-[#CCFFFF]/50 blur-[55px] sm:h-[260px] sm:w-[260px] sm:blur-[80px] lg:-bottom-32 lg:h-[450px] lg:w-[450px] lg:blur-[120px]" />

        {/* LUÔN 8/12 + 4/12 */}
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-12 items-center gap-2 rounded-lg border border-[#CCFFFF] bg-white/80 p-3 shadow-[0_10px_30px_rgba(0,180,180,0.06)] backdrop-blur sm:gap-4 sm:rounded-xl sm:p-4 md:rounded-2xl md:p-7 lg:gap-10 lg:rounded-[28px] lg:p-12 lg:shadow-[0_20px_60px_rgba(0,180,180,0.08)]">
          <div className="col-span-8">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[7px] lg:text-[10px] lg:tracking-[0.15em]">
              Tư vấn trực tiếp
            </div>

            <h2 className="mt-1 text-[13px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[15px] sm:text-[20px] md:text-[27px] lg:mt-3 lg:text-[40px]">
              Bạn đang cân nhắc điều trị Implant?
            </h2>

            <p className="mt-1.5 max-w-2xl text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:mt-3 md:text-[8px] md:leading-4 lg:mt-4 lg:text-[14px] lg:leading-7">
              Đặt lịch để Bác sĩ Trung trực tiếp đánh giá tình trạng và
              giải thích những lựa chọn phù hợp trước khi bạn quyết định
              điều trị.
            </p>
          </div>

          <div className="col-span-4 flex justify-end">
            <Link
              href="/appointment"
              className="group inline-flex min-h-[27px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-2 text-[4.5px] font-bold uppercase tracking-wide text-slate-950 shadow-sm transition hover:-translate-y-1 hover:bg-[#33FFFF] sm:min-h-[32px] sm:px-3 sm:text-[6px] md:min-h-[42px] md:rounded-lg md:px-5 md:text-[8px] lg:min-h-[54px] lg:gap-3 lg:rounded-xl lg:px-7 lg:text-[12px]"
            >
              <CalendarDays className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[18px] lg:w-[18px]" />

              Đặt lịch tư vấn

              <ArrowRight className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[16px] lg:w-[16px]" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}