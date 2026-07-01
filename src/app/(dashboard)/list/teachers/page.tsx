import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";

import TableSearch from "@/src/components/TableSearch";
import Image from "next/image";
import Link from "next/link";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type Teacher = {
  id: number;
  teacherID: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  adress: string;
};

const teachers: Teacher[] = [
  {
    id: 1,
    teacherID: "T001",
    name: "John",
    email: "john@test.com",
    photo: "/avatar.png",
    phone: "123456789",
    subjects: ["Math"],
    classes: ["5A"],
    adress: "New York",
  },
];

const columns: Column[] = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherID",
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
  // const renderRow = (item: Teacher) => {
  //   return (
  //     <tr key={item.id}>
  //       <td>
  //         <Image
  //           src={item.photo}
  //           alt=""
  //           width={40}
  //           height={40}
  //           className="md:hidden xl:block w-10 h-11 rounded-full object-cover"
  //         />

  //         <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
  //           <h3 className="font-semibold">{item.name}</h3>
  //           <p className="text-sm text-gray">{item.email}</p>
  //         </div>
  //       </td>

  //       <td className="hidden md:table-cell">{item.teacherID}</td>
  //       <td className="hidden md:table-cell">{item.subjects.join(", ")}</td>
  //       <td className="hidden md:table-cell">{item.classes.join(", ")}</td>
  //       <td className="hidden lg:table-cell">{item.phone}</td>
  //       <td className="hidden lg:table-cell">{item.adress}</td>

  //       <td>
  //         <div className="flex items-center gap-2">
  //           <Link
  //             href={`/list/teachers/${item.id}`}
  //             className="text-sm text-blue-500"
  //           >
  //             <button className="w-7 h-7 flex items-center justify-center rounded-full">
  //               <Image
  //                 src="/images/school-management-dashboard/view.png"
  //                 alt=""
  //                 width={16}
  //                 height={16}
  //               />
  //             </button>
  //           </Link>
  //         </div>
  //       </td>
  //     </tr>
  //   );
  // };

  const renderRow = (item: Teacher) => {
    return (
      <tr key={item.id}>
        <td>
          <Link
            href={`/list/teachers/${item.id}`}
            className="flex items-center gap-2"
          >
            <Image
              src={item.photo}
              alt={item.name}
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

        <td className="hidden md:table-cell">{item.teacherID}</td>

        <td className="hidden md:table-cell">{item.subjects.join(", ")}</td>

        <td className="hidden md:table-cell">{item.classes.join(", ")}</td>

        <td className="hidden lg:table-cell">{item.phone}</td>

        <td className="hidden lg:table-cell">{item.adress}</td>

        <td>
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full">
              <Image
                src="/images/school-management-dashboard/view.png"
                alt="View"
                width={16}
                height={16}
              />
            </button>
          </Link>
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
        <Table columns={columns} data={teachers} renderRow={renderRow} />
      </div>

      {/* Pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
}
