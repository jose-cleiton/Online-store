import axios from 'axios';

class MercadoLivreAPI {
  async getCategories() {
    const URL = "https://api.mercadolibre.com/sites/MLB/categories";
    const response = await axios.get(URL);
    return response.data;
  }

  async getProductsFromCategoryAndQuery(categoryId: number, query: string) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await axios.get(URL);
    return response.data;
  }

  async getProductsFromQuery(query: string) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await axios.get(URL);
    return response.data;
  }
  async getProductsByCategory(categoryId: number) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const response = await axios.get(URL);
    return response.data;
  }
}

export default new MercadoLivreAPI();
