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

  ///// details to fill the page

  const mainImg =
    currentPage === "structure" ? planet.images.internal : planet.images.planet;
  let description, source;

  switch (currentPage) {
    case "overview":
      description = planet.overview.content;
      source = planet.overview.source;
      break;
    case "structure":
      description = planet.structure.content;
      source = planet.structure.source;
      break;
    case "geology":
      description = planet.geology.content;
      source = planet.geology.source;
      break;
    default:
      break;
  }

  /////

  return (
    <div className="planet__top-container">
      <figure className="planet__img-container">
        <img
          src={mainImg}
          alt={`An illustration of ${planet.name}`}
          className="planet__img-big"
        />
        {currentPage === "geology" && (
          <img
            src={planet.images.geology}
            alt={`A detailed view of the geology of ${planet.name}'s surface`}
            className="planet__img-small"
          />
        )}
      </figure>

      <header className="planet__header">
        <h2 className="planet__title">{planet.name}</h2>
        <blockquote className="planet__quote" cite={source}>
          <p className="planet__desc">{description}</p>
          <footer className="planet__source">
            Source:{" "}
            <cite>
              <a href={source} target="_blank" rel="noopener noreferrer">
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
