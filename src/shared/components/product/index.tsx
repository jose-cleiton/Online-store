
import * as S from './styles';



const Products = (props: any) => 

{

    const { item } = props;
    
    return (

<S.Div>  
   <header>
      <img src={item.thumbnail} alt={item.title} title={item.title}/>

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
</S.Div>
    )
    


       
   

}


  
export default Products;