const express = require("express");
const router = express.Router();

const Pokemons = require("../object/pokemon");

const pokemon = new Pokemons();

router.get("/pokemons", async (req, res) => {
  const pokemons = await pokemon.findAllPokemons();
 

  res.json(pokemons);
});

router.get("/pokemons/limited", async (req, res) => {
  try {
    const { limit, skip } = req.query;

    
    const limitValue = limit ? parseInt(limit) : 10; 
    const skipValue = skip ? parseInt(skip) : 0; 
    const pokemons = await pokemon.findLimitPokemon(limitValue, skipValue);
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/pokemons/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const foundPokemon = await pokemon.findByName(name);

    if (!foundPokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    res.json(foundPokemon);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/pokemons/type/:type", async (req, res) => {
  const type = req.params.type;

  try {
    const pokemonsOfType = await pokemon.findByType(type);

    if (!pokemonsOfType || pokemonsOfType.length === 0) {
      return res
        .status(404)
        .json({ error: "No Pokémon found for the given type" });
    }

    res.json(pokemonsOfType);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
