import './MacBookSingleItem.scss';
const MacBookSingleItem = ({ title, img, price, storage, ram, processor }) => {
  return (
    <section className="single-macbook-render">
      <h6 className="macbook-title">{title}</h6>
      <div className="image-price-wrapper">
        <img src={img} alt="macbook air" className="macbook-img"></img>
        <span>{price} USD</span>
      </div>
      <div className="laptop-details-wrapper">
        <span>{storage}</span>
        <span>{ram}</span>
        <span>{processor}</span>
      </div>
    </section>
  );
};

export default MacBookSingleItem;
