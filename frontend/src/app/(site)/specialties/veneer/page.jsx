import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Gem,
  Microscope,
  Palette,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const candidates = [
  {
    icon: Palette,
    title: "Răng đổi màu khó cải thiện",
    description:
      "Một số trường hợp răng đổi màu sâu hoặc màu sắc không đồng đều có thể cần đánh giá thêm các phương án phục hình thẩm mỹ.",
    label: "Đánh giá màu sắc & men răng",
  },
  {
    icon: Smile,
    title: "Răng thưa hoặc hình thể nhỏ",
    description:
      "Khe thưa nhẹ, răng nhỏ hoặc hình thể chưa hài hòa có thể được cân nhắc phục hình sau khi kiểm tra khớp cắn.",
    label: "Điều chỉnh hình thể",
  },
  {
    icon: Gem,
    title: "Rìa cắn mẻ hoặc không đều",
    description:
      "Một số tổn thương nhẹ ở vùng răng trước có thể cần phục hồi để cải thiện hình thể và chức năng.",
    label: "Phục hồi hình thể",
  },
  {
    icon: Sparkles,
    title: "Thiết kế nụ cười cá nhân hóa",
    description:
      "Phân tích tỷ lệ khuôn mặt, đường cười và mô nướu trước khi lựa chọn hình thể và màu sắc phục hình.",
    label: "Smile Design",
  },
];

const process = [
  {
    number: "01",
    icon: ScanLine,
    title: "Quét 3D & phân tích nụ cười",
    description:
      "Thu thập dữ liệu răng, cung hàm, hình ảnh khuôn mặt và các yếu tố liên quan để xây dựng kế hoạch.",
    note: "Thu thập dữ liệu kỹ thuật số",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Thiết kế DSD & Mock-up",
    description:
      "Mô phỏng định hướng hình thể và tỷ lệ nụ cười để bác sĩ và bệnh nhân cùng trao đổi trước điều trị.",
    note: "Thử định hướng trước khi phục hình",
  },
  {
    number: "03",
    icon: Microscope,
    title: "Chuẩn bị bề mặt răng",
    description:
      "Mức độ xử lý phụ thuộc vào cấu trúc răng, vị trí răng, khớp cắn và kế hoạch phục hình cụ thể.",
    note: "Ưu tiên bảo tồn mô răng",
  },
  {
    number: "04",
    icon: Gem,
    title: "Chế tác & gắn phục hình",
    description:
      "Kiểm tra hình thể, màu sắc, độ khít và khớp cắn trước khi hoàn tất quá trình gắn phục hình.",
    note: "Kiểm tra trước khi hoàn tất",
  },
];

const materials = [
  {
    title: "Lithium Disilicate",
    brand: "IPS e.max",
    description:
      "Dòng vật liệu sứ thủy tinh thường được sử dụng trong nha khoa phục hình nhờ tính thẩm mỹ và đặc tính cơ học phù hợp với nhiều chỉ định.",
    specs: [
      ["Đặc điểm", "Sứ thủy tinh"],
      ["Ứng dụng", "Veneer / phục hình"],
    ],
    note:
      "Việc lựa chọn vật liệu phụ thuộc vào màu nền răng, vị trí răng và yêu cầu lâm sàng.",
  },
  {
    title: "Feldspathic Veneer",
    brand: "Layered Ceramic",
    description:
      "Kỹ thuật đắp lớp có thể tạo hiệu ứng màu sắc và độ trong tự nhiên, đặc biệt trong các trường hợp yêu cầu kiểm soát thẩm mỹ cao.",
    specs: [
      ["Đặc điểm", "Đắp lớp"],
      ["Ưu tiên", "Hiệu ứng quang học"],
    ],
    note:
      "Không phải trường hợp nào cũng phù hợp với cùng một loại vật liệu hoặc cùng một độ mỏng.",
  },
];

const cases = [
  {
    code: "V-108",
    tag: "Veneer thẩm mỹ",
    title: "Điều chỉnh màu sắc & hình thể vùng răng trước",
    image: "/images/specialties/veneer-case-1.jpg",
    description:
      "Ca minh họa cho quá trình phân tích màu răng, hình thể và đường cười trước khi xây dựng kế hoạch phục hình.",
  },
  {
    code: "V-204",
    tag: "Phục hồi khe thưa",
    title: "Điều chỉnh khe thưa & rìa cắn",
    image: "/images/specialties/veneer-case-2.jpg",
    description:
      "Kế hoạch tập trung vào hình thể răng, khoảng trống giữa các răng và sự hài hòa với tổng thể nụ cười.",
  },
];

