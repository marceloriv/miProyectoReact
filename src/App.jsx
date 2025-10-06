import { Audifono } from "./components/Audifono";
import Header from "./components/Header";
import { useState } from "react";
import { db } from "./data/db";
import Footer from "./components/Footer";
import { useUserCart } from "./hooks/userCart";

function App() {
  const [data, setData] = useState(db);
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal } = useUserCart();
  return (
    <>
      <Header isEmpty={isEmpty} />
      <main className="container-xl mt-5">
        <h2>Nuestra Coleccion</h2>
        <div className="row mt-5">
          {data.map((audifono) => (
            <Audifono audifono={audifono} />
          ))}
        </div>

      </main>

    </>
  );
}

export default App;
