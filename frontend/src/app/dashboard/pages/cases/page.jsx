"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import api from "@/api/api";

import {
  ExternalLink,
  Eye,
  ImageIcon,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

function CaseImage({ src, label }) {
  return (
    <div>
      <div className="mb-1 text-[8px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </div>

      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
        {src ? (
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ImageIcon
              size={22}
              className="text-slate-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function CasesManagementPage() {
  const [cases, setCases] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const loadCases = async () => {
    try {
      setLoading(true);
      setLoadError("");

      const response =
        await api.get("/cases");

      setCases(response.data);
    } catch (error) {
      console.error("CASES ERROR:", error);

      setLoadError(
        error?.response?.data?.message ||
          error.message ||
          "Không thể tải danh sách ca điều trị"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCases();
  }, []);

  const categories = useMemo(() => {
    return Array.from(
      new Set(
        cases
          .map((item) => item.category)
          .filter(Boolean)
      )
    );
  }, [cases]);

  const filteredCases = useMemo(() => {
    return cases.filter((item) => {
      const keyword =
        search.trim().toLowerCase();

      const matchSearch =
        (item.title || "")
          .toLowerCase()
          .includes(keyword) ||
        (item.category || "")
          .toLowerCase()
          .includes(keyword) ||
        (item.slug || "")
          .toLowerCase()
          .includes(keyword);

      const matchCategory =
        category === "all" ||
        item.category === category;

      return (
        matchSearch &&
        matchCategory
      );
    });
  }, [cases, search, category]);

  const removeCase = async (id) => {
    const confirmDelete =
      window.confirm(
        "Bạn có chắc muốn xóa ca điều trị này?"
      );

    if (!confirmDelete) return;

    try {
      await api.delete(
        `/cases/${id}`
      );

      setCases((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );
    } catch (error) {
      console.error(
        "DELETE CASE ERROR:",
        error
      );

      alert(
        error?.response?.data
          ?.message ||
          "Không thể xóa ca điều trị"
      );
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FBFB]">
        <div className="text-[12px] font-semibold text-[#00696B]">
          Đang tải ca điều trị...
        </div>
      </main>
    );
  }

  if (loadError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FBFB] p-6">
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="font-bold text-red-600">
            Không tải được ca điều trị
          </div>

          <p className="mt-2 text-[11px] text-slate-500">
            {loadError}
          </p>

          <button
            type="button"
            onClick={loadCases}
            className="mt-4 rounded-xl bg-[#00FFFF] px-4 py-2 text-[10px] font-bold text-slate-950"
          >
            Tải lại
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FBFB]">
      <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-100 bg-white/95 px-7 backdrop-blur">
        <div>
          <div className="text-[9px] text-slate-400">
            Dashboard / Quản lý trang / Ca điều trị
          </div>

          <h1 className="mt-1 text-[17px] font-extrabold text-slate-950">
            Quản lý Ca điều trị
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/cases"
            target="_blank"
            className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[10px] font-bold text-slate-700"
          >
            <Eye size={15} />
            Xem trang
          </Link>

          <Link
            href="/dashboard/pages/cases/create"
            className="flex h-10 items-center gap-2 rounded-xl bg-[#00FFFF] px-5 text-[10px] font-bold text-slate-950"
          >
            <Plus size={15} />
            Thêm ca điều trị
          </Link>
        </div>
      </header>

      <div className="p-7">
        <section className="rounded-2xl border border-cyan-100 bg-[#F0FFFF] p-5">
          <div className="text-[9px] font-bold uppercase tracking-wide text-[#00696B]">
            Clinical Cases
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-3">
            <h2 className="text-[15px] font-extrabold text-slate-950">
              Ca điều trị
            </h2>

            <span className="rounded-lg bg-white px-2.5 py-1 text-[9px] font-semibold text-slate-500">
              /cases
            </span>
          </div>

          <p className="mt-2 max-w-2xl text-[10px] leading-5 text-slate-500">
            Danh sách này đang lấy trực tiếp từ bảng treatment_cases trong MySQL.
          </p>
        </section>

        <section className="mt-5 flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-[380px]">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Tìm tên ca, chuyên môn hoặc slug..."
              className="h-10 w-full rounded-xl bg-[#F8FBFB] pl-9 pr-3 text-[10px] outline-none focus:ring-1 focus:ring-cyan-200"
            />
          </div>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-semibold text-slate-600 outline-none"
          >
            <option value="all">
              Tất cả chuyên môn
            </option>

            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase text-slate-400">
              Tổng ca
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-slate-950">
              {cases.length}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase text-slate-400">
              Đang hiển thị
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-[#00696B]">
              {
                cases.filter(
                  (item) =>
                    item.status ===
                    "published"
                ).length
              }
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase text-slate-400">
              Ca nổi bật
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-slate-950">
              {
                cases.filter(
                  (item) =>
                    item.featured
                ).length
              }
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[8px] font-bold uppercase text-slate-400">
              Kết quả lọc
            </div>

            <div className="mt-1 text-[22px] font-extrabold text-slate-950">
              {filteredCases.length}
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
          {filteredCases.map(
            (item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#EFFFFF] px-2.5 py-1 text-[8px] font-bold text-[#00696B]">
                        {item.category}
                      </span>

                      {item.featured && (
                        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[8px] font-bold text-amber-700">
                          Ca nổi bật
                        </span>
                      )}

                      <span
                        className={`rounded-full px-2.5 py-1 text-[8px] font-bold ${
                          item.status ===
                          "published"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {item.status ===
                        "published"
                          ? "Đang hiển thị"
                          : "Bản nháp"}
                      </span>
                    </div>

                    <h2 className="mt-3 text-[15px] font-extrabold text-slate-950">
                      {item.title}
                    </h2>

                    <div className="mt-1 text-[9px] text-slate-400">
                      /cases/{item.slug}
                    </div>
                  </div>

                  <Link
                    href={`/cases/${item.slug}`}
                    target="_blank"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500 hover:bg-[#EFFFFF] hover:text-[#00696B]"
                  >
                    <ExternalLink
                      size={15}
                    />
                  </Link>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <CaseImage
                    src={
                      item.beforeImage
                    }
                    label="Before"
                  />

                  <CaseImage
                    src={
                      item.afterImage
                    }
                    label="After"
                  />
                </div>

                <p className="mt-4 text-[10px] leading-5 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
                  <Link
                    href={`/dashboard/pages/cases/${item.id}`}
                    className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#00696B] px-4 text-[10px] font-bold text-white"
                  >
                    <Pencil
                      size={14}
                    />
                    Chỉnh sửa
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      removeCase(item.id)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-100"
                    title="Xóa"
                  >
                    <Trash2
                      size={15}
                    />
                  </button>
                </div>
              </article>
            )
          )}
        </section>

        {filteredCases.length ===
          0 && (
          <div className="mt-5 rounded-2xl bg-white p-12 text-center shadow-sm">
            <Search
              size={24}
              className="mx-auto text-slate-300"
            />

            <div className="mt-3 text-[12px] font-bold text-slate-800">
              Không tìm thấy ca điều trị
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
