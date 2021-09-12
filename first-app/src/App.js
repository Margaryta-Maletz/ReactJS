import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { SearchInput} from './components/SearchInput';
import {GenreToggle} from './components/GenreToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
          <SearchInput />
          <GenreToggle />
        <Counter />
      </header>
    </div>
  );
}

export default App;
