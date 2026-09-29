"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/api/api";

import {
  ArrowLeft,
  Eye,
  ImageIcon,
  Link2,
  Save,
  Upload,
} from "lucide-react";

const emptyForm = {
  title: "",
  slug: "",
  categoryKey: "implant",
  categoryLabel: "Cấy ghép Implant",
  excerpt: "",
  thumbnail: "",
  content: "",
  readTime: "",
  status: "draft",
  featured: false,
};

const categoryOptions = [
  {
    key: "implant",
    label: "Cấy ghép Implant",
  },
  {
    key: "veneer",
    label: "Phục hình răng sứ",
  },
  {
    key: "tmj",
    label: "Khớp cắn TMJ",
  },
  {
    key: "esthetic",
    label: "Nha khoa thẩm mỹ",
  },
  {
    key: "care",
    label: "Chăm sóc",
  },
];

function createSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function Field({
  label,
  value,
  onChange,
  placeholder = "",
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
        {label}
      </label>

      <input
        value={value ?? ""}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-[11px] text-slate-800 outline-none transition focus:border-cyan-300"
      />
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  rows = 4,
  placeholder = "",
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
        {label}
      </label>

      <textarea
        value={value ?? ""}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-3 text-[11px] leading-5 text-slate-800 outline-none transition focus:border-cyan-300"
      />
    </div>
  );
}

