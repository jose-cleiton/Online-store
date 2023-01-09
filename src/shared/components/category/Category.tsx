import { useQuery } from "react-query"
import { getCategories } from "../../../services/api";
import { Link } from 'react-router-dom';


interface  ICategory {
    id: string;
    name: string;
}

 const Category = () => 
{
  const {data,  isFetching} = useQuery('category',  () => 
  {
      const response =  getCategories()
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