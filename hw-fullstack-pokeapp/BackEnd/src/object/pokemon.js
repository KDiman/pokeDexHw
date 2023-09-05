const PokemonModel = require("../models/pokemon.entity");

class Pokemons {
  constructor() {}

  async createPokemon(pokemonData) {
    try {
      const newPokemon = new PokemonModel({ ...pokemonData });
      const savedPokemon = await newPokemon.save();
      return savedPokemon;
    } catch (error) {
      console.error("Error creating Pokemon:", error);
      throw error;
    }
  }

  async findAllPokemons() {
    try {
      return await PokemonModel.find();
    } catch (error) {
      console.error("Error finding all Pokemons:", error);
      throw error;
    }
  }

  async findLimitPokemon(limit = 10, offset = 0) {
    try {
      const pokemons = await PokemonModel.find().limit(limit).skip(offset);
      return pokemons;
    } catch (error) {
      console.error("Error finding Pokemons with limit and offset:", error);
      throw error;
    }
  }
  

  async findByName(name) {
    try {
      return await PokemonModel.find({
        name: { $regex: new RegExp(name, "i") },
      });
    } catch (error) {
      console.error("Error finding Pokémon by name:", error);
      throw error;
    }
  }

  async findByType(type) {
    try {
      return await PokemonModel.find({
        type: { $elemMatch: { $regex: new RegExp(type, "i") } },
      });
    } catch (error) {
      console.error("Error finding Pokémon by type:", error);
      throw error;
    }
  }
}

module.exports = Pokemons;
