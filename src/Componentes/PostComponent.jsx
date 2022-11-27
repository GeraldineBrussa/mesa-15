import React from "react";

//Este componente es el hijo del formulario sólo corresponde al botón en el que se realiza la acción de crear
//un nuevo producto
//luego seteo el cambio en el estado "nuevo" que cree en app para que luego con el get se muestre el producto
//creado en la lista y limpio del formulario.

const PostComponent = ({ nuevo, setNuevo, input, setInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/products", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("¡Éxito!:", response));
    setNuevo({ ...nuevo });
    setInput({ [e.target.name]: "" });
  };

  return (
    <>
      <button onClick={handleSubmit}> Crear Producto </button>
    </>
  );
};

export default PostComponent;
