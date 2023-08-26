import { useParams, useLoaderData, useLocation } from "react-router-dom";

import "./PlanetDetails.scss";

export default function PlanetDetails() {
  const location = useLocation();
  console.log(location);

  const params = useParams();

  console.log(params);

  const data = useLoaderData() as Planet[];
  const planet = data[0];

  return (
    <>
      <img src={planet.images.planet} alt={planet.name} />

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
    </>
  );
}
