// import React from "react";

// function Table({ columns }: { columns: { header: string } }) {
//   return (
//     <table className="w-full mt-4">
//       <thead></thead>
//     </table>
//   );
// }

// export default Table;

// ===============
import React from "react";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type TableProps = {
  columns: Column[];
};

function Table({ columns }: TableProps) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((column) => (
            <th
              key={column.accessor}
              className={`py-3 px-2 ${column.className ?? ""}`}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>{/* Table rows will go here */}</tbody>
    </table>
  );
}

export default Table;
