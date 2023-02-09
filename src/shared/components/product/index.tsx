
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
        <h2 className='title'>{item.title}</h2>
        <div className='price'>
         
         <span>{item
         .price
         .toLocaleString(
            'pt-br',{style:'currency',currency:'BRL'}
            )}
        </span>
         
        </div>
        <div className='frete'>
            <p>Frete grátis #full</p>
        </div>
    </main>
</S.LI>
    )
    


       
   

}  
export default Products;