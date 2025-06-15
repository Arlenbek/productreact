import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";


const Product = () => {
  const [product, setProduct] = useState([]);
  const [textState, setTextState] = useState({});
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(3);

  async function getProduct() {
    let { data } = await axios(`https://fakestoreapi.com/products`);
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, [product]);

  function addToBasket(data) {
    let res = JSON.parse(localStorage.getItem("todo")) || [];
    res.push(data);
    localStorage.setItem("todo", JSON.stringify(res));
  }

  const handleTextClick = (id) => {
    setTextState((prevState) => ({ ...prevState, [id]: true }));
  };

  const handlerSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
console.log(handlerSearch);
console.log(handlerSearch);

  const filterProducts = product.filter((el) => {
    return el.title.toLowerCase().includes(search);
  });

  console.log(product);

  return (
    <div id="product">
      <div className="container">
        {product.length ? (
          <>
            <div className="product">
              {filterProducts.slice(0, count).map((el) => (
                <div className="product-card" key={el.id}>
                  { Math.trunc(el.price) > 500 ? (
                    <img
                      className="product-sale"
                      src="https://static.vecteezy.com/system/resources/previews/027/765/037/non_2x/red-sale-label-on-a-transparent-background-free-png.png"
                      alt="img"
                    />
                  ) : (
                    ""
                  )}
                  <Zoom>
                    <img className="product-image" src={el.image} alt="img" />
                  </Zoom>
                  <h2>
                    {textState[el.id]
                      ? el.title.slice(0, 70)
                      : el.title.slice(0, 20)}
                    <br />
                    <span onClick={() => handleTextClick(el.id)}>
                      {textState[el.id] ? "Скрыть" : "Далее"}
                    </span>
                  </h2>
                  <div className="card-basket">
                    <h3>
                      {el.price > 500 ? (
                        <del>{el.price} $</del>
                      ) : (
                        `${el.price} $`
                      )}
                    </h3>
                    <h3 style={{ color: el.price > 500 ? "red" : "black" }}>
                      {Math.floor(el.price * 0.8)}$
                    </h3>
                    <p href="#" onClick={() => addToBasket(el)}>
                      <FaBasketShopping />

                    </p>
                  </div>
                </div>
              ))}
            </div>
            <center>
              <button
                className="btn"
                onClick={() => {
                  setCount(count + 3);
                }}
              >
                Moree...
              </button>
            </center>
          </>
        ) : (
          <h1>No products found</h1> // When no products are available
        )}
      </div>
    </div>
  );
};

export default Product;
