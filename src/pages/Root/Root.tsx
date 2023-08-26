import data from "../../data/data.json";
import { Link, NavLink, Outlet } from "react-router-dom";

export const rootLoader = () => {
  return data;
};

export default function Root() {
  const navLinks = data.map(({ name }: Planet) => {
    return (
      <li key={`${name}-navlink`} className="nav__item">
        <NavLink to={name} title={name} className="link">
          {name}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to="/">
            <p className="nav__title link">The Planets</p>
          </Link>
          <ul className="nav__list">
            <NavLink to="/" title="Home" className="link">
              Home
            </NavLink>
            {navLinks}
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
}
