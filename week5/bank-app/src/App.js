// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
// import CreateAccount from './views/CreateAccount';
import FormAntd from './components/FormAntd';
import ListAccounts from './components/ListAccounts';

function App() {

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    console.log("🚀 ~ file: App.js ~ line 16 ~ App ~ accounts", accounts)

  }, [accounts])

  return (
    <div className="App">
      <Layout>
        {/* <CreateAccount/> */}
        <FormAntd accounts={accounts} setAccounts={setAccounts}/>
        <ListAccounts accounts={accounts}/>
      </Layout>
    </div>
  );
}

export default App;
