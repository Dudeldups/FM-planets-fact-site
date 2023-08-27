import { useEffect } from "react";
import {
  useOutletContext,
  NavLink,
  useParams,
  useNavigate,
} from "react-router-dom";

import "./PlanetDetails.scss";

export default function PlanetDetails() {
  const navigate = useNavigate();
  const planet: Planet = useOutletContext();
  const params = useParams();
  const currentPage = params.detail;

  useEffect(() => {
    if (!isValidPage) navigate("../overview");
  }, []);

  const validDetails: ValidDetails = {
    overview: "Overview",
    structure: "Internal structure",
    geology: "Surface geology",
  };

  const isValidPage =
    currentPage && Object.keys(validDetails).includes(currentPage);

  return (
    <div className="planet__top-container">
      <figure>
        <img src={planet.images.planet} alt={planet.name} />
        {currentPage === "geology" && (
          <img src={planet.images.planet} alt={planet.name} />
        )}
      </figure>

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
      </header>

      <ul className="planet__link-list">
        <li className="planet__link-item">
          <NavLink
            to="../overview"
            relative="path"
            title="Overview"
            className="planet__inner-link">
            Overview
          </NavLink>
        </li>
        <li className="planet__link-item">
          <NavLink
            to="../structure"
            relative="path"
            title="Internal structure"
            className="planet__inner-link">
            Internal structure
          </NavLink>
        </li>
        <li className="planet__link-item">
          <NavLink
            to="../geology"
            relative="path"
            title="Surface geology"
            className="planet__inner-link">
            Surface geology
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
