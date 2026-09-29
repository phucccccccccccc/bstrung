import Link from "next/link";

import {
  ArrowRight,
  Bone,
  Microscope,
  ScanLine,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Chuyên môn | Bác sĩ Trung",
  description:
    "Các lĩnh vực chuyên môn chính của Bác sĩ Trung trong Implant, phục hình, khớp cắn và nha khoa thẩm mỹ.",
};

const iconMap = {
  implant: ScanLine,
  veneer: Sparkles,
  bite: Bone,
  cosmetic: Microscope,
};

async function getSpecialtiesData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api";

  const response = await fetch(
    `${baseUrl}/pages/specialties/public`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Không thể tải dữ liệu Chuyên môn"
    );
  }

  return response.json();
}

export default async function SpecialtiesPage() {
  const data =
    await getSpecialtiesData();

  return (
    <main className="overflow-hidden bg-white">
      {data.hero && (
        <section
          className="
            relative overflow-hidden
            bg-gradient-to-b from-white via-[#F8FFFF] to-white
            px-2 py-8
            min-[430px]:px-3
            min-[430px]:py-10
            sm:px-4 sm:py-12
            md:px-6 md:py-16
            lg:px-10 lg:py-24
          "
        >
          <div className="pointer-events-none absolute right-0 top-0 h-[140px] w-[140px] rounded-full bg-[#CCFFFF]/40 blur-[55px] sm:h-[240px] sm:w-[240px] sm:blur-[80px] lg:h-[450px] lg:w-[450px] lg:blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="text-[5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[11px] lg:tracking-[0.16em]">
                {data.hero.eyebrow}
              </div>

              <h1 className="mt-1.5 text-[18px] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 min-[430px]:text-[21px] sm:mt-2 sm:text-[28px] md:text-[38px] lg:mt-3 lg:text-[58px]">
                {data.hero.titleBefore}{" "}
                <span className="text-cyan-900">
                  {data.hero.titleHighlight}
                </span>
              </h1>

              <p className="mt-2 max-w-2xl text-[6px] leading-[10px] text-slate-600 min-[430px]:text-[7px] min-[430px]:leading-[12px] sm:mt-3 sm:text-[9px] sm:leading-4 md:text-[12px] md:leading-5 lg:mt-6 lg:text-[18px] lg:leading-8">
                {data.hero.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {data.items && (
        <section
          className="
            border-t border-slate-100
            bg-[#F8FFFF]
            px-2 py-8
            min-[430px]:px-3
            min-[430px]:py-10
            sm:px-4 sm:py-12
            md:px-6 md:py-16
            lg:px-10 lg:py-24
          "
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-2 min-[430px]:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {data.items.items?.map(
                (item, index) => {
                  const Icon =
                    iconMap[
                      item.iconKey
                    ] ||
                    Microscope;

                  return (
                    <Link
                      key={
                        item.id ??
                        item.slug ??
                        index
                      }
                      href={item.slug}
                      className="
                        group rounded-lg border border-slate-100
                        bg-white p-2 transition-all duration-300
                        min-[430px]:p-2.5
                        sm:rounded-xl sm:p-3.5
                        md:rounded-2xl md:p-5
                        lg:rounded-3xl lg:p-7
                        hover:-translate-y-1
                        hover:border-[#66FFFF]
                        hover:shadow-[0_20px_50px_rgba(0,206,209,0.10)]
                      "
                    >
                      <div className="flex items-start justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#EEFFFF] text-cyan-800 transition min-[430px]:h-8 min-[430px]:w-8 sm:h-9 sm:w-9 sm:rounded-lg md:h-11 md:w-11 md:rounded-xl lg:h-14 lg:w-14 lg:rounded-2xl group-hover:bg-[#00FFFF] group-hover:text-slate-950">
                          <Icon className="h-[12px] w-[12px] min-[430px]:h-[14px] min-[430px]:w-[14px] sm:h-[16px] sm:w-[16px] md:h-[20px] md:w-[20px] lg:h-[26px] lg:w-[26px]" />
                        </div>

                        <span className="text-[16px] font-extrabold text-[#CCFFFF] min-[430px]:text-[18px] sm:text-[22px] md:text-[28px] lg:text-4xl">
                          {item.number ||
                            String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                        </span>
                      </div>

                      <h2 className="mt-3 text-[8px] font-bold leading-[11px] text-slate-950 min-[430px]:text-[9px] min-[430px]:leading-[13px] sm:mt-4 sm:text-[12px] sm:leading-4 md:text-[16px] md:leading-6 lg:mt-8 lg:text-2xl">
                        {item.title}
                      </h2>

                      <p className="mt-1.5 text-[5px] leading-[8px] text-slate-600 min-[430px]:text-[5.5px] min-[430px]:leading-[9px] sm:mt-2 sm:text-[7px] sm:leading-3 md:mt-3 md:text-[10px] md:leading-5 lg:mt-4 lg:text-[14px] lg:leading-7">
                        {
                          item.description
                        }
                      </p>

                      <div className="mt-3 flex items-center gap-1 border-t border-slate-100 pt-2 text-[4.5px] font-bold uppercase tracking-wide text-cyan-800 min-[430px]:text-[5px] sm:mt-4 sm:pt-3 sm:text-[6px] md:mt-5 md:gap-1.5 md:pt-4 md:text-[8px] lg:mt-7 lg:gap-2 lg:pt-5 lg:text-[11px]">
                        Xem chi tiết chuyên môn

                        <ArrowRight className="h-[7px] w-[7px] transition-transform group-hover:translate-x-1 sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[15px] lg:w-[15px]" />
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </section>
      )}

      {data.cta && (
        <section className="bg-white px-2 py-8 min-[430px]:px-3 min-[430px]:py-10 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-5xl rounded-xl border border-[#CCFFFF] bg-gradient-to-br from-[#F8FFFF] to-white p-4 text-center shadow-[0_10px_30px_rgba(0,180,180,0.06)] min-[430px]:p-5 sm:rounded-2xl sm:p-6 md:p-8 lg:rounded-3xl lg:p-12 lg:shadow-[0_20px_60px_rgba(0,180,180,0.08)]">
            <div className="text-[5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[7px] md:text-[8px] lg:text-[11px] lg:tracking-[0.15em]">
              {data.cta.eyebrow}
            </div>

            <h2 className="mx-auto mt-1.5 max-w-2xl text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:mt-2 sm:text-[21px] md:text-[28px] lg:mt-3 lg:text-[40px]">
              {data.cta.title}
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-[5.5px] leading-[9px] text-slate-600 sm:mt-3 sm:text-[7px] sm:leading-3 md:text-[10px] md:leading-5 lg:mt-4 lg:text-[14px] lg:leading-7">
              {data.cta.description}
            </p>

            <Link
              href={
                data.cta.buttonSlug ||
                "/appointment"
              }
              className="mt-3 inline-flex min-h-[28px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-3 text-[5px] font-bold uppercase tracking-wide text-slate-950 transition hover:bg-[#33FFFF] min-[430px]:text-[6px] sm:mt-4 sm:min-h-[34px] sm:rounded-lg sm:px-4 sm:text-[7px] md:mt-5 md:min-h-[42px] md:px-6 md:text-[9px] lg:mt-7 lg:min-h-[52px] lg:gap-3 lg:rounded-xl lg:px-7 lg:text-[12px]"
            >
              {data.cta.buttonText}

              <ArrowRight className="h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] md:h-[12px] md:w-[12px] lg:h-[16px] lg:w-[16px]" />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
