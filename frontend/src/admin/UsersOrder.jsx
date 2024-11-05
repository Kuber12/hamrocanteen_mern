import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const UsersOrder = () => {
  const [orders, setOrders] = useState([
    {
      _id: "66fdffbd1f62c553221d8852",
      userId: "669bbf0ee6963c3b1bc5349e",
      items: [
        {
          _id: "672a4e2676c513c5a5db819b",
          name: "Chowmein",
          price: 450,
          itemCount: 3,
        },
        {
          _id: "672a4e2676c513c5a5db819c",
          name: "Coke/Fanta/Sprite",
          price: 210,
          itemCount: 3,
        },
      ],
      grandTotal: 1980,
      paymentMethod: "Cash",
      status: "Not Paid",
      orderDate: "2024-09-01T10:20:00.000Z",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/order")
      .then((res) => {
        console.log(res);
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="py-10 text-3xl">Users Orders</h1>
      <div className="space-y-10 overflow-x-auto">
        <div className="px-5 py-5 space-y-5 border">
          {orders.map((o, i) => (
            <div key={i} className="py-5">
              <span className="py-1 text-xl">User Id: {o.userId} </span>
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
                    <th className="px-6 py-3 text-sm font-semibold text-left text-gray-700 border-b border-gray-200">
                      Price
                    </th>
                  </tr>
                </thead>
                {o?.items?.map((item, i) => (
                  <tbody key={i}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                        {item?.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                        {item?.itemCount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                        {item?.price}
                      </td>
                    </tr>
                  </tbody>
                ))}
                <div className="flex justify-around w-full ">
                <div>Total</div>
                <div>Rs: {o?.grandTotal}</div>
                </div>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersOrder;
