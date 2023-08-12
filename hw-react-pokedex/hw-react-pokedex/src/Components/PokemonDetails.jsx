const PokemonDetails = ({ id, name, image, type }) => {
  return (
    <div className="container">
      <div className="idNumber">
        <span>#{id}</span>
      </div>
      <img src={image} />
      <div className="pokeName">{capitalizeFirstLetter(name)}</div>
      <span className="type">Type:{capitalizeFirstLetter(type)}</span>
    </div>
  );
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};
export default PokemonDetails;
