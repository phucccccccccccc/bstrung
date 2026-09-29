import Link from "next/link";

import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bone,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Cpu,
  Gauge,
  HeartPulse,
  Quote,
  ScanLine,
  ShieldCheck,
  Smile,
  Stethoscope,
  Waypoints,
} from "lucide-react";

const symptoms = [
  {
    number: "01",
    icon: Activity,
    title: "Tiếng kêu khi há hoặc nhai",
    description:
      "Khớp hàm có thể phát ra tiếng khi há miệng, ngáp hoặc nhai và đôi khi đi kèm cảm giác hàm di chuyển lệch.",
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "Mỏi hàm hoặc căng cơ",
    description:
      "Cảm giác căng vùng cơ nhai hoặc thái dương có thể xuất hiện vào buổi sáng hoặc sau thời gian nhai kéo dài.",
  },
  {
    number: "03",
    icon: Smile,
    title: "Răng mòn hoặc thay đổi hình thể",
    description:
      "Mặt nhai bị mòn, răng ngắn dần hoặc thay đổi tương quan cắn là những dấu hiệu cần được đánh giá trực tiếp.",
  },
  {
    number: "04",
    icon: Bone,
    title: "Cảm giác cắn không ổn định",
    description:
      "Một số người cảm thấy hai hàm khó tìm được vị trí cắn thoải mái hoặc có hiện tượng cắn sâu, cắn hở hay lệch.",
  },
];

const process = [
  {
    number: "01",
    title: "Ghi nhận chuyển động hàm",
    description:
      "Thu thập dữ liệu chuyển động của hàm dưới và tương quan giữa hai hàm để phục vụ quá trình phân tích chức năng.",
    goal:
      "Mô phỏng chuyển động hàm dựa trên dữ liệu thực tế của bệnh nhân.",
  },
  {
    number: "02",
    title: "Phân tích lực cắn",
    description:
      "Đánh giá trình tự tiếp xúc và phân bố lực giữa các vùng răng nhằm phát hiện các vị trí chịu tải bất thường.",
    goal:
      "Hỗ trợ cân chỉnh tiếp xúc khớp cắn phù hợp với từng trường hợp.",
  },
  {
    number: "03",
    title: "Đánh giá hình ảnh khớp thái dương hàm",
    description:
      "Khi cần thiết, dữ liệu hình ảnh được sử dụng để đánh giá cấu trúc xương và tương quan vùng khớp.",
    goal:
      "Bổ sung dữ liệu giải phẫu vào kế hoạch chẩn đoán.",
  },
  {
    number: "04",
    title: "Ổn định cơ và vị trí hàm",
    description:
      "Một số trường hợp có thể được chỉ định khí cụ hoặc giai đoạn điều trị thử nhằm theo dõi đáp ứng trước khi phục hình cố định.",
    goal:
      "Tạo điều kiện đánh giá sự thích nghi của hệ cơ - khớp.",
  },
  {
    number: "05",
    title: "Phục hồi hình thể và chức năng",
    description:
      "Tùy tình trạng, kế hoạch có thể kết hợp Onlay, Overlay, Veneer, mão hoặc các phương án phục hình khác.",
    goal:
      "Khôi phục chức năng nhai và hình thể phù hợp với kế hoạch cá nhân hóa.",
  },
];

const technologies = [
  {
    icon: Gauge,
    title: "Phân tích lực cắn kỹ thuật số",
    description:
      "Hỗ trợ ghi nhận thời điểm tiếp xúc và phân bố lực giữa các vùng răng trong quá trình cắn.",
  },
  {
    icon: Waypoints,
    title: "Theo dõi chuyển động hàm",
    description:
      "Dữ liệu chuyển động hàm giúp bổ sung thông tin cho quá trình phân tích chức năng và thiết kế phục hình.",
  },
  {
    icon: ScanLine,
    title: "Hình ảnh 3D & dữ liệu số",
    description:
      "Có thể kết hợp dữ liệu hình ảnh, scan và phần mềm mô phỏng khi cần thiết cho từng trường hợp lâm sàng.",
  },
];

