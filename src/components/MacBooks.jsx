import MacBookSingleItem from './MacBookSingleItem';
import './MacBooks.scss';

const mockStorage = [
  {
    title: 'Apple MacBook Air',
    img: 'https://www.pngmart.com/files/4/Macbook-PNG-Pic.png',
    price: 1300,
    storage: '64GB SSD',
    ram: '2GB DDR',
    processor: 'Intel Core i5',
  },
  {
    title: 'Apple MacBook Air',
    img: 'https://www.pngmart.com/files/4/Macbook-PNG-Pic.png',
    price: 1300,
    storage: '64GB SSD',
    ram: '2GB DDR',
    processor: 'Intel Core i5',
  },
  {
    title: 'Apple MacBook Air',
    img: 'https://www.pngmart.com/files/4/Macbook-PNG-Pic.png',
    price: 1300,
    storage: '64GB SSD',
    ram: '2GB DDR',
    processor: 'Intel Core i5',
  },
  {
    title: 'Apple MacBook Air',
    img: 'https://www.pngmart.com/files/4/Macbook-PNG-Pic.png',
    price: 1300,
    storage: '64GB SSD',
    ram: '2GB DDR',
    processor: 'Intel Core i5',
  },
  {
    title: 'Apple MacBook Air',
    img: 'https://www.pngmart.com/files/4/Macbook-PNG-Pic.png',
    price: 1300,
    storage: '64GB SSD',
    ram: '2GB DDR',
    processor: 'Intel Core i5',
  },
  {
    title: 'Apple MacBook Air',
    img: 'https://www.pngmart.com/files/4/Macbook-PNG-Pic.png',
    price: 1300,
    storage: '64GB SSD',
    ram: '2GB DDR',
    processor: 'Intel Core i5',
  },
];
const MacBooks = () => {
  return (
    <main className='main-content'>
      {mockStorage.map((item, index) => (
        <MacBookSingleItem
          key={index}
          title={item.title}
          img={item.img}
          price={item.price}
          storage={item.storage}
          ram={item.ram}
          processor={item.processor}
        />
      ))}
    </main>
  );
};

export default MacBooks;
