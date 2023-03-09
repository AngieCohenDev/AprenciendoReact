import React from "react";
import ReactDOM from "react-dom/client";
import { Greating, UserCard } from "./Greating";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import {Posts} from "./Posts"

const root = ReactDOM.createRoot(document.getElementById("root"));

/* const handleChange = (e) => {
  console.log(e.target.value + "...");
}; */

root.render(
  <>
   <Posts />
  </>
);
