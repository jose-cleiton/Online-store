import { useQuery } from "react-query"
import { getCategories } from "../../services/api"

interface  ICategory {
    id: string;
    name: string;
}

export const Category = () => 
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
                        <h2>{category.name}</h2>
                    </li>
                )
            })
      }
    </ul>
       </>

   );
}