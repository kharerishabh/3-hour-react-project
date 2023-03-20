import axios from "axios";
import React, { useState, useEffect } from "react";

const MedicineForm = () => {
  // State Is a built-in object contain data and information about component
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quan, setQuan] = useState("");

  //need to get data (in array) from firebase (Api)
  const [data, Setdata] = useState([]);

  // SetState function that allows us to update the value of the function

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const quanHandler = (e) => {
    setQuan(e.target.value);
  };

  // Posting data to fireBase
  const submitHandler = async (e) => {
    e.preventDefault();
    const obj = {
      name,
      desc,
      price,
      quan,
    };
    try {
      let res = await axios.post(
        "https://hours-react-project-default-rtdb.firebaseio.com/MedicineList.json",
        obj
      );
      console.log(res);
      getData(); // fetch data
    } catch (error) {
      console.log("error", error);
    }
    setName("");
    setDesc("");
    setPrice("");
    setQuan("");
  };

  // getting data from firebase
  const getData = async () => {
    try {
      let res = await axios.get(
        "https://hours-react-project-default-rtdb.firebaseio.com/MedicineList.json"
      );
      console.log(res.data);
      Setdata(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  // need useEffect hook to rerender getData(or to get values/information)
  useEffect(() => {
    getData();
  }, []);

  const items = [];
  for (let key in data) {
    items.push({ id: key, ...data[key] });
  }

  // showing details in Cart
  const cartHandler = async (name, desc, price, quan, items) => {
    const obj = {
      name,
      desc,
      price,
      quan,
    };
    try {
      let res = await axios.post(
        "https://hours-react-project-default-rtdb.firebaseio.com/MedicineList.json",
        obj
      );
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <form>
        <input
          value={name}
          onChange={nameHandler}
          type="text"
          placeholder="Enter name"
        ></input>

        <input
          value={desc}
          onChange={descHandler}
          type="text"
          placeholder="Enter Description"
        ></input>

        <input
          value={price}
          onChange={priceHandler}
          type="number"
          placeholder="Enter Price"
        ></input>

        <input
          value={quan}
          onChange={quanHandler}
          type="number"
          placeholder="Enter Quantity"
        ></input>

        <input onClick={submitHandler} value="submit" type="submit"></input>
      </form>
      {/* data Array for storing the data */}

      {items.map((items) => {
        return (
          <div key={items.id}>
            <h2> Name : {items.name}</h2>
            <p> Description : {items.desc}</p>
            <p> Price : {items.price}</p>
            <p> Quantities : {items.quan}</p>
            <button
              onClick={() =>
                cartHandler(
                  items.name,
                  items.desc,
                  items.price,
                  items.quan,
                  items
                )
              }
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </>
  );
};

export default MedicineForm;
