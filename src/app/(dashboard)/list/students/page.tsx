import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";

import TableSearch from "@/src/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, studentsData } from "@/src/lib/data";
import FormModal from "@/src/components/FormModal";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns: Column[] = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
];

export default function StudentListPage() {
  const renderRow = (item: Student) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50 transition-colors"
      >
        <td className="flex items-center justify-between">
          <Link
            href={`/list/students/${item.id}`}
            className="flex items-center gap-4 py-2"
          >
            <Image
              src={item.photo}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex flex-col">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.class}</p>
            </div>
          </Link>
        </td>

        <td className="hidden md:table-cell">{item.studentId}</td>

        <td className="hidden md:table-cell">{item.grade}</td>

        <td className="hidden lg:table-cell">{item.phone}</td>

        <td className="hidden lg:table-cell">{item.address}</td>

        <td className="flex items-center gap-2 justify-end">
          <Link
            href={`/list/students/${item.id}`}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-sky-100"
          >
            <Image
              src="/images/school-management-dashboard/view.png"
              alt="View"
              width={16}
              height={16}
            />
          </Link>
          {role === "admin" && (
            <FormModal table="student" type="delete" id={item.id} />
          )}
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h2 className="hidden md:block text-lg font-semibold">
          All Student List
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

            {role === "admin" && <FormModal table="student" type="create" />}
          </div>
        </div>
      </div>

      {/* List */}
      <div className="">
        {/* <Table columns={columns} data={teachers} renderRow={renderRow} /> */}
        <Table columns={columns} data={studentsData} renderRow={renderRow} />
      </div>

      {/* Pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
}
