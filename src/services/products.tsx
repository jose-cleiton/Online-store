import Products from "../shared/components/product";


export const products = (item: any) =>  <Products key={item.id} item={item}/>   

export const renderProducts = (info: any[]) => {
    
    return info.map((item: any) => {
        return products(item)
    })
  };