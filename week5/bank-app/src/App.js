import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import CreateAccount from './views/CreateAccount';

function App() {
  return (
    <div className="App">
      <Layout>
        <CreateAccount/>
      </Layout>
    </div>
  );
}

export default App;
