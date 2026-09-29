import Link from "next/link";

import {
  BadgeCheck,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-10

          sm:px-5
          sm:py-12

          md:px-6
          md:py-14

          lg:px-8
          lg:py-16

          xl:px-10
        "
      >
        {/* MAIN FOOTER */}
        <div
          className="
            grid
            grid-cols-1
            gap-8

            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-10

            lg:grid-cols-12
            lg:gap-8
          "
        >
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="
                inline-block
                text-[20px]
                font-extrabold
                tracking-[-0.03em]
                text-slate-950

                lg:text-[21px]
              "
            >
              DR. TRUNG
            </Link>

            <div
              className="
                mt-2
                max-w-[420px]
                text-[11px]
                font-bold
                uppercase
                leading-5
                tracking-[0.08em]
                text-[#00696B]

                sm:text-[12px]
              "
            >
              Bác sĩ Răng Hàm Mặt • Nha khoa chuyên sâu
            </div>

            <p
              className="
                mt-4
                max-w-[440px]
                text-[13px]
                leading-6
                text-slate-600

                sm:text-[14px]
              "
            >
              Chia sẻ kiến thức nha khoa, hành trình chuyên môn và thông tin
              điều trị theo hướng rõ ràng, khoa học và phù hợp với từng bệnh
              nhân.
            </p>

            <div
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#CCFFFF]
                bg-[#F8FFFF]
                px-3
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-wide
                text-[#00696B]
              "
            >
              <BadgeCheck className="h-[14px] w-[14px]" />
              Đào tạo chuyên môn liên tục
            </div>
          </div>

          {/* SPECIALTIES */}
          <div className="lg:col-span-3">
            <h3
              className="
                text-[13px]
                font-extrabold
                uppercase
                tracking-wide
                text-slate-950
              "
            >
              Danh mục chuyên môn
            </h3>

            <ul
              className="
                mt-4
                space-y-3
                text-[13px]
                leading-6
                text-slate-600
              "
            >
              <li>
                <Link
                  href="/specialties"
                  className="transition hover:text-[#00696B]"
                >
                  Chỉnh nha – Niềng răng
                </Link>
              </li>

              <li>
                <Link
                  href="/specialties"
                  className="transition hover:text-[#00696B]"
                >
                  Chỉnh nha mắc cài
                </Link>
              </li>

              <li>
                <Link
                  href="/specialties"
                  className="transition hover:text-[#00696B]"
                >
                  Chỉnh nha khay trong suốt
                </Link>
              </li>

              <li>
                <Link
                  href="/specialties/implant"
                  className="transition hover:text-[#00696B]"
                >
                  Cấy ghép Implant
                </Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3
              className="
                text-[13px]
                font-extrabold
                uppercase
                tracking-wide
                text-slate-950
              "
            >
              Liên kết nhanh
            </h3>

            <ul
              className="
                mt-4
                space-y-3
                text-[13px]
                leading-6
                text-slate-600
              "
            >
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-[#00696B]"
                >
                  Về Bác sĩ Trung
                </Link>
              </li>

              <li>
                <Link
                  href="/cases"
                  className="transition hover:text-[#00696B]"
                >
                  Hồ sơ ca điều trị
                </Link>
              </li>

              <li>
                <Link
                  href="/knowledge"
                  className="transition hover:text-[#00696B]"
                >
                  Thư viện kiến thức
                </Link>
              </li>

              <li>
                <Link
                  href="/activities"
                  className="transition hover:text-[#00696B]"
                >
                  Hoạt động
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#00696B]"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h3
              className="
                text-[13px]
                font-extrabold
                uppercase
                tracking-wide
                text-slate-950
              "
            >
              Kênh liên hệ
            </h3>

            <div
              className="
                mt-4
                space-y-4
                text-[13px]
                leading-6
                text-slate-600
              "
            >
              {/* PHONE - cần thay bằng số thật */}
              <div className="flex items-start gap-3">
                <Phone className="mt-[3px] h-[17px] w-[17px] shrink-0 text-[#00696B]" />

                <div>
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-slate-400
                    "
                  >
                    Hotline
                  </div>

                  <div className="mt-1 font-semibold text-slate-700">
                    [SỐ ĐIỆN THOẠI]
                  </div>
                </div>
              </div>

              {/* ZALO - cần thay bằng dữ liệu thật */}
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-[3px] h-[17px] w-[17px] shrink-0 text-[#00696B]" />

                <div>
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-slate-400
                    "
                  >
                    Zalo
                  </div>

                  <div className="mt-1">
                    [ZALO CẦN XÁC MINH]
                  </div>
                </div>
              </div>

              {/* EMAIL - cần thay bằng email thật */}
              <div className="flex items-start gap-3">
                <Mail className="mt-[3px] h-[17px] w-[17px] shrink-0 text-[#00696B]" />

                <span className="break-all">
                  [EMAIL CẦN XÁC MINH]
                </span>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-[3px] h-[17px] w-[17px] shrink-0 text-[#00696B]" />

                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t
            border-slate-100
            pt-5

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-12
            lg:pt-6
          "
        >
          <p className="text-[11px] text-slate-400">
            © 2026 DR. TRUNG. Tất cả quyền được bảo lưu.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              text-[10px]
              font-semibold
              uppercase
              tracking-wide
              text-slate-500

              sm:justify-end

              lg:gap-x-5
            "
          >
            <span>Quy trình vô trùng</span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span>Tiêu chuẩn chuyên môn</span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <Link
              href="/contact"
              className="transition hover:text-[#00696B]"
            >
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
