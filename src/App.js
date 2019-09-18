import React from 'react';
import './App.scss';
import TopRecord from './components/TopRecord';

const App = () => {
  return (
    <div className="App">
        <header className="header">
            <nav>
              <span>CRYPTO ORDER BOOK</span>
            </nav>
            <div className="container">
                <TopRecord />
            </div>
        </header>
        <main className="main">

        </main>
    </div>
  );
}

export default App;
