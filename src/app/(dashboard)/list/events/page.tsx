import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";

import TableSearch from "@/src/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, eventsData } from "@/src/lib/data";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns: Column[] = [
  {
    header: "Title",
    accessor: "title",
    className: "w-[30%]",
  },
  {
    header: "Class",
    accessor: "class",
    className: "w-[15%]",
  },
  {
    header: "Date",
    accessor: "date",
    className: "w-[20%] hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "w-[15%] hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "w-[15%] hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
    className: "w-[10%]",
  },
];

export default function EventListPage() {
  const renderRow = (item: Event) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 text-sm hover:bg-gray-50"
      >
        <td className="p-4 font-medium">{item.title}</td>

        <td className="p-4">
          <span className="px-2 py-1 rounded-md bg-gray-100">{item.class}</span>
        </td>

        <td className="p-4 hidden md:table-cell">{item.date}</td>

        <td className="p-4 hidden md:table-cell">{item.startTime}</td>

        <td className="p-4 hidden md:table-cell">{item.endTime}</td>

        <td className="p-4">
          <div className="flex items-center gap-2 justify-end">
            <Link href={`/list/events/${item.id}`}>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-100">
                <Image
                  src="/images/school-management-dashboard/edit.png"
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </button>
            </Link>

            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
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
          All Event List
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
        <Table columns={columns} data={eventsData} renderRow={renderRow} />
      </div>

      {/* Pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
}
