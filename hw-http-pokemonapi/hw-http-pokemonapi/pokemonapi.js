const http = require("http");
const url = require("url");

const port = 8080;

let pokemons = [
  {
    name: "Ivysaur",
    img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
    type: ["Grass", "Poison"],
  },
];

http
  .createServer((request, response) => {
    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Method": "GET, POST, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    };

    const serverURL = url.parse(request.url, true);

    if (serverURL.path === "/pokemons" && request.method === "GET") {
      response.writeHead(200, headers);
      response.end(JSON.stringify(pokemons));
    } else if (serverURL.path === "/pokemons" && request.method === "POST") {
      let buffer = "";

      request.on("data", (data) => {
        buffer += data;
      });

      request.on("end", () => {
        const pokemon = JSON.parse(buffer);
        pokemons.push(pokemon);

        response.writeHead(201, headers);
        response.end(JSON.stringify(pokemon));
      });

      request.on("error", (err) => {
        console.log(err);
        response.writeHead(500, headers);
        response.end("There was an error in adding user");
      });
    } else if (
      (serverURL.path.includes("/pokemons") && request.method === "DELETE") ||
      request.method === "PUT"
    ) {
      const pathname = serverURL.pathname;
      const splitPath = pathname.split("/");
      const name = splitPath[splitPath.length - 1];
      const index = pokemons.findIndex((pokemon) => pokemon.name === name);

      if (index < 0) {
        response.writeHead(400, headers);
        response.end("Pokemon does not exist");
      } else {
        if (request.method === "DELETE") {
          pokemons.splice(index, 1);
        } else if (request.method === "PUT") {
          let buffer = "";

          request.on("data", (data) => {
            buffer += data;
          });

          request.on("end", () => {
            const edits = JSON.parse(buffer);
            pokemons[index] = { ...pokemons[index], ...edits };
          });

          request.on("error", (err) => {
            console.error(err);
            response.writeHead(500, headers);
            response.end("There was an error in editing a pokemon");
          });
        }

        response.writeHead(200, headers);
        response.end(JSON.stringify(pokemons));
      }
    } else {
      response.writeHead(404, headers);
      response.end("Not Found");
    }
  })
  .listen(port, () => {
    console.log(`Server is now running at port ${port}`);
  });
