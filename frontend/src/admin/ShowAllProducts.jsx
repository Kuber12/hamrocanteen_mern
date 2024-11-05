import axios from "axios";
import React, { useEffect, useState } from "react";

import ItemApi from "../apis/ItemApi";
const ShowAllProducts = () => {
  const { getAllItems } = ItemApi();
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllItems()
      .then((res) => {
        console.log(res);
        setItems(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item, i) => (
                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllProducts;

