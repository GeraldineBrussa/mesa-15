import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DeleteComponent from "./DeleteComponent";

//En este componente get la idea es mostrar la información que ya se encuentra guardada y que luego con el
//useEffect se vaya actualizando la lista de productos que se van creando y modificando.
//Es padre del componente delete porque en la consigna estipulaba que cada producto tenga un botón para poder eliminarlo.

const GetComponent = ({ nuevo, setNuevo }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, [nuevo]);

  return (
    <>
      <div>GetComponent</div>

      {data.map((item) => (
        <React.Fragment key={item.id}>
          <img src={item.image}></img>
          <h2>Producto: {item.title}</h2>
          <h3>Id: {item.id}</h3>
          <p>Precio: ${item.price}</p>
          <p>Stock: {item.stock}</p>
          <p>Categoría: {item.category}</p>
          <p>Descripción del producto: {item.description}</p>
          <br></br>
          <DeleteComponent
            id={item.id}
            nuevo={nuevo}
            setNuevo={setNuevo}
          ></DeleteComponent>
          <br></br>
        </React.Fragment>
      ))}
    </>
  );
};

export default GetComponent;
