import { useEffect, useState } from "react";
import BeerCard from "./BeerCard";

function Beers() {
  const [beerList, setBeerList] = useState();
  const [beerType, setBeerType] = useState("ale");
  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/${beerType}`) // ale, stouts
      .then((response) => response.json())
      .then((beers) => setBeerList(beers))
      .catch(alert);
  }, [beerType]);
  if (!beerList) {
    return <h2>Coming right up ..</h2>;
  }
  return (
    <>
      <button onClick={() => setBeerType("ale")}>Ale</button>
      <button onClick={() => setBeerType("stouts")}>Stouts</button>
      <section id="beerList">
        {beerList.map((beer) => (
          // <li key={beer.id}>{beer.name}</li>
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </section>
    </>
  );
}

export default Beers;
