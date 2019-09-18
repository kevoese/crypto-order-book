import axios from 'axios';
const axiosCall = async ({ url, data,  method, }) => {
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
export default axiosCall;
