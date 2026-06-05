import React from "react";

function AdminPage() {
  return (
    <div className="p-4 flex-col md:flex-row">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {/* left */}
      <div className="w-full lg:w-2/3">L</div>

      {/* right */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
}

export default AdminPage;
