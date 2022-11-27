import React from "react";
import { useState } from "react";
import PostComponent from "./PostComponent";
import UpdateComponent from "./UpdateComponent";

//Acá está el componente formulario con el set input donde se guarda toda la info capturada en los inputs,
//lo hice en forma de objeto para poder manipular la información capturarla y limpiarla después.
//éste componente es padre del post (donde está el botón crear el nuevo producto) y put donde se actualiza
//un producto ya creado.
const FormComponent = ({ nuevo, setNuevo }) => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Producto</h2>
      <fieldset>
        <legend>Ingrese los datos para crear o actualizar un producto</legend>
        <form>
          <input
            value={[input.title]}
            type="text"
            name="title"
            placeholder="Título"
            onChange={handleInput}
          />
          <input
            value={[input.description]}
            type="text"
            name="description"
            placeholder="Descripción"
            onChange={handleInput}
          />
          <input
            value={[input.price]}
            type="number"
            name="price"
            placeholder="Precio"
            onChange={handleInput}
          />
          <input
            value={[input.stock]}
            type="number"
            name="stock"
            placeholder="Stock"
            onChange={handleInput}
          />
          <input
            value={[input.category]}
            type="text"
            name="category"
            placeholder="Categoría"
            onChange={handleInput}
          />
          <input
            value={[input.image]}
            type="url"
            name="image"
            placeholder="Imagen"
            onChange={handleInput}
          />
          <PostComponent
            nuevo={nuevo}
            setNuevo={setNuevo}
            input={input}
            setInput={setInput}
          ></PostComponent>
        </form>
        <UpdateComponent
          input={input}
          setInput={setInput}
          nuevo={nuevo}
          setNuevo={setNuevo}
        ></UpdateComponent>
      </fieldset>
    </>
  );
};

export default FormComponent;
