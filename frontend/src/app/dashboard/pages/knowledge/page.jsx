"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  BookOpen,
  ExternalLink,
  Eye,
  FileText,
  ImageIcon,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

const initialArticles = [
  {
    id: 1,
    title: "Implant All-on-4 và All-on-6 khác nhau như thế nào?",
    category: "Implant",
    slug: "implant-all-on-4-va-all-on-6",
    excerpt:
      "Tìm hiểu sự khác nhau giữa hai phương pháp phục hồi toàn hàm bằng Implant và những yếu tố cần đánh giá trước điều trị.",
    image: "/images/knowledge/implant-all-on-4.jpg",
    status: "published",
    featured: true,
    updatedAt: "20/09/2026",
  },
  {
    id: 2,
    title: "Veneer không mài và Veneer mài siêu mỏng",
    category: "Veneer",
    slug: "veneer-khong-mai-va-mai-sieu-mong",
    excerpt:
      "Giải thích khi nào có thể cân nhắc Veneer ít can thiệp và vì sao kế hoạch điều trị cần được cá nhân hóa.",
    image: "/images/knowledge/veneer-sieu-mong.jpg",
    status: "published",
    featured: false,
    updatedAt: "18/09/2026",
  },
  {
    id: 3,
    title: "Tiêu xương hàm sau mất răng và vai trò của Implant",
    category: "Implant",
    slug: "tieu-xuong-ham-va-implant",
    excerpt:
      "Mất răng lâu ngày có thể ảnh hưởng đến cấu trúc xương. Bài viết trình bày những yếu tố cần đánh giá trước phục hồi.",
    image: "/images/knowledge/tieu-xuong-ham.jpg",
    status: "published",
    featured: false,
    updatedAt: "15/09/2026",
  },
  {
    id: 4,
    title: "Đau khớp thái dương hàm: những điều cần biết",
    category: "Khớp cắn & TMJ",
    slug: "dau-khop-thai-duong-ham",
    excerpt:
      "Một số dấu hiệu thường gặp liên quan đến khớp thái dương hàm và lý do cần đánh giá toàn diện hệ thống nhai.",
    image: "/images/knowledge/tmj.jpg",
    status: "draft",
    featured: false,
    updatedAt: "12/09/2026",
  },
];

function StatusBadge({ status }) {
  if (status === "published") {
    return (
      <span className="rounded-full bg-[#EFFFFF] px-2.5 py-1 text-[8px] font-bold text-[#00696B]">
        Đang hiển thị
      </span>
    );
  }

  return (
    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[8px] font-bold text-amber-700">
      Bản nháp
    </span>
  );
}

