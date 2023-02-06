import { useQuery } from "react-query"
import { Link } from 'react-router-dom';
import { ICategory } from "../../../interfaces/interfaces";
import MercadoLivreAPI from "../../../services/api"


 const Category = () => 
{
  const {data,  isFetching} = useQuery('category',  () => 
  {
      const response =  MercadoLivreAPI.getCategories()
      return response
  } 
  )
   return (
         <>
            <h1>Category</h1>

    <ul>
      { isFetching && <h1>Carregando...</h1>}
      {
        data?.map((category:ICategory) =>
            {
                return (
                    <li key={category.id}>
                        <p>{category.id}</p>
                       <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                )
            })
      }
    </ul>
       </>

   );
}

export default Category;