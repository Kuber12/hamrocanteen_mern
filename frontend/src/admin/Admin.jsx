import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NotFound from "../pages/NotFound";
const Admin = () => {
  const [admin, setAdmin] = useState();
  // console.log(admin)
  useEffect(() => {
    setAdmin(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      {admin == undefined ? (
        <NotFound />
      ) : (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            </div>
            <nav className="mt-6">
              <Link
                href="#dashboard"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              >
                <div className="inline-block w-5 h-5 mr-2" />
                Dashboard
              </Link>
              <Link
                to={"/admin/show-user"}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              >
                <div className="inline-block w-5 h-5 mr-2" />
                Users
              </Link>
              <Link
                to={"/admin/additem"}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              >
                <div className="inline-block w-5 h-5 mr-2" />
                Add Product
              </Link>
              <Link
                href="#products"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              >
                <div className="inline-block w-5 h-5 mr-2" />
                Products
              </Link>
              <Link
                href="#settings"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              >
                <div className="inline-block w-5 h-5 mr-2" />
                Settings
              </Link>
            </nav>
            <Link
              to={"/signin"}
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
              }}
              className="absolute bottom-0 w-64 p-4"
            >
              <button
                variant="outline"
                className="justify-start w-full text-red-600 hover:text-red-700"
              >
                <div className="w-5 h-5 mr-2" />
                Logout
              </button>
            </Link>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 overflow-y-auto  h-[100vh] ">
            <h2 className="mb-5 text-3xl font-semibold text-gray-800">
              Welcome, Admin {admin?.username}!
            </h2>
            <div className="w-full px-5 pt-10 overflow-auto ">
              <Outlet />
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Admin;
