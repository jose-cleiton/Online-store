import Products from '../shared/components/product';
import { useProductQuery } from './useProductQuery';

const Itens = () => {
  const data = useProductQuery();

      return data?.map(
        (
            item: any
        ) => <Products key={item.id} item={item}/>
        )
    }

export default Itens;