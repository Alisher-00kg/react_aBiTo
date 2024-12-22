import { Icons } from "../assets";
import "./css/Header.css";
const Header = () => {
  return (
    <header>
      <header>
        <div className="container">
          <div className="header-box">
            <a href="/" className="header-logo">
              <img src={Icons.Logo} alt="logo" />
              <span>Abito</span>
            </a>
            <div className="header-controls">
              <button className="btn btn-outline">Вход и регистрация</button>
              <button className="btn btn-primary">Подать объявление</button>
            </div>
            <div className="header-burger">
              <img src={Icons.BurgerMenu} alt="burger-menu" />
            </div>
          </div>
        </div>
      </header>
    </header>
  );
};

export default Header;
