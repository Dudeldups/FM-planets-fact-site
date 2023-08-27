type PlanetDetail = {
  content: string;
  source: string;
};

type Planet = {
  name: string;
  overview: PlanetDetail;
  structure: PlanetDetail;
  geology: PlanetDetail;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
};

type ValidDetails = {
  overview: "Overview";
  structure: "Internal structure";
  geology: "Surface geology";
};
