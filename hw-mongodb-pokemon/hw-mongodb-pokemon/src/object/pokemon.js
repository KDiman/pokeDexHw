const PokemonModel = require('../models/pokemon.entity');

class Pokemons {
    constructor() { }

    async createPokemon(pokemonData) {
        try {
            const newPokemon = new PokemonModel({ ...pokemonData });
            const savedPokemon = await newPokemon.save();
            return savedPokemon;
        } catch (error) {
            console.error('Error creating Pokemon:', error);
            throw error; // Rethrow the error to be caught by the caller
        }
    }

    async findAllPokemons() {
        try {
            return await PokemonModel.find();
        } catch (error) {
            console.error('Error finding all Pokemons:', error);
            throw error;
        }
    }

    findByName(){
        try{
        return PokemonModel.findOne()}
        catch (error) {
            console.error('Error finding all Pokemons:', error);
            throw error;
        }
      } 

      findLimitPokemon(limit = 10, skip = 0){
        try{
        return PokemonModel.find().limit(limit).skip(skip);}
        catch (error) {
            console.error('Error finding all Pokemons:', error);
            throw error;
        }
      } 



    

    
}

module.exports = Pokemons;
