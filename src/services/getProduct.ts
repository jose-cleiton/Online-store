import axios from 'axios';

const query = 'celular';
const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

export const getProduct = async () => {
  const response = await axios.get(URL);
  return response.data;
};