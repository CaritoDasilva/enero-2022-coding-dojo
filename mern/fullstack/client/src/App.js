import './App.scss';
import FormCreationBranchOffices from './views/FormCreationBranchOffices';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ListBranchOffices from './views/ListBranchOffices';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/new-branch-office" element={<FormCreationBranchOffices/>}/>
          <Route exact path="/" element={<ListBranchOffices/>}/>
          <Route exact path="/sucursal/:id" element={<Detail/>}/>
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
