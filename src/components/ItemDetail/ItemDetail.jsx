import { Item } from "../Item/Item";

export const ItemDetail = ({ item }) => {
  return (
    <Item {...item}>
      <button className="boton primario">Agregar al carrito</button>
    </Item>
  );
};
