function Fruits({fav}) {
  return <h3>I am {fav}</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello Chopkiri!</h1>
      <Fruits fav="podo" />
    </div>
  );
}

export default App;