export const validateProducts = (product) => {
  const errors = {};

  if (!product.nombre.trim()) {
    errors.nombre = "Ingresar un Nombre es Obligatorio";
  }

  if (!product.precio || product.precio <= 0) {
    errors.precio = "El precio debe ser mayor que 0";
  }

  if (!product.descripcion.trim()) {
    errors.descripcion = "Ingresar una Descripción es Obligatorio";
  }

  if (!product.file) {
    errors.file = "Ingresar una Imagen es Obligatorio";
  }

  return errors;
};
