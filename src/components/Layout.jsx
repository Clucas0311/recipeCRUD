import { NavLink, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { token, logout, user } = useAuth();
  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <NavLink className="brand" to="/">
            Recipe Explorer
          </NavLink>

          <h1>Find Your Next Meal</h1>
          <p>Browse our collection Recipes</p>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/recipes"> Recipes</NavLink>
          </div>

          <div className="nav-auth">
            {token ? (
              <>
                <span>Welcome {user?.username || "chef"}</span>
                <button onClick={logout}> Logout</button>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </nav>
      </header>

      <main className="app">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
