import { useEffect, useState } from "react";
import PokemonDetails from "./Components/PokemonDetails";
import LoadingOverlay from "./Components/LoadingOverlay";

function App() {
  const [allpokemon, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [Loading, setLoading] = useState(false);

  const loadPokemon = async () => {
    setLoading(true);
    try {
      const res = await fetch(loadMore);
      if (!res.ok || res.status !== 200) {
        throw new Error("Server did respond correctly");
      }
      console.log(res.ok);
      const data = await res.json();

      setLoadMore(data.next);
      const createPokemonObj = (result) => {
        result.map(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );

          const data = await res.json();
          setAllPokemons(
            (pokedexlist) => [...pokedexlist, data],
            setLoading(false)
          );
        });
      };

      createPokemonObj(data.results);

      console.log(data);
    } catch (err) {
      setLoading(false);
      alert(`You have an error ${err.message}`);
      console.error(err);
    }
  };
  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <div>
      <div className="pokeDex">
        <h1>Pokedex</h1>
        {Loading ? <LoadingOverlay /> : null}
      </div>
      <div className="pokemon-container"></div>
      <div className="all-container">
        {allpokemon.map((pokemon, index) => (
          <PokemonDetails
            id={pokemon.id}
            image={pokemon.sprites.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            key={index}
          />
        ))}
      </div>
      <button className="loadMore" onClick={loadPokemon}>
        Load More
      </button>
    </div>
  );
}

export default App;
