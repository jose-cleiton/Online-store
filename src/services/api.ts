import axios from 'axios';



export async function getCategories() {

      const URL =" https://api.mercadolibre.com/sites/MLB/categories"
      const response = await axios.get(URL)
      return response.data

  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(categoryId:number, query:string) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`
  const response = await axios.get(URL);
  return response.data;
}

export async function getProductsFromQuery(query:string) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`  
  const response = await axios.get(URL);
  return response.data;
}