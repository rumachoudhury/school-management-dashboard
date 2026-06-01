import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      {/* <div className="w-64 bg-gray-900 text-white p-4  flex space-x-2">
        <Link href="/">
          <Image
            src="/images/download.png"
            alt="School Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <span className="hidden lg:block font-semibold ">School</span>
      </div> */}

      <div className="w-64 bg-gray-900 text-white p-4">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Image
            src="/images/download.png"
            alt="School Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="hidden lg:block font-semibold">School</span>
        </Link>

        {/* Navigation goes here later */}

        <Navbar />
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-100 p-4">{children}</div>
    </div>
  );
}
