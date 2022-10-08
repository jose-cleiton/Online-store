
import * as S from './styles';

interface IProducts {
    url: string;
    title: string;
    value: number;
};


const Products = (props: any) => 
(
<S.Div>    
      <S.Img src={props.url} alt={props.title} title={props.title}/>
    
    <div className='info'>
        <div>
            <h2>{props.title}</h2>
        </div>
        <div>
            <p>R$ {props.value}</p>
            <p>Frete grátis #full</p>
        </div>
    </div>
</S.Div>


       
   

)


  
export default Products;