const mongoose = require('mongoose');
const express = require('express');
const pokemonRouter = require('./src/routes/pokemonRoutes');

const app = express();
const port = 8080;


(async () => {
  try {
    const dbConnection = await mongoose.connect('mongodb+srv://Kdiman:991um8avo09w@cluster0.saom6k6.mongodb.net/Pokemons', {
      
    });
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    console.log('Connected to MongoDB:', dbConnection.connections[0].name);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
})();

app.use('/', pokemonRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
