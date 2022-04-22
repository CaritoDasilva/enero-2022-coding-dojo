import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FormTravelAgency from './views/FormTravelAgency';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/new" element={<FormTravelAgency/>}/>
          
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
