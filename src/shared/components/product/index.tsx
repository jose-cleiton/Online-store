
import * as S from './styles';

interface IProducts {
    url: string;
    title: string;
    value: number;
};


const Products = (props: any) => 
(
<S.Div>  
   <header>
      <img src={props.url} alt={props.title} title={props.title}/>

   </header>
    
   
    
    <main>
        <div className="title">
            <h2>{props.title}</h2>
        </div>
        <div>
            <span className="value">R$ {props.value}</span>
            <p>Frete grátis #full</p>
        </div>
    </main>
</S.Div>


       
   

)


  
export default Products;