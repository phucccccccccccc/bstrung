"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/api/api";

import {
  ArrowLeft,
  ExternalLink,
  Eye,
  EyeOff,
  Link2,
  Pencil,
  Save,
  Stethoscope,
  X,
} from "lucide-react";

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
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-[11px] text-slate-800 outline-none transition focus:border-cyan-300"
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
      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
        {label}
      </label>

      <textarea
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[11px] leading-5 text-slate-800 outline-none transition focus:border-cyan-300"
      />
    </div>
  );
}

function SectionCard({
  number,
  title,
  description,
  isVisible,
  isEditing,
  onEdit,
  onCancel,
  onSave,
  onToggleVisibility,
  children,
}) {
  return (
    <section
      className={`overflow-hidden rounded-2xl border bg-white shadow-[0_4px_18px_rgba(15,23,42,0.03)] ${
        isVisible
          ? "border-slate-100"
          : "border-dashed border-slate-300 opacity-70"
      }`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFFFFF] text-[10px] font-extrabold text-[#00696B]">
            {number}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-[15px] font-extrabold text-slate-950">
                {title}
              </h2>

              {!isVisible && (
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[8px] font-bold uppercase text-slate-500">
                  Đang ẩn
                </span>
              )}
            </div>

            <p className="mt-1 text-[10px] text-slate-400">
              {description}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onToggleVisibility}
            className={`flex h-9 items-center gap-2 rounded-xl border px-3 text-[10px] font-bold ${
              isVisible
                ? "border-slate-200 bg-white text-slate-600"
                : "border-cyan-100 bg-[#EFFFFF] text-[#00696B]"
            }`}
          >
            {isVisible ? (
              <>
                <EyeOff size={14} />
                Ẩn
              </>
            ) : (
              <>
                <Eye size={14} />
                Hiện
              </>
            )}
          </button>

          {!isEditing ? (
            <button
              type="button"
              onClick={onEdit}
              className="flex h-9 items-center gap-2 rounded-xl bg-slate-950 px-3 text-[10px] font-bold text-white"
            >
              <Pencil size={14} />
              Sửa
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={onCancel}
                className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-bold text-slate-600"
              >
                <X size={14} />
                Hủy
              </button>

              <button
                type="button"
                onClick={onSave}
                className="flex h-9 items-center gap-2 rounded-xl bg-[#00FFFF] px-3 text-[10px] font-bold text-slate-950"
              >
                <Save size={14} />
                Xác nhận
              </button>
            </>
          )}
        </div>
      </div>

      <div
        className={`space-y-5 p-5 ${
          isEditing
            ? ""
            : "pointer-events-none bg-slate-50/30"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export default function SpecialtiesManagementPage() {
  const [form, setForm] = useState(null);
  const [visibility, setVisibility] =
    useState({});
  const [editingSection, setEditingSection] =
    useState(null);
  const [editBackup, setEditBackup] =
    useState(null);
  const [loading, setLoading] =
    useState(true);
  const [loadError, setLoadError] =
    useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setLoadError("");

        const response =
          await api.get("/pages/specialties");

        setForm(response.data.sections);
        setVisibility(
          response.data.visibility
        );
      } catch (error) {
        console.error(
          "SPECIALTIES ERROR:",
          error
        );

        setLoadError(
          error?.response?.data?.message ||
            error.message ||
            "Không thể tải dữ liệu Chuyên môn"
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const updateSection = (
    section,
    field,
    value
  ) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const updateSpecialty = (
    index,
    field,
    value
  ) => {
    setForm((prev) => {
      const items = [
        ...prev.items.items,
      ];

      items[index] = {
        ...items[index],
        [field]: value,
      };

      return {
        ...prev,
        items: {
          ...prev.items,
          items,
        },
      };
    });
  };

  const handleBeginEdit = (
    sectionKey
  ) => {
    setEditBackup(
      JSON.parse(
        JSON.stringify(
          form[sectionKey]
        )
      )
    );

    setEditingSection(
      sectionKey
    );
  };

  const handleCancelEdit = () => {
    if (
      editingSection &&
      editBackup !== null
    ) {
      setForm((prev) => ({
        ...prev,
        [editingSection]:
          editBackup,
      }));
    }

    setEditingSection(null);
    setEditBackup(null);
  };

  const handleSaveSection = async (
    sectionKey
  ) => {
    try {
      await api.put(
        `/pages/specialties/${sectionKey}`,
        {
          content:
            form[sectionKey],
        }
      );

      setEditingSection(null);
      setEditBackup(null);

      alert(
        "Đã cập nhật thành công"
      );
    } catch (error) {
      console.error(
        "SAVE SPECIALTIES ERROR:",
        error
      );

      alert(
        error?.response?.data
          ?.message ||
          "Không thể lưu thay đổi"
      );
    }
  };

  const handleToggleVisibility =
    async (sectionKey) => {
      try {
        const nextVisible =
          !visibility[sectionKey];

        await api.put(
          `/pages/specialties/${sectionKey}/visibility`,
          {
            isVisible:
              nextVisible,
          }
        );

        setVisibility(
          (prev) => ({
            ...prev,
            [sectionKey]:
              nextVisible,
          })
        );
      } catch (error) {
        console.error(
          "SPECIALTIES VISIBILITY ERROR:",
          error
        );

        alert(
          "Không thể thay đổi trạng thái hiển thị"
        );
      }
    };

  const cardProps = (
    sectionKey
  ) => ({
    isVisible:
      visibility[sectionKey] !==
      false,
    isEditing:
      editingSection ===
      sectionKey,
    onEdit: () =>
      handleBeginEdit(
        sectionKey
      ),
    onCancel:
      handleCancelEdit,
    onSave: () =>
      handleSaveSection(
        sectionKey
      ),
    onToggleVisibility: () =>
      handleToggleVisibility(
        sectionKey
      ),
  });

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FBFB]">
        <div className="text-[12px] font-semibold text-[#00696B]">
          Đang tải dữ liệu Chuyên môn...
        </div>
      </main>
    );
  }

  if (loadError || !form) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FBFB] p-6">
        <div className="max-w-md rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="font-bold text-red-600">
            Không tải được dữ liệu Chuyên môn
          </div>

          <p className="mt-2 text-[11px] text-slate-500">
            {loadError}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FBFB]">
      <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-100 bg-white/95 px-7 backdrop-blur">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/pages"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-600"
          >
            <ArrowLeft size={17} />
          </Link>

          <div>
            <div className="text-[9px] text-slate-400">
              Dashboard / Quản lý trang / Chuyên môn
            </div>

            <h1 className="mt-0.5 text-[16px] font-extrabold text-slate-950">
              Quản lý Chuyên môn
            </h1>
          </div>
        </div>

        <Link
          href="/specialties"
          target="_blank"
          className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[10px] font-bold text-slate-700"
        >
          <Eye size={15} />
          Xem trang
        </Link>
      </header>

      <div className="mx-auto max-w-[1200px] space-y-5 p-7">
        <section className="rounded-2xl border border-cyan-100 bg-[#F0FFFF] p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
              <Stethoscope
                size={20}
                className="text-[#00696B]"
              />
            </div>

            <div>
              <div className="text-[9px] font-bold uppercase tracking-wide text-[#00696B]">
                Page
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-3">
                <h2 className="text-[15px] font-extrabold text-slate-950">
                  Chuyên môn
                </h2>

                <span className="rounded-lg bg-white px-2.5 py-1 text-[9px] font-semibold text-slate-500">
                  /specialties
                </span>
              </div>

              <p className="mt-2 text-[10px] leading-5 text-slate-500">
                Dữ liệu lấy trực tiếp từ MySQL. Mỗi phần có thể sửa hoặc ẩn riêng.
              </p>
            </div>
          </div>
        </section>

        {form.hero && (
          <SectionCard
            number="01"
            title="Hero chuyên môn"
            description="Nội dung giới thiệu đầu trang."
            {...cardProps("hero")}
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Eyebrow"
                value={
                  form.hero.eyebrow
                }
                onChange={(value) =>
                  updateSection(
                    "hero",
                    "eyebrow",
                    value
                  )
                }
              />

              <Field
                label="Tiêu đề đầu"
                value={
                  form.hero.titleBefore
                }
                onChange={(value) =>
                  updateSection(
                    "hero",
                    "titleBefore",
                    value
                  )
                }
              />
            </div>

            <Field
              label="Highlight"
              value={
                form.hero
                  .titleHighlight
              }
              onChange={(value) =>
                updateSection(
                  "hero",
                  "titleHighlight",
                  value
                )
              }
            />

            <TextareaField
              label="Mô tả"
              value={
                form.hero.description
              }
              onChange={(value) =>
                updateSection(
                  "hero",
                  "description",
                  value
                )
              }
            />
          </SectionCard>
        )}

        {form.items && (
          <SectionCard
            number="02"
            title="Danh sách chuyên môn"
            description="Các card chuyên môn hiển thị trên /specialties."
            {...cardProps("items")}
          >
            <div className="grid gap-5 lg:grid-cols-2">
              {form.items.items?.map(
                (item, index) => (
                  <article
                    key={item.id ?? index}
                    className="rounded-2xl bg-[#F8FBFB] p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-wide text-[#00696B]">
                          Chuyên môn{" "}
                          {item.number}
                        </div>

                        <h3 className="mt-1 text-[14px] font-extrabold text-slate-950">
                          {item.shortTitle}
                        </h3>
                      </div>

                      <Link
                        href={item.slug}
                        target="_blank"
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-500"
                      >
                        <ExternalLink
                          size={15}
                        />
                      </Link>
                    </div>

                    <div className="space-y-4">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <Field
                          label="Số thứ tự"
                          value={
                            item.number
                          }
                          onChange={(value) =>
                            updateSpecialty(
                              index,
                              "number",
                              value
                            )
                          }
                        />

                        <Field
                          label="Tên ngắn"
                          value={
                            item.shortTitle
                          }
                          onChange={(value) =>
                            updateSpecialty(
                              index,
                              "shortTitle",
                              value
                            )
                          }
                        />
                      </div>

                      <Field
                        label="Tên chuyên môn"
                        value={item.title}
                        onChange={(value) =>
                          updateSpecialty(
                            index,
                            "title",
                            value
                          )
                        }
                      />

                      <TextareaField
                        label="Mô tả"
                        value={
                          item.description
                        }
                        onChange={(value) =>
                          updateSpecialty(
                            index,
                            "description",
                            value
                          )
                        }
                        rows={3}
                      />

                      <Field
                        label="Slug"
                        value={item.slug}
                        onChange={(value) =>
                          updateSpecialty(
                            index,
                            "slug",
                            value
                          )
                        }
                      />

                      <Field
                        label="Dashboard slug"
                        value={
                          item.dashboardSlug
                        }
                        onChange={(value) =>
                          updateSpecialty(
                            index,
                            "dashboardSlug",
                            value
                          )
                        }
                      />

                      <Field
                        label="Icon key"
                        value={
                          item.iconKey
                        }
                        onChange={(value) =>
                          updateSpecialty(
                            index,
                            "iconKey",
                            value
                          )
                        }
                      />
                    </div>

                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <Link
                        href={
                          item.dashboardSlug
                        }
                        className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#00696B] px-4 text-[10px] font-bold text-white"
                      >
                        <Pencil
                          size={14}
                        />
                        Chỉnh sửa chi tiết{" "}
                        {
                          item.shortTitle
                        }
                      </Link>
                    </div>
                  </article>
                )
              )}
            </div>
          </SectionCard>
        )}

        {form.cta && (
          <SectionCard
            number="03"
            title="CTA cuối trang"
            description="Kêu gọi đặt lịch ở cuối trang Chuyên môn."
            {...cardProps("cta")}
          >
            <Field
              label="Eyebrow"
              value={
                form.cta.eyebrow
              }
              onChange={(value) =>
                updateSection(
                  "cta",
                  "eyebrow",
                  value
                )
              }
            />

            <Field
              label="Tiêu đề"
              value={form.cta.title}
              onChange={(value) =>
                updateSection(
                  "cta",
                  "title",
                  value
                )
              }
            />

            <TextareaField
              label="Mô tả"
              value={
                form.cta.description
              }
              onChange={(value) =>
                updateSection(
                  "cta",
                  "description",
                  value
                )
              }
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Tên nút"
                value={
                  form.cta.buttonText
                }
                onChange={(value) =>
                  updateSection(
                    "cta",
                    "buttonText",
                    value
                  )
                }
              />

              <Field
                label="Slug / Link"
                value={
                  form.cta.buttonSlug
                }
                onChange={(value) =>
                  updateSection(
                    "cta",
                    "buttonSlug",
                    value
                  )
                }
              />
            </div>
          </SectionCard>
        )}
      </div>
    </main>
  );
}
