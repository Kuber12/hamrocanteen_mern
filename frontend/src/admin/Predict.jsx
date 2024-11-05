import React, { useEffect, useState } from "react";
import ItemApi from "../apis/ItemApi";

const Predict = () => {
  const { predict } = ItemApi();
  const [predicted, setpredicted] = useState([]);
  const [predictedSales, setpredictedSales] = useState("");

  // Log the predicted data to verify it's working
  console.log("Predicted Data:", predicted);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call predict and log the full response to check its structure
        const res = await predict();
        console.log("Response:", res);
        setpredictedSales(res?.predictedSales)
        // Check if weeklySales exists and is an object or array
        if (res && res.weeklySales && typeof res.weeklySales === "object") {
          console.log("Weekly Sales:", res.weeklySales);

          // Convert object values to an array
          const salesDataArray = Object.values(res.weeklySales);
          console.log("Sales Data Array:", salesDataArray);

          // Update state
          setpredicted((prevPredicted) => [...salesDataArray]);
        } else {
          console.error("weeklySales is missing or is not an object!");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <h1 className="mb-10 text-3xl text-center">Prediction</h1>
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Weeks
            </th>
            <th scope="col" className="px-6 py-3">
               Sales
            </th>
          </tr>
        </thead>
        <tbody>
          {predicted &&
            predicted.map((sales, i) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={i}
              >
                <td className="px-6 py-4">{i + 1}</td>
                <td className="px-6 py-4">Week {i + 1}</td>
                <td className="px-6 py-4"> {sales}</td>{" "}
                {/* Displaying the sales data */}
              </tr>
            ))}
        </tbody>
      </table>
      <div className="w-full py-10">
        <h5 className="font-mono text-xl">
        Predicted Sales: {predictedSales}
        </h5>
      </div>
    </div>
  );
};

export default Predict;
