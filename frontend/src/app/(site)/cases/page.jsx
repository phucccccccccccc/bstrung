"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  CircleCheck,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api";

const standardIconMap = {
  scan: ScanLine,
  shield: ShieldCheck,
  badge: BadgeCheck,
  sparkles: Sparkles,
};

export default function CasesPage() {
  const [pageData, setPageData] =
    useState(null);
  const [cases, setCases] =
    useState([]);
  const [activeFilter, setActiveFilter] =
    useState("all");
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError("");

        const [
          pageResponse,
          casesResponse,
        ] = await Promise.all([
          fetch(
            `${baseUrl}/pages/cases/public`,
            {
              cache: "no-store",
            }
          ),
          fetch(
            `${baseUrl}/cases/public`,
            {
              cache: "no-store",
            }
          ),
        ]);

        if (
          !pageResponse.ok ||
          !casesResponse.ok
        ) {
          throw new Error(
            "Không thể tải dữ liệu ca điều trị"
          );
        }

        const pageJson =
          await pageResponse.json();
        const casesJson =
          await casesResponse.json();

        setPageData(pageJson);
        setCases(casesJson);
      } catch (err) {
        console.error(
          "CASES PUBLIC ERROR:",
          err
        );

        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filters = useMemo(() => {
    const map = new Map();

    cases.forEach((item) => {
      if (
        item.categoryKey &&
        item.categoryLabel
      ) {
        map.set(
          item.categoryKey,
          item.categoryLabel
        );
      }
    });

    return [
      {
        key: "all",
        label: "Tất cả",
      },
      ...Array.from(
        map.entries()
      ).map(([key, label]) => ({
        key,
        label,
      })),
    ];
  }, [cases]);

  const filteredCases =
    activeFilter === "all"
      ? cases
      : cases.filter(
          (item) =>
            item.categoryKey ===
            activeFilter
        );

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-[12px] font-semibold text-cyan-800">
          Đang tải ca điều trị...
        </div>
      </main>
    );
  }

  if (error || !pageData) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white p-6">
        <div className="rounded-2xl border border-red-100 bg-white p-6 text-center">
          <div className="font-bold text-red-600">
            Không tải được dữ liệu
          </div>

          <p className="mt-2 text-[11px] text-slate-500">
            {error}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-white">
      {pageData.hero && (
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#F8FFFF] via-white to-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute left-1/2 top-[-50px] h-[170px] w-[250px] -translate-x-1/2 rounded-full bg-[#CCFFFF]/45 blur-[55px] sm:h-[280px] sm:w-[400px] sm:blur-[80px] lg:top-[-150px] lg:h-[500px] lg:w-[700px] lg:blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF] bg-white px-2 py-1 text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:px-3 md:text-[8px] lg:gap-2 lg:px-4 lg:py-2 lg:text-[10px]">
              <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-600 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2" />
              {pageData.hero.eyebrow}
            </div>

            <h1 className="mx-auto mt-3 max-w-4xl text-[18px] font-extrabold tracking-[-0.045em] text-slate-950 min-[430px]:text-[21px] sm:text-[28px] md:text-[38px] lg:mt-6 lg:text-[60px]">
              {pageData.hero.titleBefore}{" "}
              <span className="text-cyan-900">
                {pageData.hero.titleHighlight}
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-3xl text-[6px] leading-[10px] text-slate-600 sm:mt-3 sm:text-[8px] sm:leading-4 md:text-[11px] md:leading-5 lg:mt-6 lg:text-[18px] lg:leading-8">
              {pageData.hero.description}
            </p>

            <div className="mx-auto mt-4 grid max-w-4xl grid-cols-3 gap-1 sm:mt-6 sm:gap-2 md:mt-8 md:gap-3 lg:mt-10 lg:gap-4">
              {pageData.hero.steps?.map(
                (item, index) => (
                  <div
                    key={`${item.number}-${index}`}
                    className="rounded-md border border-slate-100 bg-white p-2 shadow-sm sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-5"
                  >
                    <div className="text-[12px] font-extrabold text-cyan-800 sm:text-[18px] md:text-[23px] lg:text-3xl">
                      {item.number}
                    </div>

                    <div className="mt-0.5 text-[3.5px] font-bold uppercase tracking-wide text-slate-700 sm:text-[5px] md:text-[7px] lg:mt-1 lg:text-[11px]">
                      {item.label}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      <section className="sticky top-[64px] z-30 border-b border-slate-100 bg-white/95 backdrop-blur-xl xl:top-[78px]">
        <div className="mx-auto flex max-w-7xl justify-center gap-1 overflow-x-auto px-2 py-2 sm:gap-2 sm:px-4 md:px-6 lg:gap-3 lg:px-10 lg:py-4">
          {filters.map(
            (filter) => {
              const active =
                activeFilter ===
                filter.key;

              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() =>
                    setActiveFilter(
                      filter.key
                    )
                  }
                  className={`whitespace-nowrap rounded-full px-2 py-1 text-[4px] font-bold uppercase tracking-wide transition-all sm:px-3 sm:text-[6px] md:px-4 md:py-1.5 md:text-[8px] lg:px-5 lg:py-2.5 lg:text-[11px] ${
                    active
                      ? "bg-[#00FFFF] text-slate-950 shadow-[0_6px_20px_rgba(0,255,255,0.25)]"
                      : "bg-[#F8FFFF] text-slate-600 hover:bg-[#CCFFFF]/50"
                  }`}
                >
                  {filter.label}
                </button>
              );
            }
          )}
        </div>
      </section>

      <section className="bg-[#F8FFFF]/40 px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-3 sm:space-y-5 md:space-y-7 lg:space-y-10">
          {filteredCases.map(
            (item, index) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-lg border border-slate-100 bg-white p-2 shadow-[0_5px_18px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-[#66FFFF] sm:rounded-xl sm:p-3 md:rounded-2xl md:p-5 lg:rounded-[28px] lg:p-9"
              >
                <div className="grid grid-cols-12 items-center gap-2 sm:gap-4 md:gap-6 lg:gap-9">
                  <div
                    className={`col-span-7 space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 ${
                      index % 2 !== 0
                        ? "order-2"
                        : ""
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1 sm:gap-2 lg:gap-3">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100 sm:rounded-lg md:rounded-xl lg:rounded-2xl">
                        <img
                          src={item.beforeImage}
                          alt={`Trước điều trị - ${item.title}`}
                          className="h-full w-full object-cover"
                        />

                        <span className="absolute bottom-1 left-1 rounded bg-slate-950/80 px-1 py-0.5 text-[3px] font-bold uppercase text-white sm:text-[4px] md:bottom-2 md:left-2 md:px-2 md:text-[6px] lg:bottom-3 lg:left-3 lg:px-3 lg:py-1.5 lg:text-[9px]">
                          Trước
                        </span>
                      </div>

                      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[#66FFFF] bg-slate-100 sm:rounded-lg md:rounded-xl lg:rounded-2xl">
                        <img
                          src={item.afterImage}
                          alt={`Sau điều trị - ${item.title}`}
                          className="h-full w-full object-cover"
                        />

                        <span className="absolute bottom-1 left-1 rounded bg-[#00FFFF] px-1 py-0.5 text-[3px] font-bold uppercase text-slate-950 sm:text-[4px] md:bottom-2 md:left-2 md:px-2 md:text-[6px] lg:bottom-3 lg:left-3 lg:px-3 lg:py-1.5 lg:text-[9px]">
                          Sau
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1 sm:gap-2 lg:gap-3">
                      <div className="rounded-md bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2.5 md:p-3 lg:rounded-xl lg:p-4">
                        <div className="text-[3px] font-bold uppercase tracking-[0.07em] text-slate-400 sm:text-[4.5px] md:text-[6px] lg:text-[9px]">
                          Tình trạng ban đầu
                        </div>

                        <p className="mt-0.5 text-[4px] font-semibold leading-[6px] text-slate-700 sm:text-[5px] md:text-[7px] lg:mt-2 lg:text-[12px] lg:leading-5">
                          {item.initial}
                        </p>
                      </div>

                      <div className="rounded-md bg-[#F8FFFF] p-1.5 sm:rounded-lg sm:p-2.5 md:p-3 lg:rounded-xl lg:p-4">
                        <div className="text-[3px] font-bold uppercase tracking-[0.07em] text-cyan-700 sm:text-[4.5px] md:text-[6px] lg:text-[9px]">
                          Kết quả theo dõi
                        </div>

                        <p className="mt-0.5 text-[4px] font-semibold leading-[6px] text-slate-700 sm:text-[5px] md:text-[7px] lg:mt-2 lg:text-[12px] lg:leading-5">
                          {item.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`col-span-5 ${
                      index % 2 !== 0
                        ? "order-1"
                        : ""
                    }`}
                  >
                    <div className="text-[3.5px] font-bold uppercase tracking-[0.07em] text-cyan-800 sm:text-[5px] md:text-[7px] lg:text-[10px]">
                      {item.categoryLabel}
                    </div>

                    <div className="mt-0.5 text-[3.5px] font-semibold text-slate-400 sm:text-[5px] md:text-[7px] lg:mt-2 lg:text-[10px]">
                      {item.code}
                    </div>

                    <h2 className="mt-1 text-[8px] font-extrabold leading-[10px] tracking-[-0.025em] text-slate-950 sm:text-[11px] md:mt-2 md:text-[16px] lg:mt-4 lg:text-[30px]">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-[4px] leading-[7px] text-slate-600 sm:text-[5.5px] md:mt-2 md:text-[8px] lg:mt-5 lg:text-[14px] lg:leading-7">
                      {item.description}
                    </p>

                    <div className="mt-2 space-y-1 sm:mt-3 md:mt-4 lg:mt-6 lg:space-y-3">
                      {item.details?.map(
                        (detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-1 text-[3.5px] text-slate-700 sm:text-[5px] md:text-[7px] lg:gap-3 lg:text-[13px]"
                          >
                            <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#CCFFFF]/70 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6">
                              <Check className="h-[5px] w-[5px] text-cyan-800 lg:h-[14px] lg:w-[14px]" />
                            </span>
                            {detail}
                          </div>
                        )
                      )}
                    </div>

                    <Link
                      href={`/cases/${item.slug}`}
                      className="group mt-2 inline-flex items-center gap-1 text-[3.5px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[5px] md:mt-3 md:text-[7px] lg:mt-7 lg:gap-2 lg:text-[11px]"
                    >
                      Xem hồ sơ chi tiết

                      <ArrowRight className="h-[6px] w-[6px] transition-transform group-hover:translate-x-1 lg:h-[16px] lg:w-[16px]" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          )}

          {filteredCases.length === 0 && (
            <div className="rounded-md border border-slate-100 bg-white p-4 text-center text-[6px] text-slate-500 sm:text-[8px] md:p-7 md:text-[11px] lg:rounded-2xl lg:p-12 lg:text-base">
              Chưa có ca điều trị trong nhóm này.
            </div>
          )}
        </div>
      </section>

      {pageData.standards && (
        <section className="bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-4 max-w-3xl text-center sm:mb-6 md:mb-8 lg:mb-12">
              <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[11px]">
                {pageData.standards.eyebrow}
              </div>

              <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[42px]">
                {pageData.standards.title}
              </h2>

              <p className="mt-2 text-[5px] leading-[8px] text-slate-600 sm:text-[7px] md:text-[9px] lg:mt-4 lg:text-[14px] lg:leading-7">
                {pageData.standards.description}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-3 lg:gap-5">
              {pageData.standards.items?.map(
                (item, index) => {
                  const Icon =
                    standardIconMap[
                      item.iconKey
                    ] ||
                    ShieldCheck;

                  return (
                    <div
                      key={`${item.title}-${index}`}
                      className="group rounded-md border border-slate-100 bg-white p-1.5 transition-all hover:border-[#66FFFF] sm:rounded-lg sm:p-2.5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded bg-[#CCFFFF]/45 text-cyan-800 sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-12 lg:w-12 lg:rounded-xl">
                        <Icon className="h-[8px] w-[8px] sm:h-[11px] sm:w-[11px] md:h-[16px] md:w-[16px] lg:h-[22px] lg:w-[22px]" />
                      </div>

                      <h3 className="mt-2 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] md:mt-3 md:text-[10px] lg:mt-5 lg:text-[16px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] md:mt-2 md:text-[7px] lg:mt-3 lg:text-[13px] lg:leading-6">
                        {item.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      )}

      {pageData.disclaimer && (
        <section className="border-y border-slate-100 bg-[#F8FFFF] px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-8">
          <div className="mx-auto flex max-w-5xl items-start gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
            <CircleCheck className="mt-0.5 h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:h-[20px] lg:w-[20px]" />

            <p className="text-[4px] leading-[7px] text-slate-500 sm:text-[5.5px] md:text-[8px] lg:text-[12px] lg:leading-6">
              {pageData.disclaimer.text}
            </p>
          </div>
        </section>
      )}

      {pageData.cta && (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FFFF] to-[#EEFFFF] px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-12 items-center gap-2 rounded-lg border border-[#CCFFFF] bg-white p-3 sm:gap-4 sm:rounded-xl sm:p-4 md:gap-6 md:rounded-2xl md:p-7 lg:gap-8 lg:rounded-[28px] lg:p-12">
            <div className="col-span-8">
              <div className="text-[3.5px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[5px] md:text-[7px] lg:text-[10px]">
                {pageData.cta.eyebrow}
              </div>

              <h2 className="mt-1 text-[13px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[15px] sm:text-[20px] md:text-[27px] lg:mt-3 lg:text-[40px]">
                {pageData.cta.title}
              </h2>

              <p className="mt-1.5 max-w-2xl text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] md:mt-2 md:text-[8px] lg:mt-4 lg:text-[14px] lg:leading-7">
                {pageData.cta.description}
              </p>
            </div>

            <div className="col-span-4 flex justify-end">
              <Link
                href={
                  pageData.cta.buttonSlug ||
                  "/appointment"
                }
                className="group inline-flex min-h-[27px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-2 text-[4px] font-bold uppercase tracking-wide text-slate-950 sm:min-h-[32px] sm:px-3 sm:text-[6px] md:min-h-[42px] md:px-5 md:text-[8px] lg:min-h-[54px] lg:gap-3 lg:px-7 lg:text-[12px]"
              >
                <CalendarDays className="h-[7px] w-[7px] lg:h-[18px] lg:w-[18px]" />

                {pageData.cta.buttonText}

                <ArrowRight className="h-[7px] w-[7px] lg:h-[16px] lg:w-[16px]" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