const faqs = [
  {
    question: "Làm Veneer có phải mài răng nhiều như bọc mão không?",
    answer:
      "Không thể áp dụng một mức độ chuẩn bị giống nhau cho tất cả bệnh nhân. Veneer thường tập trung ở mặt ngoài của răng, nhưng mức độ xử lý phụ thuộc vào hình thể răng, màu nền, vị trí răng và khớp cắn. Một số trường hợp có thể cần can thiệp ít hơn, trong khi trường hợp khác cần chuẩn bị nhiều hơn để đạt kết quả phù hợp.",
  },
  {
    question: "Veneer có dễ bong hoặc nứt không?",
    answer:
      "Độ bền phụ thuộc vào chỉ định, vật liệu, kỹ thuật gắn, lượng men răng còn lại, khớp cắn và thói quen sử dụng. Vì vậy cần đánh giá chức năng nhai và hướng dẫn chăm sóc sau điều trị.",
  },
  {
    question: "Veneer sử dụng được bao lâu?",
    answer:
      "Không có một mốc thời gian giống nhau cho tất cả trường hợp. Tuổi thọ phục hình chịu ảnh hưởng bởi vật liệu, kỹ thuật, khớp cắn, vệ sinh răng miệng, thói quen ăn nhai và việc tái khám định kỳ.",
  },
  {
    question: "Veneer có bị đổi màu theo thời gian không?",
    answer:
      "Bề mặt sứ thường ổn định màu tốt hơn một số vật liệu nhựa, nhưng vùng tiếp giáp, răng thật và mô nướu vẫn cần được chăm sóc và theo dõi định kỳ.",
  },
];

