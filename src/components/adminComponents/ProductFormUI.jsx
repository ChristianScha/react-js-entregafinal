export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar nuevo producto</h2>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={onChange}
          />
          {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>

        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={product.precio}
            onChange={onChange}
            min="0"
          />
          {errors.precio && <p className="error">{errors.precio}</p>}
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={product.descripcion}
            onChange={onChange}
          />
          {errors.descripcion && <p className="error">{errors.descripcion}</p>}
        </div>

        <div>
          <label>Imagen:</label>
          <input type="file" accept="imagen/*" onChange={onFileChange} />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>

        {errors.general && <p className="error">{errors.general}</p>}
      </form>
    </section>
  );
};
