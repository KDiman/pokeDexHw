const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
  name: String,
  img: String,
  type: [String],
  stats: {
    hp: String,
    attack: String,
    defense: String,
    spattack: String,
    spdefense: String,
    speed: String
  },
  damages: {
    normal: String,
    fire: String,
    water: String,
    electric: String,
    grass: String,
    ice: String,
    fight: String,
    poison: String,
    ground: String,
    flying: String,
    psychic: String,
    bug: String,
    rock: String,
    ghost: String,
    dragon: String,
    dark: String,
    steel: String
  },
  misc: {
    classification: String,
    height: String,
    weight: String,
    happiness: String
  }
});

const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

module.exports = PokemonModel;
