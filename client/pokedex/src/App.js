import logo from './pokeball.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to our API Pokedex.
        </p>
        <a
          className="App-link"
          href="http://localhost:4242/pokemons"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go
        </a>
      </header>
    </div>
  );
}

export default App;
