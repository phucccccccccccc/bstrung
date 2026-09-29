"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRound, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaTooth } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Về Bác sĩ Trung", href: "/about" },
    { name: "Chuyên môn", href: "/specialties" },
    { name: "Ca điều trị", href: "/cases" },
    { name: "Kiến thức", href: "/knowledge" },
    { name: "Hoạt động", href: "/activities" },
    { name: "Liên hệ", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-cyan-100 bg-white/95 shadow-[0_2px_12px_rgba(15,23,42,0.04)] backdrop-blur-xl">
        <div
          className="
            mx-auto
            flex
            h-[64px]
            w-full
            max-w-[1440px]
            items-center
            justify-between
            px-4

            sm:h-[68px]
            sm:px-5

            md:h-[72px]
            md:px-5

            lg:h-[78px]
            lg:px-8
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setOpenMenu(false)}
            className="
              flex
              min-w-0
              shrink-0
              items-center
              gap-2.5

              sm:gap-3
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-[10px]
                bg-[#CCFFFF]

                sm:h-10
                sm:w-10

                md:h-9
                md:w-9

                lg:h-11
                lg:w-11
                lg:rounded-xl
              "
            >
              <FaTooth
                className="
                  text-[19px]
                  text-[#00BFD8]

                  sm:text-[21px]

                  md:text-[18px]

                  lg:text-[23px]
                "
              />
            </div>

            <div className="min-w-0">
              <div
                className="
                  truncate
                  text-[16px]
                  font-extrabold
                  tracking-tight
                  text-slate-900

                  sm:text-[17px]

                  md:text-[14px]

                  lg:text-[19px]
                "
              >
                DR. TRUNG
              </div>

              <p
                className="
                  mt-[1px]
                  hidden
                  whitespace-nowrap
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-slate-400

                  md:block
                  md:text-[5px]

                  lg:text-[9px]
                "
              >
                Chỉnh nha • Nha khoa chuyên sâu
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav
            aria-label="Điều hướng chính"
            className="
              hidden
              items-center

              md:flex
              md:gap-0

              lg:gap-1
            "
          >
            {menuItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    flex
                    items-center
                    font-medium
                    transition-colors

                    md:min-h-[72px]
                    md:px-1.5
                    md:text-[8px]

                    lg:min-h-[78px]
                    lg:px-2.5
                    lg:text-[13px]

                    xl:px-3
                    xl:text-[14px]

                    ${
                      active
                        ? "text-[#00696B]"
                        : "text-slate-600 hover:text-[#00696B]"
                    }
                  `}
                >
                  {item.name}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      rounded-full
                      bg-[#00CED1]
                      transition-all
                      duration-300

                      md:h-[2px]
                      lg:h-[3px]

                      ${
                        active
                          ? "md:w-4 lg:w-8"
                          : "w-0"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP ACTION */}
          <div
            className="
              hidden
              shrink-0
              items-center

              md:flex
              md:gap-1

              lg:gap-2

              xl:gap-3
            "
          >
            <Link
              href="/appointment"
              className="
                rounded-md
                bg-[#00696B]
                text-center
                font-bold
                uppercase
                text-white
                shadow-[0_8px_22px_rgba(0,105,107,0.18)]
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#00585A]

                md:px-2
                md:py-1.5
                md:text-[7px]
                md:leading-[10px]

                lg:rounded-xl
                lg:px-3.5
                lg:py-2
                lg:text-[10px]
                lg:leading-[15px]

                xl:px-5
                xl:py-2.5
                xl:text-[12px]
                xl:leading-[17px]
              "
            >
              Đặt lịch với
              <br />
              BS. Trung
            </Link>

            <Link
              href="/admin/login"
              className="
                flex
                items-center
                justify-center
                rounded-md
                bg-slate-50
                text-slate-600
                transition-all

                hover:bg-[#EFFFFF]
                hover:text-[#00696B]

                md:h-8
                md:w-8

                lg:h-10
                lg:w-10
                lg:rounded-xl

                xl:h-11
                xl:w-11
              "
              aria-label="Tài khoản"
            >
              <UserRound className="h-3.5 w-3.5 lg:h-[18px] lg:w-[18px]" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpenMenu((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-[10px]
              border
              border-cyan-100
              bg-cyan-50
              text-slate-800
              transition

              hover:bg-cyan-100

              md:hidden
            "
            aria-label={openMenu ? "Đóng menu" : "Mở menu"}
            aria-expanded={openMenu}
            aria-controls="mobile-menu"
          >
            {openMenu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`
          fixed
          inset-0
          z-[60]
          bg-slate-950/45
          backdrop-blur-[1px]
          transition-opacity
          duration-300

          md:hidden

          ${
            openMenu
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* MOBILE RIGHT MENU */}
      <aside
        id="mobile-menu"
        className={`
          fixed
          right-0
          top-0
          z-[70]

          flex
          h-[100dvh]
          w-[86%]
          max-w-[390px]
          flex-col

          bg-white

          shadow-[-18px_0_60px_rgba(15,23,42,0.2)]

          transition-transform
          duration-300
          ease-out

          md:hidden

          ${
            openMenu
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex h-[64px] shrink-0 items-center justify-between border-b border-slate-200 px-5">
          <Link
            href="/"
            onClick={() => setOpenMenu(false)}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#CCFFFF]">
              <FaTooth className="text-[19px] text-[#00BFD8]" />
            </div>

            <div>
              <div className="text-[16px] font-extrabold tracking-tight text-slate-900">
                DR. TRUNG
              </div>

              <div className="mt-[1px] text-[8px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                Chỉnh nha • Nha khoa chuyên sâu
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setOpenMenu(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Đóng menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* MENU ITEMS */}
        <nav
          className="flex-1 overflow-y-auto"
          aria-label="Điều hướng di động"
        >
          {menuItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpenMenu(false)}
                className={`
                  relative
                  flex
                  min-h-[58px]
                  items-center
                  border-b
                  border-slate-200
                  px-6
                  text-[15px]
                  font-medium
                  transition-colors

                  ${
                    active
                      ? "bg-[#F8FFFF] text-[#00696B]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#00696B]"
                  }
                `}
              >
                {active && (
                  <span className="absolute right-0 top-0 h-full w-[4px] bg-[#00CED1]" />
                )}

                {item.name}
              </Link>
            );
          })}

          {/* CTA */}
          <div className="p-5">
            <Link
              href="/appointment"
              onClick={() => setOpenMenu(false)}
              className="
                flex
                h-[48px]
                w-full
                items-center
                justify-center
                rounded-xl
                bg-[#00696B]
                px-4
                text-[13px]
                font-extrabold
                text-white
                shadow-[0_8px_20px_rgba(0,105,107,0.18)]
                transition

                hover:bg-[#00585A]
              "
            >
              Đặt lịch với BS. Trung
            </Link>

            <Link
              href="/admin/login"
              onClick={() => setOpenMenu(false)}
              className="
                mt-3
                flex
                h-[46px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                text-[13px]
                font-semibold
                text-slate-700
                transition

                hover:bg-[#EFFFFF]
                hover:text-[#00696B]
              "
            >
              <UserRound size={17} />
              Tài khoản
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
