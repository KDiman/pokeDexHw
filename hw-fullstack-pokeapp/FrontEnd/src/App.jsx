import { useEffect, useState } from "react";
import PokemonDetails from "./components/PokemonDetails";
import LoadingOverlay from "./components/LoadingOverlay";

function App() {
  const [allpokemon, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState(null);

  const loadPokemon = async (newOffset) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8080/pokemons/limited?limit=20&skip=${newOffset}`
      );
      if (!res.ok || res.status !== 200) {
        throw new Error("Server did not respond correctly");
      }
      const data = await res.json();
      
      data.sort((a, b) => a.id - b.id)

      setAllPokemons((pokedexlist) => [...pokedexlist, ...data]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const loadMorePokemon = () => {
    const newOffset = offset + 20;
    setOffset(newOffset);
    loadPokemon(newOffset);
  };

  useEffect(() => {
    loadPokemon(0);
  }, []);

  return (
    <div>
      <div className="pokeDex">
        <h1>Pokedex</h1>
        {loading && <LoadingOverlay />}
        {error && <div className="error">{error}</div>}
      </div>
      <div className="pokemon-container"></div>
      <div className="all-container">
        {allpokemon.map((pokemon, index) => (
          <PokemonDetails
            image={pokemon.img}
            name={pokemon.name}
            type={pokemon.type}
            key={index}
          />
        ))}
      </div>
      <button className="loadMore" onClick={loadMorePokemon}>
        Load More
      </button>
    </div>
  );
}

export default App;
