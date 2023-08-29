const express = require("express");
const router = express.Router();

const Pokemons = require('../object/pokemon')

const pokemon = new Pokemons()

router.get('/pokemons', async (req, res) => {

  ;

  const pokemons = await pokemon.findAllPokemons();
  // console.log(pokemons)

  res.json(pokemons);
});

router.get('/pokemons/limited', async (req, res) => {
  try {
    const { limit, skip } = req.query;

    const pokemons = await pokemon.findLimitPokemon(limit);
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.get('/pokemons/:name', async (req, res) => {
  const name = req.params.name;
  try {
    const pokemonName = await pokemon.findAllPokemons(name);
    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon not found' });
    }
    res.json(pokemonName);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})


module.exports = router;