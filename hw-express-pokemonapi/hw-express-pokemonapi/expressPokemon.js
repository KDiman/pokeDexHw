import express from "express";

const app = express();

const port = 7000;

app.use(express.json());

const pokemons = [];

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

app.get("/api/v1/pokemons", (req, res) => {
  const limit = Number(req.query.limit) || 20;
  const offset = Number(req.query.offset) || 0;

  const limitedPokemons = pokemons.slice(offset, offset + limit);

  res.status(200).json(limitedPokemons);
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

  const index = pokemons.findIndex((pokemon) => pokemon.name === name);

  if (index === -1) {
    res.sendStatus(404);
  } else {
    const deletedPokemon = pokemons.splice(index, 1);
    res.status(200).json(deletedPokemon[0]);
  }
});

app.get("/api/v1/pokemons/:name", (req, res) => {
  const { name } = req.params;

  const foundPokemon = pokemons.find((pokemon) => pokemon.name === name);

  if (foundPokemon) {
    res.status(200).json(foundPokemon);
  } else {
    res.sendStatus(404);
  }
});

app.get("/api/v1/pokemons/search", (req, res) => {
  const { type } = req.query;

  if (!type) {
    res.sendStatus(400);
  } else {
    const matchingPokemons = pokemons.filter(
      (pokemon) => pokemon.type.toLowerCase() === type.toLowerCase()
    );
    res.status(200).json(matchingPokemons);
  }
});

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
