import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";

import TableSearch from "@/src/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, teachersData } from "@/src/lib/data";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns: Column[] = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "Subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
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

export default function TeacherListPage() {
  const renderRow = (item: Teacher) => {
    return (
      <tr key={item.id} className="">
        <td className="flex items-center justify-between">
          <Link
            href={`/list/teachers/${item.id}`}
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
              <p className="text-sm text-gray-500">{item.email}</p>
            </div>
          </Link>
        </td>

        <td className="hidden md:table-cell">{item.teacherId}</td>

        <td className="hidden md:table-cell">{item.subjects.join(", ")}</td>

        <td className="hidden md:table-cell">{item.classes.join(", ")}</td>

        <td className="hidden lg:table-cell">{item.phone}</td>

        <td className="hidden lg:table-cell">{item.address}</td>

        <td>
          <Link href={`/list/teachers/${item.id}`}>
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
                alt="View"
                width={16}
                height={16}
              />
            </button>
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
          All Teachers List
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

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
              <Image
                src="/images/school-management-dashboard/plus.png"
                alt="Filter"
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="">
        {/* <Table columns={columns} data={teachers} renderRow={renderRow} /> */}
        <Table columns={columns} data={teachersData} renderRow={renderRow} />
      </div>

      {/* Pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
}
