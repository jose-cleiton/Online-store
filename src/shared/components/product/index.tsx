
import * as S from './styles';

interface IProducts {
    url: string;
    title: string;
    value: number;
};


const Products = (props: any) => 

{

    console.log(props.item);
    
    return (

<S.Div>  
   <header>
      <img src={props.item.thumbnail} alt={props.item.title} title={props.item.title}/>

   </header>
    
   
    
    <main>
        <div className="title">
            <h2>{props.item.title}</h2>

        </div>
        <div>
            <span className="value">R$ {props.item.price}</span>
            <p>Frete grátis #full</p>
        </div>
    </main>
</S.Div>
    )
    


       
   

}


  
export default Products;