
import * as S from './styles';



const Products = (props: any) => 

{

    const { item } = props;
    
    return (

<S.LI>  
   <header>
      <img src={item.thumbnail} width='220' height='220' decoding='async' alt={item.title} title={item.title}/>

   </header>   
    
    <main>
        <div className="title">
            <h2>{item.title}</h2>

        </div>
        <div>
            <span className="value">R$ {item.price}</span>
            <p>Frete grátis #full</p>
        </div>
    </main>
</S.LI>
    )
    


       
   

}


  
export default Products;