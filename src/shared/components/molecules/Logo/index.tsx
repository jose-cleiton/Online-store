import LogoHero from  './logo-mercado-livre.jpg'

const Logo = () => 
{
    return (
        <div className="logo">
          <img src={LogoHero} width="100" height="50" alt="Logo Mercado Pago" />
        </div>
    );
}

export default Logo;