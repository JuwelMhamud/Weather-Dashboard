import logoImg from '../../assets/logo.svg'
const Logo = () => {
    return (
        <a href="./index.html">
          <img className="h-9" src={logoImg} alt="Weather App Logo" />
        </a>
    );
};

export default Logo;