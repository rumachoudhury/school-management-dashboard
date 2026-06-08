import React from "react";

function AdminPage() {
  return (
    <div className="p-4 flex flex-col md:flex-row lg:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3">L</div>

      {/* right */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
}

export default AdminPage;
