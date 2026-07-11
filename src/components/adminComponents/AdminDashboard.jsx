import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <section className="admin-dashboard">
      <h2>Panel de administración</h2>
      <p>Carga de nuevos productos al catálogo.</p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
        <Link className="btn bg-primary primary" to="/admin/products/new">
          Agregar producto
        </Link>
        <Link className="btn" to="/">
          Volver a la tienda
        </Link>
        <button className="btn" type="button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </section>
  );
};
