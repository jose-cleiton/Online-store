import axios from 'axios';



export async function getCategories() {

      const URL =" https://api.mercadolibre.com/sites/MLB/categories"
      const response = await axios.get(URL)
      return response.data

  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const headers = { Authorization: 'Bearer $ACCESS_TOKEN', method: 'GET' };
  const response = await axios.get(`https://api.mercadolibre.com/sites/${categoryId}/search?q=$${query}`, headers);
  return response.data;
}