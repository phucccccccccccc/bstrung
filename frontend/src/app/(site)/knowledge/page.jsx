"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Clock,
  Play,
  Search,
  Sparkles,
  Video,
} from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default function KnowledgePage() {
  const [pageData, setPageData] =
    useState(null);

  const [articles, setArticles] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
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
          articlesResponse,
        ] = await Promise.all([
          fetch(
            `${baseUrl}/pages/knowledge/public`,
            {
              cache: "no-store",
            }
          ),
          fetch(
            `${baseUrl}/knowledge/public`,
            {
              cache: "no-store",
            }
          ),
        ]);

        if (
          !pageResponse.ok ||
          !articlesResponse.ok
        ) {
          throw new Error(
            "Không thể tải dữ liệu kiến thức"
          );
        }

        setPageData(
          await pageResponse.json()
        );

        setArticles(
          await articlesResponse.json()
        );
      } catch (err) {
        console.error(
          "KNOWLEDGE PUBLIC ERROR:",
          err
        );

        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const categories =
    useMemo(() => {
      const map = new Map();

      articles.forEach(
        (article) => {
          if (
            article.categoryKey &&
            article.categoryLabel
          ) {
            map.set(
              article.categoryKey,
              article.categoryLabel
            );
          }
        }
      );

      return [
        {
          key: "all",
          label:
            "Tất cả kiến thức",
        },
        ...Array.from(
          map.entries()
        ).map(
          ([key, label]) => ({
            key,
            label,
          })
        ),
      ];
    }, [articles]);

  const filteredArticles =
    useMemo(() => {
      const keyword =
        search
          .trim()
          .toLowerCase();

      return articles.filter(
        (article) => {
          const matchCategory =
            category === "all" ||
            article.categoryKey ===
              category;

          const matchSearch =
            !keyword ||
            article.title
              .toLowerCase()
              .includes(keyword) ||
            (article.excerpt || "")
              .toLowerCase()
              .includes(keyword) ||
            (article.categoryLabel ||
              "")
              .toLowerCase()
              .includes(keyword);

          return (
            matchCategory &&
            matchSearch
          );
        }
      );
    }, [
      articles,
      search,
      category,
    ]);

  const featuredArticle =
    articles.find(
      (item) => item.featured
    ) || articles[0];

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-[12px] font-semibold text-cyan-800">
          Đang tải kiến thức...
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
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FFFF] via-white to-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute left-1/2 top-[-60px] h-[180px] w-[260px] -translate-x-1/2 rounded-full bg-[#CCFFFF]/40 blur-[60px] sm:h-[300px] sm:w-[460px] sm:blur-[90px] lg:top-[-160px] lg:h-[520px] lg:w-[800px] lg:blur-[130px]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-1 rounded-full border border-[#99FFFF] bg-white px-2 py-1 sm:gap-1.5 sm:px-3 md:px-4 md:py-1.5 lg:gap-2 lg:py-2">
                <BadgeCheck className="h-[7px] w-[7px] text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[13px] md:w-[13px] lg:h-[16px] lg:w-[16px]" />

                <span className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px]">
                  {
                    pageData.hero
                      .eyebrow
                  }
                </span>
              </div>

              <h1 className="mt-3 text-[18px] font-extrabold tracking-[-0.045em] text-slate-950 min-[430px]:text-[21px] sm:text-[28px] md:text-[38px] lg:mt-6 lg:text-[60px]">
                {
                  pageData.hero
                    .titleBefore
                }{" "}
                <span className="text-cyan-900">
                  {
                    pageData.hero
                      .titleHighlight
                  }
                </span>
              </h1>

              <p className="mt-2 max-w-3xl text-[6px] leading-[10px] text-slate-600 sm:mt-3 sm:text-[8px] sm:leading-4 md:text-[11px] md:leading-5 lg:mt-6 lg:text-[18px] lg:leading-8">
                {
                  pageData.hero
                    .description
                }
              </p>
            </div>

            <div className="mt-4 max-w-4xl rounded-md border border-slate-100 bg-white p-1.5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] sm:mt-6 sm:rounded-lg sm:p-2.5 md:mt-8 md:rounded-xl md:p-3 lg:mt-10 lg:rounded-2xl lg:p-4">
              <div className="flex flex-row gap-1 sm:gap-2 lg:gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-1/2 h-[7px] w-[7px] -translate-y-1/2 text-slate-400 sm:left-3 sm:h-[10px] sm:w-[10px] md:h-[13px] md:w-[13px] lg:left-4 lg:h-[20px] lg:w-[20px]" />

                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(
                        e.target.value
                      )
                    }
                    type="text"
                    placeholder={
                      pageData.hero
                        .searchPlaceholder
                    }
                    className="w-full rounded-md border border-slate-100 bg-[#F8FFFF] py-1.5 pl-5 pr-2 text-[4.5px] text-slate-900 outline-none transition focus:border-[#66FFFF] focus:bg-white sm:rounded-lg sm:py-2 sm:pl-7 sm:text-[6px] md:py-2.5 md:pl-9 md:text-[9px] lg:rounded-xl lg:py-4 lg:pl-12 lg:pr-4 lg:text-[14px]"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex min-h-[24px] shrink-0 items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-2 text-[4px] font-bold uppercase tracking-wide text-slate-950 transition hover:bg-[#33FFFF] sm:min-h-[30px] sm:px-3 sm:text-[6px] md:min-h-[38px] md:px-4 md:text-[8px] lg:min-h-[52px] lg:gap-2 lg:px-7 lg:text-[11px]"
                >
                  Tra cứu
                  <ArrowRight className="h-[6px] w-[6px] lg:h-[16px] lg:w-[16px]" />
                </button>
              </div>

              <div className="mt-2 flex flex-row flex-wrap items-center gap-1 sm:mt-3 lg:mt-4">
                <span className="mr-0.5 text-[3px] font-bold uppercase tracking-wide text-slate-400 sm:text-[4.5px] md:text-[6px] lg:mr-1 lg:text-[10px]">
                  {
                    pageData.hero
                      .keywordLabel
                  }
                </span>

                {pageData.hero.popularKeywords?.map(
                  (keyword) => (
                    <button
                      key={keyword}
                      type="button"
                      onClick={() =>
                        setSearch(
                          keyword
                        )
                      }
                      className="rounded-full bg-slate-50 px-1.5 py-0.5 text-[3px] text-slate-600 transition hover:bg-[#CCFFFF]/50 hover:text-cyan-800 sm:px-2 sm:text-[4.5px] md:text-[6px] lg:px-3 lg:py-1.5 lg:text-[11px]"
                    >
                      {keyword}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="sticky top-[64px] z-30 border-y border-slate-100 bg-white/95 backdrop-blur-xl xl:top-[78px]">
        <div className="mx-auto flex max-w-7xl justify-center gap-1 overflow-x-auto px-2 py-2 sm:gap-2 sm:px-4 md:px-6 lg:gap-3 lg:px-10 lg:py-4">
          {categories.map(
            (item) => {
              const active =
                category ===
                item.key;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() =>
                    setCategory(
                      item.key
                    )
                  }
                  className={`whitespace-nowrap rounded-full px-2 py-1 text-[4px] font-bold uppercase tracking-wide transition-all sm:px-3 sm:text-[6px] md:px-4 md:py-1.5 md:text-[8px] lg:px-5 lg:py-2.5 lg:text-[11px] ${
                    active
                      ? "bg-[#00FFFF] text-slate-950 shadow-sm"
                      : "bg-[#F8FFFF] text-slate-600 hover:bg-[#CCFFFF]/50"
                  }`}
                >
                  {item.label}
                </button>
              );
            }
          )}
        </div>
      </section>

      {pageData.featured &&
        featuredArticle && (
          <section className="bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-3 sm:mb-5 md:mb-7 lg:mb-8">
                <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px]">
                  {
                    pageData
                      .featured
                      .eyebrow
                  }
                </div>

                <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-3xl">
                  {
                    pageData
                      .featured.title
                  }
                </h2>
              </div>

              <Link
                href={`/knowledge/${featuredArticle.slug}`}
                className="group grid grid-cols-12 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition hover:border-[#66FFFF] sm:rounded-xl md:rounded-2xl lg:rounded-[28px]"
              >
                <div className="relative col-span-7 min-h-[125px] overflow-hidden bg-slate-100 sm:min-h-[200px] md:min-h-[300px] lg:min-h-[500px]">
                  <img
                    src={
                      featuredArticle.thumbnail
                    }
                    alt={
                      featuredArticle.title
                    }
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute bottom-1 left-1 rounded bg-white/95 px-1 py-0.5 text-[3px] font-bold uppercase text-cyan-800 sm:text-[4.5px] md:px-2 md:text-[6px] lg:bottom-5 lg:left-5 lg:px-4 lg:py-2 lg:text-[10px]">
                    {
                      featuredArticle.categoryLabel
                    }
                  </div>
                </div>

                <div className="col-span-5 flex flex-col justify-center p-2 sm:p-3 md:p-5 lg:p-10">
                  <div className="flex items-center gap-1 text-[3px] text-slate-400 sm:text-[4.5px] md:text-[6px] lg:text-[11px]">
                    <span>
                      {
                        featuredArticle.date
                      }
                    </span>

                    <span className="flex items-center gap-0.5">
                      <Clock className="h-[5px] w-[5px] lg:h-[14px] lg:w-[14px]" />
                      {
                        featuredArticle.readTime
                      }
                    </span>
                  </div>

                  <h3 className="mt-1.5 text-[7px] font-extrabold leading-[9px] text-slate-950 sm:text-[10px] md:text-[15px] lg:mt-5 lg:text-[32px] lg:leading-tight">
                    {
                      featuredArticle.title
                    }
                  </h3>

                  <p className="mt-1 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] md:text-[7px] lg:mt-5 lg:text-[14px] lg:leading-7">
                    {
                      featuredArticle.excerpt
                    }
                  </p>

                  <div className="mt-2 flex items-center justify-between rounded-md bg-[#F8FFFF] p-1.5 sm:mt-3 md:mt-4 lg:mt-7 lg:p-4">
                    <div>
                      <div className="text-[3px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[4px] md:text-[6px] lg:text-[10px]">
                        {
                          pageData
                            .featured
                            .authorLabel
                        }
                      </div>

                      <div className="mt-0.5 text-[4px] font-bold text-slate-950 sm:text-[5.5px] md:text-[8px] lg:text-base">
                        {
                          pageData
                            .featured
                            .authorName
                        }
                      </div>
                    </div>

                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#00FFFF] text-slate-950 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10">
                      <ArrowRight className="h-[6px] w-[6px] lg:h-[18px] lg:w-[18px]" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

      {pageData.library && (
        <section className="border-y border-slate-100 bg-[#F8FFFF]/50 px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 flex flex-row items-end justify-between gap-2 sm:mb-5 md:mb-7 lg:mb-10">
              <div>
                <div className="text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px]">
                  {
                    pageData.library
                      .eyebrow
                  }
                </div>

                <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[40px]">
                  {
                    pageData.library
                      .title
                  }
                </h2>
              </div>

              <div className="shrink-0 text-[4px] text-slate-500 sm:text-[6px] md:text-[8px] lg:text-[12px]">
                {
                  filteredArticles.length
                }{" "}
                bài viết
              </div>
            </div>

            {filteredArticles.length >
            0 ? (
              <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6">
                {filteredArticles.map(
                  (article) => (
                    <Link
                      key={article.id}
                      href={`/knowledge/${article.slug}`}
                      className="group flex flex-col overflow-hidden rounded-md border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#66FFFF] sm:rounded-lg md:rounded-xl lg:rounded-2xl"
                    >
                      <div className="relative h-[70px] overflow-hidden bg-slate-100 sm:h-[115px] md:h-[165px] lg:h-60">
                        <img
                          src={
                            article.thumbnail
                          }
                          alt={
                            article.title
                          }
                          className="h-full w-full object-cover"
                        />

                        <span className="absolute left-1 top-1 rounded bg-white/95 px-1 py-0.5 text-[3px] font-bold uppercase text-cyan-800 sm:text-[4px] md:left-2 md:top-2 md:px-2 md:text-[6px] lg:left-4 lg:top-4 lg:px-3 lg:py-1.5 lg:text-[9px]">
                          {
                            article.categoryLabel
                          }
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-1.5 sm:p-2.5 md:p-4 lg:p-6">
                        <div className="flex items-center gap-1 text-[3px] text-slate-400 sm:text-[4px] md:text-[6px] lg:text-[10px]">
                          <span>
                            {
                              article.date
                            }
                          </span>

                          <span className="flex items-center gap-0.5">
                            <Clock className="h-[5px] w-[5px] lg:h-[13px] lg:w-[13px]" />
                            {
                              article.readTime
                            }
                          </span>
                        </div>

                        <h3 className="mt-1 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] md:mt-2 md:text-[10px] lg:mt-4 lg:text-[18px] lg:leading-7">
                          {
                            article.title
                          }
                        </h3>

                        <p className="mt-1 line-clamp-3 text-[3.5px] leading-[6px] text-slate-600 sm:text-[5px] md:text-[7px] lg:mt-3 lg:text-[13px] lg:leading-6">
                          {
                            article.excerpt
                          }
                        </p>
                      </div>
                    </Link>
                  )
                )}
              </div>
            ) : (
              <div className="rounded-md border border-slate-100 bg-white p-4 text-center lg:rounded-2xl lg:p-12">
                Không tìm thấy bài viết
              </div>
            )}
          </div>
        </section>
      )}

      {pageData.videos && (
        <section className="bg-white px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 flex flex-row items-end justify-between gap-2 sm:mb-5 md:mb-7 lg:mb-10">
              <div>
                <div className="flex items-center gap-1 text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px]">
                  <Video className="h-[7px] w-[7px] lg:h-[17px] lg:w-[17px]" />
                  {
                    pageData.videos
                      .eyebrow
                  }
                </div>

                <h2 className="mt-1 text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-2 lg:text-[40px]">
                  {
                    pageData.videos
                      .title
                  }
                </h2>
              </div>

              <p className="max-w-[40%] text-[4px] leading-[7px] text-slate-500 sm:text-[5px] md:text-[7px] lg:max-w-md lg:text-[13px] lg:leading-6">
                {
                  pageData.videos
                    .description
                }
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6">
              {pageData.videos.items?.map(
                (video) => (
                  <div
                    key={video.id}
                    className="group cursor-pointer overflow-hidden rounded-md border border-slate-100 bg-white transition hover:border-[#66FFFF] sm:rounded-lg md:rounded-xl lg:rounded-2xl"
                  >
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      <img
                        src={video.image}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00FFFF] text-slate-950 sm:h-7 sm:w-7 md:h-10 md:w-10 lg:h-14 lg:w-14">
                          <Play className="h-[7px] w-[7px] lg:h-[22px] lg:w-[22px]" />
                        </div>
                      </div>

                      <span className="absolute bottom-1 right-1 rounded bg-slate-950/80 px-1 py-0.5 text-[3px] font-bold text-white sm:text-[4px] md:text-[6px] lg:bottom-3 lg:right-3 lg:px-2 lg:py-1 lg:text-[9px]">
                        {
                          video.duration
                        }
                      </span>
                    </div>

                    <div className="p-1.5 sm:p-2.5 md:p-3.5 lg:p-5">
                      <h3 className="mt-1 text-[5.5px] font-bold leading-[8px] text-slate-950 sm:text-[7px] md:text-[10px] lg:mt-2 lg:text-[16px] lg:leading-6">
                        {
                          video.title
                        }
                      </h3>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {pageData.note && (
        <section className="border-y border-slate-100 bg-[#F8FFFF] px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-10 lg:py-10">
          <div className="mx-auto flex max-w-5xl items-start gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            <BookOpen className="mt-0.5 h-[7px] w-[7px] shrink-0 text-cyan-700 sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] lg:mt-1 lg:h-[21px] lg:w-[21px]" />

            <div>
              <div className="text-[5px] font-bold text-slate-900 sm:text-[7px] md:text-[10px] lg:text-base">
                {
                  pageData.note.title
                }
              </div>

              <p className="mt-0.5 text-[4px] leading-[7px] text-slate-500 sm:text-[5px] md:text-[7px] lg:mt-2 lg:text-[12px] lg:leading-6">
                {
                  pageData.note
                    .description
                }
              </p>
            </div>
          </div>
        </section>
      )}

      {pageData.cta && (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FFFF] to-[#EEFFFF] px-2 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-10 lg:py-24">
          <div className="relative z-10 mx-auto max-w-5xl rounded-lg border border-[#CCFFFF] bg-white p-4 text-center sm:rounded-xl sm:p-5 md:rounded-2xl md:p-8 lg:rounded-[28px] lg:p-12">
            <div className="inline-flex items-center gap-1 text-[4px] font-bold uppercase tracking-[0.08em] text-cyan-800 sm:text-[6px] md:text-[8px] lg:text-[10px]">
              <Sparkles className="h-[6px] w-[6px] lg:h-[15px] lg:w-[15px]" />
              {
                pageData.cta.eyebrow
              }
            </div>

            <h2 className="mx-auto mt-1.5 max-w-3xl text-[14px] font-extrabold tracking-[-0.03em] text-slate-950 min-[430px]:text-[16px] sm:text-[21px] md:text-[28px] lg:mt-4 lg:text-[42px]">
              {pageData.cta.title}
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-[4.5px] leading-[7px] text-slate-600 sm:text-[6px] md:text-[8px] lg:mt-4 lg:text-[14px] lg:leading-7">
              {
                pageData.cta
                  .description
              }
            </p>

            <Link
              href={
                pageData.cta
                  .buttonSlug ||
                "/appointment"
              }
              className="mt-3 inline-flex min-h-[27px] items-center justify-center gap-1 rounded-md bg-[#00FFFF] px-3 text-[4px] font-bold uppercase tracking-wide text-slate-950 sm:min-h-[32px] sm:px-4 sm:text-[6px] md:mt-4 md:min-h-[42px] md:px-5 md:text-[8px] lg:mt-7 lg:min-h-[54px] lg:gap-3 lg:px-8 lg:text-[11px]"
            >
              {
                pageData.cta
                  .buttonText
              }

              <ArrowRight className="h-[7px] w-[7px] lg:h-[16px] lg:w-[16px]" />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