const faqs = [
  {
    question: "Tái thiết khớp cắn có làm thay đổi cách phát âm không?",
    answer:
      "Khả năng thích nghi phụ thuộc vào mức độ thay đổi hình thể và tương quan hai hàm. Nếu cần thay đổi lớn, bác sĩ có thể sử dụng giai đoạn thử nghiệm trước khi hoàn tất phục hình cố định.",
  },
  {
    question:
      "Thời gian điều trị tái thiết khớp cắn thường kéo dài bao lâu?",
    answer:
      "Thời gian phụ thuộc vào tình trạng cơ, khớp, mức độ mòn răng và phạm vi phục hình. Sau khi thăm khám và thu thập dữ liệu, bác sĩ mới có thể đưa ra lộ trình phù hợp.",
  },
  {
    question: "Vì sao làm răng thẩm mỹ vẫn cần kiểm tra khớp cắn?",
    answer:
      "Phục hình không chỉ cần đẹp mà còn phải hoạt động trong hệ thống nhai. Việc đánh giá khớp cắn giúp bác sĩ xem xét các tiếp xúc, hướng vận động hàm và tải lực trước khi lập kế hoạch.",
  },
  {
    question: "Chi phí điều trị khớp cắn được xác định như thế nào?",
    answer:
      "Chi phí phụ thuộc vào phạm vi chẩn đoán, khí cụ nếu có, số lượng răng cần phục hình và kỹ thuật được lựa chọn. Bảng chi phí nên được trao đổi sau khi có kế hoạch điều trị cụ thể.",
  },
];

