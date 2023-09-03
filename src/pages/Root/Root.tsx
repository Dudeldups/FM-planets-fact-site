import data from "../../data/data.json";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

import "./Root.scss";
import ScrollToTop from "../../components/ScrollToTop";

export const rootLoader = () => {
  return data;
};

export default function Root() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const planetLinks = data.map(({ name }: Planet) => {
    return (
      <li key={`${name}-navlink`} className={`nav__item ${name.toLowerCase()}`}>
        <NavLink
          to={`${name}/overview`}
          title={name}
          className={`nav__link`}
          onClick={() => setIsHamburgerOpen(false)}>
          {name}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link
            to="/"
            className="nav__title"
            onClick={() => setIsHamburgerOpen(false)}>
            The Planets
          </Link>
          <input
            id="hamburger"
            name="hamburger"
            type="checkbox"
            checked={isHamburgerOpen}
            onChange={() => setIsHamburgerOpen(val => !val)}
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
          <ScrollToTop />
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
