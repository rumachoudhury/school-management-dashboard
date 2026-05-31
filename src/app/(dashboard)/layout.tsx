// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex flex-col">
//       {/* Sidebar placeholder */}
//       <div className="">Dashboard</div>

//       {/* Main content */}
//       <div className="">{children}</div>
//     </div>
//   );
// }

import Navbar from "@/src/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="flex">
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="flex items-center justify-center mt-4">{children}</main>
    </div>
    // </div>
  );
}