export default function BiteReconstructionPage() {
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
              Tái thiết khớp cắn & TMJ
            </span>
          </div>

          <div className="rounded-full bg-[#CCFFFF]/55 px-1.5 py-0.5 text-[3.5px] font-bold uppercase tracking-[0.06em] text-cyan-900 sm:px-2 sm:text-[5px] md:text-[6px] lg:px-3 lg:py-1.5 lg:text-[9px] lg:tracking-[0.12em]">
            Phân tích chức năng • Khớp cắn • TMJ
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#F8FFFF] via-[#EEFFFF]/40 to-white px-2 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4 md:px-6 lg:px-10 lg:pb-8 lg:pt-7">
        <div className="pointer-events-none absolute -left-8 top-0 h-[130px] w-[130px] rounded-full bg-[#CCFFFF]/30 blur-[45px] sm:h-[220px] sm:w-[220px] sm:blur-[70px] lg:-left-20 lg:h-[360px] lg:w-[360px] lg:blur-[100px]" />

        <div className="pointer-events-none absolute right-[8%] top-0 h-[120px] w-[120px] rounded-full bg-[#99FFFF]/20 blur-[45px] sm:h-[210px] sm:w-[210px] sm:blur-[70px] lg:h-[340px] lg:w-[340px] lg:blur-[100px]" />

        {/* LUÔN 7/12 + 5/12 */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 items-center gap-2 sm:gap-4 md:gap-5 lg:gap-7">
          {/* LEFT */}
          <div className="col-span-7 space-y-1.5 sm:space-y-2.5 lg:space-y-4">
            <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF] bg-white px-1.5 py-1 text-[4px] font-bold uppercase tracking-[0.07em] text-cyan-800 shadow-sm sm:px-2 sm:text-[6px] md:text-[7px] lg:gap-2 lg:px-3 lg:py-1.5 lg:text-[9px] lg:tracking-[0.14em]">
              <Activity className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] lg:h-[13px] lg:w-[13px]" />

              Sinh cơ học khớp cắn & chức năng TMJ
            </div>

            <h1 className="max-w-[720px] text-[15px] font-extrabold leading-[1.04] tracking-[-0.04em] text-slate-950 min-[430px]:text-[18px] sm:text-[24px] md:text-[32px] lg:text-[44px]">
              Tái thiết toàn hàm &{" "}
              <span className="relative inline-block text-cyan-900">
                khớp cắn

                <span className="absolute -bottom-[2px] left-0 h-[1px] w-full rounded-full bg-[#00FFFF] sm:h-[2px] lg:-bottom-1 lg:h-[3px]" />
              </span>
            </h1>

            <p className="max-w-2xl text-[5.5px] leading-[9px] text-slate-600 min-[430px]:text-[6.5px] min-[430px]:leading-[11px] sm:text-[8px] sm:leading-[14px] md:text-[10px] md:leading-5 lg:text-[14px] lg:leading-6">
              Phân tích tương quan hai hàm, chuyển động khớp, lực cắn và
              hình thể răng để xây dựng kế hoạch phục hồi chức năng phù
              hợp với từng trường hợp.
            </p>

            {/* METRICS - LUÔN 3 CỘT */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-2.5">
              {[
                {
                  icon: ScanLine,
                  title: "Dữ liệu số",
                  text: "Hỗ trợ phân tích chuyển động và tiếp xúc cắn",
                },
                {
                  icon: Activity,
                  title: "Chức năng",
                  text: "Đánh giá cơ, khớp và hệ thống nhai",
                },
                {
                  icon: ShieldCheck,
                  title: "Cá nhân hóa",
                  text: "Phác đồ dựa trên tình trạng thực tế",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-md border border-slate-100 bg-white p-1.5 shadow-sm sm:rounded-lg sm:p-2 md:p-2.5 lg:rounded-xl lg:p-3.5"
                  >
                    <Icon className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[13px] md:w-[13px] lg:h-[17px] lg:w-[17px]" />

                    <div className="mt-1 text-[3.5px] font-bold uppercase tracking-wide text-slate-800 sm:text-[5px] md:text-[7px] lg:mt-2 lg:text-[10px]">
                      {item.title}
                    </div>

                    <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:text-[6px] lg:mt-1 lg:text-[9px] lg:leading-4">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* BUTTONS - LUÔN NGANG */}
            <div className="flex flex-row gap-1 pt-0.5 sm:gap-2 lg:gap-3 lg:pt-1">
              <Link
                href="/appointment"
                className="group inline-flex min-h-[24px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-2 text-[4.5px] font-bold uppercase tracking-wide text-slate-950 shadow-sm transition hover:-translate-y-1 hover:bg-[#33FFFF] sm:min-h-[30px] sm:rounded-lg sm:px-3 sm:text-[6px] md:min-h-[36px] md:px-4 md:text-[8px] lg:min-h-[44px] lg:gap-2 lg:rounded-xl lg:px-5 lg:text-[11px]"
              >
                <CalendarDays className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />

                Đặt lịch đánh giá

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

              <div className="relative rounded-[9px] border border-white bg-white p-1.5 shadow-[0_10px_25px_rgba(0,105,107,0.10)] sm:rounded-[13px] sm:p-2 md:rounded-[16px] md:p-3 lg:rounded-[20px] lg:p-4 lg:shadow-[0_20px_50px_rgba(0,105,107,0.12)]">
                <div className="flex items-center justify-between rounded-md bg-[#F3FFFF] p-1 sm:rounded-lg sm:p-1.5 lg:rounded-xl lg:p-3">
                  <div className="flex items-center gap-1 lg:gap-2">
                    <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-500 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2" />

                    <span className="text-[3px] font-bold uppercase tracking-[0.06em] text-slate-700 sm:text-[5px] md:text-[6px] lg:text-[9px] lg:tracking-[0.12em]">
                      TMJ / Bite Analysis
                    </span>
                  </div>

                  <Cpu className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] lg:h-[16px] lg:w-[16px]" />
                </div>

                <div className="relative mt-1 aspect-[4/3] overflow-hidden rounded-md bg-slate-100 sm:mt-2 sm:rounded-lg lg:mt-3 lg:rounded-xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxXUvEa3ZfzV_t52bQI9lStl_DQqxbq29j3BPtZPmXX_LpOdCsWz8-PCdwy-frShXJol0PuiDcu4zp2I1_etxpzkI2SEN5s3wVm0t43xtoM7H887O04albtF6Fern0v4ByJ8y7BqCgdqD0JyDAdK09tpUw-LRvLmaNH651tCdHiB11OgpSuzj-x47aQ011XONwMx4oYtnnSSLuev6yPoA2JfWDEqs_HlXM7JZD_rqicK2kA0N1moQtpg"
                    alt="Mô phỏng khớp thái dương hàm"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

                  <div className="absolute bottom-1 left-1 right-1 rounded bg-white/95 p-1 backdrop-blur sm:bottom-2 sm:left-2 sm:right-2 sm:rounded-md sm:p-1.5 lg:bottom-3 lg:left-3 lg:right-3 lg:rounded-lg lg:p-3">
                    <div className="text-[3px] font-bold uppercase tracking-wide text-cyan-700 sm:text-[5px] md:text-[6px] lg:text-[8px]">
                      Phân tích chức năng
                    </div>

                    <div className="mt-0.5 text-[4px] font-semibold text-slate-900 sm:text-[6px] md:text-[8px] lg:mt-1 lg:text-[11px]">
                      Kết hợp dữ liệu cơ - khớp - răng trong kế hoạch điều trị
                    </div>
                  </div>
                </div>

                {/* LUÔN 2 CỘT */}
                <div className="mt-1 grid grid-cols-2 gap-1 sm:mt-2 sm:gap-1.5 lg:mt-3 lg:gap-2">
                  {[
                    ["Bên trái", "50%"],
                    ["Bên phải", "50%"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded bg-[#F8FFFF] p-1 sm:rounded-md sm:p-1.5 lg:rounded-lg lg:p-3"
                    >
                      <div className="flex items-center justify-between text-[3px] sm:text-[5px] lg:text-[9px]">
                        <span className="text-slate-500">{label}</span>
                        <span className="font-bold text-slate-900">
                          {value}
                        </span>
                      </div>

                      <div className="mt-1 h-[2px] overflow-hidden rounded-full bg-slate-100 sm:h-1 lg:mt-2 lg:h-1.5">
                        <div className="h-full w-1/2 rounded-full bg-[#00CED1]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUB NAV */}
      <div className="sticky top-[64px] z-30 border-b border-slate-100 bg-white/95 backdrop-blur xl:top-[78px]">
        <div className="mx-auto flex max-w-7xl justify-center gap-2 overflow-x-auto px-2 py-2 text-[4px] font-bold uppercase tracking-wide text-slate-500 sm:gap-3 sm:px-4 sm:text-[6px] md:gap-4 md:px-6 md:text-[8px] lg:gap-6 lg:px-10 lg:py-3 lg:text-[10px]">
          <a href="#ban-chat" className="shrink-0 hover:text-cyan-800">
            01. Bản chất
          </a>

          <a href="#dau-hieu" className="shrink-0 hover:text-cyan-800">
            02. Dấu hiệu
          </a>

          <a href="#quy-trinh" className="shrink-0 hover:text-cyan-800">
            03. Quy trình
          </a>

          <a href="#cong-nghe" className="shrink-0 hover:text-cyan-800">
            04. Công nghệ
          </a>

          <a
            href="#clinical-cases"
            className="shrink-0 hover:text-cyan-800"
          >
            05. Ca điều trị
          </a>

          <a href="#faq" className="shrink-0 hover:text-cyan-800">
            06. Hỏi đáp
          </a>
        </div>
      </div>

      {/* SECTION 01 */}
      <section
        id="ban-chat"
        className="bg-[#F7FDFD] px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        {/* LUÔN 6/12 + 6/12 */}
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <div className="col-span-6 space-y-2 sm:space-y-3 lg:space-y-4">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              01 // Sinh cơ học
            </div>

            <h2 className="text-[13px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[15px] sm:text-[20px] md:text-[27px] lg:text-[38px]">
              Sai lệch khớp cắn có thể ảnh hưởng đến toàn bộ hệ thống nhai
            </h2>

            <p className="text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:text-[8px] md:leading-4 lg:text-[13px] lg:leading-7">
              Khớp cắn liên quan đến răng, cơ nhai và chuyển động của hàm
              dưới. Khi các thành phần này hoạt động không hài hòa, bệnh
              nhân có thể xuất hiện các triệu chứng cần được đánh giá
              chuyên môn.
            </p>

            <div className="rounded-md border border-[#CCFFFF] bg-white p-2 sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-5">
              <Quote className="h-[8px] w-[8px] text-cyan-700 sm:h-[11px] sm:w-[11px] md:h-[15px] md:w-[15px] lg:h-[22px] lg:w-[22px]" />

              <blockquote className="mt-1.5 text-[5px] font-semibold italic leading-[8px] text-slate-900 sm:text-[7px] sm:leading-3 md:mt-2 md:text-[10px] md:leading-5 lg:mt-3 lg:text-[15px] lg:leading-7">
                “Phục hình cần được xây dựng trên nền tảng chức năng phù
                hợp với từng bệnh nhân, thay vì chỉ tập trung vào hình thể
                bên ngoài.”
              </blockquote>

              <div className="mt-2 border-t border-slate-100 pt-2 text-[4px] font-bold text-slate-800 sm:text-[5px] md:text-[7px] lg:mt-4 lg:pt-4 lg:text-[11px]">
                BÁC SĨ TRUNG
              </div>
            </div>
          </div>

          {/* 4 CARD - LUÔN 2x2 */}
          <div className="col-span-6 grid grid-cols-2 gap-1 sm:gap-2 md:gap-3">
            {[
              {
                icon: Smile,
                title: "Thay đổi hình thể răng",
                text:
                  "Mòn mặt nhai hoặc mất răng có thể làm thay đổi tương quan giữa hai hàm.",
              },
              {
                icon: Activity,
                title: "Khớp phát tiếng",
                text:
                  "Một số bệnh nhân nhận thấy tiếng kêu hoặc cảm giác bất thường khi vận động hàm.",
              },
              {
                icon: HeartPulse,
                title: "Căng cơ nhai",
                text:
                  "Co thắt hoặc quá tải cơ có thể gây cảm giác mỏi vùng hàm và thái dương.",
              },
              {
                icon: Bone,
                title: "Thay đổi chức năng",
                text:
                  "Khả năng nhai và vị trí cắn thoải mái có thể bị ảnh hưởng tùy tình trạng.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-md border border-slate-100 bg-white p-1.5 shadow-sm transition hover:-translate-y-1 hover:border-[#66FFFF] sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-3.5 lg:rounded-2xl lg:p-5"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded bg-[#EEFFFF] sm:h-7 sm:w-7 sm:rounded-md md:h-8 md:w-8 lg:h-10 lg:w-10 lg:rounded-xl">
                    <Icon className="h-[8px] w-[8px] text-cyan-700 sm:h-[11px] sm:w-[11px] md:h-[14px] md:w-[14px] lg:h-[19px] lg:w-[19px]" />
                  </div>

                  <h3 className="mt-1.5 text-[5px] font-bold leading-[7px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:mt-2 md:text-[10px] md:leading-4 lg:mt-4 lg:text-[14px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:text-[6px] md:leading-3 lg:mt-2 lg:text-[11px] lg:leading-5">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 02 */}
      <section
        id="dau-hieu"
        className="bg-white px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              02 // Dấu hiệu
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              Khi nào nên kiểm tra khớp cắn?
            </h2>

            <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] sm:leading-3 md:text-[9px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
              Các biểu hiện dưới đây không tự xác định chẩn đoán nhưng có
              thể là lý do để bạn trao đổi trực tiếp với bác sĩ.
            </p>
          </div>

          {/* LUÔN 4 CỘT */}
          <div className="mt-4 grid grid-cols-4 gap-1 sm:mt-5 sm:gap-2 md:mt-6 md:gap-3 lg:mt-8 lg:gap-4">
            {symptoms.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="flex flex-col rounded-md border border-slate-100 bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-3.5 lg:rounded-2xl lg:p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-white sm:h-7 sm:w-7 sm:rounded-md md:h-9 md:w-9 lg:h-10 lg:w-10 lg:rounded-xl">
                      <Icon className="h-[8px] w-[8px] text-cyan-700 sm:h-[11px] sm:w-[11px] md:h-[15px] md:w-[15px] lg:h-[19px] lg:w-[19px]" />
                    </div>

                    <span className="text-[4px] font-bold text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[11px]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-2 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:mt-3 md:text-[10px] md:leading-4 lg:mt-5 lg:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[3.5px] leading-[6px] text-slate-500 sm:text-[4.5px] sm:leading-[8px] md:mt-2 md:text-[6px] md:leading-3 lg:mt-3 lg:text-[11px] lg:leading-5">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center gap-1 pt-2 text-[3px] font-semibold text-slate-500 sm:text-[4.5px] md:pt-3 md:text-[6px] lg:gap-2 lg:pt-4 lg:text-[9px]">
                    <CircleAlert className="h-[5px] w-[5px] shrink-0 text-cyan-700 sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:h-[13px] lg:w-[13px]" />

                    Cần đánh giá trực tiếp nếu kéo dài
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03 */}
      <section
        id="quy-trinh"
        className="border-y border-slate-100 bg-[#F7FDFD] px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              03 // Quy trình
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              Quy trình đánh giá & tái thiết khớp cắn
            </h2>
          </div>

          <div className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2 md:mt-6 md:space-y-2.5 lg:mt-8 lg:space-y-3">
            {process.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-12 items-center gap-1.5 rounded-md border border-slate-100 bg-white p-1.5 sm:gap-2 sm:rounded-lg sm:p-2.5 md:gap-3 md:rounded-xl md:p-3.5 lg:gap-4 lg:rounded-2xl lg:p-5"
              >
                {/* 2/12 */}
                <div className="col-span-2">
                  <div className="text-[11px] font-extrabold text-cyan-700 sm:text-[15px] md:text-[20px] lg:text-[28px]">
                    {item.number}
                  </div>

                  <div className="text-[3px] font-bold uppercase tracking-wide text-slate-400 sm:text-[4px] md:text-[5px] lg:text-[8px]">
                    Giai đoạn
                  </div>
                </div>

                {/* 5/12 */}
                <div className="col-span-5">
                  <h3 className="text-[5px] font-bold leading-[7px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:text-[10px] md:leading-4 lg:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:mt-1 md:text-[6px] md:leading-3 lg:mt-2 lg:text-[11px] lg:leading-5">
                    {item.description}
                  </p>
                </div>

                {/* 5/12 */}
                <div className="col-span-5 rounded bg-[#F8FFFF] p-1 sm:rounded-md sm:p-1.5 md:rounded-lg md:p-2.5 lg:rounded-xl lg:p-4">
                  <div className="text-[3px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[4px] md:text-[5px] lg:text-[8px]">
                    Mục tiêu
                  </div>

                  <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] sm:leading-[8px] md:mt-1 md:text-[6px] md:leading-3 lg:mt-2 lg:text-[11px] lg:leading-5">
                    {item.goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 */}
      <section
        id="cong-nghe"
        className="bg-white px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              04 // Công nghệ hỗ trợ
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              Dữ liệu hỗ trợ chẩn đoán & lập kế hoạch
            </h2>

            <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] sm:leading-3 md:text-[9px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
              Trang thiết bị chỉ là công cụ hỗ trợ. Việc lựa chọn xét
              nghiệm hoặc thiết bị phụ thuộc vào tình trạng lâm sàng của
              từng bệnh nhân.
            </p>
          </div>

          {/* LUÔN 3 CỘT */}
          <div className="mt-4 grid grid-cols-3 gap-1 sm:mt-5 sm:gap-2 md:mt-6 md:gap-3 lg:mt-8 lg:gap-5">
            {technologies.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-md border border-slate-100 bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded bg-white sm:h-7 sm:w-7 sm:rounded-md md:h-9 md:w-9 lg:h-11 lg:w-11 lg:rounded-xl">
                    <Icon className="h-[8px] w-[8px] text-cyan-700 sm:h-[11px] sm:w-[11px] md:h-[15px] md:w-[15px] lg:h-[21px] lg:w-[21px]" />
                  </div>

                  <h3 className="mt-2 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:mt-3 md:text-[10px] md:leading-4 lg:mt-5 lg:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[12px] lg:leading-6">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 05 */}
      <section
        id="clinical-cases"
        className="border-y border-slate-100 bg-[#F7FDFD] px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          {/* TITLE LUÔN NGANG */}
          <div className="flex flex-row items-end justify-between gap-2">
            <div>
              <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
                05 // Ca lâm sàng
              </div>

              <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
                Hồ sơ tái thiết khớp cắn
              </h2>
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
                    Hồ sơ #{caseNumber === 1 ? "BR-01" : "BR-02"}
                  </span>

                  <BadgeCheck className="h-[7px] w-[7px] text-cyan-700 sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[17px] lg:w-[17px]" />
                </div>

                <h3 className="mt-1 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:text-[10px] md:leading-4 lg:mt-2 lg:text-[15px]">
                  {caseNumber === 1
                    ? "Phục hồi răng mòn và tái lập tương quan cắn"
                    : "Ổn định chức năng trước phục hình thẩm mỹ"}
                </h3>

                {/* BEFORE / AFTER LUÔN 2 CỘT */}
                <div className="mt-2 grid grid-cols-2 gap-1 sm:mt-3 sm:gap-2 lg:mt-4 lg:gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded bg-slate-200 sm:rounded-md md:rounded-lg lg:rounded-xl">
                    <img
                      src={`/images/specialties/bite-case-${caseNumber}-before.jpg`}
                      alt="Trước điều trị"
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute bottom-1 left-1 rounded bg-slate-950/80 px-1 py-0.5 text-[3px] font-bold uppercase text-white sm:text-[4px] md:bottom-2 md:left-2 md:text-[6px] lg:rounded-md lg:px-2 lg:py-1 lg:text-[8px]">
                      Trước
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded bg-slate-200 sm:rounded-md md:rounded-lg lg:rounded-xl">
                    <img
                      src={`/images/specialties/bite-case-${caseNumber}-after.jpg`}
                      alt="Sau điều trị"
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute bottom-1 left-1 rounded bg-[#00FFFF] px-1 py-0.5 text-[3px] font-bold uppercase text-slate-950 sm:text-[4px] md:bottom-2 md:left-2 md:text-[6px] lg:rounded-md lg:px-2 lg:py-1 lg:text-[8px]">
                      Sau
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:mt-3 md:text-[7px] md:leading-3 lg:mt-4 lg:text-[11px] lg:leading-5">
                  Hình ảnh ca điều trị chỉ nên sử dụng khi đã có sự đồng ý
                  phù hợp của bệnh nhân. Kết quả có thể khác nhau giữa từng
                  trường hợp.
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
        {/* LUÔN 4/12 + 8/12 */}
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <div className="col-span-4">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              06 // Hỏi đáp
            </div>

            <h2 className="mt-1 text-[13px] font-extrabold text-slate-950 min-[430px]:text-[15px] sm:text-[20px] md:text-[26px] lg:mt-3 lg:text-3xl">
              Bác sĩ Trung giải đáp
            </h2>

            <p className="mt-1.5 text-[4px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:mt-2 md:text-[8px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
              Các thông tin dưới đây mang tính tham khảo. Chẩn đoán cụ thể
              cần dựa trên thăm khám trực tiếp.
            </p>

            <Link
              href="/appointment"
              className="mt-2 inline-flex items-center gap-1 rounded-md bg-[#F0FFFF] px-1.5 py-1 text-[3.5px] font-bold uppercase text-cyan-800 sm:mt-3 sm:text-[5px] md:gap-1.5 md:px-2.5 md:py-1.5 md:text-[7px] lg:mt-6 lg:gap-2 lg:rounded-xl lg:px-4 lg:py-3 lg:text-[10px]"
            >
              <Stethoscope className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[15px] lg:w-[15px]" />

              Đặt lịch kiểm tra
            </Link>
          </div>

          <div className="col-span-8 space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-md border border-slate-100 bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-[5px] font-bold text-slate-900 sm:text-[7px] md:text-[10px] lg:gap-5 lg:text-[14px]">
                  {item.question}

                  <span className="text-[10px] text-cyan-700 transition-transform group-open:rotate-45 sm:text-sm md:text-base lg:text-xl">
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

        <div className="relative z-10 mx-auto max-w-4xl rounded-lg border border-[#CCFFFF] bg-white p-4 text-center shadow-[0_8px_25px_rgba(0,180,180,0.06)] sm:rounded-xl sm:p-5 md:rounded-2xl md:p-6 lg:rounded-[26px] lg:p-8 lg:shadow-[0_18px_50px_rgba(0,180,180,0.08)]">
          <CheckCircle2 className="mx-auto h-[9px] w-[9px] text-cyan-700 sm:h-[12px] sm:w-[12px] md:h-[16px] md:w-[16px] lg:h-[23px] lg:w-[23px]" />

          <div className="mt-1.5 text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:mt-2 md:text-[8px] lg:mt-4 lg:text-[10px] lg:tracking-[0.15em]">
            Đánh giá cá nhân hóa
          </div>

          <h2 className="mx-auto mt-1 max-w-2xl text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[27px] lg:mt-3 lg:text-3xl">
            Bạn đang gặp vấn đề về khớp cắn hoặc TMJ?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:text-[8px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
            Đặt lịch để Bác sĩ Trung trực tiếp đánh giá tình trạng và trao
            đổi hướng xử lý phù hợp.
          </p>

          <Link
            href="/appointment"
            className="group mx-auto mt-3 inline-flex min-h-[26px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-3 text-[4px] font-bold uppercase tracking-wide text-slate-950 transition hover:-translate-y-1 hover:bg-[#33FFFF] sm:min-h-[32px] sm:px-4 sm:text-[6px] md:mt-4 md:min-h-[40px] md:rounded-lg md:px-5 md:text-[8px] lg:mt-7 lg:min-h-[46px] lg:gap-2 lg:rounded-xl lg:px-7 lg:text-[11px]"
          >
            <CalendarDays className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />

            Đặt lịch với Bác sĩ Trung

            <ArrowRight className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />
          </Link>
        </div>
      </section>
    </main>
  );
}