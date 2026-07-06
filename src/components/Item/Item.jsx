import "./Item.css";

export const Item = ({ nombre, precio, imagen, children }) => {
  return (
    <article className="card">
      <img src={imagen} alt={`foto de ${nombre}`} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      {children}
    </article>
  );
};
