import Link from "next/link";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Fingerprint,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Về Bác sĩ Trung | Nha khoa chuyên sâu",
  description:
    "Tìm hiểu hành trình chuyên môn, triết lý điều trị, chứng chỉ và hoạt động nghề nghiệp của Bác sĩ Trung.",
};

const principleIconMap = {
  shield: ShieldCheck,
  scan: ScanLine,
  fingerprint: Fingerprint,
};

const galleryLayout = [
  {
    span: "col-span-8",
    minHeight:
      "min-h-[150px] sm:min-h-[230px] md:min-h-[320px] lg:min-h-[420px]",
  },
  {
    span: "col-span-4",
    minHeight:
      "min-h-[150px] sm:min-h-[230px] md:min-h-[320px] lg:min-h-[420px]",
  },
  {
    span: "col-span-4",
    minHeight:
      "min-h-[120px] sm:min-h-[180px] md:min-h-[230px] lg:min-h-[300px]",
  },
  {
    span: "col-span-8",
    minHeight:
      "min-h-[120px] sm:min-h-[180px] md:min-h-[230px] lg:min-h-[300px]",
  },
];

async function getAboutData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(
    `${baseUrl}/pages/about/public`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Không thể tải dữ liệu About"
    );
  }

  return response.json();
}

export default async function AboutPage() {
  const about = await getAboutData();

  return (
    <main className="overflow-hidden bg-white">
      {about.hero && (
        <section className="relative border-b border-slate-100 bg-gradient-to-b from-white via-[#F8FFFF] to-white px-2 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4 md:px-6 lg:px-10 lg:pb-7 lg:pt-7">
          <div className="pointer-events-none absolute -top-8 right-3 h-[130px] w-[130px] rounded-full bg-[#CCFFFF]/40 blur-[45px] sm:h-[220px] sm:w-[220px] sm:blur-[70px] lg:-top-16 lg:right-10 lg:h-[360px] lg:w-[360px] lg:blur-[95px]" />

          <div className="pointer-events-none absolute bottom-2 left-2 h-[100px] w-[100px] rounded-full bg-[#99FFFF]/20 blur-[40px] sm:h-[180px] sm:w-[180px] sm:blur-[65px] lg:bottom-5 lg:left-5 lg:h-[280px] lg:w-[280px] lg:blur-[90px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 items-center gap-2 sm:gap-4 md:gap-5 lg:gap-7">
            <div className="col-span-7 space-y-2 sm:space-y-3 lg:space-y-4">
              <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF]/70 bg-[#EEFFFF] px-1.5 py-1 sm:gap-1.5 sm:px-2.5 lg:gap-2 lg:px-3 lg:py-1.5">
                <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-600 sm:h-1.5 sm:w-1.5" />

                <span className="text-[5px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[9px] lg:tracking-[0.14em]">
                  {about.hero.badge}
                </span>
              </div>

              <div>
                <h1 className="max-w-[680px] text-[15px] font-extrabold leading-[1.04] tracking-[-0.04em] text-slate-950 min-[430px]:text-[18px] sm:text-[24px] md:text-[32px] lg:text-[44px]">
                  {about.hero.titleBefore}{" "}
                  <span className="relative inline-block text-cyan-900">
                    {about.hero.titleHighlight}

                    <span className="absolute -bottom-[2px] left-0 h-[1px] w-full rounded-full bg-[#00FFFF] sm:h-[2px] lg:-bottom-1 lg:h-[3px]" />
                  </span>{" "}
                  {about.hero.titleAfter}
                </h1>

                <p className="mt-2 max-w-xl text-[6px] leading-[10px] text-slate-600 sm:mt-3 sm:text-[9px] sm:leading-4 md:text-[11px] md:leading-5 lg:mt-4 lg:text-[14px] lg:leading-6">
                  {about.hero.description}
                </p>
              </div>

              <div className="rounded-md border border-[#99FFFF]/60 bg-white p-2 shadow-[0_5px_15px_rgba(0,105,107,0.04)] sm:rounded-lg sm:p-3 md:rounded-xl lg:p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[4.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[7px] lg:text-[9px]">
                    {about.hero.quoteLabel}
                  </span>

                  <BadgeCheck className="h-[8px] w-[8px] text-cyan-600 sm:h-[11px] sm:w-[11px] lg:h-[17px] lg:w-[17px]" />
                </div>

                <blockquote className="mt-1.5 text-[6px] font-medium italic leading-[10px] text-slate-900 sm:mt-2 sm:text-[8px] sm:leading-4 md:text-[11px] md:leading-5 lg:mt-3 lg:text-[16px] lg:leading-6">
                  “{about.hero.quote}”
                </blockquote>

                <div className="mt-2 border-t border-slate-100 pt-1.5 sm:mt-3 sm:pt-2 lg:mt-4 lg:pt-3">
                  <div className="text-[5px] font-bold text-slate-950 sm:text-[7px] md:text-[9px] lg:text-[12px]">
                    {about.hero.doctorName}
                  </div>

                  <div className="mt-0.5 text-[4px] text-slate-500 sm:text-[5px] md:text-[7px] lg:text-[10px]">
                    {about.hero.doctorSubtitle}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-2.5">
                {about.hero.metrics?.map(
                  (item, index) => (
                    <div
                      key={`${item.label}-${index}`}
                      className="rounded-md border border-slate-100 bg-white p-1.5 sm:rounded-lg sm:p-2 md:p-2.5 lg:rounded-xl lg:p-3"
                    >
                      <div
                        className={`text-[10px] font-extrabold sm:text-[14px] md:text-[17px] lg:text-[20px] ${
                          index === 2
                            ? "text-cyan-600"
                            : "text-cyan-800"
                        }`}
                      >
                        {item.value}
                      </div>

                      <div className="mt-0.5 text-[3.5px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[5px] md:text-[6px] lg:text-[8px]">
                        {item.label}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative col-span-5 flex justify-center">
              <div className="relative w-full max-w-[145px] min-[430px]:max-w-[180px] sm:max-w-[220px] md:max-w-[270px] lg:max-w-[340px]">
                <div className="absolute -inset-1 rounded-[12px] bg-gradient-to-tr from-[#99FFFF]/55 via-[#CCFFFF]/35 to-[#00FFFF]/10 blur-md sm:-inset-2 sm:rounded-[18px] lg:-inset-3 lg:rounded-[28px] lg:blur-lg" />

                <div className="relative overflow-hidden rounded-[9px] border-2 border-white bg-slate-100 shadow-[0_10px_25px_rgba(0,105,107,0.10)] sm:rounded-[14px] md:rounded-[17px] lg:rounded-[20px]">
                  <img
                    src={about.hero.image}
                    alt="Bác sĩ Trung"
                    className="h-[180px] w-full object-cover object-top min-[430px]:h-[220px] sm:h-[280px] md:h-[350px] lg:h-[430px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />

                  <div className="absolute bottom-1 left-1 right-1 rounded border border-white bg-white/95 p-1 shadow-md backdrop-blur sm:bottom-2 sm:left-2 sm:right-2 sm:rounded-md sm:p-1.5 lg:bottom-3 lg:left-3 lg:right-3 lg:rounded-lg lg:p-3">
                    <div className="flex items-center justify-between gap-1">
                      <div>
                        <div className="text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-700 sm:text-[5px] md:text-[6px] lg:text-[8px]">
                          {about.hero.portraitEyebrow}
                        </div>

                        <div className="mt-0.5 text-[5px] font-extrabold text-slate-950 sm:text-[7px] md:text-[9px] lg:text-[12px]">
                          {about.hero.portraitName}
                        </div>
                      </div>

                      <div className="rounded-full bg-[#CCFFFF] px-1 py-0.5 text-[3.5px] font-bold text-cyan-800 sm:px-1.5 sm:text-[5px] md:text-[6px] lg:px-2.5 lg:py-1.5 lg:text-[8px]">
                        {about.hero.portraitBadge}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {about.principles && (
        <section className="border-b border-slate-100 bg-[#F8FFFF] px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 flex flex-row items-end justify-between gap-2 sm:mb-5 md:mb-7 lg:mb-12">
              <div>
                <div className="text-[5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[11px]">
                  {about.principles.eyebrow}
                </div>

                <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[42px]">
                  {about.principles.title}
                </h2>
              </div>

              <p className="max-w-[42%] text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] sm:leading-[10px] md:text-[8px] md:leading-4 lg:max-w-lg lg:text-[15px] lg:leading-7">
                {about.principles.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6">
              {about.principles.items?.map(
                (item) => {
                  const Icon =
                    principleIconMap[item.iconKey] ||
                    ShieldCheck;

                  return (
                    <div
                      key={item.number}
                      className="group rounded-md border border-slate-100 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00FFFF] sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-7"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-extrabold text-[#CCFFFF] sm:text-[20px] md:text-[26px] lg:text-4xl">
                          {item.number}
                        </span>

                        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#EEFFFF] text-cyan-800 sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-11 lg:w-11 lg:rounded-xl">
                          <Icon className="h-[9px] w-[9px] sm:h-[13px] sm:w-[13px] md:h-[17px] md:w-[17px] lg:h-[22px] lg:w-[22px]" />
                        </div>
                      </div>

                      <h3 className="mt-2 text-[6px] font-bold leading-[8px] text-slate-950 sm:mt-3 sm:text-[9px] sm:leading-3 md:mt-4 md:text-[13px] md:leading-5 lg:mt-6 lg:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[4px] leading-[6px] text-slate-600 sm:mt-2 sm:text-[5px] sm:leading-[9px] md:text-[7px] md:leading-3 lg:mt-3 lg:text-[14px] lg:leading-7">
                        {item.description}
                      </p>

                      <div className="mt-2 border-t border-slate-100 pt-1.5 text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:mt-3 sm:pt-2 sm:text-[5px] md:mt-4 md:text-[7px] lg:mt-7 lg:pt-5 lg:text-[10px]">
                        {item.label}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      )}

      {about.timeline && (
        <section className="border-b border-slate-100 bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-16">
              <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-800 sm:text-[10px] lg:text-[11px]">
                {about.timeline.eyebrow}
              </div>

              <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-3xl lg:text-[42px]">
                {about.timeline.title}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[12px] leading-6 text-slate-600 sm:text-[13px] lg:text-[15px] lg:leading-7">
                {about.timeline.description}
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-[#00FFFF] via-cyan-300 to-cyan-800 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-8 lg:space-y-10">
                {about.timeline.items?.map((item, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={`${item.year}-${index}`}
                      className="relative grid grid-cols-[44px_1fr] gap-4 md:grid-cols-[1fr_72px_1fr] md:gap-6"
                    >
                      <div className="relative z-10 flex justify-center md:col-start-2">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full border text-center font-bold leading-tight sm:h-10 sm:w-10 lg:h-12 lg:w-12 ${
                            item.year === "NAY"
                              ? "border-[#00FFFF] bg-[#00FFFF] text-slate-950"
                              : "border-[#00FFFF] bg-white text-cyan-800"
                          }`}
                        >
                          <span className="px-1 text-[8px] sm:text-[9px] lg:text-[10px]">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`md:row-start-1 ${
                          isLeft
                            ? "md:col-start-1 md:text-right"
                            : "md:col-start-3"
                        }`}
                      >
                        <div
                          className={`rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_6px_22px_rgba(15,23,42,0.04)] ${
                            isLeft ? "md:ml-auto" : "md:mr-auto"
                          } md:max-w-[430px]`}
                        >
                          <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-800 lg:text-[10px]">
                            {item.label}
                          </div>

                          <h3 className="mt-1.5 text-[16px] font-extrabold leading-6 text-slate-950 lg:text-[19px]">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-[12px] leading-6 text-slate-600 lg:text-[13px]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`hidden md:row-start-1 md:flex ${
                          isLeft
                            ? "md:col-start-3 md:justify-start"
                            : "md:col-start-1 md:justify-end"
                        }`}
                      >
                        <div className="flex min-h-[110px] w-full max-w-[430px] items-center rounded-2xl border border-cyan-100 bg-[#F8FFFF] px-5 py-4">
                          {isLeft ? (
                            <Award className="mr-3 h-5 w-5 shrink-0 text-cyan-700" />
                          ) : (
                            <Sparkles className="mr-3 h-5 w-5 shrink-0 text-cyan-700" />
                          )}

                          <div>
                            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-800">
                              {isLeft
                                ? "Phát triển chuyên môn"
                                : "Dấu mốc phát triển"}
                            </div>

                            <div className="mt-1 text-[13px] font-semibold text-slate-900">
                              {item.year === "NAY"
                                ? "Tiếp tục cập nhật và thực hành lâm sàng"
                                : "Một cột mốc trong quá trình đào tạo"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
      {about.certificates && (
        <section className="border-b border-slate-100 bg-[#EEFFFF]/60 px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 flex flex-row items-end justify-between gap-2 sm:mb-5 md:mb-7 lg:mb-12">
              <div>
                <div className="text-[5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[11px]">
                  {about.certificates.eyebrow}
                </div>

                <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[42px]">
                  {about.certificates.title}
                </h2>
              </div>

              <div className="inline-flex max-w-[42%] items-center gap-1 rounded-full border border-[#CCFFFF] bg-white px-1.5 py-1 text-[4px] font-semibold leading-[6px] text-slate-600 sm:px-2 sm:text-[5px] md:px-3 md:text-[7px] lg:max-w-none lg:px-4 lg:py-2 lg:text-[11px]">
                <BadgeCheck className="h-[7px] w-[7px] text-cyan-700 lg:h-[16px] lg:w-[16px]" />
                {about.certificates.note}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6">
              {about.certificates.items?.map(
                (item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="group rounded-md border border-slate-100 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00FFFF] sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
                  >
                    <div className="relative h-[70px] overflow-hidden rounded border border-slate-100 bg-[#F8FFFF] sm:h-[110px] md:h-[155px] lg:h-52">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute right-1 top-1 rounded-full bg-white/95 px-1 py-0.5 text-[3.5px] font-bold text-cyan-800 sm:text-[5px] md:px-2 md:text-[6px] lg:px-3 lg:py-1 lg:text-[9px]">
                        {item.country}
                      </div>
                    </div>

                    <div className="mt-1.5 text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[5px] md:text-[7px] lg:mt-5 lg:text-[10px]">
                      {item.label}
                    </div>

                    <h3 className="mt-1 text-[6px] font-bold leading-[8px] text-slate-950 sm:text-[8px] md:text-[11px] lg:mt-2 lg:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[4px] leading-[6px] text-slate-600 sm:text-[5px] md:text-[7px] lg:mt-3 lg:text-[13px] lg:leading-6">
                      {item.description}
                    </p>

                    <button
                      type="button"
                      className="mt-2 flex w-full items-center justify-center gap-1 rounded bg-[#EEFFFF] px-1 py-1 text-[3.5px] font-bold uppercase text-cyan-800 sm:mt-3 sm:text-[5px] md:mt-4 md:py-2 md:text-[7px] lg:mt-6 lg:py-3 lg:text-[11px]"
                    >
                      <ExternalLink className="h-[6px] w-[6px] lg:h-[15px] lg:w-[15px]" />
                      Xem chứng chỉ
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {about.gallery && (
        <section className="border-b border-slate-100 bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 max-w-3xl sm:mb-6 md:mb-8 lg:mb-12">
              <div className="text-[5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[11px]">
                {about.gallery.eyebrow}
              </div>

              <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[42px]">
                {about.gallery.title}
              </h2>

              <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] md:text-[9px] lg:mt-4 lg:text-[15px] lg:leading-7">
                {about.gallery.description}
              </p>
            </div>

            <div className="grid grid-cols-12 gap-1.5 sm:gap-3 md:gap-4 lg:gap-6">
              {about.gallery.items?.map(
                (item, index) => {
                  const layout =
                    galleryLayout[index] ||
                    galleryLayout[
                      galleryLayout.length - 1
                    ];

                  return (
                    <div
                      key={`${item.title}-${index}`}
                      className={`group relative overflow-hidden rounded-md border border-slate-100 bg-slate-100 sm:rounded-lg md:rounded-xl lg:rounded-2xl ${layout.span} ${layout.minHeight}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2.5 md:p-4 lg:p-6">
                        <div className="inline-flex rounded-full border border-[#99FFFF] bg-white/90 px-1 py-0.5 text-[3.5px] font-bold uppercase text-cyan-800 sm:text-[5px] md:px-2 md:text-[7px] lg:px-3 lg:py-1 lg:text-[9px]">
                          DR. TRUNG
                        </div>

                        <h3 className="mt-1 text-[6px] font-bold text-slate-950 sm:text-[9px] md:text-[13px] lg:mt-3 lg:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-0.5 max-w-xl text-[4px] leading-[6px] text-slate-600 sm:text-[5px] md:text-[7px] lg:mt-2 lg:text-[13px] lg:leading-6">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      )}

      {about.cta && (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FFFF] to-[#EEFFFF] px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-28">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF] bg-white px-2 py-1 text-[4px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[6px] md:px-3 md:text-[8px] lg:px-4 lg:py-2 lg:text-[10px]">
              {about.cta.eyebrow}
            </div>

            <h2 className="mt-3 text-[15px] font-extrabold tracking-[-0.04em] text-slate-950 min-[430px]:text-[18px] sm:text-[24px] md:text-[32px] lg:mt-6 lg:text-[48px]">
              {about.cta.title}
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-[5px] leading-[8px] text-slate-600 sm:text-[7px] md:text-[10px] lg:mt-5 lg:text-[16px] lg:leading-8">
              {about.cta.description}
            </p>

            <div className="mt-3 flex flex-row justify-center gap-1.5 sm:mt-4 sm:gap-2 md:mt-6 md:gap-3 lg:mt-8 lg:gap-4">
              <Link
                href={about.cta.primarySlug}
                className="group inline-flex min-h-[26px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-2 text-[4.5px] font-bold uppercase tracking-wide text-slate-950 sm:min-h-[32px] sm:px-3 sm:text-[6px] md:min-h-[42px] md:px-5 md:text-[8px] lg:min-h-[54px] lg:px-8 lg:text-[12px]"
              >
                <CalendarDays className="h-[7px] w-[7px] lg:h-[18px] lg:w-[18px]" />
                {about.cta.primaryText}
                <ArrowRight className="h-[7px] w-[7px] lg:h-[17px] lg:w-[17px]" />
              </Link>

              <Link
                href={about.cta.secondarySlug}
                className="inline-flex min-h-[26px] items-center justify-center gap-1 rounded-md border border-slate-200 bg-white px-2 text-[4.5px] font-bold uppercase tracking-wide text-slate-800 sm:min-h-[32px] sm:px-3 sm:text-[6px] md:min-h-[42px] md:px-5 md:text-[8px] lg:min-h-[54px] lg:px-8 lg:text-[12px]"
              >
                <Microscope className="h-[7px] w-[7px] text-cyan-700 lg:h-[18px] lg:w-[18px]" />
                {about.cta.secondaryText}
              </Link>
            </div>

            <div className="mt-3 flex flex-row flex-wrap justify-center gap-2 text-[4px] font-semibold text-slate-500 sm:mt-4 sm:text-[5px] md:text-[7px] lg:mt-8 lg:gap-5 lg:text-[11px]">
              {about.cta.assurances?.map(
                (item, index) => {
                  const Icon = [
                    ShieldCheck,
                    CheckCircle2,
                    Award,
                  ][index] || CheckCircle2;

                  return (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-center gap-1"
                    >
                      <Icon className="h-[7px] w-[7px] text-cyan-700 lg:h-[15px] lg:w-[15px]" />
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
