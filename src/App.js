import React from 'react';
import './App.scss';
import TopRecord from './components/TopRecord';
import Dropdown from './components/Dropdown';
import Table from './components/Table';

const App = () => {
  return (
    <div className="App">
        <header className="header">
            <nav>
              <span>CRYPTO ORDER BOOK</span>
            </nav>
            <div className="container">
                <TopRecord />
                <Dropdown />
            </div>
        </header>
        <main className="main">
            <Table name="ASK" />
            <Table name="BIDS" />
        </main>
    </div>
  );
}

export default App;
