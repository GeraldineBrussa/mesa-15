import React from "react";
import { useState } from "react";
import FormComponent from "./Componentes/FormComponent";
import GetComponent from "./Componentes/GetComponent";

function App() {
  const [nuevo, setNuevo] = useState([]);
  //Ahora sabemos que en app sólo van las rutas, ésto debería estar en una página de inicio o algo así.
  //La idea de hacer un estado acá es para que todas los productos que voy actualizando o creando se lo puedo pasar como prop al get y que se muestren cada vez que se crea, actualiza o elimina un nuevo producto.
  return (
    <>
      <h1>App.js</h1>
      <FormComponent nuevo={nuevo} setNuevo={setNuevo}></FormComponent>
      <GetComponent nuevo={nuevo} setNuevo={setNuevo}></GetComponent>
    </>
  );
}

export default App;
