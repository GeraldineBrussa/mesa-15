import React from "react";
import { useState } from "react";

//Este componente es el hijo de form, en el que cree un form con un input más pequeño sólo para capturar el id
//del producto a actualizar.
//En el botón se realiza la acción de actualizar la nueva info que se ingresó en el form padre
//(como en el componente post), luego seteo el cambio en el estado "nuevo" que cree en app para que luego con
// el get se muestre la modificación en la lista y limpio la info de los formularios.

const UpdateComponent = ({ input, nuevo, setNuevo, setInput }) => {
  const [idInput, setIdInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `api/products/${idInput}`;
    fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("¡Éxito!:", response));
    setNuevo({ ...nuevo });
    setIdInput("");
    setInput({ [e.target.name]: "" });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setIdInput(e.target.value);
  };

  return (
    <>
      <form>
        <label>¿Quiere modificar un producto? Ingrese el Id: </label>
        <input
          value={idInput}
          onChange={handleSearch}
          type="number"
          name="id"
          placeholder="Id"
        />
        <button onClick={handleSubmit}>Actualizar Producto</button>
      </form>
    </>
  );
};

export default UpdateComponent;
