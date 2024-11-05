import axios from "axios";
import React, { useEffect, useState } from "react";

import UserApi from "../apis/UserApi";
const ShowAllUsers = () => {
  const { getAllUsers } = UserApi();
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    getAllUsers()
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((err) => console.log(err));
  }, [reload]);

  async function deleteUser(userId) {
    const deleteSure = confirm("Do you want to delete user")
    if(deleteSure){
      axios
      .delete(`http://localhost:3000/api/user/${userId}/delete`)
      .then((res) => {
        console.log(res);
        alert("Delete");
        setReload(!reload)
      })
      .catch((err) => console.log(err));
    }else{
      return
    }
  }

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, i) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.status}</td>
                  <td
                    className="px-6 py-4 cursor-pointer"
                    onClick={(e) => deleteUser(user._id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllUsers;
