"use client";

import imageCompression from "browser-image-compression";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/api/api";

import {
  ArrowLeft,
  Award,
  BriefcaseMedical,
  Eye,
  EyeOff,
  ImageIcon,
  Link2,
  Pencil,
  Quote,
  Save,
  ShieldCheck,
  Upload,
  UserRound,
  X,
} from "lucide-react";

function Field({ label, value, onChange, placeholder = "" }) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
        {label}
      </label>

      <input
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-[11px] text-slate-800 outline-none transition focus:border-cyan-300 disabled:bg-slate-50"
      />
    </div>
  );
}

function TextareaField({ label, value, onChange, rows = 4 }) {
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
              Hãy chọn lại ảnh rồi bấm Xác nhận để lưu secure_url đúng.
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
            Chọn ảnh chỉ preview tạm. Ảnh chỉ upload lên Cloudinary khi bấm Xác nhận.
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
  icon: Icon,
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
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFFFFF]">
            {Icon ? (
              <Icon size={18} className="text-[#00696B]" />
            ) : (
              <span className="text-[10px] font-extrabold text-[#00696B]">
                {number}
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold text-cyan-700">
                {number}
              </span>

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
          isEditing ? "" : "pointer-events-none bg-slate-50/30"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export default function AboutManagementPage() {
  const [form, setForm] = useState(null);
  const [visibility, setVisibility] = useState({});
  const [editingSection, setEditingSection] = useState(null);
  const [editBackup, setEditBackup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [pendingUploads, setPendingUploads] = useState({});

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        setLoading(true);
        setLoadError("");

        const response = await api.get("/pages/about");

        setForm(response.data.sections);
        setVisibility(response.data.visibility);
      } catch (error) {
        console.error("ABOUT ERROR:", error);

        setLoadError(
          error?.response?.data?.message ||
            error.message ||
            "Không thể tải dữ liệu trang About"
        );
      } finally {
        setLoading(false);
      }
    };

    loadAboutData();
  }, []);

  const updateSection = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    setForm((prev) => {
      const items = [...prev[section].items];

      items[index] = {
        ...items[index],
        [field]: value,
      };

      return {
        ...prev,
        [section]: {
          ...prev[section],
          items,
        },
      };
    });
  };

  const updateHeroMetric = (index, field, value) => {
    setForm((prev) => {
      const metrics = [...prev.hero.metrics];

      metrics[index] = {
        ...metrics[index],
        [field]: value,
      };

      return {
        ...prev,
        hero: {
          ...prev.hero,
          metrics,
        },
      };
    });
  };

  const updateAssurance = (index, value) => {
    setForm((prev) => {
      const assurances = [...prev.cta.assurances];
      assurances[index] = value;

      return {
        ...prev,
        cta: {
          ...prev.cta,
          assurances,
        },
      };
    });
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
          initialQuality: 0.82,
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

    if (
      !url ||
      !url.includes(
        "res.cloudinary.com"
      ) ||
      url.includes(
        "res-console.cloudinary.com"
      )
    ) {
      throw new Error(
        "Cloudinary không trả về secure_url hợp lệ"
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

      const uploadResults =
        await Promise.all(
          filesToUpload.map(
            async ([
              uploadKey,
              uploadData,
            ]) => {
              const imageUrl =
                await uploadImageToCloudinary(
                  uploadData.file,
                  uploadData.folder
                );

              return {
                uploadKey,
                imageUrl,
              };
            }
          )
        );

      uploadResults.forEach(
        ({
          uploadKey,
          imageUrl,
        }) => {
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
      );

      await api.put(
        `/pages/about/${sectionKey}`,
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
        "SAVE ABOUT ERROR:",
        error
      );

      alert(
        error?.response?.data
          ?.message ||
          error?.message ||
          "Không thể lưu thay đổi"
      );
    }
  };

  const handleToggleVisibility = async (sectionKey) => {
    try {
      const nextVisible =
        !visibility[sectionKey];

      await api.put(
        `/pages/about/${sectionKey}/visibility`,
        {
          isVisible: nextVisible,
        }
      );

      setVisibility((prev) => ({
        ...prev,
        [sectionKey]: nextVisible,
      }));
    } catch (error) {
      console.error("ABOUT VISIBILITY ERROR:", error);

      alert(
        "Không thể thay đổi trạng thái hiển thị"
      );
    }
  };

  const cardProps = (sectionKey) => ({
    isVisible: visibility[sectionKey] !== false,
    isEditing: editingSection === sectionKey,
    onEdit: () => handleBeginEdit(sectionKey),
    onCancel: handleCancelEdit,
    onSave: () => handleSaveSection(sectionKey),
    onToggleVisibility: () =>
      handleToggleVisibility(sectionKey),
  });

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FBFB]">
        <div className="text-[12px] font-semibold text-[#00696B]">
          Đang tải dữ liệu About...
        </div>
      </main>
    );
  }

  if (loadError || !form) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FBFB] p-6">
        <div className="max-w-md rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="font-bold text-red-600">
            Không tải được dữ liệu About
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
              Dashboard / Quản lý trang / Về Bác sĩ Trung
            </div>

            <h1 className="mt-0.5 text-[16px] font-extrabold text-slate-950">
              Chỉnh sửa Về Bác sĩ Trung
            </h1>
          </div>
        </div>

        <Link
          href="/about"
          target="_blank"
          className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[10px] font-bold text-slate-700"
        >
          <Eye size={15} />
          Xem trang
        </Link>
      </header>

      <div className="mx-auto max-w-[1200px] space-y-5 p-7">
        <div className="rounded-2xl border border-cyan-100 bg-[#F0FFFF] p-4">
          <div className="text-[9px] font-bold uppercase text-[#00696B]">
            Page
          </div>

          <div className="mt-1 flex items-center gap-3">
            <span className="text-[14px] font-extrabold text-slate-950">
              Về Bác sĩ Trung
            </span>

            <span className="rounded-lg bg-white px-2.5 py-1 text-[9px] font-semibold text-slate-500">
              /about
            </span>
          </div>

          <p className="mt-2 text-[10px] text-slate-500">
            Dữ liệu được tải trực tiếp từ MySQL. Mỗi phần có thể sửa hoặc ẩn riêng.
          </p>
        </div>

        {form.hero && (
          <SectionCard
            number="01"
            icon={UserRound}
            title="Hero giới thiệu"
            description="Nội dung đầu trang About."
            {...cardProps("hero")}
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Badge"
                value={form.hero.badge}
                onChange={(value) =>
                  updateSection("hero", "badge", value)
                }
              />

              <ImageField
                label="Ảnh bác sĩ"
                value={form.hero.image}
                uploadKey="hero.image"
                folder="bstrung/about/hero"
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
                label="Tiêu đề đầu"
                value={form.hero.titleBefore}
                onChange={(value) =>
                  updateSection("hero", "titleBefore", value)
                }
              />

              <Field
                label="Highlight"
                value={form.hero.titleHighlight}
                onChange={(value) =>
                  updateSection("hero", "titleHighlight", value)
                }
              />

              <Field
                label="Tiêu đề cuối"
                value={form.hero.titleAfter}
                onChange={(value) =>
                  updateSection("hero", "titleAfter", value)
                }
              />
            </div>

            <TextareaField
              label="Mô tả"
              value={form.hero.description}
              onChange={(value) =>
                updateSection("hero", "description", value)
              }
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Nhãn quote"
                value={form.hero.quoteLabel}
                onChange={(value) =>
                  updateSection("hero", "quoteLabel", value)
                }
              />

              <TextareaField
                label="Quote"
                value={form.hero.quote}
                onChange={(value) =>
                  updateSection("hero", "quote", value)
                }
                rows={3}
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {form.hero.metrics?.map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 rounded-xl bg-slate-50 p-4"
                >
                  <Field
                    label="Giá trị"
                    value={item.value}
                    onChange={(value) =>
                      updateHeroMetric(index, "value", value)
                    }
                  />

                  <Field
                    label="Nhãn"
                    value={item.label}
                    onChange={(value) =>
                      updateHeroMetric(index, "label", value)
                    }
                  />
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {form.principles && (
          <SectionCard
            number="02"
            icon={ShieldCheck}
            title="Ba nguyên tắc điều trị"
            description="Triết lý cốt lõi của bác sĩ."
            {...cardProps("principles")}
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Eyebrow"
                value={form.principles.eyebrow}
                onChange={(value) =>
                  updateSection("principles", "eyebrow", value)
                }
              />

              <Field
                label="Tiêu đề"
                value={form.principles.title}
                onChange={(value) =>
                  updateSection("principles", "title", value)
                }
              />
            </div>

            <TextareaField
              label="Mô tả"
              value={form.principles.description}
              onChange={(value) =>
                updateSection("principles", "description", value)
              }
            />

            <div className="grid gap-4 lg:grid-cols-3">
              {form.principles.items?.map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 rounded-xl bg-slate-50 p-4"
                >
                  <Field
                    label="Số"
                    value={item.number}
                    onChange={(value) =>
                      updateArrayItem(
                        "principles",
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
                      updateArrayItem(
                        "principles",
                        index,
                        "title",
                        value
                      )
                    }
                  />

                  <TextareaField
                    label="Mô tả"
                    value={item.description}
                    onChange={(value) =>
                      updateArrayItem(
                        "principles",
                        index,
                        "description",
                        value
                      )
                    }
                    rows={3}
                  />

                  <Field
                    label="Label"
                    value={item.label}
                    onChange={(value) =>
                      updateArrayItem(
                        "principles",
                        index,
                        "label",
                        value
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {form.timeline && (
          <SectionCard
            number="03"
            icon={BriefcaseMedical}
            title="Hành trình nghề nghiệp"
            description="Các cột mốc chuyên môn."
            {...cardProps("timeline")}
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Eyebrow"
                value={form.timeline.eyebrow}
                onChange={(value) =>
                  updateSection("timeline", "eyebrow", value)
                }
              />

              <Field
                label="Tiêu đề"
                value={form.timeline.title}
                onChange={(value) =>
                  updateSection("timeline", "title", value)
                }
              />
            </div>

            <TextareaField
              label="Mô tả"
              value={form.timeline.description}
              onChange={(value) =>
                updateSection("timeline", "description", value)
              }
            />

            <div className="grid gap-4 lg:grid-cols-2">
              {form.timeline.items?.map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 rounded-xl bg-slate-50 p-4"
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field
                      label="Năm"
                      value={item.year}
                      onChange={(value) =>
                        updateArrayItem(
                          "timeline",
                          index,
                          "year",
                          value
                        )
                      }
                    />

                    <Field
                      label="Label"
                      value={item.label}
                      onChange={(value) =>
                        updateArrayItem(
                          "timeline",
                          index,
                          "label",
                          value
                        )
                      }
                    />
                  </div>

                  <Field
                    label="Tiêu đề"
                    value={item.title}
                    onChange={(value) =>
                      updateArrayItem(
                        "timeline",
                        index,
                        "title",
                        value
                      )
                    }
                  />

                  <TextareaField
                    label="Mô tả"
                    value={item.description}
                    onChange={(value) =>
                      updateArrayItem(
                        "timeline",
                        index,
                        "description",
                        value
                      )
                    }
                    rows={3}
                  />
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {form.certificates && (
          <SectionCard
            number="04"
            icon={Award}
            title="Chứng chỉ chuyên môn"
            description="Đào tạo và chứng nhận."
            {...cardProps("certificates")}
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Eyebrow"
                value={form.certificates.eyebrow}
                onChange={(value) =>
                  updateSection("certificates", "eyebrow", value)
                }
              />

              <Field
                label="Tiêu đề"
                value={form.certificates.title}
                onChange={(value) =>
                  updateSection("certificates", "title", value)
                }
              />
            </div>

            <Field
              label="Ghi chú"
              value={form.certificates.note}
              onChange={(value) =>
                updateSection("certificates", "note", value)
              }
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {form.certificates.items?.map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 rounded-xl bg-slate-50 p-4"
                >
                  <ImageField
                    label="Ảnh chứng chỉ"
                    value={item.image}
                    uploadKey={`certificates.items.${index}.image`}
                    folder="bstrung/about/certificates"
                    pendingFile={
                      pendingUploads[
                        `certificates.items.${index}.image`
                      ]?.file
                    }
                    onSelectFile={
                      handleSelectFile
                    }
                  />

                  <Field
                    label="Quốc gia / loại"
                    value={item.country}
                    onChange={(value) =>
                      updateArrayItem(
                        "certificates",
                        index,
                        "country",
                        value
                      )
                    }
                  />

                  <Field
                    label="Label"
                    value={item.label}
                    onChange={(value) =>
                      updateArrayItem(
                        "certificates",
                        index,
                        "label",
                        value
                      )
                    }
                  />

                  <Field
                    label="Tiêu đề"
                    value={item.title}
                    onChange={(value) =>
                      updateArrayItem(
                        "certificates",
                        index,
                        "title",
                        value
                      )
                    }
                  />

                  <TextareaField
                    label="Mô tả"
                    value={item.description}
                    onChange={(value) =>
                      updateArrayItem(
                        "certificates",
                        index,
                        "description",
                        value
                      )
                    }
                    rows={3}
                  />
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {form.gallery && (
          <SectionCard
            number="05"
            icon={ImageIcon}
            title="Khoảnh khắc nghề nghiệp"
            description="Hình ảnh hoạt động chuyên môn."
            {...cardProps("gallery")}
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Field
                label="Eyebrow"
                value={form.gallery.eyebrow}
                onChange={(value) =>
                  updateSection("gallery", "eyebrow", value)
                }
              />

              <Field
                label="Tiêu đề"
                value={form.gallery.title}
                onChange={(value) =>
                  updateSection("gallery", "title", value)
                }
              />
            </div>

            <TextareaField
              label="Mô tả"
              value={form.gallery.description}
              onChange={(value) =>
                updateSection("gallery", "description", value)
              }
            />

            <div className="grid gap-4 lg:grid-cols-2">
              {form.gallery.items?.map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 rounded-xl bg-slate-50 p-4"
                >
                  <ImageField
                    label="Ảnh"
                    value={item.image}
                    uploadKey={`gallery.items.${index}.image`}
                    folder="bstrung/about/gallery"
                    pendingFile={
                      pendingUploads[
                        `gallery.items.${index}.image`
                      ]?.file
                    }
                    onSelectFile={
                      handleSelectFile
                    }
                  />

                  <Field
                    label="Tiêu đề"
                    value={item.title}
                    onChange={(value) =>
                      updateArrayItem(
                        "gallery",
                        index,
                        "title",
                        value
                      )
                    }
                  />

                  <TextareaField
                    label="Mô tả"
                    value={item.description}
                    onChange={(value) =>
                      updateArrayItem(
                        "gallery",
                        index,
                        "description",
                        value
                      )
                    }
                    rows={3}
                  />
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {form.cta && (
          <SectionCard
            number="06"
            icon={Quote}
            title="CTA cuối trang"
            description="Khu vực đặt lịch cuối trang About."
            {...cardProps("cta")}
          >
            <Field
              label="Eyebrow"
              value={form.cta.eyebrow}
              onChange={(value) =>
                updateSection("cta", "eyebrow", value)
              }
            />

            <Field
              label="Tiêu đề"
              value={form.cta.title}
              onChange={(value) =>
                updateSection("cta", "title", value)
              }
            />

            <TextareaField
              label="Mô tả"
              value={form.cta.description}
              onChange={(value) =>
                updateSection("cta", "description", value)
              }
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-3 rounded-xl bg-slate-50 p-4">
                <Field
                  label="Nút chính"
                  value={form.cta.primaryText}
                  onChange={(value) =>
                    updateSection("cta", "primaryText", value)
                  }
                />

                <Field
                  label="Link chính"
                  value={form.cta.primarySlug}
                  onChange={(value) =>
                    updateSection("cta", "primarySlug", value)
                  }
                />
              </div>

              <div className="space-y-3 rounded-xl bg-slate-50 p-4">
                <Field
                  label="Nút phụ"
                  value={form.cta.secondaryText}
                  onChange={(value) =>
                    updateSection("cta", "secondaryText", value)
                  }
                />

                <Field
                  label="Link phụ"
                  value={form.cta.secondarySlug}
                  onChange={(value) =>
                    updateSection("cta", "secondarySlug", value)
                  }
                />
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-3">
              {form.cta.assurances?.map((item, index) => (
                <Field
                  key={index}
                  label={`Cam kết ${index + 1}`}
                  value={item}
                  onChange={(value) =>
                    updateAssurance(index, value)
                  }
                />
              ))}
            </div>
          </SectionCard>
        )}
      </div>
    </main>
  );
}
