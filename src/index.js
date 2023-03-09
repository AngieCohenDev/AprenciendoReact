import React from "react";
import ReactDOM from "react-dom/client";
import { Greating, UserCard } from "./Greating";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <Button text='Click me' />
  <Button text='Pay'/>
  <Button text='hello'/>
   {/*  <UserCard
      name="Camila Hernandez"
      amount={5000}
      married={true}
      points={[60, 5.55, 7]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={{
        function() {
          alert("Buenas tardes");
        },
      }}
    />
    <UserCard
      name="El hombre araña"
      amount={200}
      married={false}
      points={[20, 10]}
      address={{ street: "av junio 21", city: "Raccon City" }}
    /> */}
  </>
);
