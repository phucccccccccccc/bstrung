"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  Eye,
  ImageIcon,
  Save,
  Upload,
} from "lucide-react";

const mockActivities = {
  1: {
    title: "Hội thảo chuyên sâu về Implant kỹ thuật số",
    slug: "hoi-thao-implant-ky-thuat-so",
    type: "Hội thảo",
    location: "TP. Hồ Chí Minh",
    date: "2026-09-18",
    excerpt:
      "Chương trình cập nhật kiến thức về Implant kỹ thuật số.",
    content:
      "Nội dung chi tiết hoạt động...",
    image: "/images/activities/activity-01.jpg",
    status: "published",
    featured: true,
  },

  2: {
    title: "Khóa đào tạo phục hình thẩm mỹ Veneer",
    slug: "dao-tao-phuc-hinh-veneer",
    type: "Đào tạo",
    location: "TP. Hồ Chí Minh",
    date: "2026-09-12",
    excerpt:
      "Hoạt động đào tạo về phục hình Veneer.",
    content:
      "Nội dung chi tiết chương trình đào tạo...",
    image: "/images/activities/activity-02.jpg",
    status: "published",
    featured: false,
  },

  3: {
    title: "Chương trình cập nhật khớp cắn & TMJ",
    slug: "cap-nhat-khop-can-tmj",
    type: "Seminar",
    location: "Hà Nội",
    date: "2026-09-05",
    excerpt:
      "Buổi trao đổi chuyên môn về khớp cắn và TMJ.",
    content:
      "Nội dung chi tiết seminar...",
    image: "/images/activities/activity-03.jpg",
    status: "draft",
    featured: false,
  },
};

const emptyForm = {
  title: "",
  slug: "",
  type: "Hội thảo",
  location: "",
  date: "",
  excerpt: "",
  content: "",
  image: "",
  status: "draft",
  featured: false,
};

function makeSlug(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-bold uppercase text-slate-500">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-xl border border-slate-200 px-3 text-[11px] outline-none focus:border-cyan-300"
      />
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  rows = 4,
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-bold uppercase text-slate-500">
        {label}
      </label>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full resize-none rounded-xl border border-slate-200 px-3 py-3 text-[11px] outline-none focus:border-cyan-300"
      />
    </div>
  );
}

export default function ActivityForm({
  mode = "create",
  activityId,
}) {
  const isEdit = mode === "edit";

  const [form, setForm] = useState(emptyForm);
  const [slugEdited, setSlugEdited] = useState(false);

  useEffect(() => {
    if (!isEdit) return;

    const item = mockActivities[activityId];

    if (item) {
      setForm(item);
    }
  }, [activityId, isEdit]);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTitleChange = (value) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugEdited
        ? prev.slug
        : makeSlug(value),
    }));
  };

  const handleSave = () => {
    if (!form.title.trim()) {
      alert("Vui lòng nhập tiêu đề.");
      return;
    }

    console.log(form);

    alert(
      isEdit
        ? "Đã cập nhật thử hoạt động."
        : "Đã thêm thử hoạt động."
    );
  };

  return (
    <main className="min-h-screen bg-[#F8FBFB]">
      <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-100 bg-white/95 px-7">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/pages/activities"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50"
          >
            <ArrowLeft size={17} />
          </Link>

          <div>
            <div className="text-[9px] text-slate-400">
              Dashboard / Hoạt động
            </div>

            <h1 className="text-[17px] font-extrabold">
              {isEdit
                ? "Chỉnh sửa hoạt động"
                : "Thêm hoạt động"}
            </h1>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="flex h-10 items-center gap-2 rounded-xl bg-[#00FFFF] px-5 text-[10px] font-bold"
        >
          <Save size={15} />
          {isEdit ? "Lưu thay đổi" : "Thêm hoạt động"}
        </button>
      </header>

      <div className="mx-auto max-w-[1150px] p-7">
        <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="space-y-4">
                <Field
                  label="Tiêu đề"
                  value={form.title}
                  onChange={handleTitleChange}
                />

                <Field
                  label="Slug"
                  value={form.slug}
                  onChange={(value) => {
                    setSlugEdited(true);
                    updateField(
                      "slug",
                      makeSlug(value)
                    );
                  }}
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Địa điểm"
                    value={form.location}
                    onChange={(value) =>
                      updateField("location", value)
                    }
                  />

                  <Field
                    label="Ngày diễn ra"
                    type="date"
                    value={form.date}
                    onChange={(value) =>
                      updateField("date", value)
                    }
                  />
                </div>

                <TextareaField
                  label="Mô tả ngắn"
                  value={form.excerpt}
                  onChange={(value) =>
                    updateField("excerpt", value)
                  }
                />
              </div>
            </section>

            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <TextareaField
                label="Nội dung hoạt động"
                value={form.content}
                onChange={(value) =>
                  updateField("content", value)
                }
                rows={18}
              />
            </section>

            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="grid gap-5 md:grid-cols-[240px_1fr]">
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
                  {form.image ? (
                    <img
                      src={form.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <ImageIcon size={26} className="text-slate-300" />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Field
                    label="Đường dẫn ảnh"
                    value={form.image}
                    onChange={(value) =>
                      updateField("image", value)
                    }
                  />

                  <button
                    type="button"
                    className="flex h-10 items-center gap-2 rounded-xl bg-[#EFFFFF] px-4 text-[10px] font-bold text-[#00696B]"
                  >
                    <Upload size={14} />
                    Upload ảnh
                  </button>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-[13px] font-extrabold">
                Phân loại
              </div>

              <select
                value={form.type}
                onChange={(e) =>
                  updateField(
                    "type",
                    e.target.value
                  )
                }
                className="mt-4 h-10 w-full rounded-xl border border-slate-200 px-3 text-[10px]"
              >
                <option value="Hội thảo">
                  Hội thảo
                </option>

                <option value="Đào tạo">
                  Đào tạo
                </option>

                <option value="Seminar">
                  Seminar
                </option>
              </select>
            </section>

            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-[13px] font-extrabold">
                Xuất bản
              </div>

              <select
                value={form.status}
                onChange={(e) =>
                  updateField(
                    "status",
                    e.target.value
                  )
                }
                className="mt-4 h-10 w-full rounded-xl border border-slate-200 px-3 text-[10px]"
              >
                <option value="draft">
                  Bản nháp
                </option>

                <option value="published">
                  Đang hiển thị
                </option>
              </select>

              <label className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-3">
                <span className="text-[10px] font-bold">
                  Hoạt động nổi bật
                </span>

                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) =>
                    updateField(
                      "featured",
                      e.target.checked
                    )
                  }
                  className="accent-[#00696B]"
                />
              </label>
            </section>

            {form.slug && (
              <Link
                href={`/activities/${form.slug}`}
                target="_blank"
                className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#EFFFFF] text-[10px] font-bold text-[#00696B]"
              >
                <Eye size={14} />
                Xem trước
              </Link>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}