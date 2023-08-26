import { useParams, useLoaderData, NavLink, Outlet } from "react-router-dom";

import "./Planet.scss";

export default function Planet() {
  const params = useParams();
  const data = useLoaderData() as Planet[];

  const planet: Planet | undefined = data.find(
    current => params.planet === current.name
  );

  if (planet === undefined) {
    throw new Error("This site does not exist");
  }

  return (
    <article className="planet">
      <div className="planet__top-container">
        {/* <img src={planet.images.planet} alt={planet.name} />

        <header className="planet__header">
          <h1 className="planet__title">{planet.name}</h1>
          <blockquote className="planet__quote">
            <p className="planet__desc">{planet.overview.content}</p>
            <footer>
              Source:{" "}
              <cite>
                <a
                  href={planet.overview.source}
                  target="_blank"
                  rel="noopener noreferrer">
                  Wikipedia
                </a>
              </cite>
            </footer>
          </blockquote>
        </header> */}
        <Outlet />

        <ul className="planet__link-list">
          <li className="planet__link-item">
            <NavLink
              to="."
              title="Overview"
              className="link planet__inner-link">
              Overview
            </NavLink>
          </li>
          <li className="planet__link-item">
            <NavLink
              to="structure"
              title="Internal structure"
              className="link planet__inner-link">
              Internal structure
            </NavLink>
          </li>
          <li className="planet__link-item">
            <NavLink
              to="geology"
              title="Surface geology"
              className="link planet__inner-link">
              Surface geology
            </NavLink>
          </li>
        </ul>
      </div>

      <dl className="planet__stats">
        <div>
          <dt>Rotation time</dt>
          <dd>{planet.rotation}</dd>
        </div>
        <div>
          <dt>Revolution time</dt>
          <dd>{planet.revolution}</dd>
        </div>
        <div>
          <dt>Radius</dt>
          <dd>{planet.radius}</dd>
        </div>
        <div>
          <dt>Average temp.</dt>
          <dd>{planet.temperature}</dd>
        </div>
      </dl>
    </article>
  );
}
