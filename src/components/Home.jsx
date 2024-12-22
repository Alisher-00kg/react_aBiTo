import { Icons } from "../assets";
import { cardArray } from "../utils/constants";
import { Card } from "./Card/Card";
import Header from "./Header";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="search" placeholder="" />
              <button className="btn btn-primary search-btn">
                <img
                  className="search-btn__icon"
                  src={Icons.SearchButton}
                  alt="search"
                />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">Рекомендации для вас</h2>
                <div className="content-main__list">
                  {cardArray.map((card) => (
                    <Card
                      key={card.id}
                      title={card.title}
                      price={card.price}
                      address={card.address}
                      date={card.date}
                      image={card.image}
                    />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
