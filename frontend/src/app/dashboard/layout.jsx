import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#F8FBFB]">
      <DashboardSidebar />

      <main
        className="
          min-h-screen
          w-full
          pt-[58px]

          md:ml-[250px]
          md:w-[calc(100%-250px)]
          md:pt-0
        "
      >
        {children}
      </main>
    </div>
  );
}