export default function VeneerPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-700">
      {/* BREADCRUMB */}
      <section className="border-b border-slate-100 bg-[#F8FFFF] px-2 py-2 sm:px-4 md:px-6 lg:px-10 lg:py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[4.5px] text-slate-500 sm:text-[6px] md:text-[8px] lg:gap-2 lg:text-[11px]">
            <Link href="/" className="transition hover:text-cyan-800">
              Trang chủ
            </Link>

            <ChevronRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[13px] lg:w-[13px]" />

            <Link
              href="/specialties"
              className="transition hover:text-cyan-800"
            >
              Chuyên môn
            </Link>

            <ChevronRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[13px] lg:w-[13px]" />

            <span className="font-semibold text-slate-800">
              Mặt dán sứ Veneer
            </span>
          </div>

          <div className="rounded-full bg-[#CCFFFF]/55 px-1.5 py-0.5 text-[3.5px] font-bold uppercase tracking-[0.06em] text-cyan-900 sm:px-2 sm:text-[5px] md:text-[6px] lg:px-3 lg:py-1.5 lg:text-[9px] lg:tracking-[0.12em]">
            Bảo tồn • Thẩm mỹ • Cá nhân hóa
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#F8FFFF] via-[#EEFFFF]/40 to-white px-2 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4 md:px-6 lg:px-10 lg:pb-8 lg:pt-7">
        <div className="pointer-events-none absolute left-1/2 top-[-30px] h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-[#CCFFFF]/35 blur-[55px] sm:h-[240px] sm:w-[240px] sm:blur-[75px] lg:top-[-80px] lg:h-[420px] lg:w-[420px] lg:blur-[110px]" />

        {/* LUÔN 7/12 + 5/12 */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 items-center gap-2 sm:gap-4 md:gap-5 lg:gap-7">
          {/* LEFT */}
          <div className="col-span-7 space-y-1.5 sm:space-y-2.5 lg:space-y-4">
            <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF] bg-white px-1.5 py-1 text-[4px] font-bold uppercase tracking-[0.07em] text-cyan-800 shadow-sm sm:px-2 sm:text-[6px] md:text-[7px] lg:gap-2 lg:px-3 lg:py-1.5 lg:text-[9px] lg:tracking-[0.14em]">
              <Microscope className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] lg:h-[13px] lg:w-[13px]" />

              Phục hình thẩm mỹ bảo tồn
            </div>

            <h1 className="max-w-[700px] text-[15px] font-extrabold leading-[1.04] tracking-[-0.04em] text-slate-950 min-[430px]:text-[18px] sm:text-[24px] md:text-[32px] lg:text-[44px]">
              Mặt dán sứ{" "}
              <span className="relative inline-block text-cyan-900">
                Veneer
                <span className="absolute -bottom-[2px] left-0 h-[1px] w-full rounded-full bg-[#00FFFF] sm:h-[2px] lg:-bottom-1 lg:h-[3px]" />
              </span>{" "}
              & thiết kế nụ cười
            </h1>

            <p className="max-w-2xl text-[5.5px] leading-[9px] text-slate-600 min-[430px]:text-[6.5px] min-[430px]:leading-[11px] sm:text-[8px] sm:leading-[14px] md:text-[10px] md:leading-5 lg:text-[14px] lg:leading-6">
              Bác sĩ Trung đánh giá hình thể răng, màu sắc, men răng,
              đường cười, mô nướu và khớp cắn trước khi xây dựng kế hoạch
              phục hình thẩm mỹ cho từng bệnh nhân.
            </p>

            {/* METRICS - LUÔN 3 CỘT */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-2.5">
              {[
                {
                  icon: Microscope,
                  title: "Bảo tồn",
                  text: "Ưu tiên hạn chế can thiệp không cần thiết",
                },
                {
                  icon: Sparkles,
                  title: "Cá nhân hóa",
                  text: "Thiết kế theo khuôn mặt & đường cười",
                },
                {
                  icon: Gem,
                  title: "Vật liệu",
                  text: "Lựa chọn theo chỉ định lâm sàng",
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

                    <p className="mt-0.5 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:text-[6px] md:leading-[10px] lg:mt-1 lg:text-[9px] lg:leading-4">
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

                Đặt lịch tư vấn

                <ArrowRight className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />
              </Link>

              <a
                href="#clinical-cases"
                className="inline-flex min-h-[24px] items-center justify-center rounded-md border border-slate-200 bg-white px-2 text-[4.5px] font-bold uppercase tracking-wide text-slate-800 transition hover:border-[#66FFFF] sm:min-h-[30px] sm:rounded-lg sm:px-3 sm:text-[6px] md:min-h-[36px] md:px-4 md:text-[8px] lg:min-h-[44px] lg:rounded-xl lg:px-5 lg:text-[11px]"
              >
                Xem ca Veneer
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
                    src="/images/specialties/veneer-hero.jpg"
                    alt="Mặt dán sứ Veneer"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

                  <div className="absolute bottom-1 left-1 right-1 rounded border border-white bg-white/95 p-1 shadow-md backdrop-blur sm:bottom-2 sm:left-2 sm:right-2 sm:rounded-md sm:p-1.5 lg:bottom-3 lg:left-3 lg:right-3 lg:rounded-lg lg:p-3">
                    <div className="flex items-center justify-between gap-1 lg:gap-3">
                      <div>
                        <div className="text-[3px] font-bold uppercase tracking-[0.07em] text-cyan-700 sm:text-[5px] md:text-[6px] lg:text-[8px] lg:tracking-[0.13em]">
                          Veneer Design
                        </div>

                        <div className="mt-0.5 text-[4px] font-bold text-slate-950 sm:text-[6px] md:text-[8px] lg:text-[12px]">
                          Thiết kế dựa trên cấu trúc riêng của từng nụ cười
                        </div>
                      </div>

                      <BadgeCheck className="h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[10px] sm:w-[10px] lg:h-[17px] lg:w-[17px]" />
                    </div>
                  </div>
                </div>

                {/* LUÔN 2 CỘT */}
                <div className="grid grid-cols-2 gap-1 p-1 pt-1.5 sm:gap-1.5 sm:p-1.5 sm:pt-2 lg:gap-2 lg:p-2 lg:pt-3">
                  <div className="rounded bg-[#F8FFFF] p-1 sm:rounded-md sm:p-1.5 lg:rounded-lg lg:p-3">
                    <div className="text-[3px] font-bold uppercase text-cyan-800 sm:text-[5px] lg:text-[8px]">
                      Phân tích
                    </div>

                    <div className="mt-0.5 text-[4px] font-semibold text-slate-700 sm:text-[6px] lg:mt-1 lg:text-[10px]">
                      Hình thể • màu sắc
                    </div>
                  </div>

                  <div className="rounded bg-[#F8FFFF] p-1 sm:rounded-md sm:p-1.5 lg:rounded-lg lg:p-3">
                    <div className="text-[3px] font-bold uppercase text-cyan-800 sm:text-[5px] lg:text-[8px]">
                      Kiểm tra
                    </div>

                    <div className="mt-0.5 text-[4px] font-semibold text-slate-700 sm:text-[6px] lg:mt-1 lg:text-[10px]">
                      Men răng • khớp cắn
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
          <a href="#philosophy" className="shrink-0 hover:text-cyan-800">
            01. Triết lý
          </a>

          <a href="#candidates" className="shrink-0 hover:text-cyan-800">
            02. Chỉ định
          </a>

          <a href="#workflow" className="shrink-0 hover:text-cyan-800">
            03. Quy trình
          </a>

          <a href="#materials" className="shrink-0 hover:text-cyan-800">
            04. Vật liệu
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

      {/* PHILOSOPHY */}
      <section
        id="philosophy"
        className="bg-[#F7FDFD] px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              01 // Triết lý điều trị
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              Ưu tiên bảo tồn cấu trúc răng thật
            </h2>

            <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] sm:leading-3 md:text-[9px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-7">
              Bất kỳ phương án phục hình nào cũng cần cân nhắc lượng mô
              răng cần can thiệp, tình trạng men răng và lợi ích lâu dài
              trước khi thực hiện.
            </p>
          </div>

          {/* LUÔN 2 CỘT */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3 md:mt-6 md:gap-4 lg:mt-8 lg:gap-5">
            {/* CROWN */}
            <div className="rounded-md border border-slate-100 bg-white p-2 shadow-sm sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-rose-50 px-1.5 py-0.5 text-[3.5px] font-bold uppercase tracking-wide text-rose-700 sm:text-[5px] md:px-2 md:text-[6px] lg:px-3 lg:py-1.5 lg:text-[9px]">
                  Phục hình toàn phần
                </span>

                <ShieldCheck className="h-[7px] w-[7px] text-slate-400 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[21px] lg:w-[21px]" />
              </div>

              <h3 className="mt-2 text-[7px] font-bold leading-[10px] text-slate-950 sm:text-[10px] sm:leading-4 md:mt-3 md:text-[13px] md:leading-5 lg:mt-5 lg:text-xl">
                Mức độ can thiệp phụ thuộc vào chỉ định
              </h3>

              <p className="mt-1 text-[4px] leading-[7px] text-slate-600 sm:text-[5px] sm:leading-[9px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[12px] lg:leading-6">
                Mão toàn phần và Veneer là hai hướng phục hình khác nhau.
                Việc lựa chọn phải dựa trên tình trạng răng, mô răng còn
                lại, màu nền, khớp cắn và mục tiêu điều trị.
              </p>

              <div className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5 md:mt-4 md:space-y-2 lg:mt-5 lg:space-y-3">
                {[
                  "Đánh giá lượng mô răng còn lại",
                  "Kiểm tra tình trạng tủy và mô quanh răng",
                  "Không lựa chọn kỹ thuật chỉ dựa trên thẩm mỹ",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1 text-[3.5px] text-slate-600 sm:text-[5px] md:gap-1.5 md:text-[7px] lg:gap-3 lg:text-[11px]"
                  >
                    <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-slate-100 sm:h-4 sm:w-4 lg:h-5 lg:w-5">
                      <Check className="h-[5px] w-[5px] sm:h-[7px] sm:w-[7px] lg:h-[12px] lg:w-[12px]" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* VENEER */}
            <div className="relative overflow-hidden rounded-md border border-[#99FFFF] bg-white p-2 shadow-[0_6px_20px_rgba(0,180,180,0.06)] sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6 lg:shadow-[0_12px_35px_rgba(0,180,180,0.08)]">
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#CCFFFF]/50 blur-xl sm:h-24 sm:w-24 lg:-right-12 lg:-top-12 lg:h-36 lg:w-36 lg:blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#CCFFFF] px-1.5 py-0.5 text-[3.5px] font-bold uppercase tracking-wide text-cyan-900 sm:text-[5px] md:px-2 md:text-[6px] lg:px-3 lg:py-1.5 lg:text-[9px]">
                    Veneer bảo tồn
                  </span>

                  <BadgeCheck className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[21px] lg:w-[21px]" />
                </div>

                <h3 className="mt-2 text-[7px] font-bold leading-[10px] text-slate-950 sm:text-[10px] sm:leading-4 md:mt-3 md:text-[13px] md:leading-5 lg:mt-5 lg:text-xl">
                  Giảm can thiệp khi điều kiện lâm sàng cho phép
                </h3>

                <p className="mt-1 text-[4px] leading-[7px] text-slate-600 sm:text-[5px] sm:leading-[9px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[12px] lg:leading-6">
                  Với một số trường hợp phù hợp, kế hoạch Veneer có thể
                  tập trung chủ yếu ở mặt ngoài của răng. Tuy nhiên không
                  nên mặc định rằng tất cả Veneer đều hoàn toàn không cần
                  chuẩn bị mô răng.
                </p>

                <div className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5 md:mt-4 md:space-y-2 lg:mt-5 lg:space-y-3">
                  {[
                    "Ưu tiên giữ men răng khi có thể",
                    "Kiểm soát màu nền và hình thể",
                    "Kiểm tra khớp cắn trước khi phục hình",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1 text-[3.5px] text-slate-600 sm:text-[5px] md:gap-1.5 md:text-[7px] lg:gap-3 lg:text-[11px]"
                    >
                      <CheckCircle2 className="h-[6px] w-[6px] shrink-0 text-cyan-700 sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[16px] lg:w-[16px]" />

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* QUOTE - LUÔN NGANG */}
          <div className="mt-3 flex flex-row items-center gap-2 rounded-md border border-[#CCFFFF] bg-white p-2 sm:mt-4 sm:gap-3 sm:rounded-lg sm:p-3 md:mt-5 md:rounded-xl md:p-4 lg:mt-6 lg:gap-4 lg:rounded-2xl lg:p-5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEFFFF] sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
              <Stethoscope className="h-[9px] w-[9px] text-cyan-700 sm:h-[12px] sm:w-[12px] md:h-[15px] md:w-[15px] lg:h-[20px] lg:w-[20px]" />
            </div>

            <div>
              <p className="text-[5px] font-medium italic leading-[8px] text-slate-800 sm:text-[7px] sm:leading-3 md:text-[10px] md:leading-5 lg:text-[14px] lg:leading-7">
                “Thẩm mỹ chỉ có ý nghĩa khi kế hoạch phục hình tôn trọng
                cấu trúc răng, mô nướu và chức năng nhai.”
              </p>

              <div className="mt-1 text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[5px] md:text-[7px] lg:mt-2 lg:text-[9px] lg:tracking-[0.13em]">
                Bác sĩ Trung
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CANDIDATES */}
      <section
        id="candidates"
        className="bg-white px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              02 // Chỉ định
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              Trường hợp nào có thể cân nhắc Veneer?
            </h2>

            <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] sm:leading-3 md:text-[9px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
              Chỉ định cần được quyết định sau khi bác sĩ đánh giá trực
              tiếp cấu trúc răng, men răng và khớp cắn.
            </p>
          </div>

          {/* LUÔN 4 CỘT */}
          <div className="mt-4 grid grid-cols-4 gap-1 sm:mt-5 sm:gap-2 md:mt-6 md:gap-3 lg:mt-8 lg:gap-4">
            {candidates.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-md border border-slate-100 bg-[#F8FFFF] p-1.5 transition hover:-translate-y-1 hover:border-[#66FFFF] sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-3.5 lg:rounded-2xl lg:p-5"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded bg-white sm:h-7 sm:w-7 sm:rounded-md md:h-9 md:w-9 lg:h-11 lg:w-11 lg:rounded-xl">
                    <Icon className="h-[8px] w-[8px] text-cyan-700 sm:h-[11px] sm:w-[11px] md:h-[15px] md:w-[15px] lg:h-[20px] lg:w-[20px]" />
                  </div>

                  <h3 className="mt-2 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:mt-3 md:text-[10px] md:leading-4 lg:mt-5 lg:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[3.5px] leading-[6px] text-slate-500 sm:text-[4.5px] sm:leading-[8px] md:mt-2 md:text-[6px] md:leading-3 lg:mt-3 lg:text-[11px] lg:leading-5">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center gap-1 pt-2 text-[3px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[4.5px] md:pt-3 md:text-[6px] lg:gap-2 lg:pt-5 lg:text-[9px]">
                    {item.label}

                    <ArrowRight className="h-[5px] w-[5px] sm:h-[7px] sm:w-[7px] md:h-[9px] md:w-[9px] lg:h-[12px] lg:w-[12px]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="border-y border-slate-100 bg-[#F7FDFD] px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              03 // Quy trình
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              4 bước xây dựng kế hoạch Veneer & DSD
            </h2>

            <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] sm:leading-3 md:text-[9px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
              Dữ liệu kỹ thuật số hỗ trợ bác sĩ phân tích và trao đổi rõ
              hơn về định hướng điều trị trước khi thực hiện.
            </p>
          </div>

          {/* LUÔN 4 CỘT */}
          <div className="mt-4 grid grid-cols-4 gap-1 sm:mt-5 sm:gap-2 md:mt-6 md:gap-3 lg:mt-8 lg:gap-4">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="flex flex-col rounded-md border border-slate-100 bg-white p-1.5 shadow-sm sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-3.5 lg:rounded-2xl lg:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-cyan-700 sm:text-[15px] md:text-[20px] lg:text-[26px]">
                      {item.number}
                    </span>

                    <Icon className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[20px] lg:w-[20px]" />
                  </div>

                  <h3 className="mt-2 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] sm:leading-[10px] md:mt-3 md:text-[10px] md:leading-4 lg:mt-4 lg:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[3.5px] leading-[6px] text-slate-500 sm:text-[4.5px] sm:leading-[8px] md:mt-2 md:text-[6px] md:leading-3 lg:mt-3 lg:text-[11px] lg:leading-5">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-2 md:pt-3 lg:pt-5">
                    <div className="rounded bg-[#F8FFFF] px-1 py-1 text-[3px] font-semibold text-slate-500 sm:rounded-md sm:text-[4.5px] md:px-2 md:text-[6px] lg:rounded-lg lg:px-3 lg:py-2 lg:text-[9px]">
                      {item.note}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section
        id="materials"
        className="bg-white px-2 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
              04 // Vật liệu
            </div>

            <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
              Lựa chọn vật liệu theo từng chỉ định
            </h2>
          </div>

          {/* LUÔN 2 CỘT */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3 md:mt-6 md:gap-4 lg:mt-8 lg:gap-5">
            {materials.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-slate-100 bg-[#F8FFFF] p-2 sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
              >
                <div className="flex items-center justify-between gap-1">
                  <h3 className="text-[7px] font-bold text-slate-950 sm:text-[10px] md:text-[14px] lg:text-xl">
                    {item.title}
                  </h3>

                  <span className="rounded bg-white px-1 py-0.5 text-[3.5px] font-bold text-cyan-800 sm:text-[5px] md:rounded-md md:px-2 md:text-[7px] lg:rounded-lg lg:px-3 lg:py-1.5 lg:text-[9px]">
                    {item.brand}
                  </span>
                </div>

                <p className="mt-1.5 text-[4px] leading-[7px] text-slate-600 sm:text-[5px] sm:leading-[9px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-4 lg:text-[12px] lg:leading-6">
                  {item.description}
                </p>

                {/* SPECS LUÔN 2 CỘT */}
                <div className="mt-2 grid grid-cols-2 gap-1 sm:mt-3 sm:gap-2 md:mt-4 lg:mt-5 lg:gap-3">
                  {item.specs.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded border border-slate-100 bg-white p-1 sm:rounded-md sm:p-1.5 md:rounded-lg md:p-2.5 lg:rounded-xl lg:p-4"
                    >
                      <div className="text-[3px] font-bold uppercase tracking-wide text-slate-400 sm:text-[4px] md:text-[6px] lg:text-[8px]">
                        {label}
                      </div>

                      <div className="mt-0.5 text-[4.5px] font-bold text-cyan-800 sm:text-[6px] md:text-[9px] lg:mt-1 lg:text-[13px]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 border-l border-[#00CED1] pl-1.5 text-[3.5px] leading-[6px] text-slate-500 sm:mt-3 sm:text-[5px] sm:leading-[8px] md:mt-4 md:pl-2.5 md:text-[7px] md:leading-3 lg:mt-5 lg:border-l-2 lg:pl-4 lg:text-[11px] lg:leading-5">
                  {item.note}
                </div>
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
          {/* TITLE LUÔN NGANG */}
          <div className="flex flex-row items-end justify-between gap-2">
            <div>
              <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px] lg:tracking-[0.15em]">
                05 // Hồ sơ lâm sàng
              </div>

              <h2 className="mt-1 text-[14px] font-extrabold text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[38px]">
                Ca Veneer minh họa
              </h2>

              <p className="mt-1.5 max-w-2xl text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:mt-2 md:text-[8px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
                Hình ảnh điều trị chỉ nên được công khai khi có sự đồng ý
                phù hợp của bệnh nhân.
              </p>
            </div>

            <Link
              href="/cases"
              className="inline-flex shrink-0 items-center gap-1 text-[3.5px] font-bold uppercase text-cyan-800 sm:text-[5px] md:text-[7px] lg:gap-2 lg:text-[10px]"
            >
              Xem thư viện ca điều trị

              <ArrowRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[14px] lg:w-[14px]" />
            </Link>
          </div>

          {/* LUÔN 2 CỘT */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3 md:mt-6 md:gap-4 lg:mt-8 lg:gap-6">
            {cases.map((item) => (
              <div
                key={item.code}
                className="overflow-hidden rounded-md border border-slate-100 bg-white shadow-sm sm:rounded-lg md:rounded-xl lg:rounded-2xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute left-1 top-1 rounded-full bg-slate-950/75 px-1 py-0.5 text-[3px] font-bold uppercase tracking-wide text-white backdrop-blur sm:text-[4px] md:left-2 md:top-2 md:px-2 md:text-[6px] lg:left-3 lg:top-3 lg:px-3 lg:py-1.5 lg:text-[8px]">
                    #{item.code}
                  </div>

                  <div className="absolute bottom-1 right-1 rounded-full bg-[#00FFFF] px-1 py-0.5 text-[3px] font-bold uppercase text-slate-950 sm:text-[4px] md:bottom-2 md:right-2 md:px-2 md:text-[6px] lg:bottom-3 lg:right-3 lg:px-3 lg:py-1.5 lg:text-[8px]">
                    {item.tag}
                  </div>
                </div>

                <div className="p-1.5 sm:p-2.5 md:p-3.5 lg:p-5">
                  <h3 className="text-[6px] font-bold leading-[8px] text-slate-950 sm:text-[8px] sm:leading-3 md:text-[11px] md:leading-4 lg:text-[16px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-3 lg:text-[11px] lg:leading-5">
                    {item.description}
                  </p>

                  <div className="mt-2 flex items-center gap-1 border-t border-slate-100 pt-1.5 text-[3px] text-slate-500 sm:text-[4.5px] md:mt-3 md:gap-1.5 md:pt-2 md:text-[6px] lg:mt-5 lg:gap-2 lg:pt-4 lg:text-[9px]">
                    <ShieldCheck className="h-[6px] w-[6px] text-cyan-700 sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[14px] lg:w-[14px]" />

                    Kết quả điều trị có thể khác nhau giữa từng bệnh nhân
                  </div>
                </div>
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
              Bác sĩ giải đáp về Veneer
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:text-[8px] md:leading-4 lg:mt-4 lg:text-[13px] lg:leading-6">
              Các nội dung dưới đây mang tính tham khảo và không thay thế
              việc thăm khám trực tiếp.
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
              Tư vấn Veneer
            </div>

            <h2 className="mt-1 text-[12px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[14px] sm:text-[18px] md:text-[24px] lg:mt-3 lg:text-3xl">
              Veneer có phù hợp với tình trạng răng của bạn?
            </h2>

            <p className="mt-1.5 max-w-2xl text-[4px] leading-[7px] text-slate-600 sm:text-[5.5px] sm:leading-[9px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-4 lg:text-[13px] lg:leading-6">
              Bác sĩ cần đánh giá cấu trúc men răng, màu nền, hình thể,
              khớp cắn và mong muốn thẩm mỹ trước khi đưa ra phương án.
            </p>

            {/* LUÔN 2 CỘT */}
            <div className="mt-2 grid grid-cols-2 gap-1 sm:mt-3 sm:gap-1.5 md:mt-4 md:gap-2 lg:mt-5">
              {[
                "Đánh giá trực tiếp",
                "Phân tích đường cười",
                "Kiểm tra khớp cắn",
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