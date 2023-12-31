import { Link, useLoaderData } from "react-router-dom";

import "./Home.scss";

export default function Home() {
  const data = useLoaderData() as Planet[];

  const source = "https://en.wikipedia.org/wiki/Solar_System";

  return (
    <article className="home">
      <header className="home__header">
        <h1 className="home__title">
          The planets <span>of our</span> Solar System
        </h1>
        <blockquote className="home__quote" cite={source}>
          <p className="home__desc">
            The Solar System is the gravitationally bound system of the Sun and
            the objects that orbit it. The largest of such objects are the eight
            planets, in order from the Sun: four terrestrial planets, named
            Mercury, Venus, Earth and Mars; and four giant planets, including
            two gas giants, Jupiter and Saturn, and two ice giants, named Uranus
            and Neptune. The terrestrial planets have a definite surface and are
            mostly made of rock and metal. The gas giants are mostly made of
            hydrogen and helium, while the ice giants are mostly made of
            volatile substances such as water, ammonia, and methane. In some
            texts, these terrestrial and giant planets are called the inner
            Solar System and outer Solar System planets respectively.
          </p>
          <footer className="source">
            Source:{" "}
            <cite>
              <a href={source} target="_blank" rel="noopener noreferrer">
                Wikipedia
                <img
                  src="/assets/images/icon-source.svg"
                  alt=""
                  aria-hidden="true"
                />
              </a>
            </cite>
          </footer>
        </blockquote>
      </header>
      <h2 className="home__subtitle">Learn more about each planet</h2>
      <ul className="home__planet-list">
        {data.map(planet => (
          <li key={planet.name}>
            <Link to={`/${planet.name}/overview`} title={planet.name}>
              <figure>
                <figcaption className="home__planet-name">
                  {planet.name}
                </figcaption>
                <img
                  src={planet.images.planet}
                  alt={`An illustration of ${planet.name}`}
                />
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
