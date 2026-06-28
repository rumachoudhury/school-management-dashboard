import TableSearch from "@/src/components/TableSearch";
import Image from "next/image";

export default function TeacherList() {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h2 className="hidden md:block text-lg font-semibold">
          All Teachers List
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <div>
            <TableSearch />
          </div>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
              <Image
                src="/images/school-management-dashboard/filter.png"
                alt="Filter"
                width={14}
                height={14}
              />
            </button>

            <button className="w-8 h-8 rounded-full bg-yellow-100"></button>

            <button className="w-8 h-8 rounded-full bg-yellow-100"></button>
          </div>
        </div>
      </div>

      {/* List */}
      <div className=""></div>

      {/* Pagination */}
      <div className=""></div>
    </div>
  );
}
