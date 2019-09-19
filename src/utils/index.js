import axios from 'axios';
export const axiosCall = async ({ url, data,  method, }) => {
  const result = await axios({
    url,
    method: method || 'GET',
    data,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    }
  });

  return result.data;
};

export const unsubscribe = ({webSocket, currencyPair}) => {
  webSocket.send(JSON.stringify({event: "bts:unsubscribe", data: {channel: `order_book_${currencyPair.split('-')[1]}`}}))
  webSocket.close();
};

export const subscribe = ({ setWebSocket, setData, currencyPair}) => {
  const webSocket = new WebSocket('wss://ws.bitstamp.net/');
  webSocket.onopen = () => {
    webSocket.send(JSON.stringify({ event: `bts:subscribe`, data: {channel: `order_book_${currencyPair.split('-')[1]}`}}))
    setWebSocket(webSocket);
  }
  webSocket.onmessage = (data) => {
   setData(JSON.parse(data.data));
  }
}

export const getCurrencyPairSymbols = (value) => value.split('-')[0];

export const formatNumberString = value => (value ? Number(value).toFixed(3) : 0.000)