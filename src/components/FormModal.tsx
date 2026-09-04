"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";

type FormTable =
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcement";

type FormModalProps = {
  table: FormTable;
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
  onSubmit?: (values: Record<string, string>, id?: number) => void;
};

const fieldsByTable: Record<FormTable, string[]> = {
  teacher: ["firstName", "lastName", "email", "phone", "address"],
  student: ["firstName", "lastName", "email", "phone", "address"],
  parent: ["firstName", "lastName", "email", "phone", "address"],
  subject: ["name"],
  class: ["name", "capacity"],
  lesson: ["name", "day", "startTime", "endTime"],
  exam: ["title", "date", "startTime", "endTime"],
  assignment: ["title", "dueDate"],
  result: ["student", "subject", "score"],
  attendance: ["student", "date", "status"],
  event: ["title", "date", "description"],
  announcement: ["title", "date", "description"],
};

const formatLabel = (field: string) =>
  field
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());

const inputType = (field: string) => {
  if (field.toLowerCase().includes("email")) return "email";
  if (field.toLowerCase().includes("date")) return "date";
  if (field.toLowerCase().includes("time")) return "time";
  if (field === "capacity" || field === "score") return "number";
  return "text";
};

const actionImages = {
  create: "/images/school-management-dashboard/plus.png",
  update: "/images/school-management-dashboard/edit.png",
  delete: "/images/school-management-dashboard/delete.png",
} as const;

export default function FormModal({
  table,
  type,
  data,
  id,
  onSubmit,
}: FormModalProps) {
  const [open, setOpen] = useState(false);
  const fields = fieldsByTable[table];

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      fields.map((field) => [field, String(formData.get(field) ?? "")]),
    );
    onSubmit?.(values, id);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label={`${type === "create" ? "Create" : type === "update" ? "Edit" : "Delete"} ${table}`}
        title={`${type === "create" ? "Create" : type === "update" ? "Edit" : "Delete"} ${table}`}
        onClick={() => setOpen(true)}
        // className={`flex items-center justify-center rounded-full transition-colors ${
        //   type === "create"
        //     ? "h-8 w-8 bg-yellow"
        //     : type === "update"
        //       ? "h-7 w-7 bg-sky"
        //       : "h-7 w-7 bg-purple"
        // }`}
        className={`flex items-center justify-center rounded-full transition-colors ${
          type === "create"
            ? "h-8 w-8 bg-yellow-100"
            : type === "update"
              ? "h-7 w-7 bg-sky-100"
              : "h-7 w-7 bg-purple-100"
        }`}
      >
        <Image src={actionImages[type]} alt="" width={16} height={16} />
      </button>

      {open && (
        <div
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-modal-title"
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-sky-600">
                  {type === "create"
                    ? "New record"
                    : type === "update"
                      ? "Edit record"
                      : "Delete record"}
                </p>
                <h2
                  id="form-modal-title"
                  className="mt-1 text-xl font-semibold text-gray-800"
                >
                  {type === "create"
                    ? `Create ${table}`
                    : type === "update"
                      ? `Update ${table}`
                      : `Delete ${table}`}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setOpen(false)}
                className="text-2xl leading-none text-gray-400 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            {type === "delete" ? (
              <div>
                <p className="text-sm text-gray-600">
                  Are you sure you want to delete this {table}? This action
                  cannot be undone.
                </p>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onSubmit?.({}, id);
                      setOpen(false);
                    }}
                    className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {fields.map((field) => {
                  const value = data?.[field];
                  const isLongText =
                    field === "description" || field === "address";
                  return (
                    <label
                      key={field}
                      className={isLongText ? "sm:col-span-2" : ""}
                    >
                      <span className="mb-1.5 block text-sm font-medium text-gray-700">
                        {formatLabel(field)}
                      </span>
                      {isLongText ? (
                        <textarea
                          name={field}
                          defaultValue={value == null ? "" : String(value)}
                          rows={3}
                          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                        />
                      ) : (
                        <input
                          required
                          name={field}
                          type={inputType(field)}
                          defaultValue={value == null ? "" : String(value)}
                          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                        />
                      )}
                    </label>
                  );
                })}
                <div className="flex justify-end gap-3 sm:col-span-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
                  >
                    {type === "create" ? "Create" : "Save changes"}
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
    </>
  );
}
