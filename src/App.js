import PropTypes from "prop-types";

function Fruits({fav, rating}) {
  return (
  <div>
    <h3>I am {fav}</h3>
    <h4>{rating}/10</h4>
  </div>
  );
}

Fruits.propTypes = {
  fav: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};

const fruitsILike = [
  {id: 1, name: "popo", rating: 5},
  {id: 2, name: "apple", rating: 3.9},
  {id: 3, name: "orange", rating: 2.2},
  {id: 4, name: "cherry", rating: 6},
  {id: 5, name: "coconut", rating: 2}
];

function renderFruit(menu) {
  //console.log(menu);
  return <Fruits key={menu.id} fav={menu.name} />;
}

function App() {
  return (
    <div className="App">
      <h1>Hello Chopkiri!</h1>
      <Fruits fav="podo" />
      {/* {console.log(fruitsILike.map(renderFruit))}
      {fruitsILike.map(renderFruit)} */
      fruitsILike.map(menu => (
        <Fruits key={menu.id} fav={menu.name} rating={menu.rating} />
      ))}
    </div>
  );
}

export default App;