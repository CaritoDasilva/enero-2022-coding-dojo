import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Characters from './views/Characters';
import Character from './views/Character';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Characters />}/>
          <Route exact path="/character/:id" element={<Character />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
