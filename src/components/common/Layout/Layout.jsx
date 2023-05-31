import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserNameContext } from "../../../context/UserNameContext";

const Layout = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logout = () => {
    removeUserName();
    navigate("/");
  };

  return (
    <div>
      <header>
        <h1>Pokedex</h1>

        <button onClick={logout}>Cerrar sesión</button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
