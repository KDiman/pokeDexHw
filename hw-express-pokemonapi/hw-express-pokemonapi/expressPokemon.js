import express from "express";
import fs from "fs";

const app = express();
const port = 7000;

app.use(express.json());

let pokemons = [];

fs.readFile("pokemon.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading pokemon.json:", err);
  } else {
    pokemons = JSON.parse(data);
    console.log("Pokémon data loaded from pokemon.json");
  }
});

app.get("/api/v1/pokemons", (req, res) => {
  const limit = Number(req.query.limit) || Infinity;
  const offset = Number(req.query.offset) || 0;

  const limitedPokemons = pokemons.slice(offset, offset + limit);

  res.status(200).json(limitedPokemons);
});

app.get("/api/v1/pokemons/search", (req, res) => {
  const { type } = req.query;
  console.log("Received type query:", type);

  if (!type) {
    res.sendStatus(400);
  } else {
    const lowercaseQueryType = type.toLowerCase();
    console.log("Lowercase query type:", lowercaseQueryType);

    const matchingPokemons = pokemons.filter((pokemon) =>
      pokemon.type.some((t) => {
        const lowercaseType = t.toLowerCase();
        console.log("Comparing with:", lowercaseType);
        return lowercaseType === lowercaseQueryType;
      })
    );

    if (matchingPokemons.length > 0) {
      res.status(200).json(matchingPokemons);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post("/api/v1/pokemons", (req, res) => {
  const newPokemon = req.body;
  const { name, img, type } = newPokemon;

  if (!name || !img || !type) {
    res.sendStatus(400);
  } else {
    pokemons.push(req.body);
    res.status(201).json(newPokemon);
  }
});

app.put("/api/v1/pokemons/:name", (req, res) => {
  const { name } = req.params;
  const updatedPokemon = req.body;

  const index = pokemons.findIndex((pokemon) => pokemon.name === name);

  if (index === -1) {
    res.sendStatus(404);
  } else {
    pokemons[index] = { ...pokemons[index], ...updatedPokemon };
    res.status(200).json(pokemons[index]);
  }
});

app.delete("/api/v1/pokemons/:name", (req, res) => {
  const { name } = req.params;
  const lowerCaseName = name.toLowerCase();

  const index = pokemons.findIndex(
    (pokemon) => pokemon.name.toLowerCase() === lowerCaseName
  );

  if (index === -1) {
    res.sendStatus(404);
  } else {
    const deletedPokemon = pokemons.splice(index, 1);
    res.status(200).json(deletedPokemon[0]);
  }
});

app.get("/api/v1/pokemons/:name", (req, res) => {
  const { name } = req.params;

  const foundPokemon = pokemons.find(
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
  );

  if (foundPokemon) {
    res.status(200).json(foundPokemon);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
