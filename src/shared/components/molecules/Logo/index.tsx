import LogoHero from  './Mercado-Livre-logo-1-1-1024x288.png'

const Logo = () => 
{
    return (
        <div className="logo">
          <img src={LogoHero}  width = "134" height="34" alt="Logo Mercado Pago" />
        </div>
    );
}

export default Logo;