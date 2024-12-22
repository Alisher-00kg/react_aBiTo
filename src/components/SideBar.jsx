import { rightInfo } from "../utils/sidebar";
import "./css/SideBar.css";
const SideBar = () => {
  return (
    <aside className="content-side">
      <h3 className="content-side__title">Сервисы и услуги</h3>
      <div className="content-side__box">
        <div className="content-side__list">
          {rightInfo.map((item) => (
            <div className="content-side__list-item" key={item.id}>
              <img
                src={item.image}
                alt="side-card"
                className="content-side__list-item--img"
              />
              <h5 className="content-side__list-item--title">{item.title}</h5>
              <p className="content-side__list-item--text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="content-side__footer">
          <p className="content-side__footer--item">© ООО «Абито», 2011–2021</p>
          <a href="#" className="content-side__footer--item">
            Политика конфиденциальности
          </a>
          <a href="#" className="content-side__footer--item">
            Обработка данных
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
