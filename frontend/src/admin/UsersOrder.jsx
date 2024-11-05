import React from "react";

const UsersOrder = () => {
  return (
    <div>
      <h1 className="py-10 text-3xl">Users Orders</h1>
      <div className="space-y-10 overflow-x-auto">

    <div className="px-5 py-5 border">
    <span className="py-1 text-xl">User:</span>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full bg-gray-100">
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-700 border-b border-gray-200">
                ID
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-700 border-b border-gray-200">
                Name
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-700 border-b border-gray-200">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                1
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                John Doe
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                john@example.com
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                2
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                Jane Smith
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                jane@example.com
              </td>
            </tr>
          </tbody>
        </table>
    </div>
       
      </div>
    </div>
  );
};

export default UsersOrder;
