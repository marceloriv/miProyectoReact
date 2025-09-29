import { Audifono } from "./components/Audifono";
import Header from "./components/Header";
import { useState } from "react";
import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);
  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2>Nuestra Coleccion</h2>
        <Audifono audifono={data} />
      </main>
    </>
  );
}

export default App;
