import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      {/* <OrderReview></OrderReview> */}
    </div>
  );
}

export default App;
