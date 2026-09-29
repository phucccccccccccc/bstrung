import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bone,
  CheckCircle2,
  Microscope,
  Quote,
  ShieldCheck,
  Sparkles,
  ScanLine,
  MoveRight,
  LockKeyhole,
} from "lucide-react";

const specialtyIconMap = {
  implant: ScanLine,
  veneer: Sparkles,
  "bite-reconstruction": Bone,
  cosmetic: Microscope,
};

function getSpecialtyIcon(slug = "") {
  const key = slug.split("/").filter(Boolean).pop();

  return specialtyIconMap[key] || Microscope;
}

async function getHomeData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(
    `${baseUrl}/pages/home/public`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Không thể tải dữ liệu Trang chủ"
    );
  }

  return response.json();
}

export default async function HomePage() {
  const home = await getHomeData();

  return (
    <main className="overflow-hidden bg-white text-slate-700">
      {/* ===================================================== */}
      {/* HERO + STATS */}
      {/* ===================================================== */}

      {(home.hero || home.stats) && (
        <section
          className="
            relative
            overflow-hidden
            bg-gradient-to-b
            from-white
            via-[#F8FFFF]
            to-white

            px-2
            pb-2
            pt-3

            min-[430px]:px-3

            sm:px-4
            sm:pb-3
            sm:pt-4

            md:px-6

            lg:px-10
            lg:pb-5
            lg:pt-6
          "
        >
          <div className="pointer-events-none absolute right-[18%] top-0 h-[120px] w-[120px] rounded-full bg-[#CCFFFF]/30 blur-[40px] sm:h-[220px] sm:w-[220px] sm:blur-[70px] lg:h-[360px] lg:w-[360px] lg:blur-[90px]" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-[100px] rounded-full bg-[#99FFFF]/15 blur-[35px] sm:h-[180px] sm:w-[180px] sm:blur-[60px] lg:h-[260px] lg:w-[260px] lg:blur-[80px]" />

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center">
            {/* HERO */}

            {home.hero && (
              <div className="grid grid-cols-12 items-center gap-2 sm:gap-4 lg:gap-6">
                {/* LEFT */}

                <div className="col-span-7 flex flex-col items-start gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3.5">
                  {/* BADGE */}

                  <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF]/70 bg-[#CCFFFF]/35 px-1.5 py-1 sm:gap-1.5 sm:px-2.5 lg:gap-2 lg:px-3 lg:py-1.5">
                    <span className="h-1 w-1 shrink-0 animate-pulse rounded-full bg-cyan-600 sm:h-1.5 sm:w-1.5" />

                    <span className="text-[5.5px] font-bold uppercase tracking-[0.07em] text-cyan-900 min-[430px]:text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] lg:tracking-[0.14em]">
                      {home.hero.badge}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h1
                    className="
                      max-w-[650px]

                      text-[15px]
                      font-extrabold
                      leading-[1.03]
                      tracking-[-0.04em]
                      text-slate-950

                      min-[430px]:text-[18px]

                      sm:text-[24px]

                      md:text-[32px]

                      lg:text-[44px]
                      lg:tracking-[-0.045em]
                    "
                  >
                    {home.hero.titleLine1}{" "}

                    <span className="relative inline-block text-cyan-900">
                      {home.hero.titleHighlight}

                      <span className="absolute -bottom-[2px] left-0 h-[1px] w-full rounded-full bg-[#00FFFF] sm:h-[2px] lg:-bottom-1 lg:h-[3px]" />
                    </span>

                    {" "}
                    {home.hero.titleLine2}
                  </h1>

                  {/* DESCRIPTION */}

                  <p className="max-w-xl text-[6.5px] leading-[10px] text-slate-600 min-[430px]:text-[7px] min-[430px]:leading-[12px] sm:text-[9px] sm:leading-4 md:text-[11px] md:leading-5 lg:text-[14px] lg:leading-6">
                    {home.hero.description}
                  </p>

                  {/* ACTIONS */}

                  <div className="flex w-full flex-row gap-1 sm:w-auto sm:gap-2 lg:gap-3">
                    <Link
                      href={
                        home.hero.primaryCtaSlug ||
                        "/appointment"
                      }
                      className="
                        group
                        inline-flex
                        min-h-[24px]
                        items-center
                        justify-center
                        gap-1
                        rounded-md
                        bg-[#00FFFF]
                        px-1.5
                        text-[5px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-slate-950
                        shadow-sm
                        transition-all
                        duration-300

                        min-[430px]:px-2
                        min-[430px]:text-[6px]

                        sm:min-h-[30px]
                        sm:rounded-lg
                        sm:px-3
                        sm:text-[7px]

                        md:min-h-[36px]
                        md:px-4
                        md:text-[9px]

                        lg:min-h-[44px]
                        lg:rounded-xl
                        lg:px-5
                        lg:text-[11px]

                        hover:-translate-y-1
                        hover:bg-[#33FFFF]
                      "
                    >
                      {home.hero.primaryCtaText}

                      <ArrowRight className="h-[7px] w-[7px] sm:h-[10px] sm:w-[10px] lg:h-[15px] lg:w-[15px]" />
                    </Link>

                    <Link
                      href={
                        home.hero.secondaryCtaSlug ||
                        "/about"
                      }
                      className="
                        group
                        inline-flex
                        min-h-[24px]
                        items-center
                        justify-center
                        gap-1
                        rounded-md
                        border
                        border-slate-200
                        bg-white
                        px-1.5
                        text-[5px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-slate-800
                        transition-all

                        min-[430px]:px-2
                        min-[430px]:text-[6px]

                        sm:min-h-[30px]
                        sm:rounded-lg
                        sm:px-3
                        sm:text-[7px]

                        md:min-h-[36px]
                        md:px-4
                        md:text-[9px]

                        lg:min-h-[44px]
                        lg:rounded-xl
                        lg:px-5
                        lg:text-[11px]

                        hover:-translate-y-1
                        hover:border-[#66FFFF]
                        hover:bg-[#F8FFFF]
                      "
                    >
                      {home.hero.secondaryCtaText}

                      <ArrowUpRight className="h-[7px] w-[7px] sm:h-[10px] sm:w-[10px] lg:h-[14px] lg:w-[14px]" />
                    </Link>
                  </div>

                  {/* EXPERIENCE */}

                  <div className="mt-0.5 flex max-w-md items-center gap-1.5 rounded-md border border-slate-100 bg-white p-1.5 shadow-[0_5px_18px_rgba(15,23,42,0.04)] sm:gap-2 sm:rounded-lg sm:p-2 md:gap-3 lg:rounded-xl lg:p-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#99FFFF] bg-[#CCFFFF]/50 sm:h-7 sm:w-7 sm:rounded-md lg:h-9 lg:w-9 lg:rounded-lg">
                      <BadgeCheck className="h-[9px] w-[9px] text-cyan-700 sm:h-[13px] sm:w-[13px] lg:h-[17px] lg:w-[17px]" />
                    </div>

                    <div>
                      <div className="text-[5.5px] font-bold text-slate-900 sm:text-[7px] md:text-[9px] lg:text-[11px]">
                        Kinh nghiệm lâm sàng • Điều trị cá nhân hóa
                      </div>

                      <div className="mt-0.5 text-[5px] text-slate-500 sm:text-[6px] md:text-[8px] lg:text-[10px]">
                        Implant, phục hình và nha khoa thẩm mỹ
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}

                <div className="relative col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[145px] min-[430px]:max-w-[175px] sm:max-w-[215px] md:max-w-[265px] lg:max-w-[330px]">
                    <div className="absolute -inset-1 -z-10 rounded-[12px] bg-gradient-to-tr from-[#CCFFFF]/70 via-[#99FFFF]/20 to-transparent blur-md sm:-inset-2 sm:rounded-[20px] lg:-inset-3 lg:rounded-[30px] lg:blur-lg" />

                    <div className="group relative aspect-[4/5] overflow-hidden rounded-[9px] border border-white bg-slate-100 shadow-[0_10px_25px_rgba(15,23,42,0.10)] sm:rounded-[14px] md:rounded-[17px] lg:rounded-[20px] lg:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                      <img
                        src={
                          home.hero.image ||
                          "/images/doctor/trung.jpg"
                        }
                        alt="Bác sĩ Trung"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                      {/* DOCTOR INFO */}

                      <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between gap-1 rounded border border-white/80 bg-white/95 p-1 shadow-md backdrop-blur sm:bottom-2 sm:left-2 sm:right-2 sm:rounded-md sm:p-1.5 lg:bottom-3 lg:left-3 lg:right-3 lg:gap-3 lg:rounded-lg lg:p-2.5">
                        <div>
                          <div className="text-[4.5px] font-bold uppercase tracking-[0.08em] text-cyan-700 sm:text-[5px] md:text-[6px] lg:text-[8px] lg:tracking-[0.13em]">
                            Bác sĩ Trung
                          </div>

                          <div className="mt-0.5 text-[5.5px] font-extrabold text-slate-950 sm:text-[7px] md:text-[9px] lg:text-[12px]">
                            Nha khoa chuyên sâu
                          </div>
                        </div>

                        <div className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-[#CCFFFF]/60 px-1 py-0.5 text-[4.5px] font-semibold text-slate-700 sm:text-[5px] md:px-1.5 md:text-[6px] lg:gap-1.5 lg:px-2 lg:py-1 lg:text-[8px]">
                          <ShieldCheck className="h-[6px] w-[6px] text-cyan-700 sm:h-[8px] sm:w-[8px] lg:h-[12px] lg:w-[12px]" />

                          Tư vấn 1:1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STATS - LUÔN 4 CỘT */}

            {Array.isArray(home.stats) && (
              <div className="mt-2 grid grid-cols-4 gap-1 sm:mt-3 sm:gap-2 lg:mt-4 lg:gap-3">
                {home.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-md border border-slate-100 bg-white p-1.5 shadow-[0_3px_12px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#66FFFF] sm:rounded-lg sm:p-2.5 md:p-3 lg:rounded-xl lg:p-4"
                  >
                    <div className="text-[5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[7px] lg:text-[9px] lg:tracking-[0.13em]">
                      {item.label}
                    </div>

                    <div className="mt-0.5 text-[12px] font-extrabold tracking-tight text-slate-950 min-[430px]:text-[14px] sm:text-[18px] md:text-[22px] lg:mt-1 lg:text-[28px]">
                      {item.value}

                      {item.suffix && (
                        <span className="ml-0.5 text-[7px] text-slate-400 sm:text-[10px] md:text-[13px] lg:ml-1 lg:text-[18px]">
                          {item.suffix}
                        </span>
                      )}
                    </div>

                    <p className="mt-0.5 text-[5px] leading-[7px] text-slate-500 sm:text-[6.5px] sm:leading-[10px] md:text-[8px] md:leading-[13px] lg:mt-1.5 lg:text-[10px] lg:leading-[18px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================================================== */}
      {/* PHILOSOPHY - LUÔN 5/12 + 7/12 */}
      {/* ===================================================== */}

      {home.philosophy && (
        <section className="bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-2.5 sm:gap-5 md:gap-7 lg:gap-12">
            {/* LEFT */}

            <div className="col-span-5">
              <div className="relative overflow-hidden rounded-lg border border-[#CCFFFF] bg-gradient-to-br from-[#F8FFFF] to-white p-2.5 shadow-[0_10px_25px_rgba(0,180,180,0.06)] sm:rounded-xl sm:p-4 md:rounded-2xl md:p-6 lg:rounded-3xl lg:p-8 lg:shadow-[0_15px_45px_rgba(0,180,180,0.08)]">
                <div className="absolute -bottom-5 -right-5 h-16 w-16 rounded-full bg-[#CCFFFF]/40 blur-xl sm:h-24 sm:w-24 lg:-bottom-10 lg:-right-10 lg:h-40 lg:w-40 lg:blur-3xl" />

                <div className="flex h-6 w-6 items-center justify-center rounded-md border border-[#99FFFF] bg-white text-cyan-700 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 lg:rounded-xl">
                  <Quote className="h-[11px] w-[11px] sm:h-[15px] sm:w-[15px] md:h-[19px] md:w-[19px] lg:h-[24px] lg:w-[24px]" />
                </div>

                <blockquote className="mt-2 text-[7.5px] font-semibold leading-[11px] text-slate-950 min-[430px]:text-[8px] sm:mt-3 sm:text-[10px] sm:leading-4 md:mt-4 md:text-[14px] md:leading-6 lg:mt-6 lg:text-xl lg:leading-8">
                  “{home.philosophy.quote}”
                </blockquote>

                <div className="mt-3 border-t border-slate-100 pt-2 sm:mt-4 sm:pt-3 lg:mt-7 lg:pt-5">
                  <div className="text-[6.5px] font-bold text-slate-950 sm:text-[8px] md:text-[11px] lg:text-base">
                    BÁC SĨ TRUNG
                  </div>

                  <div className="mt-0.5 text-[5px] font-bold uppercase tracking-[0.08em] text-cyan-700 sm:text-[6px] md:text-[8px] lg:mt-1 lg:text-[11px] lg:tracking-[0.15em]">
                    Nha khoa chuyên sâu
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="col-span-7 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <div className="flex items-center gap-1 text-[5.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:gap-2 lg:text-[11px] lg:tracking-[0.16em]">
                <span className="h-1 w-1 rounded-full bg-cyan-600 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2" />

                {home.philosophy.eyebrow}
              </div>

              <h2 className="max-w-2xl text-[13px] font-extrabold leading-tight tracking-[-0.03em] text-slate-950 min-[430px]:text-[15px] sm:text-[20px] md:text-[28px] lg:text-[42px]">
                {home.philosophy.title}
              </h2>

              <p className="max-w-3xl text-[6px] leading-[9px] text-slate-600 min-[430px]:text-[6.5px] min-[430px]:leading-[11px] sm:text-[8px] sm:leading-[14px] md:text-[11px] md:leading-5 lg:text-[16px] lg:leading-8">
                {home.philosophy.description}
              </p>

              {/* LUÔN 2 CỘT */}

              <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                <div className="flex gap-1 rounded-md border border-slate-100 bg-[#F8FFFF] p-1.5 sm:gap-2 sm:rounded-lg sm:p-2.5 md:p-3 lg:gap-4 lg:rounded-xl lg:p-4">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#99FFFF] bg-white sm:h-7 sm:w-7 sm:rounded-md md:h-8 md:w-8 lg:h-10 lg:w-10 lg:rounded-lg">
                    <Microscope className="h-[9px] w-[9px] text-cyan-700 sm:h-[13px] sm:w-[13px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px]" />
                  </div>

                  <div>
                    <div className="text-[5.5px] font-bold text-slate-950 sm:text-[7px] md:text-[9px] lg:text-base">
                      Ưu tiên bảo tồn
                    </div>

                    <p className="mt-0.5 text-[4.5px] leading-[6px] text-slate-500 sm:text-[5.5px] sm:leading-[9px] md:text-[7px] md:leading-3 lg:mt-1 lg:text-[12px] lg:leading-5">
                      Hạn chế can thiệp không cần thiết vào mô răng và cấu
                      trúc tự nhiên.
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 rounded-md border border-slate-100 bg-[#F8FFFF] p-1.5 sm:gap-2 sm:rounded-lg sm:p-2.5 md:p-3 lg:gap-4 lg:rounded-xl lg:p-4">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#99FFFF] bg-white sm:h-7 sm:w-7 sm:rounded-md md:h-8 md:w-8 lg:h-10 lg:w-10 lg:rounded-lg">
                    <ScanLine className="h-[9px] w-[9px] text-cyan-700 sm:h-[13px] sm:w-[13px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px]" />
                  </div>

                  <div>
                    <div className="text-[5.5px] font-bold text-slate-950 sm:text-[7px] md:text-[9px] lg:text-base">
                      Chẩn đoán số hóa
                    </div>

                    <p className="mt-0.5 text-[4.5px] leading-[6px] text-slate-500 sm:text-[5.5px] sm:leading-[9px] md:text-[7px] md:leading-3 lg:mt-1 lg:text-[12px] lg:leading-5">
                      Hỗ trợ quá trình phân tích, lập kế hoạch và theo dõi
                      điều trị.
                    </p>
                  </div>
                </div>
              </div>

              <Link
  href="/about"
  className="group mt-1 inline-flex w-fit items-center gap-1 rounded-md bg-[#00BFD8] px-2 py-1.5 text-[5px] font-bold uppercase tracking-wide text-white transition hover:bg-[#009FB5] sm:gap-1.5 sm:rounded-lg sm:px-3 sm:py-2 sm:text-[6px] md:text-[8px] lg:mt-2 lg:gap-3 lg:rounded-xl lg:px-6 lg:py-3.5 lg:text-[12px]"
>
  Xem hồ sơ Bác sĩ Trung

  <ArrowRight className="h-[7px] w-[7px] text-white sm:h-[10px] sm:w-[10px] lg:h-[16px] lg:w-[16px]" />
</Link>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================== */}
      {/* SPECIALTIES - LUÔN 4 CỘT */}
      {/* ===================================================== */}

      {home.specialties && (
        <section className="border-t border-slate-100 bg-[#F4FCFC]/60 px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* TITLE ROW - LUÔN NGANG */}

            <div className="mb-3 flex flex-row items-end justify-between gap-2 sm:mb-5 md:mb-7 lg:mb-10 lg:gap-5">
              <div>
                <div className="text-[5.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[11px] lg:tracking-[0.16em]">
                  {home.specialties.eyebrow}
                </div>

                <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[40px]">
                  {home.specialties.title}
                </h2>
              </div>

              <Link
                href="/specialties"
                className="group inline-flex shrink-0 items-center gap-1 text-[5px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[6px] md:text-[8px] lg:gap-2 lg:text-[12px]"
              >
                Xem tất cả chuyên môn

                <ArrowRight className="h-[7px] w-[7px] sm:h-[10px] sm:w-[10px] lg:h-[17px] lg:w-[17px]" />
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-4 lg:gap-6">
              {home.specialties.items?.map((item) => {
                const Icon = getSpecialtyIcon(item.slug);

                return (
                  <Link
                    key={item.slug}
                    href={item.slug || "/specialties"}
                    className="
                      group
                      flex
                      min-h-[125px]
                      flex-col
                      justify-between
                      rounded-md
                      border
                      border-slate-100
                      bg-white
                      p-1.5
                      shadow-[0_3px_10px_rgba(15,23,42,0.025)]
                      transition-all
                      duration-300

                      min-[430px]:min-h-[140px]
                      min-[430px]:p-2

                      sm:min-h-[175px]
                      sm:rounded-lg
                      sm:p-3

                      md:min-h-[220px]
                      md:rounded-xl
                      md:p-4

                      lg:min-h-[290px]
                      lg:rounded-2xl
                      lg:p-6

                      hover:-translate-y-1
                      hover:border-[#66FFFF]
                    "
                  >
                    <div>
                      <div className="flex h-5 w-5 items-center justify-center rounded border border-slate-100 bg-[#F8FFFF] transition-colors duration-300 group-hover:bg-[#00FFFF] sm:h-7 sm:w-7 sm:rounded-md md:h-9 md:w-9 lg:h-12 lg:w-12 lg:rounded-xl">
                        <Icon className="h-[9px] w-[9px] text-cyan-700 sm:h-[13px] sm:w-[13px] md:h-[17px] md:w-[17px] lg:h-[22px] lg:w-[22px]" />
                      </div>

                      <div className="mt-2 text-[4.5px] font-bold uppercase tracking-[0.08em] text-slate-400 sm:mt-3 sm:text-[5.5px] md:mt-4 md:text-[7px] lg:mt-6 lg:text-[10px] lg:tracking-[0.16em]">
                        Hạng mục {item.number}
                      </div>

                      <h3 className="mt-1 text-[6.5px] font-bold leading-[8px] text-slate-950 min-[430px]:text-[7px] sm:text-[9px] sm:leading-3 md:mt-2 md:text-[12px] md:leading-4 lg:mt-3 lg:text-[17px] lg:leading-normal">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[4.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:mt-2 md:text-[7px] md:leading-3 lg:mt-4 lg:text-[13px] lg:leading-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-1.5 text-[4.5px] font-bold uppercase tracking-wide text-cyan-800 sm:mt-3 sm:pt-2 sm:text-[5px] md:text-[7px] lg:mt-6 lg:pt-5 lg:text-[11px]">
                      <span>Chi tiết</span>

                      <ArrowRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================== */}
      {/* FEATURED CASE */}
      {/* ===================================================== */}

      {home.featuredCase && (
        <section className="bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 flex flex-row items-end justify-between gap-2 sm:mb-5 md:mb-7 lg:mb-10">
              <div>
                <div className="text-[5.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[11px] lg:tracking-[0.16em]">
                  {home.featuredCase.eyebrow}
                </div>

                <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[40px]">
                  {home.featuredCase.title}
                </h2>
              </div>

              <Link
                href={
                  home.featuredCase.ctaSlug ||
                  "/cases"
                }
                className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-200 bg-[#F8FFFF] px-1.5 py-1 text-[4.5px] font-bold uppercase tracking-wide text-slate-800 sm:rounded-lg sm:px-2.5 sm:py-1.5 sm:text-[6px] md:px-3 md:py-2 md:text-[8px] lg:gap-2 lg:rounded-xl lg:px-5 lg:py-3 lg:text-[11px]"
              >
                Xem các ca điều trị

                <ArrowRight className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] lg:h-[16px] lg:w-[16px]" />
              </Link>
            </div>

            {/* LUÔN 7/12 + 5/12 */}

            <div className="grid grid-cols-12 gap-2 rounded-lg border border-slate-200 bg-[#F8FFFF] p-2 sm:gap-3 sm:rounded-xl sm:p-3 md:gap-5 md:rounded-2xl md:p-5 lg:gap-8 lg:rounded-3xl lg:p-9">
              {/* LEFT */}

              <div className="col-span-7">
                <div className="mb-1.5 flex items-center justify-between gap-1 sm:mb-2 md:mb-3 lg:mb-4 lg:gap-4">
                  <span className="rounded border border-slate-200 bg-white px-1 py-0.5 text-[4.5px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[5px] md:rounded-md md:px-2 md:py-1 md:text-[7px] lg:rounded-lg lg:px-3 lg:py-1.5 lg:text-[10px]">
                    Case minh họa
                  </span>

                  <span className="text-[4.5px] text-slate-500 sm:text-[5px] md:text-[7px] lg:text-xs">
                    Hình ảnh có sự đồng ý công khai
                  </span>
                </div>

                {/* BEFORE / AFTER LUÔN 2 CỘT */}

                <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-200 sm:rounded-lg lg:rounded-xl">
                    <img
                      src={
                        home.featuredCase.imageBefore ||
                        "/images/doctor/trung.jpg"
                      }
                      alt="Tình trạng trước điều trị"
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute bottom-1 left-1 rounded bg-slate-950/80 px-1 py-0.5 text-[4.5px] font-bold uppercase text-white sm:text-[5px] md:bottom-2 md:left-2 md:px-2 md:text-[7px] lg:bottom-3 lg:left-3 lg:rounded-md lg:px-3 lg:py-1 lg:text-[10px]">
                      Trước
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[#66FFFF] bg-slate-200 sm:rounded-lg lg:rounded-xl">
                    <img
                      src={
                        home.featuredCase.imageAfter ||
                        "/images/doctor/trung.jpg"
                      }
                      alt="Kết quả sau điều trị"
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute bottom-1 left-1 rounded bg-[#00FFFF] px-1 py-0.5 text-[4.5px] font-bold uppercase text-slate-950 sm:text-[5px] md:bottom-2 md:left-2 md:px-2 md:text-[7px] lg:bottom-3 lg:left-3 lg:rounded-md lg:px-3 lg:py-1 lg:text-[10px]">
                      Sau
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div className="col-span-5 flex flex-col justify-center">
                <h3 className="text-[8px] font-bold leading-[11px] text-slate-950 min-[430px]:text-[9px] sm:text-[12px] sm:leading-4 md:text-[16px] md:leading-6 lg:text-2xl lg:leading-snug">
                  {home.featuredCase.caseTitle}
                </h3>

                <p className="mt-1.5 text-[5px] leading-[7px] text-slate-600 sm:mt-2 sm:text-[6px] sm:leading-[10px] md:mt-3 md:text-[8px] md:leading-4 lg:mt-4 lg:text-[14px] lg:leading-7">
                  {home.featuredCase.description}
                </p>

                <div className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5 md:mt-4 md:space-y-2 lg:mt-6 lg:space-y-3">
                  {home.featuredCase.steps?.map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1 rounded border border-slate-100 bg-white p-1 sm:gap-1.5 sm:rounded-md sm:p-1.5 md:gap-2 md:rounded-lg md:p-2.5 lg:gap-3 lg:rounded-xl lg:p-4"
                      >
                        <CheckCircle2 className="h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[18px] lg:w-[18px]" />

                        <span className="text-[4.5px] font-semibold text-slate-800 sm:text-[5.5px] md:text-[8px] lg:text-[13px]">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <Link
                  href={
                    home.featuredCase.ctaSlug ||
                    "/cases"
                  }
                  className="group mt-2 inline-flex items-center gap-1 text-[4.5px] font-bold uppercase tracking-wide text-cyan-800 sm:mt-3 sm:text-[5.5px] md:mt-4 md:text-[7px] lg:mt-6 lg:gap-2 lg:text-[11px]"
                >
                  Xem phân tích ca điều trị

                  <MoveRight className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] lg:h-[17px] lg:w-[17px]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================== */}
      {/* KNOWLEDGE - LUÔN 3 CỘT */}
      {/* ===================================================== */}

      {home.knowledge && (
        <section className="border-t border-slate-100 bg-[#F4FCFC]/50 px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 sm:mb-5 md:mb-7 lg:mb-10">
              <div className="text-[5.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[11px] lg:tracking-[0.16em]">
                {home.knowledge.eyebrow}
              </div>

              <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[40px]">
                {home.knowledge.title}
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6">
              {home.knowledge.items?.map(
                (article) => (
                  <article
                    key={article.slug}
                    className="rounded-md border border-slate-100 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#66FFFF] sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
                  >
                    <div className="text-[4.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[5.5px] md:text-[7px] lg:text-[10px] lg:tracking-[0.16em]">
                      {article.category}
                    </div>

                    <h3 className="mt-1 text-[6.5px] font-bold leading-[8px] text-slate-950 sm:mt-2 sm:text-[8px] sm:leading-3 md:mt-3 md:text-[11px] md:leading-4 lg:mt-4 lg:text-[17px] lg:leading-7">
                      {article.title}
                    </h3>

                    <p className="mt-1 text-[4.5px] leading-[6px] text-slate-500 sm:mt-2 sm:text-[5px] sm:leading-[8px] md:text-[7px] md:leading-3 lg:mt-4 lg:text-[13px] lg:leading-6">
                      Nội dung được trình bày theo hướng dễ hiểu để người đọc
                      có thêm thông tin trước khi trao đổi trực tiếp với bác sĩ.
                    </p>

                    <Link
                      href={`/knowledge/${article.slug}`}
                      className="mt-2 inline-flex items-center gap-1 text-[4.5px] font-bold uppercase tracking-wide text-cyan-800 sm:mt-3 sm:text-[5px] md:mt-4 md:text-[7px] lg:mt-6 lg:gap-2 lg:text-[11px]"
                    >
                      Đọc bài viết

                      <ArrowRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] lg:h-[14px] lg:w-[14px]" />
                    </Link>
                  </article>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      {home.finalCta && (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4FCFC] to-[#F8FFFF] px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CCFFFF]/40 blur-[60px] sm:h-[260px] sm:w-[260px] sm:blur-[90px] lg:h-[450px] lg:w-[450px] lg:blur-[130px]" />

          <div className="relative z-10 mx-auto max-w-4xl rounded-lg border border-[#CCFFFF] bg-white p-4 text-center shadow-[0_10px_30px_rgba(0,180,180,0.08)] sm:rounded-xl sm:p-5 md:rounded-2xl md:p-8 lg:rounded-[28px] lg:p-12 lg:shadow-[0_20px_60px_rgba(0,180,180,0.10)]">
            <div className="text-[5.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[11px] lg:tracking-[0.16em]">
              {home.finalCta.eyebrow}
            </div>

            <h2 className="mx-auto mt-1.5 max-w-2xl text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:mt-2 md:text-[28px] lg:mt-3 lg:text-[40px]">
              {home.finalCta.title}
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-[6px] leading-[9px] text-slate-600 sm:mt-3 sm:text-[7px] sm:leading-3 md:mt-4 md:text-[10px] md:leading-5 lg:mt-5 lg:text-[15px] lg:leading-7">
              {home.finalCta.description}
            </p>

            <div className="mt-3 flex justify-center sm:mt-4 md:mt-6 lg:mt-8">
              <Link
                href={
                  home.finalCta.buttonSlug ||
                  "/appointment"
                }
                className="group inline-flex min-h-[26px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-3 text-[5.5px] font-bold uppercase tracking-wide text-slate-950 shadow-sm transition-all hover:-translate-y-1 hover:bg-[#33FFFF] sm:min-h-[32px] sm:rounded-lg sm:px-4 sm:text-[7px] md:min-h-[42px] md:px-6 md:text-[9px] lg:min-h-[54px] lg:gap-3 lg:rounded-xl lg:px-8 lg:text-[12px]"
              >
                {home.finalCta.buttonText}

                <ArrowRight className="h-[7px] w-[7px] sm:h-[10px] sm:w-[10px] lg:h-[17px] lg:w-[17px]" />
              </Link>
            </div>

            <div className="mt-2 flex items-center justify-center gap-1 text-[5px] text-slate-500 sm:mt-3 sm:text-[6px] md:mt-4 md:text-[8px] lg:mt-6 lg:gap-2 lg:text-[12px]">
              <LockKeyhole className="h-[7px] w-[7px] text-cyan-700 sm:h-[9px] sm:w-[9px] lg:h-[15px] lg:w-[15px]" />

              {home.finalCta.securityText}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}