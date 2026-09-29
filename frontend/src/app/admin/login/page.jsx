"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.username.trim()) {
      setError("Vui lòng nhập tài khoản quản trị.");
      return;
    }

    if (!form.password.trim()) {
      setError("Vui lòng nhập mật khẩu.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const demoUsername = "admin";
      const demoPassword = "123456";

      if (
        form.username === demoUsername &&
        form.password === demoPassword
      ) {
        localStorage.setItem(
          "admin_auth",
          JSON.stringify({
            username: form.username,
            role: "admin",
            loggedIn: true,
          })
        );

        router.push("/dashboard");
        return;
      }

      setError("Tài khoản hoặc mật khẩu không chính xác.");
      setLoading(false);
    }, 500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8FBFB] font-sans">
      <button
  type="button"
  onClick={() => router.push("/")}
  className="
    fixed
    left-3
    top-3
    z-[100]
    flex
    h-9
    items-center
    gap-2
    rounded-xl
    border
    border-slate-200
    bg-white/90
    px-3
    text-[11px]
    font-bold
    text-slate-700
    shadow-sm
    backdrop-blur
    transition

    hover:border-cyan-200
    hover:bg-[#EFFFFF]
    hover:text-[#00696B]

    sm:left-4
    sm:top-4

    lg:left-6
    lg:top-6
  "
>
  <ArrowLeft size={15} />
  Trang chủ
</button>
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed -left-10 -top-10 h-[120px] w-[120px] rounded-full bg-cyan-100/70 blur-[40px] sm:-left-16 sm:-top-16 sm:h-[220px] sm:w-[220px] sm:blur-[70px] lg:-left-24 lg:-top-24 lg:h-[380px] lg:w-[380px] lg:blur-[90px]" />

      <div className="pointer-events-none fixed -bottom-12 -right-10 h-[140px] w-[140px] rounded-full bg-[#CCFFFF]/60 blur-[45px] sm:-bottom-20 sm:-right-16 sm:h-[260px] sm:w-[260px] sm:blur-[75px] lg:-bottom-28 lg:-right-24 lg:h-[460px] lg:w-[460px] lg:blur-[100px]" />

      {/* WRAPPER */}
      <div className="relative flex min-h-screen items-center justify-center px-2 py-2 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-8">
        {/* LOGIN CARD */}
        <div
          className="
            grid
            w-full
            max-w-[1100px]
            grid-cols-[52%_48%]
            overflow-hidden
            rounded-lg
            border
            border-slate-200/70
            bg-white
            shadow-[0_10px_30px_rgba(15,23,42,0.07)]

            sm:rounded-xl
            md:rounded-2xl

            lg:min-h-[600px]
            lg:max-h-[720px]
            lg:rounded-[28px]
            lg:shadow-[0_24px_70px_rgba(15,23,42,0.09)]
          "
        >
          {/* IMAGE PANEL */}
          <section
            className="
              relative
              min-h-[220px]
              overflow-hidden

              sm:min-h-[320px]
              md:min-h-[430px]
              lg:min-h-0
            "
          >
            <img
              src="/images/doctor/trung.jpg"
              alt="Bác sĩ Trung"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#062D30]/90 via-[#062D30]/10 to-[#062D30]/35" />

            {/* LEFT BRAND - CLICK VỀ TRANG CHỦ */}
            <div className="relative z-10 p-2 sm:p-3 md:p-4 lg:p-6">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-white/70
                  bg-white/90
                  px-1.5
                  py-1
                  text-left
                  shadow-sm
                  backdrop-blur
                  transition

                  hover:bg-white
                  hover:shadow-md

                  sm:gap-1.5
                  sm:px-2.5
                  sm:py-1.5

                  md:gap-2
                  md:px-3

                  lg:gap-2.5
                  lg:px-3.5
                  lg:py-2
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#00FFFF] shadow-[0_0_6px_#00FFFF] sm:h-2 sm:w-2 lg:h-2.5 lg:w-2.5 lg:shadow-[0_0_10px_#00FFFF]" />

                <div>
                  <div className="text-[5px] font-extrabold tracking-[0.06em] text-slate-950 sm:text-[7px] md:text-[9px] lg:text-[12px] lg:tracking-[0.08em]">
                    DR. TRUNG
                  </div>

                  <div className="mt-0.5 text-[3px] font-bold uppercase tracking-[0.08em] text-[#00696B] sm:text-[4px] md:text-[5px] lg:text-[7px] lg:tracking-[0.16em]">
                    Private CMS Access
                  </div>
                </div>
              </button>
            </div>

            {/* LEFT BOTTOM */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-2 sm:p-3 md:p-4 lg:p-6">
              <div className="max-w-[410px] rounded-md border border-white/15 bg-slate-950/55 p-2 text-white shadow-xl backdrop-blur-md sm:rounded-lg sm:p-3 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-5">
                <div className="mb-1 flex items-center gap-1 text-[3px] font-bold uppercase tracking-[0.08em] text-[#00FFFF] sm:text-[4px] md:text-[6px] lg:mb-2 lg:gap-2 lg:text-[10px] lg:tracking-[0.12em]">
                  <ShieldCheck className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[10px] md:w-[10px] lg:h-[14px] lg:w-[14px]" />
                  Hệ thống quản trị
                </div>

                <h2 className="text-[7px] font-extrabold tracking-[-0.03em] sm:text-[10px] md:text-[14px] lg:text-[21px]">
                  Quản trị nội dung & lịch hẹn
                </h2>

                <p className="mt-1 text-[3.5px] leading-[6px] text-white/75 sm:text-[5px] sm:leading-[8px] md:text-[7px] md:leading-3 lg:mt-2 lg:text-[11px] lg:leading-5">
                  Hệ thống quản lý website cá nhân Bác sĩ Trung,
                  nội dung chuyên môn và lịch hẹn bệnh nhân.
                </p>
              </div>
            </div>
          </section>

          {/* FORM PANEL */}
          <section
            className="
              flex
              min-h-0
              flex-col
              justify-between
              px-2
              py-2.5

              sm:px-3
              sm:py-4

              md:px-5
              md:py-5

              lg:px-10
              lg:py-7

              xl:px-12
            "
          >
            <div>
              {/* TOP BRAND */}
              <div className="flex items-center justify-between gap-2">
                {/* BACK HOME */}
                
                {/* ADMIN BRAND */}
                <div className="flex min-w-0 items-center gap-1 sm:gap-1.5 lg:gap-2">
                  <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2 lg:h-2.5 lg:w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />

                    <span className="relative inline-flex h-full w-full rounded-full border border-[#00696B] bg-[#00FFFF]" />
                  </span>

                  <span className="truncate text-[5px] font-extrabold tracking-[0.06em] text-slate-950 sm:text-[7px] md:text-[9px] lg:text-[13px] lg:tracking-[0.08em]">
                    DR. TRUNG
                  </span>

                  <span className="rounded border border-[#CCFFFF] bg-[#EFFFFF] px-1 py-0.5 text-[2.5px] font-bold uppercase tracking-[0.06em] text-[#00696B] sm:text-[4px] md:px-1.5 md:text-[5px] lg:rounded-md lg:px-2 lg:py-1 lg:text-[8px] lg:tracking-[0.12em]">
                    Admin Portal
                  </span>
                </div>
              </div>

              {/* TITLE */}
              <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-7">
                <div className="mb-1.5 flex h-5 w-5 items-center justify-center rounded bg-[#EFFFFF] sm:h-7 sm:w-7 sm:rounded-md md:h-8 md:w-8 md:rounded-lg lg:mb-3 lg:h-10 lg:w-10 lg:rounded-xl">
                  <LockKeyhole className="h-[8px] w-[8px] text-[#00696B] sm:h-[11px] sm:w-[11px] md:h-[14px] md:w-[14px] lg:h-[19px] lg:w-[19px]" />
                </div>

                <h1 className="text-[10px] font-extrabold tracking-[-0.035em] text-slate-950 sm:text-[14px] md:text-[20px] lg:text-[30px]">
                  Đăng nhập quản trị
                </h1>

                <p className="mt-1 max-w-[430px] text-[3.5px] leading-[6px] text-slate-500 sm:text-[5px] sm:leading-[8px] md:text-[7px] md:leading-3 lg:mt-2 lg:text-[12px] lg:leading-5">
                  Đăng nhập để quản lý nội dung website và lịch hẹn
                  của Bác sĩ Trung.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleLogin}
                className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5 md:mt-5 md:space-y-3 lg:mt-7 lg:space-y-4"
              >
                {/* USERNAME */}
                <div>
                  <label className="mb-0.5 block text-[3px] font-bold uppercase tracking-[0.06em] text-slate-600 sm:text-[4px] md:text-[6px] lg:mb-1.5 lg:text-[10px] lg:tracking-[0.08em]">
                    Tài khoản
                  </label>

                  <div className="relative">
                    <UserRound className="absolute left-1.5 top-1/2 h-[6px] w-[6px] -translate-y-1/2 text-slate-400 sm:left-2 sm:h-[8px] sm:w-[8px] md:left-2.5 md:h-[11px] md:w-[11px] lg:left-3.5 lg:h-[16px] lg:w-[16px]" />

                    <input
                      type="text"
                      value={form.username}
                      onChange={(e) =>
                        updateField("username", e.target.value)
                      }
                      placeholder="Nhập tài khoản quản trị"
                      autoComplete="username"
                      className="
                        h-[22px]
                        w-full
                        rounded-md
                        border
                        border-slate-200
                        bg-slate-50/60
                        pl-5
                        pr-2
                        text-[4px]
                        text-slate-900
                        outline-none
                        transition

                        focus:border-[#00CED1]
                        focus:bg-white
                        focus:ring-1
                        focus:ring-cyan-100

                        sm:h-[28px]
                        sm:rounded-lg
                        sm:pl-7
                        sm:text-[6px]

                        md:h-[34px]
                        md:pl-8
                        md:text-[8px]

                        lg:h-[46px]
                        lg:rounded-xl
                        lg:pl-10
                        lg:pr-4
                        lg:text-[12px]
                        lg:focus:ring-2
                      "
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="mb-0.5 block text-[3px] font-bold uppercase tracking-[0.06em] text-slate-600 sm:text-[4px] md:text-[6px] lg:mb-1.5 lg:text-[10px] lg:tracking-[0.08em]">
                    Mật khẩu
                  </label>

                  <div className="relative">
                    <LockKeyhole className="absolute left-1.5 top-1/2 h-[6px] w-[6px] -translate-y-1/2 text-slate-400 sm:left-2 sm:h-[8px] sm:w-[8px] md:left-2.5 md:h-[11px] md:w-[11px] lg:left-3.5 lg:h-[16px] lg:w-[16px]" />

                    <input
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={(e) =>
                        updateField("password", e.target.value)
                      }
                      placeholder="Nhập mật khẩu"
                      autoComplete="current-password"
                      className="
                        h-[22px]
                        w-full
                        rounded-md
                        border
                        border-slate-200
                        bg-slate-50/60
                        pl-5
                        pr-6
                        text-[4px]
                        text-slate-900
                        outline-none
                        transition

                        focus:border-[#00CED1]
                        focus:bg-white
                        focus:ring-1
                        focus:ring-cyan-100

                        sm:h-[28px]
                        sm:rounded-lg
                        sm:pl-7
                        sm:pr-8
                        sm:text-[6px]

                        md:h-[34px]
                        md:pl-8
                        md:pr-9
                        md:text-[8px]

                        lg:h-[46px]
                        lg:rounded-xl
                        lg:pl-10
                        lg:pr-11
                        lg:text-[12px]
                        lg:focus:ring-2
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700 sm:right-2 md:right-2.5 lg:right-3.5"
                    >
                      {showPassword ? (
                        <EyeOff className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[17px] lg:w-[17px]" />
                      ) : (
                        <Eye className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[17px] lg:w-[17px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* REMEMBER */}
                <label className="flex cursor-pointer items-center gap-1 text-[3.5px] font-medium text-slate-500 sm:text-[5px] md:text-[7px] lg:gap-2 lg:text-[10px]">
                  <input
                    type="checkbox"
                    checked={form.remember}
                    onChange={(e) =>
                      updateField("remember", e.target.checked)
                    }
                    className="h-2 w-2 accent-[#00696B] sm:h-3 sm:w-3 lg:h-4 lg:w-4"
                  />

                  Ghi nhớ đăng nhập
                </label>

                {/* ERROR */}
                {error && (
                  <div className="rounded-md border border-red-100 bg-red-50 px-1.5 py-1 text-[3.5px] font-medium text-red-600 sm:rounded-lg sm:px-2 sm:py-1.5 sm:text-[5px] md:text-[7px] lg:rounded-xl lg:px-3 lg:py-2.5 lg:text-[10px]">
                    {error}
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    flex
                    h-[22px]
                    w-full
                    items-center
                    justify-center
                    gap-1
                    rounded-md
                    border
                    border-[#99FFFF]
                    bg-[#00FFFF]
                    text-[4px]
                    font-extrabold
                    text-slate-950
                    shadow-sm
                    transition

                    hover:bg-[#33FFFF]

                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    sm:h-[28px]
                    sm:rounded-lg
                    sm:text-[6px]

                    md:h-[34px]
                    md:text-[8px]

                    lg:h-[46px]
                    lg:gap-2
                    lg:rounded-xl
                    lg:text-[12px]
                  "
                >
                  {loading ? (
                    <>
                      <span className="h-2 w-2 animate-spin rounded-full border border-slate-900/30 border-t-slate-900 sm:h-3 sm:w-3 lg:h-4 lg:w-4 lg:border-2" />
                      Đang đăng nhập...
                    </>
                  ) : (
                    <>
                      Đăng nhập
                      <ArrowRight className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[16px] lg:w-[16px]" />
                    </>
                  )}
                </button>

                {/* SECURITY */}
                <div className="flex items-center gap-1 rounded-md border border-[#CCFFFF] bg-[#EFFFFF] px-1.5 py-1 sm:rounded-lg sm:px-2 sm:py-1.5 md:gap-1.5 md:px-2.5 md:py-2 lg:gap-2 lg:rounded-xl lg:px-3 lg:py-2.5">
                  <ShieldCheck className="h-[6px] w-[6px] shrink-0 text-[#00696B] sm:h-[8px] sm:w-[8px] md:h-[11px] md:w-[11px] lg:h-[15px] lg:w-[15px]" />

                  <p className="text-[3px] font-medium leading-[5px] text-[#00696B] sm:text-[4px] sm:leading-[7px] md:text-[6px] md:leading-[9px] lg:text-[10px] lg:leading-4">
                    Chỉ dành cho tài khoản quản trị được cấp quyền.
                  </p>
                </div>
              </form>
            </div>

            {/* FOOTER */}
            <div className="mt-3 border-t border-slate-100 pt-1.5 sm:mt-4 sm:pt-2 md:mt-5 md:pt-2.5 lg:mt-5 lg:pt-3">
              <div className="flex flex-row items-center justify-between gap-1 text-[2.5px] text-slate-400 sm:text-[4px] md:text-[5px] lg:gap-2 lg:text-[9px]">
                <span>
                  DR. TRUNG CMS • Secure Admin Access
                </span>

                <span className="flex items-center gap-0.5 lg:gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-emerald-500 lg:h-1.5 lg:w-1.5" />
                  Hệ thống trực tuyến
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}