import React from "react";

const AdminDashBoard = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Dashboard Cards */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Total Products</h3>
          <p className="text-3xl font-bold">567</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Total Orders</h3>
          <p className="text-3xl font-bold">89</p>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
