import { useParams, useLoaderData, Link } from "react-router-dom";

import "./Planet.scss";

type PlanetProps = {};

export default function Planet({}: PlanetProps) {
  const params = useParams();
  const data = useLoaderData() as Planet[];

  const planet: Planet | undefined = data.find(
    current => params.planet === current.name
  );

  if (planet === undefined) {
    throw new Error("This site does not exist");
  }

  return (
    <div>
      {planet.name}
      <Link to="/:planet/about">{}</Link>
    </div>
  );
}
