function Fruits({fav}) {
  return <h3>I am {fav}</h3>;
}

const fruitsILike = [
  {id: 1, name: "popo"},
  {id: 2, name: "apple"},
  {id: 3, name: "orange"},
  {id: 4, name: "cherry"},
  {id: 5, name: "coconut"}
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
      {console.log(fruitsILike.map(renderFruit))}
      {fruitsILike.map(renderFruit)}
    </div>
  );
}

export default App;