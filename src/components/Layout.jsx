import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Recipe Explorer</p>
        <h1>Find Your Next Meal</h1>
        <p>Browse our collection Recipes</p>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes"> Recipes</NavLink>
        </nav>
      </header>

      <main className="app">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
