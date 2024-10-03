import axios from "axios";
import React, { useEffect, useState } from "react";

import UserApi from "../apis/UserApi";
const ShowAllUsers = () => {
  const { getAllUsers } = UserApi();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers()
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, i) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">{i + 1}</td>
                  <td class="px-6 py-4">{user.name}</td>
                  <td class="px-6 py-4">{user.username}</td>
                  <td class="px-6 py-4">{user.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllUsers;
