import LogoHero from  './Mercado-Livre-logo-1-1-1024x288.png'
import DiscountImage from  './D_NQ_787363-MLA52331566787_112022-OO.webp'

export const Logo = () => 
{
    return (
        <div className="logo">
          <img src={LogoHero}  width = "134" height="34" alt="Logo Mercado Pago" />
        </div>
    );
}




export  const Discount = () => 
{
    return (
        <div className="discount">
          <img src={DiscountImage}  width = "340" height="39" alt="Discount Image" />
        </div>
    );
}