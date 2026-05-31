export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4">L</div>

      {/* Content */}
      <div className="flex-1 bg-gray-100 p-4">{children}</div>
    </div>
  );
}
