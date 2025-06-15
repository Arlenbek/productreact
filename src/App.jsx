import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import Backet from "./components/Backet";

function App() {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/product",
      element: <Product />,
    },

    {
      id: 3,
      link: "/backet",
      element: <Backet />,
    },
  ];

  return (
    <div>
      <Header />
      <Routes>
        {routes.map((el) => {
          return <Route path={el.link} element={el.element} key={el.id} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
