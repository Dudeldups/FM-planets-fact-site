import data from "../../data/data.json";
import { Link, NavLink, Outlet } from "react-router-dom";

import "./Root.scss";

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
          <Link to="/" className="nav__title">
            The Planets
          </Link>
          <input
            id="hamburger"
            name="hamburger"
            type="checkbox"
            className="hamburger__input"
          />
          <label htmlFor="hamburger" className="hamburger__label">
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="sr-only">Toggle menu</span>
          </label>
          <ul className="nav__list">{planetLinks}</ul>
        </nav>
      </header>

      <main>
        <section>
          <Outlet />
        </section>
      </main>

      <footer className="footer">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io">Frontend Mentor</a>. Coded by{" "}
          <a href="https://github.com/Dudeldups">Arne Jacob</a>.
        </p>
      </footer>
    </>
  );
}
