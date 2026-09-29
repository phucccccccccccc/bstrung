"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Activity,
  BookOpen,
  BriefcaseMedical,
  ExternalLink,
  FileText,
  Home,
  Search,
  Stethoscope,
  UserRound,
} from "lucide-react";

const pages = [
  {
    id: 1,
    name: "Trang chủ",
    subtitle: "Home Page",
    route: "/",
    editRoute: "/dashboard/pages/home",
    icon: Home,
    updated: "20/09/2026",
    status: "published",
    sections: 7,
    description:
      "Hero, thống kê, triết lý điều trị, chuyên môn, ca điều trị nổi bật, kiến thức và CTA đặt lịch.",
  },
  {
    id: 2,
    name: "Về Bác sĩ Trung",
    subtitle: "About Page",
    route: "/about",
    editRoute: "/dashboard/pages/about",
    icon: UserRound,
    updated: "18/09/2026",
    status: "published",
    sections: 6,
    description:
      "Giới thiệu bác sĩ, triết lý điều trị, hành trình chuyên môn, kinh nghiệm, hoạt động và CTA.",
  },
  {
    id: 3,
    name: "Chuyên môn",
    subtitle: "Specialties",
    route: "/specialties",
    editRoute: "/dashboard/pages/specialties",
    icon: Stethoscope,
    updated: "20/09/2026",
    status: "published",
    sections: 4,
    description:
      "Quản lý 4 chuyên môn: Implant, Veneer, Tái thiết khớp cắn & TMJ và Thẩm mỹ nướu.",
  },
  {
    id: 4,
    name: "Ca điều trị",
    subtitle: "Clinical Cases",
    route: "/cases",
    editRoute: "/dashboard/pages/cases",
    icon: BriefcaseMedical,
    updated: "19/09/2026",
    status: "published",
    sections: 1,
    description:
      "Quản lý các hồ sơ ca điều trị, ảnh trước/sau, mô tả và chuyên môn liên quan.",
  },
  {
    id: 5,
    name: "Kiến thức",
    subtitle: "Knowledge",
    route: "/knowledge",
    editRoute: "/dashboard/pages/knowledge",
    icon: BookOpen,
    updated: "15/09/2026",
    status: "published",
    sections: 1,
    description:
      "Quản lý bài viết kiến thức nha khoa, thumbnail, tiêu đề, nội dung và trạng thái hiển thị.",
  },
  {
    id: 6,
    name: "Hoạt động",
    subtitle: "Activities",
    route: "/activities",
    editRoute: "/dashboard/pages/activities",
    icon: Activity,
    updated: "10/09/2026",
    status: "published",
    sections: 1,
    description:
      "Quản lý hội thảo, sự kiện, đào tạo và các hoạt động chuyên môn của Bác sĩ Trung.",
  },
  {
    id: 7,
    name: "Liên hệ",
    subtitle: "Contact",
    route: "/contact",
    editRoute: "/dashboard/pages/contact",
    icon: FileText,
    updated: "21/09/2026",
    status: "published",
    sections: 4,
    description:
      "Quản lý nội dung trang liên hệ, thông tin phòng khám, hotline, địa chỉ và CTA đặt lịch.",
  },
];

