"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Activity,
  ExternalLink,
  Eye,
  ImageIcon,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

const initialActivities = [
  {
    id: 1,
    title: "Hội thảo chuyên sâu về Implant kỹ thuật số",
    type: "Hội thảo",
    location: "TP. Hồ Chí Minh",
    slug: "hoi-thao-implant-ky-thuat-so",
    excerpt:
      "Chương trình cập nhật kiến thức và trao đổi các ứng dụng kỹ thuật số trong điều trị Implant.",
    image: "/images/activities/activity-01.jpg",
    date: "18/09/2026",
    status: "published",
    featured: true,
  },
  {
    id: 2,
    title: "Khóa đào tạo phục hình thẩm mỹ Veneer",
    type: "Đào tạo",
    location: "TP. Hồ Chí Minh",
    slug: "dao-tao-phuc-hinh-veneer",
    excerpt:
      "Hoạt động đào tạo tập trung vào nguyên tắc bảo tồn mô răng và thiết kế phục hình Veneer.",
    image: "/images/activities/activity-02.jpg",
    date: "12/09/2026",
    status: "published",
    featured: false,
  },
  {
    id: 3,
    title: "Chương trình cập nhật khớp cắn & TMJ",
    type: "Seminar",
    location: "Hà Nội",
    slug: "cap-nhat-khop-can-tmj",
    excerpt:
      "Buổi trao đổi chuyên môn về đánh giá chức năng hệ thống nhai và khớp thái dương hàm.",
    image: "/images/activities/activity-03.jpg",
    date: "05/09/2026",
    status: "draft",
    featured: false,
  },
];

function StatusBadge({ status }) {
  return status === "published" ? (
    <span className="rounded-full bg-[#EFFFFF] px-2.5 py-1 text-[8px] font-bold text-[#00696B]">
      Đang hiển thị
    </span>
  ) : (
    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[8px] font-bold text-amber-700">
      Bản nháp
    </span>
  );
}

export default function ActivitiesManagementPage() {
  const [activities, setActivities] = useState(initialActivities);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");

  const filteredActivities = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return activities.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(keyword) ||
        item.slug.toLowerCase().includes(keyword) ||
        item.location.toLowerCase().includes(keyword);

      const matchType =
        type === "all" || item.type === type;

      const matchStatus =
        status === "all" || item.status === status;

      return matchSearch && matchType && matchStatus;
    });
  }, [activities, search, type, status]);

  const removeActivity = (id) => {
    const ok = window.confirm(
      "Bạn có chắc muốn xóa hoạt động này?"
    );

    if (!ok) return;

    setActivities((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <main className="min-h-screen bg-[#F8FBFB]">
      <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-100 bg-white/95 px-7 backdrop-blur">
        <div>
          <div className="text-[9px] text-slate-400">
            Dashboard / Quản lý trang / Hoạt động
          </div>

          <h1 className="mt-1 text-[17px] font-extrabold text-slate-950">
            Quản lý Hoạt động
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/activities"
            target="_blank"
            className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[10px] font-bold text-slate-700"
          >
            <Eye size={15} />
            Xem trang
          </Link>

          <Link
            href="/dashboard/pages/activities/create"
            className="flex h-10 items-center gap-2 rounded-xl bg-[#00FFFF] px-5 text-[10px] font-bold text-slate-950"
          >
            <Plus size={15} />
            Thêm hoạt động
          </Link>
        </div>
      </header>

      <div className="p-7">
        <section className="rounded-2xl border border-cyan-100 bg-[#F0FFFF] p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
              <Activity size={20} className="text-[#00696B]" />
            </div>

            <div>
              <div className="text-[9px] font-bold uppercase tracking-wide text-[#00696B]">
                Activities
              </div>

              <div className="mt-1 flex items-center gap-3">
                <h2 className="text-[15px] font-extrabold text-slate-950">
                  Hoạt động
                </h2>

                <span className="rounded-lg bg-white px-2.5 py-1 text-[9px] font-semibold text-slate-500">
                  /activities
                </span>
              </div>

              <p className="mt-2 max-w-2xl text-[10px] leading-5 text-slate-500">
                Quản lý các hội thảo, chương trình đào tạo,
                seminar và hoạt động chuyên môn của Bác sĩ Trung.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full xl:max-w-[420px]">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm tên hoạt động, địa điểm hoặc slug..."
                className="h-10 w-full rounded-xl bg-[#F8FBFB] pl-9 pr-3 text-[10px] outline-none"
              />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[10px]"
              >
                <option value="all">Tất cả loại</option>
                <option value="Hội thảo">Hội thảo</option>
                <option value="Đào tạo">Đào tạo</option>
                <option value="Seminar">Seminar</option>
              </select>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[10px]"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="published">Đang hiển thị</option>
                <option value="draft">Bản nháp</option>
              </select>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase text-slate-400">
              Tổng hoạt động
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-slate-950">
              {activities.length}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase text-slate-400">
              Đang hiển thị
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-[#00696B]">
              {
                activities.filter(
                  (item) => item.status === "published"
                ).length
              }
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase text-slate-400">
              Bản nháp
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-amber-600">
              {
                activities.filter(
                  (item) => item.status === "draft"
                ).length
              }
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase text-slate-400">
              Kết quả
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-slate-950">
              {filteredActivities.length}
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
          {filteredActivities.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <div className="grid grid-cols-[160px_1fr]">
                <div className="relative min-h-[200px] bg-slate-100">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <ImageIcon size={24} className="text-slate-300" />
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[8px] font-bold text-slate-600">
                        {item.type}
                      </span>

                      <StatusBadge status={item.status} />

                      {item.featured && (
                        <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[8px] font-bold text-cyan-700">
                          Nổi bật
                        </span>
                      )}
                    </div>

                    {item.status === "published" && (
                      <Link
                        href={`/activities/${item.slug}`}
                        target="_blank"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500"
                      >
                        <ExternalLink size={13} />
                      </Link>
                    )}
                  </div>

                  <h2 className="mt-3 text-[13px] font-extrabold leading-5 text-slate-950">
                    {item.title}
                  </h2>

                  <div className="mt-1 text-[8px] text-slate-400">
                    /activities/{item.slug}
                  </div>

                  <p className="mt-3 line-clamp-2 text-[9px] leading-4 text-slate-500">
                    {item.excerpt}
                  </p>

                  <div className="mt-3 flex gap-4 text-[8px] text-slate-400">
                    <span>{item.date}</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 border-t border-slate-100 p-4">
                <Link
                  href={`/dashboard/pages/activities/${item.id}`}
                  className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#00696B] text-[10px] font-bold text-white"
                >
                  <Pencil size={14} />
                  Chỉnh sửa
                </Link>

                <button
                  type="button"
                  onClick={() => removeActivity(item.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}