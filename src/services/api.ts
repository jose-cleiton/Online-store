import axios from 'axios';

export default class API {
   async getCategories() {
    const URL = "https://api.mercadolibre.com/sites/MLB/categories";
    const response = await axios.get(URL);
    return response.data;
  }

  static async getProductsFromCategoryAndQuery(categoryId: number, query: string) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await axios.get(URL);
    return response.data;
  }

  static async getProductsFromQuery(query: string) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await axios.get(URL);
    return response.data;
  }
}


