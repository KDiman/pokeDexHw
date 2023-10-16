const PokemonDetails = ({ name, image, type }) => {
  const typeString = type.join(',')
  return (
    <div className="container">
      <div className="idNumber"></div>
      <img src={image} className="image"/>
      <div className="pokeName">{name}</div>
      <span className="type">Type:{typeString}</span>
    </div>
  );
  
};
export default PokemonDetails;
