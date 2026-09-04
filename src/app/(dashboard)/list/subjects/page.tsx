import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";

import TableSearch from "@/src/components/TableSearch";
import Image from "next/image";
import { role, subjectsData } from "@/src/lib/data";
import FormModal from "@/src/components/FormModal";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns: Column[] = [
  {
    header: "Subject Names",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
    className: "text-right",
  },
];

export default function SubjectListPage() {
  const renderRow = (item: Subject) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50"
      >
        <td className="p-3 ">{item.name}</td>

        <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>

        <td>
          <div className="flex items-center gap-2 justify-end">
            {role === "admin" && (
              <>
                <FormModal
                  table="subject"
                  type="update"
                  data={item}
                  id={item.id}
                />
                <FormModal table="subject" type="delete" id={item.id} />
              </>
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
          All Subject List
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

            {role === "admin" && <FormModal table="subject" type="create" />}
          </div>
        </div>
      </div>

      {/* List */}
      <div className="">
        <Table columns={columns} data={subjectsData} renderRow={renderRow} />
      </div>

      {/* Pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
}