export default function PagesManagementPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredPages = useMemo(() => {
    return pages.filter((page) => {
      const keyword = search.trim().toLowerCase();

      const matchSearch =
        page.name.toLowerCase().includes(keyword) ||
        page.subtitle.toLowerCase().includes(keyword) ||
        page.route.toLowerCase().includes(keyword) ||
        page.description.toLowerCase().includes(keyword);

      const matchFilter =
        filter === "all" || page.status === filter;

      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  return (
    <main className="min-h-screen bg-[#F8FBFB]">
      {/* HEADER */}
      <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white px-8">
        <div>
          <div className="text-[10px] text-slate-400">
            Dashboard / Quản lý trang
          </div>

          <h1 className="mt-0.5 text-[16px] font-bold text-slate-950">
            Quản lý nội dung Website
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-[11px] font-bold text-slate-900">
              Bác sĩ Trung
            </div>

            <div className="text-[9px] text-cyan-700">
              Administrator
            </div>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00696B] text-[10px] font-bold text-white">
            DT
          </div>
        </div>
      </header>

      <div className="p-7">
        {/* TITLE */}
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_18px_rgba(15,23,42,0.03)]">
          <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EFFFFF] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#00696B]">
                <span className="h-2 w-2 rounded-full bg-[#00CED1]" />
                7 trang đang hoạt động
              </div>

              <h2 className="mt-3 text-[28px] font-extrabold tracking-[-0.03em] text-slate-950">
                Quản lý trang Website
              </h2>

              <p className="mt-2 max-w-2xl text-[12px] leading-6 text-slate-500">
                Chỉnh sửa nội dung của từng trang trên website Bác sĩ Trung.
                Mỗi trang được quản lý riêng, dễ chỉnh sửa và xem trước.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FFFF] px-5 py-4">
              <div className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                Tổng số trang
              </div>

              <div className="mt-1 text-[27px] font-extrabold text-[#00696B]">
                07
              </div>
            </div>
          </div>

          {/* SEARCH */}
          <div className="mt-6 flex flex-col justify-between gap-3 rounded-xl bg-[#F8FBFB] p-3 md:flex-row md:items-center">
            <div className="relative w-full md:max-w-[390px]">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm tên trang hoặc route..."
                className="h-10 w-full rounded-xl border border-transparent bg-white pl-10 pr-4 text-[11px] text-slate-700 outline-none transition focus:border-cyan-200"
              />
            </div>

            <div className="flex rounded-xl bg-white p-1">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`rounded-lg px-4 py-2 text-[10px] font-bold transition ${
                  filter === "all"
                    ? "bg-[#00696B] text-white"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                Tất cả ({pages.length})
              </button>

              <button
                type="button"
                onClick={() => setFilter("published")}
                className={`rounded-lg px-4 py-2 text-[10px] font-bold transition ${
                  filter === "published"
                    ? "bg-[#00696B] text-white"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                Đang hiển thị
              </button>
            </div>
          </div>
        </section>

        {/* PAGE CARDS */}
        <section className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {filteredPages.map((page) => {
            const Icon = page.icon;

            return (
              <article
                key={page.id}
                className="group flex min-h-[310px] flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.03)] transition hover:-translate-y-1 hover:border-cyan-100 hover:shadow-[0_16px_38px_rgba(0,105,107,0.08)]"
              >
                <div>
                  {/* STATUS */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EFFFFF] px-2.5 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#00CED1]" />

                      <span className="text-[9px] font-bold text-[#00696B]">
                        Đang hiển thị
                      </span>
                    </div>

                    <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[9px] font-semibold text-slate-500">
                      {page.route}
                    </span>
                  </div>

                  {/* ICON / TITLE */}
                  <div className="mt-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFFFFF] transition group-hover:bg-[#CCFFFF]">
                      <Icon size={21} className="text-[#00696B]" />
                    </div>

                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-700">
                        {page.subtitle}
                      </div>

                      <h3 className="mt-1 text-[17px] font-extrabold text-slate-950">
                        {page.name}
                      </h3>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-[11px] leading-5 text-slate-500">
                    {page.description}
                  </p>

                  {/* INFO */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-[#F8FFFF] p-3">
                      <div className="text-[8px] font-bold uppercase tracking-wide text-slate-400">
                        Sections
                      </div>

                      <div className="mt-1 text-[13px] font-bold text-slate-900">
                        {page.sections}
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#F8FFFF] p-3">
                      <div className="text-[8px] font-bold uppercase tracking-wide text-slate-400">
                        Cập nhật
                      </div>

                      <div className="mt-1 text-[11px] font-bold text-slate-900">
                        {page.updated}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACTION */}
                <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
                  <Link
                    href={page.editRoute}
                    className="flex min-h-[40px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#00FFFF] px-4 text-[10px] font-bold text-slate-950 transition hover:bg-[#33FFFF]"
                  >
                    <FileText size={15} />
                    Chỉnh sửa
                  </Link>

                  <Link
                    href={page.route}
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-[#EFFFFF] hover:text-[#00696B]"
                    title="Xem trang"
                  >
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        {filteredPages.length === 0 && (
          <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-12 text-center">
            <Search
              size={24}
              className="mx-auto text-slate-300"
            />

            <div className="mt-3 text-[13px] font-bold text-slate-800">
              Không tìm thấy trang
            </div>

            <p className="mt-1 text-[10px] text-slate-400">
              Thử nhập từ khóa khác.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}