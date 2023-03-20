import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [data, Setdata] = useState([]);
  const getData = async () => {
    try {
      let res = await axios.get(
        "https://hours-react-project-default-rtdb.firebaseio.com/MedicineList.json"
      );
    //   console.log(res.data);
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

  return (
    <div>
      {/* data Array for storing the data */}

      {items.map((items) => {
        return (
          <div key={items.id}>
            <h2> Name : {items.name}</h2>
            <p> Description : {items.desc}</p>
            <p> Price : {items.price}</p>
            <p> Quantities : {items.quan}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
