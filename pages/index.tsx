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
          return (
            <div
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
                className="px-10 py-3 text-2xl text-white"
              >
                Population: {planet.population}
              </h1>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-screen text-center bg-gradient-to-b from-orange-500 to-red-600 h-max">
      <h1 className="text-8xl p-4 pt-40 pb-20 uppercase font-bold text-white font-gemunulibre">
        Welcome To SWInfo!
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
