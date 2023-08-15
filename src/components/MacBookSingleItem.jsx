import './MacBookSingleItem.css';
const MacBookSingleItem = ({ title, img, price, storage, ram, processor }) => {
  return (
    <section>
      <h6>{title}</h6>
      <div className='image-price-wrapper'>
        <img src={img} alt='macbook air'></img>
        <span>{price}</span>
      </div>
      <div className='laptop-details-wrapper'>
        <span>{storage}</span>
        <span>{ram}</span>
        <span>{processor}</span>
      </div>
    </section>
  );
};

export default MacBookSingleItem;
