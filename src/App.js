function Fruits({fav}) {
  return <h3>I am {fav}</h3>;
}

const fruitsILike = [
  {name: "popo"},
  {name: "apple"},
  {name: "orange"},
  {name: "cherry"},
  {name: "coconut"}
];

function App() {
  return (
    <div className="App">
      <h1>Hello Chopkiri!</h1>
      <Fruits fav="podo" />
      {fruitsILike.map(dessert => 
        <Fruits fav={dessert.name} />)}
    </div>
  );
}

export default App;