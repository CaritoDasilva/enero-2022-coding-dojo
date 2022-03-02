import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';

function App() {
  const name = 'Carolina Da Silva'
  return (
    <div className="App">
      <Home name={name}/>
    </div>
  );
}

export default App;
