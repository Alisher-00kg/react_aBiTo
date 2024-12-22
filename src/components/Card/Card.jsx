import "../css/Card.css";
export const Card = ({ title, price, address, date, image, ...props }) => {
  return (
    <a href="#!" className="card" {...props}>
      <div className="card--img">
        <img src={image} alt="card" />
      </div>
      <h5 className="card--title">{title}</h5>
      <strong className="card--price">{price}</strong>
      <div className="card--desc-box">
        <span className="card--desc">{address}</span>
        <span className="card--desc">{date}</span>
      </div>
    </a>
  );
};
