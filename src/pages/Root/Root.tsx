import data from "../../data/data.json";
import { Link, NavLink, Outlet } from "react-router-dom";

export const rootLoader = () => {
  return data;
};

export default function Root() {
  const planetLinks = data.map(({ name }: Planet) => {
    return (
      <li key={`${name}-navlink`} className="nav__item">
        <NavLink to={`${name}/overview`} title={name} className="nav__link">
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
            <li>
              <NavLink to="/" title="Home" className="nav__link">
                Home
              </NavLink>
            </li>
            {planetLinks}
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
