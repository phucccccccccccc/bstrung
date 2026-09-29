"use client";
import imageCompression from "browser-image-compression";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/api/api";


import {
  ArrowLeft,
  Eye,
  EyeOff,
  ImageIcon,
  Link2,
  Pencil,
  Save,
  Upload,
  X,
} from "lucide-react";

function Field({
  label,
  value,
  onChange,
  placeholder,
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

function ImageField({
  label,
  value,
  uploadKey,
  folder,
  pendingFile,
  onSelectFile,
}) {
  const [previewUrl, setPreviewUrl] =
    useState("");

  useEffect(() => {
    if (!pendingFile) {
      setPreviewUrl("");
      return;
    }

    const objectUrl =
      URL.createObjectURL(
        pendingFile
      );

    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(
        objectUrl
      );
    };
  }, [pendingFile]);

  const displayUrl =
    previewUrl || value || "";

  const invalidCloudinaryUrl =
    typeof value === "string" &&
    value.includes(
      "res-console.cloudinary.com"
    );

  const handleChooseFile = (
    event
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    onSelectFile(
      uploadKey,
      file,
      folder
    );

    event.target.value = "";
  };

  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
        {label}
      </label>

      <div className="grid gap-3 lg:grid-cols-[150px_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          {displayUrl &&
          !invalidCloudinaryUrl ? (
            <img
              src={displayUrl}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <ImageIcon
                size={24}
                className="text-slate-300"
              />
            </div>
          )}

          {pendingFile && (
            <div className="absolute bottom-2 left-2 rounded-full bg-slate-950/80 px-2 py-1 text-[8px] font-bold text-white">
              Chưa lưu
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Link2
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={value ?? ""}
              readOnly
              placeholder="URL Cloudinary sẽ được tạo khi bấm Xác nhận"
              className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-[11px] text-slate-600 outline-none"
            />
          </div>

          {invalidCloudinaryUrl && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-[9px] leading-4 text-red-600">
              URL hiện tại là link Cloudinary Console, không phải link ảnh public.
              Hãy chọn lại ảnh rồi bấm Xác nhận để hệ thống lưu secure_url đúng.
            </p>
          )}

          <label className="flex h-9 w-fit cursor-pointer items-center gap-2 rounded-xl bg-[#EFFFFF] px-3 text-[10px] font-bold text-[#00696B]">
            <Upload size={14} />
            Chọn ảnh

            <input
              type="file"
              accept="image/*"
              onChange={
                handleChooseFile
              }
              className="hidden"
            />
          </label>

          <p className="text-[9px] leading-4 text-slate-400">
            Chọn ảnh chỉ tạo preview tạm trên trình duyệt.
            Ảnh chỉ upload lên Cloudinary khi bạn bấm Xác nhận.
          </p>
        </div>
      </div>
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
      className={`overflow-hidden rounded-2xl border bg-white shadow-[0_4px_18px_rgba(15,23,42,0.03)] transition ${
        isVisible
          ? "border-slate-100"
          : "border-dashed border-slate-300 opacity-70"
      }`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EFFFFF] text-[11px] font-extrabold text-[#00696B]">
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
            className={`flex h-9 items-center gap-2 rounded-xl border px-3 text-[10px] font-bold transition ${
              isVisible
                ? "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
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
              className="flex h-9 items-center gap-2 rounded-xl bg-slate-950 px-3 text-[10px] font-bold text-white transition hover:bg-slate-800"
            >
              <Pencil size={14} />
              Sửa
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={onCancel}
                className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-bold text-slate-600 transition hover:bg-slate-50"
              >
                <X size={14} />
                Hủy
              </button>

              <button
                type="button"
                onClick={onSave}
                className="flex h-9 items-center gap-2 rounded-xl bg-[#00FFFF] px-3 text-[10px] font-bold text-slate-950 transition hover:bg-[#33FFFF]"
              >
                <Save size={14} />
                Xác nhận
              </button>
            </>
          )}
        </div>
      </div>

      <div
        className={`space-y-5 p-5 transition ${
          isEditing ? "" : "pointer-events-none bg-slate-50/30"
        }`}
      >
        {children}
      </div>
    </section>
  );
}


export default function HomeManagementPage() {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [visibility, setVisibility] =
  useState({});

const [editingSection, setEditingSection] =
  useState(null);

const [editBackup, setEditBackup] =
  useState(null);

const [pendingUploads, setPendingUploads] =
  useState({});

useEffect(() => {
  const loadHomeData = async () => {
    try {
      setLoading(true);

      const response =
        await api.get("/pages/home");

      setForm(response.data.sections);

      setVisibility(
        response.data.visibility
      );
    } catch (error) {
      console.error(
        "HOME ERROR:",
        error
      );

      setLoadError(
        error?.response?.data?.message ||
          error.message ||
          "Không thể tải dữ liệu Trang chủ"
      );
    } finally {
      setLoading(false);
    }
  };

  loadHomeData();
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
  const handleSelectFile = (
    uploadKey,
    file,
    folder
  ) => {
    setPendingUploads((prev) => ({
      ...prev,
      [uploadKey]: {
        file,
        folder,
      },
    }));
  };

const uploadImageToCloudinary = async (
  file,
  folder
) => {
  const compressedFile =
    await imageCompression(
      file,
      {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: 0.8,
      }
    );

  const formData =
    new FormData();

  formData.append(
    "image",
    compressedFile
  );

  formData.append(
    "folder",
    folder
  );

  const response =
    await api.post(
      "/upload/image",
      formData
    );

  const url =
    response?.data?.url;

  if (!url) {
    throw new Error(
      "Không nhận được URL Cloudinary"
    );
  }

  return url;
};

  const setValueByPath = (
    target,
    path,
    value
  ) => {
    const parts =
      path.split(".");

    let current =
      target;

    for (
      let index = 0;
      index <
      parts.length - 1;
      index += 1
    ) {
      current =
        current[parts[index]];
    }

    current[
      parts[
        parts.length - 1
      ]
    ] = value;
  };

  const handleBeginEdit = (sectionKey) => {
    if (!form?.[sectionKey]) return;

    setEditBackup(
      JSON.parse(JSON.stringify(form[sectionKey]))
    );

    setEditingSection(sectionKey);
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

    if (editingSection) {
      const prefix =
        `${editingSection}.`;

      setPendingUploads(
        (prev) => {
          const next = {
            ...prev,
          };

          Object.keys(next)
            .filter((key) =>
              key.startsWith(
                prefix
              )
            )
            .forEach((key) => {
              delete next[key];
            });

          return next;
        }
      );
    }

    setEditingSection(null);
    setEditBackup(null);
  };

  const handleToggleVisibility = async (
  sectionKey
) => {
  try {
    const nextVisible =
      !visibility[sectionKey];

    await api.put(
      `/pages/home/${sectionKey}/visibility`,
      {
        isVisible: nextVisible,
      }
    );

    setVisibility((prev) => ({
      ...prev,
      [sectionKey]: nextVisible,
    }));
  } catch (error) {
    console.error(
      "TOGGLE VISIBILITY ERROR:",
      error
    );

    alert(
      "Không thể thay đổi trạng thái hiển thị."
    );
  }
};
const handleSaveSection = async (
  sectionKey
) => {
  try {
    const content =
      JSON.parse(
        JSON.stringify(
          form[sectionKey]
        )
      );

    const prefix =
      `${sectionKey}.`;

    const filesToUpload =
      Object.entries(
        pendingUploads
      ).filter(([key]) =>
        key.startsWith(
          prefix
        )
      );

    for (const [
      uploadKey,
      uploadData,
    ] of filesToUpload) {
      const imageUrl =
        await uploadImageToCloudinary(
          uploadData.file,
          uploadData.folder
        );

      const relativePath =
        uploadKey.slice(
          prefix.length
        );

      setValueByPath(
        content,
        relativePath,
        imageUrl
      );
    }

    await api.put(
      `/pages/home/${sectionKey}`,
      {
        content,
      }
    );

    setForm((prev) => ({
      ...prev,
      [sectionKey]:
        content,
    }));

    setPendingUploads(
      (prev) => {
        const next = {
          ...prev,
        };

        Object.keys(next)
          .filter((key) =>
            key.startsWith(
              prefix
            )
          )
          .forEach((key) => {
            delete next[key];
          });

        return next;
      }
    );

    setEditingSection(null);
    setEditBackup(null);

    alert(
      "Đã cập nhật thành công"
    );
  } catch (error) {
    console.error(
      "SAVE SECTION ERROR:",
      error
    );

    alert(
      error?.response?.data?.message ||
        error?.message ||
        "Không thể lưu thay đổi"
    );
  }
};
  const updateStat = (
    index,
    field,
    value
  ) => {
    setForm((prev) => {
      const stats = [...prev.stats];

      stats[index] = {
        ...stats[index],
        [field]: value,
      };

      return {
        ...prev,
        stats,
      };
    });
  };
  const updateSpecialtyItem = (index, field, value) => {
  setForm((prev) => {
    const items = [...prev.specialties.items];

    items[index] = {
      ...items[index],
      [field]: value,
    };

    return {
      ...prev,
      specialties: {
        ...prev.specialties,
        items,
      },
    };
  });
};

const updateFeaturedStep = (index, value) => {
  setForm((prev) => {
    const steps = [...prev.featuredCase.steps];

    steps[index] = value;

    return {
      ...prev,
      featuredCase: {
        ...prev.featuredCase,
        steps,
      },
    };
  });
};

const updateKnowledgeItem = (index, field, value) => {
  setForm((prev) => {
    const items = [...prev.knowledge.items];

    items[index] = {
      ...items[index],
      [field]: value,
    };

    return {
      ...prev,
      knowledge: {
        ...prev.knowledge,
        items,
      },
    };
  });
};
if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FBFB]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-100 border-t-[#00696B]" />

          <div className="text-[12px] font-semibold text-[#00696B]">
            Đang tải dữ liệu Trang chủ...
          </div>
        </div>
      </main>
    );
  }

  if (loadError || !form) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FBFB] p-6">
        <div className="w-full max-w-md rounded-2xl border border-red-100 bg-white p-6 text-center shadow-sm">
          <div className="text-[15px] font-extrabold text-red-600">
            Không tải được dữ liệu Trang chủ
          </div>

          <p className="mt-2 text-[11px] leading-5 text-slate-500">
            {loadError}
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-xl bg-[#00FFFF] px-5 py-2.5 text-[10px] font-bold text-slate-950"
          >
            Tải lại
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FBFB]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-100 bg-white/95 px-7 backdrop-blur">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/pages"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-[#EFFFFF] hover:text-[#00696B]"
          >
            <ArrowLeft size={17} />
          </Link>

          <div>
            <div className="text-[9px] text-slate-400">
              Dashboard / Quản lý trang / Trang chủ
            </div>

            <h1 className="mt-0.5 text-[16px] font-extrabold text-slate-950">
              Chỉnh sửa Trang chủ
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[10px] font-bold text-slate-700 transition hover:border-cyan-200"
          >
            <Eye size={15} />
            Xem trang
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] space-y-5 p-7">
        {/* INFO */}
        <div className="rounded-2xl border border-cyan-100 bg-[#F0FFFF] p-4">
          <div className="text-[10px] font-bold uppercase tracking-wide text-[#00696B]">
            Trang đang chỉnh sửa
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-3">
            <span className="text-[14px] font-extrabold text-slate-950">
              Trang chủ
            </span>

            <span className="rounded-lg bg-white px-2.5 py-1 text-[9px] font-semibold text-slate-500">
              Route: /
            </span>
          </div>

          <p className="mt-2 text-[10px] leading-5 text-slate-500">
            Dữ liệu bên dưới đang được tải trực tiếp từ MySQL thông qua API.
          </p>
        </div>

        {/* HERO */}
        {form.hero && (
          <SectionCard
            number="01"
            title="Hero"
            description="Nội dung đầu tiên người dùng nhìn thấy khi vào website."
          
            isVisible={visibility.hero !== false}
            isEditing={editingSection === "hero"}
            onEdit={() => handleBeginEdit("hero")}
            onCancel={handleCancelEdit}
            onSave={() => handleSaveSection("hero")}
            onToggleVisibility={() =>
              handleToggleVisibility("hero")
            }
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Badge"
                value={form.hero.badge}
                onChange={(value) =>
                  updateSection(
                    "hero",
                    "badge",
                    value
                  )
                }
              />

              <ImageField
                  label="Hero Image"
                  value={form.hero.image}
                  uploadKey="hero.image"
                  folder="bstrung/home/hero"
                  pendingFile={
                    pendingUploads[
                      "hero.image"
                    ]?.file
                  }
                  onSelectFile={
                    handleSelectFile
                  }
                />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <Field
                label="Tiêu đề dòng 1"
                value={form.hero.titleLine1}
                onChange={(value) =>
                  updateSection(
                    "hero",
                    "titleLine1",
                    value
                  )
                }
              />

              <Field
                label="Chữ Highlight"
                value={form.hero.titleHighlight}
                onChange={(value) =>
                  updateSection(
                    "hero",
                    "titleHighlight",
                    value
                  )
                }
              />

              <Field
                label="Tiêu đề dòng 2"
                value={form.hero.titleLine2}
                onChange={(value) =>
                  updateSection(
                    "hero",
                    "titleLine2",
                    value
                  )
                }
              />
            </div>

            <TextareaField
              label="Mô tả"
              value={form.hero.description}
              onChange={(value) =>
                updateSection(
                  "hero",
                  "description",
                  value
                )
              }
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                <div className="text-[10px] font-bold text-slate-700">
                  CTA chính
                </div>

                <Field
                  label="Tên nút"
                  value={form.hero.primaryCtaText}
                  onChange={(value) =>
                    updateSection(
                      "hero",
                      "primaryCtaText",
                      value
                    )
                  }
                />

                <Field
                  label="Slug / Link"
                  value={form.hero.primaryCtaSlug}
                  onChange={(value) =>
                    updateSection(
                      "hero",
                      "primaryCtaSlug",
                      value
                    )
                  }
                />
              </div>

              <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                <div className="text-[10px] font-bold text-slate-700">
                  CTA phụ
                </div>

                <Field
                  label="Tên nút"
                  value={form.hero.secondaryCtaText}
                  onChange={(value) =>
                    updateSection(
                      "hero",
                      "secondaryCtaText",
                      value
                    )
                  }
                />

                <Field
                  label="Slug / Link"
                  value={form.hero.secondaryCtaSlug}
                  onChange={(value) =>
                    updateSection(
                      "hero",
                      "secondaryCtaSlug",
                      value
                    )
                  }
                />
              </div>
            </div>
          </SectionCard>
        )}

        {/* STATS */}
        {Array.isArray(form.stats) && (
          <SectionCard
            number="02"
            title="Thống kê"
            description="Các con số hiển thị bên dưới Hero."
          
            isVisible={visibility.stats !== false}
            isEditing={editingSection === "stats"}
            onEdit={() => handleBeginEdit("stats")}
            onCancel={handleCancelEdit}
            onSave={() => handleSaveSection("stats")}
            onToggleVisibility={() =>
              handleToggleVisibility("stats")
            }
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {form.stats.map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 rounded-xl bg-slate-50 p-4"
                >
                  <div className="text-[10px] font-extrabold text-[#00696B]">
                    Card {index + 1}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field
                      label="Giá trị"
                      value={item.value}
                      onChange={(value) =>
                        updateStat(
                          index,
                          "value",
                          value
                        )
                      }
                    />

                    <Field
                      label="Label"
                      value={item.label}
                      onChange={(value) =>
                        updateStat(
                          index,
                          "label",
                          value
                        )
                      }
                    />
                  </div>

                  <Field
                    label="Mô tả"
                    value={item.description}
                    onChange={(value) =>
                      updateStat(
                        index,
                        "description",
                        value
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {/* PHILOSOPHY */}
        {form.philosophy && (
          <SectionCard
            number="03"
            title="Triết lý điều trị"
            description="Phần giới thiệu định hướng chuyên môn của Bác sĩ Trung."
          
            isVisible={visibility.philosophy !== false}
            isEditing={editingSection === "philosophy"}
            onEdit={() => handleBeginEdit("philosophy")}
            onCancel={handleCancelEdit}
            onSave={() => handleSaveSection("philosophy")}
            onToggleVisibility={() =>
              handleToggleVisibility("philosophy")
            }
          >
            <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
              <div className="space-y-4">
                <Field
                  label="Eyebrow"
                  value={form.philosophy.eyebrow}
                  onChange={(value) =>
                    updateSection(
                      "philosophy",
                      "eyebrow",
                      value
                    )
                  }
                />

                <Field
                  label="Tiêu đề"
                  value={form.philosophy.title}
                  onChange={(value) =>
                    updateSection(
                      "philosophy",
                      "title",
                      value
                    )
                  }
                />

                <TextareaField
                  label="Mô tả"
                  value={form.philosophy.description}
                  onChange={(value) =>
                    updateSection(
                      "philosophy",
                      "description",
                      value
                    )
                  }
                />

                <TextareaField
                  label="Quote"
                  value={form.philosophy.quote}
                  onChange={(value) =>
                    updateSection(
                      "philosophy",
                      "quote",
                      value
                    )
                  }
                  rows={3}
                />
              </div>

              <ImageField
                label="Ảnh"
                value={form.philosophy.image}
                uploadKey="philosophy.image"
                folder="bstrung/home/philosophy"
                pendingFile={
                  pendingUploads[
                    "philosophy.image"
                  ]?.file
                }
                onSelectFile={
                  handleSelectFile
                }
              />
            </div>
          </SectionCard>
        )}
        {/* SPECIALTIES */}
{form.specialties && (
  <SectionCard
    number="04"
    title="Lĩnh vực điều trị trọng tâm"
    description="Các chuyên môn hiển thị trên Trang chủ."
  
            isVisible={visibility.specialties !== false}
            isEditing={editingSection === "specialties"}
            onEdit={() => handleBeginEdit("specialties")}
            onCancel={handleCancelEdit}
            onSave={() => handleSaveSection("specialties")}
            onToggleVisibility={() =>
              handleToggleVisibility("specialties")
            }
          >
    <div className="grid gap-4 lg:grid-cols-2">
      <Field
        label="Eyebrow"
        value={form.specialties.eyebrow}
        onChange={(value) =>
          updateSection(
            "specialties",
            "eyebrow",
            value
          )
        }
      />

      <Field
        label="Tiêu đề"
        value={form.specialties.title}
        onChange={(value) =>
          updateSection(
            "specialties",
            "title",
            value
          )
        }
      />
    </div>

    <TextareaField
      label="Mô tả"
      value={form.specialties.description}
      onChange={(value) =>
        updateSection(
          "specialties",
          "description",
          value
        )
      }
    />

    {Array.isArray(form.specialties.items) && (
      <div className="grid gap-4 lg:grid-cols-2">
        {form.specialties.items.map(
          (item, index) => (
            <div
              key={index}
              className="space-y-4 rounded-xl bg-slate-50 p-4"
            >
              <div className="text-[10px] font-extrabold text-[#00696B]">
                Chuyên môn {item.number || index + 1}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field
                  label="Số thứ tự"
                  value={item.number}
                  onChange={(value) =>
                    updateSpecialtyItem(
                      index,
                      "number",
                      value
                    )
                  }
                />

                <Field
                  label="Tiêu đề"
                  value={item.title}
                  onChange={(value) =>
                    updateSpecialtyItem(
                      index,
                      "title",
                      value
                    )
                  }
                />
              </div>

              <Field
                label="Slug"
                value={item.slug}
                onChange={(value) =>
                  updateSpecialtyItem(
                    index,
                    "slug",
                    value
                  )
                }
              />

              <TextareaField
                label="Mô tả"
                value={item.description}
                onChange={(value) =>
                  updateSpecialtyItem(
                    index,
                    "description",
                    value
                  )
                }
                rows={3}
              />

              <ImageField
                label="Ảnh"
                value={item.image}
                uploadKey={`specialties.items.${index}.image`}
                folder="bstrung/home/specialties"
                pendingFile={
                  pendingUploads[
                    `specialties.items.${index}.image`
                  ]?.file
                }
                onSelectFile={
                  handleSelectFile
                }
              />
            </div>
          )
        )}
      </div>
    )}
  </SectionCard>
)}

{/* FEATURED CASE */}
{form.featuredCase && (
  <SectionCard
    number="05"
    title="Hồ sơ điều trị tiêu biểu"
    description="Ca điều trị nổi bật được giới thiệu trên Trang chủ."
  
            isVisible={visibility.featuredCase !== false}
            isEditing={editingSection === "featuredCase"}
            onEdit={() => handleBeginEdit("featuredCase")}
            onCancel={handleCancelEdit}
            onSave={() => handleSaveSection("featuredCase")}
            onToggleVisibility={() =>
              handleToggleVisibility("featuredCase")
            }
          >
    <div className="grid gap-4 lg:grid-cols-2">
      <Field
        label="Eyebrow"
        value={form.featuredCase.eyebrow}
        onChange={(value) =>
          updateSection(
            "featuredCase",
            "eyebrow",
            value
          )
        }
      />

      <Field
        label="Tiêu đề khu vực"
        value={form.featuredCase.title}
        onChange={(value) =>
          updateSection(
            "featuredCase",
            "title",
            value
          )
        }
      />
    </div>

    <Field
      label="Tiêu đề Case"
      value={form.featuredCase.caseTitle}
      onChange={(value) =>
        updateSection(
          "featuredCase",
          "caseTitle",
          value
        )
      }
    />

    <TextareaField
      label="Mô tả"
      value={form.featuredCase.description}
      onChange={(value) =>
        updateSection(
          "featuredCase",
          "description",
          value
        )
      }
    />

    <div className="grid gap-4 lg:grid-cols-2">
      <ImageField
        label="Ảnh trước điều trị"
        value={form.featuredCase.imageBefore}
        uploadKey="featuredCase.imageBefore"
        folder="bstrung/home/cases"
        pendingFile={
          pendingUploads[
            "featuredCase.imageBefore"
          ]?.file
        }
        onSelectFile={
          handleSelectFile
        }
      />

      <ImageField
        label="Ảnh sau điều trị"
        value={form.featuredCase.imageAfter}
        uploadKey="featuredCase.imageAfter"
        folder="bstrung/home/cases"
        pendingFile={
          pendingUploads[
            "featuredCase.imageAfter"
          ]?.file
        }
        onSelectFile={
          handleSelectFile
        }
      />
    </div>

    {Array.isArray(form.featuredCase.steps) && (
      <div className="space-y-3 rounded-xl bg-slate-50 p-4">
        <div className="text-[10px] font-bold text-slate-700">
          Các bước / điểm nổi bật
        </div>

        {form.featuredCase.steps.map(
          (step, index) => (
            <Field
              key={index}
              label={`Bước ${index + 1}`}
              value={step}
              onChange={(value) =>
                updateFeaturedStep(
                  index,
                  value
                )
              }
            />
          )
        )}
      </div>
    )}

    <div className="grid gap-4 lg:grid-cols-2">
      <Field
        label="Tên nút"
        value={form.featuredCase.ctaText}
        onChange={(value) =>
          updateSection(
            "featuredCase",
            "ctaText",
            value
          )
        }
      />

      <Field
        label="Slug / Link"
        value={form.featuredCase.ctaSlug}
        onChange={(value) =>
          updateSection(
            "featuredCase",
            "ctaSlug",
            value
          )
        }
      />
    </div>
  </SectionCard>
)}

{/* KNOWLEDGE */}
{form.knowledge && (
  <SectionCard
    number="06"
    title="Bác sĩ Trung chia sẻ"
    description="Các bài viết kiến thức hiển thị trên Trang chủ."
  
            isVisible={visibility.knowledge !== false}
            isEditing={editingSection === "knowledge"}
            onEdit={() => handleBeginEdit("knowledge")}
            onCancel={handleCancelEdit}
            onSave={() => handleSaveSection("knowledge")}
            onToggleVisibility={() =>
              handleToggleVisibility("knowledge")
            }
          >
    <div className="grid gap-4 lg:grid-cols-2">
      <Field
        label="Eyebrow"
        value={form.knowledge.eyebrow}
        onChange={(value) =>
          updateSection(
            "knowledge",
            "eyebrow",
            value
          )
        }
      />

      <Field
        label="Tiêu đề"
        value={form.knowledge.title}
        onChange={(value) =>
          updateSection(
            "knowledge",
            "title",
            value
          )
        }
      />
    </div>

    <TextareaField
      label="Mô tả"
      value={form.knowledge.description}
      onChange={(value) =>
        updateSection(
          "knowledge",
          "description",
          value
        )
      }
    />

    <div className="grid gap-4 lg:grid-cols-2">
      <Field
        label="Tên nút"
        value={form.knowledge.ctaText}
        onChange={(value) =>
          updateSection(
            "knowledge",
            "ctaText",
            value
          )
        }
      />

      <Field
        label="Slug / Link"
        value={form.knowledge.ctaSlug}
        onChange={(value) =>
          updateSection(
            "knowledge",
            "ctaSlug",
            value
          )
        }
      />
    </div>

    {Array.isArray(form.knowledge.items) && (
      <div className="grid gap-4 lg:grid-cols-3">
        {form.knowledge.items.map(
          (item, index) => (
            <div
              key={index}
              className="space-y-3 rounded-xl bg-slate-50 p-4"
            >
              <div className="text-[10px] font-extrabold text-[#00696B]">
                Bài viết {index + 1}
              </div>

              <Field
                label="Danh mục"
                value={item.category}
                onChange={(value) =>
                  updateKnowledgeItem(
                    index,
                    "category",
                    value
                  )
                }
              />

              <Field
                label="Tiêu đề"
                value={item.title}
                onChange={(value) =>
                  updateKnowledgeItem(
                    index,
                    "title",
                    value
                  )
                }
              />

              <Field
                label="Slug"
                value={item.slug}
                onChange={(value) =>
                  updateKnowledgeItem(
                    index,
                    "slug",
                    value
                  )
                }
              />
            </div>
          )
        )}
      </div>
    )}
  </SectionCard>
)}

        {/* FINAL CTA */}
        {form.finalCta && (
          <SectionCard
            number="07"
            title="CTA cuối trang"
            description="Khối kêu gọi đặt lịch ở cuối Trang chủ."
            isVisible={visibility.finalCta !== false}
            isEditing={editingSection === "finalCta"}
            onEdit={() => handleBeginEdit("finalCta")}
            onCancel={handleCancelEdit}
            onSave={() => handleSaveSection("finalCta")}
            onToggleVisibility={() =>
              handleToggleVisibility("finalCta")
            }
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Eyebrow"
                value={form.finalCta.eyebrow}
                onChange={(value) =>
                  updateSection(
                    "finalCta",
                    "eyebrow",
                    value
                  )
                }
              />

              <Field
                label="Tiêu đề"
                value={form.finalCta.title}
                onChange={(value) =>
                  updateSection(
                    "finalCta",
                    "title",
                    value
                  )
                }
              />
            </div>

            <TextareaField
              label="Mô tả"
              value={form.finalCta.description}
              onChange={(value) =>
                updateSection(
                  "finalCta",
                  "description",
                  value
                )
              }
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Tên nút"
                value={form.finalCta.buttonText}
                onChange={(value) =>
                  updateSection(
                    "finalCta",
                    "buttonText",
                    value
                  )
                }
              />

              <Field
                label="Slug / Link"
                value={form.finalCta.buttonSlug}
                onChange={(value) =>
                  updateSection(
                    "finalCta",
                    "buttonSlug",
                    value
                  )
                }
              />
            </div>

            <Field
              label="Nội dung bảo mật"
              value={form.finalCta.securityText}
              onChange={(value) =>
                updateSection(
                  "finalCta",
                  "securityText",
                  value
                )
              }
            />
          </SectionCard>
        )}

      </div>
    </main>
  );
}