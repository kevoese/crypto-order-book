import React, { useEffect, useState } from 'react';
import './App.scss';
import TopRecord from './components/TopRecord';
import Dropdown from './components/Dropdown';
import Table from './components/Table';
import { axiosCall, subscribe, unsubscribe, getCurrencyPairSymbols } from './utils';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [mounting, setMounting] = useState(true)
  const [webSocket, setWebSocket] = useState({});
  const [data, setData] = useState(null)
  const [currencyPair, setCurrencyPair] = useState(null);
  const [selectValue, setSelectValue] = useState(null);

  const handleDropDown = async (value) => {
    setLoading(true);
    setSelectValue(value);
    await unsubscribe({webSocket, currencyPair: value});
    await fetchData(value);
  }

  const fetchCurrencyPair = async () => {
    setMounting(true);
    const response = await axiosCall({ url: 'https://www.bitstamp.net/api/v2/trading-pairs-info/'});
    const currencyPairArr = response.map(element => ({
      description: element.description.split('/').reverse().join(' - '),
      name: `${element.name.split('/').reverse().join('/')}-${element.url_symbol}`,
    }));
    const firstCurrencyPair = currencyPairArr[0].name;
    
    setCurrencyPair(currencyPairArr);
    setSelectValue(firstCurrencyPair);
    setMounting(false);
    await fetchData(firstCurrencyPair);
  }

  const fetchData = async (currencyPair) => {
    setLoading(true);
    subscribe({setWebSocket, setData, currencyPair});
    setLoading(false);
  }

  useEffect(() => {
    fetchCurrencyPair();
  }, []);

  return (
    mounting ? '' :
    <div className="App">
        <header className="header">
            <nav>
              <span>CRYPTO ORDER BOOK</span>
            </nav>
            <div className="container">
                <TopRecord currencyPair={selectValue && getCurrencyPairSymbols(selectValue)} asks={data && data.data.asks && data.data.asks.reverse()} bids={data ? data.data.bids: null} />
                <Dropdown currencyPair={currencyPair} loading={loading} setSelectValue={handleDropDown} />
            </div>
        </header>
        <main className="main">
            <Table name="ASKS" dataObj={data && data.data.asks } selectValue={selectValue}/>
            <Table name="BIDS" dataObj={data && data.data.bids} selectValue={selectValue}/>
        </main>
    </div>
  );
}

export default App;
