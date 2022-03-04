import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import Profile from './Views/Profile';

function App() {
  const name = 'Carolina Da Silva'
  return (
    <div className="App">
      <Home name={name} age={38}/>
      <Profile age={38}/>
    </div>
  );
}

export default App;