export default function KnowledgeForm({
  mode = "create",
  articleId,
}) {
  const router = useRouter();
  const isEdit = mode === "edit";

  const [form, setForm] =
    useState(emptyForm);

  const [slugEdited, setSlugEdited] =
    useState(false);

  const [loading, setLoading] =
    useState(isEdit);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (!isEdit || !articleId) {
      return;
    }

    const loadArticle = async () => {
      try {
        setLoading(true);

        const response =
          await api.get(
            `/knowledge/${articleId}`
          );

        const article =
          response.data;

        setForm({
          title: article.title || "",
          slug: article.slug || "",
          categoryKey:
            article.categoryKey ||
            "implant",
          categoryLabel:
            article.categoryLabel ||
            "Cấy ghép Implant",
          excerpt:
            article.excerpt || "",
          thumbnail:
            article.thumbnail || "",
          content:
            article.content || "",
          readTime:
            article.readTime || "",
          status:
            article.status || "draft",
          featured:
            Boolean(
              article.featured
            ),
        });

        setSlugEdited(true);
      } catch (error) {
        console.error(
          "LOAD ARTICLE ERROR:",
          error
        );

        alert(
          error?.response?.data
            ?.message ||
            "Không thể tải bài viết"
        );
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [articleId, isEdit]);

  const updateField = (
    field,
    value
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTitleChange = (
    value
  ) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugEdited
        ? prev.slug
        : createSlug(value),
    }));
  };

  const handleSlugChange = (
    value
  ) => {
    setSlugEdited(true);

    updateField(
      "slug",
      createSlug(value)
    );
  };

  const handleCategoryChange = (
    key
  ) => {
    const selected =
      categoryOptions.find(
        (item) =>
          item.key === key
      );

    setForm((prev) => ({
      ...prev,
      categoryKey: key,
      categoryLabel:
        selected?.label || key,
    }));
  };

  const handleSave = async () => {
    if (!form.title.trim()) {
      alert(
        "Vui lòng nhập tiêu đề bài viết."
      );
      return;
    }

    if (!form.slug.trim()) {
      alert(
        "Vui lòng nhập slug."
      );
      return;
    }

    try {
      setSaving(true);

      if (isEdit) {
        await api.put(
          `/knowledge/${articleId}`,
          form
        );
      } else {
        await api.post(
          "/knowledge",
          form
        );
      }

      alert(
        isEdit
          ? "Cập nhật bài viết thành công."
          : "Thêm bài viết thành công."
      );

      router.push(
        "/dashboard/pages/knowledge"
      );

      router.refresh();
    } catch (error) {
      console.error(
        "SAVE ARTICLE ERROR:",
        error
      );

      alert(
        error?.response?.data
          ?.message ||
          "Không thể lưu bài viết"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FBFB]">
        <div className="text-[12px] font-semibold text-[#00696B]">
          Đang tải bài viết...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FBFB]">
      <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-100 bg-white/95 px-7 backdrop-blur">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/pages/knowledge"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-[#EFFFFF] hover:text-[#00696B]"
          >
            <ArrowLeft size={17} />
          </Link>

          <div>
            <div className="text-[9px] text-slate-400">
              Dashboard / Kiến thức /{" "}
              {isEdit
                ? "Chỉnh sửa"
                : "Thêm bài viết"}
            </div>

            <h1 className="mt-0.5 text-[17px] font-extrabold text-slate-950">
              {isEdit
                ? "Chỉnh sửa bài viết"
                : "Thêm bài viết mới"}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {form.slug &&
            form.status ===
              "published" && (
              <Link
                href={`/knowledge/${form.slug}`}
                target="_blank"
                className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[10px] font-bold text-slate-700"
              >
                <Eye size={15} />
                Xem trước
              </Link>
            )}

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex h-10 items-center gap-2 rounded-xl bg-[#00FFFF] px-5 text-[10px] font-bold text-slate-950 transition hover:bg-[#33FFFF] disabled:opacity-50"
          >
            <Save size={15} />

            {saving
              ? "Đang lưu..."
              : isEdit
              ? "Lưu thay đổi"
              : "Đăng bài"}
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1150px] p-7">
        <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            <section className="rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-5">
                <h2 className="text-[14px] font-extrabold text-slate-950">
                  Thông tin bài viết
                </h2>
              </div>

              <div className="space-y-4 p-5">
                <Field
                  label="Tiêu đề bài viết"
                  value={form.title}
                  onChange={
                    handleTitleChange
                  }
                  placeholder="Nhập tiêu đề..."
                />

                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Slug
                  </label>

                  <div className="relative">
                    <Link2
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      value={form.slug}
                      onChange={(e) =>
                        handleSlugChange(
                          e.target.value
                        )
                      }
                      placeholder="slug-bai-viet"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-[11px] outline-none focus:border-cyan-300"
                    />
                  </div>

                  {form.slug && (
                    <div className="mt-2 text-[9px] text-slate-400">
                      /knowledge/{form.slug}
                    </div>
                  )}
                </div>

                <TextareaField
                  label="Mô tả ngắn"
                  value={form.excerpt}
                  onChange={(value) =>
                    updateField(
                      "excerpt",
                      value
                    )
                  }
                  rows={4}
                  placeholder="Mô tả ngắn hiển thị ở card..."
                />

                <Field
                  label="Thời gian đọc"
                  value={form.readTime}
                  onChange={(value) =>
                    updateField(
                      "readTime",
                      value
                    )
                  }
                  placeholder="Ví dụ: 8 phút đọc"
                />
              </div>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-5">
                <h2 className="text-[14px] font-extrabold text-slate-950">
                  Nội dung bài viết
                </h2>
              </div>

              <div className="p-5">
                <TextareaField
                  label="Nội dung"
                  value={form.content}
                  onChange={(value) =>
                    updateField(
                      "content",
                      value
                    )
                  }
                  rows={20}
                  placeholder="Nhập nội dung bài viết..."
                />
              </div>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-5">
                <h2 className="text-[14px] font-extrabold text-slate-950">
                  Ảnh bài viết
                </h2>
              </div>

              <div className="grid gap-5 p-5 md:grid-cols-[250px_1fr]">
                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  {form.thumbnail ? (
                    <img
                      src={
                        form.thumbnail
                      }
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <ImageIcon
                        size={28}
                        className="text-slate-300"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Field
                    label="Đường dẫn ảnh"
                    value={
                      form.thumbnail
                    }
                    onChange={(value) =>
                      updateField(
                        "thumbnail",
                        value
                      )
                    }
                    placeholder="/images/knowledge/article.jpg"
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
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-[13px] font-extrabold text-slate-950">
                Xuất bản
              </h2>

              <div className="mt-4">
                <label className="mb-1.5 block text-[9px] font-bold uppercase text-slate-500">
                  Trạng thái
                </label>

                <select
                  value={form.status}
                  onChange={(e) =>
                    updateField(
                      "status",
                      e.target.value
                    )
                  }
                  className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] outline-none"
                >
                  <option value="draft">
                    Bản nháp
                  </option>

                  <option value="published">
                    Đang hiển thị
                  </option>
                </select>
              </div>

              <label className="mt-4 flex cursor-pointer items-center justify-between rounded-xl bg-[#F8FBFB] p-3">
                <div>
                  <div className="text-[10px] font-bold text-slate-800">
                    Bài nổi bật
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={
                    form.featured
                  }
                  onChange={(e) =>
                    updateField(
                      "featured",
                      e.target.checked
                    )
                  }
                  className="h-4 w-4 accent-[#00696B]"
                />
              </label>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-[13px] font-extrabold text-slate-950">
                Chuyên mục
              </h2>

              <select
                value={
                  form.categoryKey
                }
                onChange={(e) =>
                  handleCategoryChange(
                    e.target.value
                  )
                }
                className="mt-4 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] outline-none"
              >
                {categoryOptions.map(
                  (item) => (
                    <option
                      key={item.key}
                      value={
                        item.key
                      }
                    >
                      {item.label}
                    </option>
                  )
                )}
              </select>
            </section>

            <section className="rounded-2xl border border-cyan-100 bg-[#F0FFFF] p-5">
              <div className="text-[9px] font-bold uppercase tracking-wide text-[#00696B]">
                Preview
              </div>

              {form.thumbnail && (
                <div className="mt-3 aspect-[16/10] overflow-hidden rounded-xl bg-white">
                  <img
                    src={
                      form.thumbnail
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="mt-3 text-[9px] font-bold text-[#00696B]">
                {
                  form.categoryLabel
                }
              </div>

              <h3 className="mt-1 text-[12px] font-extrabold leading-5 text-slate-950">
                {form.title ||
                  "Tiêu đề bài viết"}
              </h3>

              <p className="mt-2 line-clamp-3 text-[9px] leading-4 text-slate-500">
                {form.excerpt ||
                  "Mô tả bài viết sẽ xuất hiện tại đây."}
              </p>
            </section>
          </aside>
        </div>

        <div className="sticky bottom-4 z-20 mt-5 flex justify-end">
          <div className="flex gap-2 rounded-2xl border border-slate-100 bg-white/95 p-3 shadow-xl backdrop-blur">
            <Link
              href="/dashboard/pages/knowledge"
              className="flex h-10 items-center rounded-xl bg-slate-50 px-4 text-[10px] font-bold text-slate-600"
            >
              Hủy
            </Link>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="flex h-10 items-center gap-2 rounded-xl bg-[#00FFFF] px-5 text-[10px] font-bold text-slate-950 disabled:opacity-50"
            >
              <Save size={15} />

              {saving
                ? "Đang lưu..."
                : isEdit
                ? "Lưu thay đổi"
                : "Thêm bài viết"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
