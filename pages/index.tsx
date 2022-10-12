import type { NextPage } from "next";

const Home: NextPage = ({ planets }: any) => {
  const getData = () => {
    return (
      <div className="pb-4">
        {planets.results.map((planet: any) => {
          let backgroundColor = "";
          let hoverColor = "";
          if (planet.climate == "murky") {
            backgroundColor = "bg-amber-700";
            hoverColor = "hover:bg-amber-900";
          }
          if (planet.climate == "arid") {
            backgroundColor = "bg-amber-400";
            hoverColor = "hover:bg-amber-600";
          }
          if (planet.climate == "temperate") {
            backgroundColor = "bg-green-500";
            hoverColor = "hover:bg-green-700";
          }
          if (planet.climate == "frozen") {
            backgroundColor = "bg-blue-500";
            hoverColor = "hover:bg-blue-700";
          }
          return (
            <div
              key={planet.name}
              className={`font-ubuntu ${
                backgroundColor != "" ? backgroundColor : " bg-emerald-500"
              } ${
                hoverColor != "" ? hoverColor : "hover:bg-emerald-900"
              } w-min mx-auto h-min my-10 rounded-md shadow-lg shadow-stone-900/60 lg:px-[15rem] hover:cursor-pointer transition-all delay-100`}
            >
              <h1
                key={planet.name}
                className="px-10 py-3 text-6xl text-white font-light uppercase font-gemunulibre drop-shadow-lg"
              >
                {planet.name}
              </h1>
              <h1
                key={planet.population}
                className="px-10 py-3 pb-2 text-2xl text-white font-ubuntu"
              >
                Population: {planet.population}
              </h1>
              <h1
                key={planet.climate}
                className="px-10 py-3 text-2xl text-white capitalize font-ubuntu"
              >
                Climate: {planet.climate}
              </h1>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-screen text-center bg-gradient-to-b from-orange-500 to-red-600 h-max">
      <h1 className="text-8xl p-4 pt-40 pb-10 uppercase font-bold text-white font-gemunulibre">
        Welcome To SWInfo!
      </h1>
      <h1 className="text-3xl pb-10 text-white max-w-6xl mx-auto">
        SWInfo is a small wikipedia for everything Star Wars. You can look at
        the navigation at the top to see the different pages of content!
      </h1>
      <h1 className="text-6xl pb-3 text-white max-w-6xl mx-auto uppercase font-gemunulibre">
        Planets
      </h1>
      <div>
        <h1>{getData()}</h1>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  let response = await fetch("https://swapi.dev/api/planets");

  const data = await response.json();
  return {
    props: { planets: data },
  };
}
