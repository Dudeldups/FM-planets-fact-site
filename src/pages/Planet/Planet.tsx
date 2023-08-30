import { useEffect } from "react";
import { useParams, useLoaderData, Outlet } from "react-router-dom";

import "./Planet.scss";

export default function Planet() {
  const params = useParams();
  const data = useLoaderData() as Planet[];

  useEffect(() => {
    if (planet === undefined) {
      throw new Error("This site does not exist");
    }
  }, []);

  const planet: Planet | undefined = data.find(
    current => params.planet === current.name
  );

  return (
    <article className="planet">
      {planet ? (
        <>
          <Outlet context={planet} />

          <dl className="stats">
            <div className="stats__container">
              <dt className="stats__title">Rotation time</dt>
              <dd className="stats__detail">{planet.rotation}</dd>
            </div>
            <div className="stats__container">
              <dt className="stats__title">Revolution time</dt>
              <dd className="stats__detail">{planet.revolution}</dd>
            </div>
            <div className="stats__container">
              <dt className="stats__title">Radius</dt>
              <dd className="stats__detail">{planet.radius}</dd>
            </div>
            <div className="stats__container">
              <dt className="stats__title">Average temp.</dt>
              <dd className="stats__detail">{planet.temperature}</dd>
            </div>
          </dl>
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </article>
  );
}
