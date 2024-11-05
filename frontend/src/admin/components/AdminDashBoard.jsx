import  { useEffect, useState } from "react";
import UserApi from "../../apis/UserApi";
import ItemApi from "../../apis/ItemApi";
const AdminDashBoard = () => {
  const { getUserCount } = UserApi();
  const { getItemCount } = ItemApi();
  const [counts, setcounts] = useState({
    userCount: "",
    itemCount: "",
  });
  // console.log(counts)
  useEffect(() => {
    Promise.all([getUserCount(), getItemCount()]).then(
      ([userCount, itemCount]) => {
        setcounts({
          userCount: userCount,
          itemCount: itemCount,
        });
      }
    );
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Dashboard Cards */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">{counts.userCount}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Total Items</h3>
          <p className="text-3xl font-bold">{counts.itemCount}</p>
        </div>
        {/* <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Total Orders</h3>
          <p className="text-3xl font-bold"></p>
        </div> */}
      </div>
    </>
  );
};

export default AdminDashBoard;
