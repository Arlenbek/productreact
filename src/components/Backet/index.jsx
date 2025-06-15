import React, { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const Backet = () => {
  const [basket, setBasket] = useState([]);

  const DelProduct = () => {
    localStorage.removeItem("todo");
    getToProduct()
  };

  function getToProduct() {
    let data = JSON.parse(localStorage.getItem("todo")) || [];
    setBasket(data);
  }

  useEffect(() => {
    getToProduct();
  }, []);
  
  let totalPrice = basket.reduce((acc, el) => {
    return acc + el.price;
  }, 0);

  return (
    <div id="Backet">
      <div className="container">
        <h1>Basket</h1>

        <h2> </h2>
        <div className="content">
          <div className="product">
            {basket.map((el) => (
              <div className="basket-card" key={el.id}>
                <img src={el.image} alt="img" />
                <h3>{el.title}</h3>
                <h3 className="price">{el.price}$</h3>
                <a href="#" onClick={() => {}}>
                  {" "}
                </a>

                <FaDeleteLeft />
              </div>
            ))}
          </div>
          <div className="total">
            <div className="totalPrice">
              <h1>Total Price</h1>
              <h2>${Math.trunc(totalPrice)}</h2>
              <a>Order</a>
            </div>
            <button onClick={() => DelProduct()}>Remove All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backet;
