"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  CalendarDays,
  ChevronDown,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const pageLinks = [
  { label: "Trang chủ", href: "/dashboard/pages/home" },
  { label: "Về Bác sĩ Trung", href: "/dashboard/pages/about" },
  { label: "Chuyên môn", href: "/dashboard/pages/specialties" },
  { label: "Ca điều trị", href: "/dashboard/pages/cases" },
  { label: "Kiến thức", href: "/dashboard/pages/knowledge" },
  { label: "Hoạt động", href: "/dashboard/pages/activities" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(true);

  const isActive = (href) => pathname === href;

  const isPagesActive =
    pathname.startsWith("/dashboard/pages");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isPagesActive) {
      setPagesOpen(true);
    }
  }, [isPagesActive]);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin/login");
  };

  const SidebarContent = () => (
    <>
      {/* TOP */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* BRAND */}
        <div className="flex items-start justify-between">
          <Link
            href="/dashboard"
            className="block px-2"
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00FFFF]" />

              <span className="text-[19px] font-extrabold tracking-tight text-slate-950">
                DR. TRUNG
              </span>
            </div>

            <div className="mt-2 inline-flex rounded-md bg-[#F0FFFF] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#00696B]">
              Content & Schedule CMS
            </div>
          </Link>

          {/* CLOSE MOBILE */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              text-slate-500
              transition

              hover:bg-slate-100

              md:hidden
            "
            aria-label="Đóng menu"
          >
            <X size={19} />
          </button>
        </div>

        {/* NAV */}
        <nav className="mt-8 space-y-1">
          {/* DASHBOARD */}
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition ${
              isActive("/dashboard")
                ? "bg-[#E8FFFF] text-[#00696B]"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }`}
          >
            <LayoutDashboard size={18} />

            Tổng quan
          </Link>

          {/* PAGES */}
          <div>
            <button
              type="button"
              onClick={() =>
                setPagesOpen((prev) => !prev)
              }
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-semibold transition ${
                isPagesActive
                  ? "bg-[#F0FFFF] text-[#00696B]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              <div className="flex items-center gap-3">
                <FileText size={18} />

                Quản lý trang
              </div>

              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  pagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                pagesOpen
                  ? "max-h-[320px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-8 mt-1 space-y-0.5">
                {pageLinks.map((item) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(
                      `${item.href}/`
                    );

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-lg px-3 py-1.5 text-[11px] transition ${
                        active
                          ? "bg-[#E8FFFF] font-bold text-[#00696B]"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* APPOINTMENTS */}
          <Link
            href="/dashboard/appointments"
            className={`mt-2 flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-semibold transition ${
              pathname.startsWith(
                "/dashboard/appointments"
              )
                ? "bg-[#E8FFFF] text-[#00696B]"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }`}
          >
            <div className="flex items-center gap-3">
              <CalendarDays size={18} />

              Lịch hẹn
            </div>

            <span className="rounded-full bg-[#00696B] px-2 py-0.5 text-[9px] font-bold text-white">
              8
            </span>
          </Link>
        </nav>
      </div>

      {/* LOGOUT */}
      <div className="border-t border-slate-100 p-4">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={18} />

          Đăng xuất
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div
        className="
          fixed
          left-0
          right-0
          top-0
          z-40
          flex
          h-[58px]
          items-center
          justify-between
          border-b
          border-slate-100
          bg-white/95
          px-4
          backdrop-blur

          md:hidden
        "
      >
        <Link
          href="/dashboard"
          className="flex items-center gap-2"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#00FFFF]" />

          <span className="text-[17px] font-extrabold text-slate-950">
            DR. TRUNG
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-[#F8FFFF] text-slate-700"
          aria-label="Mở menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* DESKTOP / TABLET SIDEBAR */}
      <aside
        className="
          fixed
          left-0
          top-0
          z-50
          hidden
          h-screen
          w-[250px]
          flex-col
          border-r
          border-slate-100
          bg-white

          md:flex
        "
      >
        <SidebarContent />
      </aside>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-slate-950/45 transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-[70] flex h-[100dvh] w-[82%] max-w-[300px] flex-col border-r border-slate-100 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  );
}