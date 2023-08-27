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
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </article>
  );
}
