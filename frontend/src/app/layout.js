import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Bác sĩ Trung",
    template: "%s | Bác sĩ Trung",
  },
  description:
    "Website thương hiệu cá nhân Bác sĩ Trung – thông tin chuyên môn, đào tạo, ca điều trị, kiến thức nha khoa và đặt lịch.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}