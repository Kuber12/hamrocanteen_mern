import React, { useState } from "react";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
const AddItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    availableDays: [],
    unit: "Plate",
  });

  const [itemImg, setitemImg] = useState(null);

  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    setitemImg(file);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      const availableDays = [...prevData.availableDays];
      if (checked) {
        availableDays.push(name); // Add day if checked
      } else {
        const index = availableDays.indexOf(name);
        if (index > -1) {
          availableDays.splice(index, 1); // Remove day if unchecked
        }
      }
      return { ...prevData, availableDays };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, availableDays } = formData;

    // Check if all fields are filled and at least one checkbox is selected
    if (!name || !price || availableDays.length === 0) {
      alert("Please fill in all fields and select at least one available day.");
      return;
    }

    // Continue with form submission if validation passes
    const Ref = ref(storage, `itemImage/${itemImg + v4()}`);
    uploadBytes(Ref, itemImg)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log("Uploaded image");
            const value = {
              ...formData,
              itemImg: url,
            };

            return axios.post("http://localhost:3000/api/item/add", value);
          })
          .then((res) => {
            console.log(res);
            alert("Added item successfully");
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-2">
      <h1 className="text-3xl">Add Item</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-6 mx-auto space-y-6 bg-white rounded-lg shadow-md"
      >
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="itemImg">Image</label>
          <input
            id="itemImg"
            name="itemImg"
            type="file"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="flex flex-wrap w-full gap-3">
          <label htmlFor="sunday">Sunday</label>
          <input
            type="checkbox"
            name="Sunday"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="monday">Monday</label>
          <input
            type="checkbox"
            name="Monday"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="tuesday">Tuesday</label>
          <input
            type="checkbox"
            name="Tuesday"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="wednesday">Wednesday</label>
          <input
            type="checkbox"
            name="Wednesday"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="thursday">Thursday</label>
          <input
            type="checkbox"
            name="Thursday"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="friday">Friday</label>
          <input
            type="checkbox"
            name="Friday"
            onChange={handleCheckboxChange}
          />
        </div>

        <button className="px-2 py-1 border rounded-xl" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