export default function KnowledgeManagementPage() {
  const [articles, setArticles] =
    useState(initialArticles);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");

  const [status, setStatus] =
    useState("all");

  const filteredArticles = useMemo(() => {
    const keyword = search
      .trim()
      .toLowerCase();

    return articles.filter((item) => {
      const matchSearch =
        item.title
          .toLowerCase()
          .includes(keyword) ||
        item.slug
          .toLowerCase()
          .includes(keyword) ||
        item.category
          .toLowerCase()
          .includes(keyword);

      const matchCategory =
        category === "all" ||
        item.category === category;

      const matchStatus =
        status === "all" ||
        item.status === status;

      return (
        matchSearch &&
        matchCategory &&
        matchStatus
      );
    });
  }, [
    articles,
    search,
    category,
    status,
  ]);

  const removeArticle = (id) => {
    const ok = window.confirm(
      "Bạn có chắc muốn xóa bài viết này?"
    );

    if (!ok) return;

    setArticles((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <main className="min-h-screen bg-[#F8FBFB]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-100 bg-white/95 px-7 backdrop-blur">
        <div>
          <div className="text-[9px] text-slate-400">
            Dashboard / Quản lý trang /
            Kiến thức
          </div>

          <h1 className="mt-1 text-[17px] font-extrabold text-slate-950">
            Quản lý Kiến thức
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/knowledge"
            target="_blank"
            className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[10px] font-bold text-slate-700"
          >
            <Eye size={15} />
            Xem trang
          </Link>

          <Link
            href="/dashboard/pages/knowledge/create"
            className="flex h-10 items-center gap-2 rounded-xl bg-[#00FFFF] px-5 text-[10px] font-bold text-slate-950 transition hover:bg-[#33FFFF]"
          >
            <Plus size={15} />
            Thêm bài viết
          </Link>
        </div>
      </header>

      <div className="p-7">
        {/* INFO */}
        <section className="rounded-2xl border border-cyan-100 bg-[#F0FFFF] p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
              <BookOpen
                size={20}
                className="text-[#00696B]"
              />
            </div>

            <div>
              <div className="text-[9px] font-bold uppercase tracking-wide text-[#00696B]">
                Knowledge Library
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-3">
                <h2 className="text-[15px] font-extrabold text-slate-950">
                  Kiến thức
                </h2>

                <span className="rounded-lg bg-white px-2.5 py-1 text-[9px] font-semibold text-slate-500">
                  /knowledge
                </span>
              </div>

              <p className="mt-2 max-w-2xl text-[10px] leading-5 text-slate-500">
                Quản lý các bài viết kiến
                thức nha khoa hiển thị trên
                website. Mỗi bài viết có
                tiêu đề, chuyên mục,
                thumbnail, slug và nội dung
                riêng.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER */}
        <section className="mt-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full xl:max-w-[420px]">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Tìm tiêu đề, slug hoặc chuyên mục..."
                className="h-10 w-full rounded-xl bg-[#F8FBFB] pl-9 pr-3 text-[10px] text-slate-700 outline-none focus:ring-1 focus:ring-cyan-200"
              />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-600 outline-none"
              >
                <option value="all">
                  Tất cả chuyên mục
                </option>

                <option value="Implant">
                  Implant
                </option>

                <option value="Veneer">
                  Veneer
                </option>

                <option value="Khớp cắn & TMJ">
                  Khớp cắn & TMJ
                </option>

                <option value="Chăm sóc">
                  Chăm sóc
                </option>
              </select>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value
                  )
                }
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-600 outline-none"
              >
                <option value="all">
                  Tất cả trạng thái
                </option>

                <option value="published">
                  Đang hiển thị
                </option>

                <option value="draft">
                  Bản nháp
                </option>
              </select>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase tracking-wide text-slate-400">
              Tổng bài
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-slate-950">
              {articles.length}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase tracking-wide text-slate-400">
              Đang hiển thị
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-[#00696B]">
              {
                articles.filter(
                  (item) =>
                    item.status ===
                    "published"
                ).length
              }
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase tracking-wide text-slate-400">
              Bản nháp
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-amber-600">
              {
                articles.filter(
                  (item) =>
                    item.status ===
                    "draft"
                ).length
              }
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase tracking-wide text-slate-400">
              Kết quả
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-slate-950">
              {filteredArticles.length}
            </div>
          </div>
        </section>

        {/* ARTICLES */}
        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
          {filteredArticles.map(
            (item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="grid grid-cols-[150px_1fr] gap-0">
                  {/* IMAGE */}
                  <div className="relative min-h-[190px] bg-slate-100">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <ImageIcon
                          size={24}
                          className="text-slate-300"
                        />
                      </div>
                    )}
                  </div>

                  {/* INFO */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[8px] font-bold text-slate-600">
                          {
                            item.category
                          }
                        </span>

                        <StatusBadge
                          status={
                            item.status
                          }
                        />

                        {item.featured && (
                          <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[8px] font-bold text-cyan-700">
                            Nổi bật
                          </span>
                        )}
                      </div>

                      {item.status ===
                        "published" && (
                        <Link
                          href={`/knowledge/${item.slug}`}
                          target="_blank"
                          title="Xem bài viết"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition hover:bg-[#EFFFFF] hover:text-[#00696B]"
                        >
                          <ExternalLink
                            size={13}
                          />
                        </Link>
                      )}
                    </div>

                    <h2 className="mt-3 line-clamp-2 text-[13px] font-extrabold leading-5 text-slate-950">
                      {item.title}
                    </h2>

                    <div className="mt-1 text-[8px] text-slate-400">
                      /knowledge/
                      {item.slug}
                    </div>

                    <p className="mt-3 line-clamp-2 text-[9px] leading-4 text-slate-500">
                      {item.excerpt}
                    </p>

                    <div className="mt-3 text-[8px] text-slate-400">
                      Cập nhật:{" "}
                      {item.updatedAt}
                    </div>
                  </div>
                </div>

                {/* ACTION */}
                <div className="flex gap-2 border-t border-slate-100 p-4">
                  <Link
                    href={`/dashboard/pages/knowledge/${item.id}`}
                    className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#00696B] px-4 text-[10px] font-bold text-white transition hover:bg-[#005658]"
                  >
                    <Pencil size={14} />
                    Chỉnh sửa
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      removeArticle(
                        item.id
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-100"
                    title="Xóa bài viết"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </article>
            )
          )}
        </section>

        {filteredArticles.length ===
          0 && (
          <div className="mt-5 rounded-2xl bg-white p-12 text-center shadow-sm">
            <FileText
              size={26}
              className="mx-auto text-slate-300"
            />

            <div className="mt-3 text-[12px] font-bold text-slate-800">
              Không tìm thấy bài viết
            </div>

            <div className="mt-1 text-[9px] text-slate-400">
              Thử thay đổi từ khóa hoặc
              bộ lọc.
            </div>
          </div>
        )}
      </div>
    </main>
  );
}