import  { useState, useEffect } from 'react';
import MercadoLivreAPI from '../services/api';


function CategoryPage({ categoryId }) {
  const [products, setProducts] = useState<Array<{ id: number; title: string }>>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await MercadoLivreAPI.getProductsByCategory(categoryId);
      setProducts(data.results);
    }
    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>Produtos da categoria {categoryId}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
