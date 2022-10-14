import Products from "../shared/components/product";


export const products = (item: any) =>  <Products key={item.id} item={item}/>   

export const renderProducts = (info) => {
    
    return info.map((item) => {
        return products(item)
    })
  };