import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";

import TableSearch from "@/src/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, lessonsData } from "@/src/lib/data";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns: Column[] = [
  {
    header: "Class Names",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
    className: "text-right",
  },
];
export default function LessonListPage() {
  const renderRow = (item: Lesson) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 text-sm hover:bg-gray-50"
      >
        <td className="p-4">{item.subject}</td>

        <td className="p-4">{item.class}</td>

        <td className="hidden md:table-cell">{item.teacher}</td>

        <td>
          <div className="flex items-center gap-2 justify-end">
            <Link href={`/list/lessons/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky-100">
                <Image
                  src="/images/school-management-dashboard/view.png"
                  alt="View"
                  width={16}
                  height={16}
                />
              </button>
            </Link>

            {role === "admin" && (
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-100">
                <Image
                  src="/images/school-management-dashboard/delete.png"
                  alt="Delete"
                  width={16}
                  height={16}
                />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h2 className="hidden md:block text-lg font-semibold">
          All Lesson List
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <div className="w-64">
            <TableSearch />
          </div>

          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
              <Image
                src="/images/school-management-dashboard/filter.png"
                alt="Filter"
                width={14}
                height={14}
              />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
              <Image
                src="/images/school-management-dashboard/sort.png"
                alt="Filter"
                width={14}
                height={14}
              />
            </button>

            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
                <Image
                  src="/images/school-management-dashboard/plus.png"
                  alt="Filter"
                  width={14}
                  height={14}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* List */}
      <div className="">
        <Table columns={columns} data={lessonsData} renderRow={renderRow} />
      </div>

      {/* Pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
}
