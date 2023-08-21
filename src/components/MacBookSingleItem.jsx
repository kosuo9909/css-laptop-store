import './MacBookSingleItem.scss';
const MacBookSingleItem = ({ title, img, price, storage, ram, processor }) => {
  return (
    <section>
      <fieldset className='single-macbook-render'>
        <legend>{title}</legend>
        <div className='image-price-wrapper'>
          <img src={img} alt='macbook air' className='macbook-img'></img>
          <span>{price} USD</span>
        </div>
        <div className='laptop-details-wrapper'>
          <span>{storage}</span>
          <span>{ram}</span>
          <span>{processor}</span>
        </div>
      </fieldset>
    </section>
  );
};

export default MacBookSingleItem;
