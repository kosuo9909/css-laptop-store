import { useState } from 'react';
import './RightSlidersPanel.css';
const RightSlidersPanel = () => {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [minRam, setMinRam] = useState(4);
  const [maxRam, setMaxRam] = useState(16);
  return (
    <aside className='right-aside'>
      <div className='slidecontainer'>
        <label htmlFor='min-price-range' className='text18px'>
          Min. Price: {minPrice} USD
        </label>

        <input
          type='range'
          min='0'
          max='1000'
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className='slider'
          id='min-price-range'
        ></input>
      </div>
      <div className='slidecontainer'>
        <label htmlFor='max-price-range' className='text18px'>
          Max. Price: {maxPrice} USD
        </label>
        <input
          type='range'
          min='0'
          max='3000'
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className='slider'
          id='max-price-range'
        ></input>
      </div>
      <div className='slidecontainer'>
        <label htmlFor='min-ram-range' className='text18px'>
          Min. RAM: {minRam} GB
        </label>
        <input
          type='range'
          min='0'
          max='8'
          value={minRam}
          onChange={(e) => setMinRam(e.target.value)}
          className='slider'
          id='min-ram-range'
        ></input>
      </div>
      <div className='slidecontainer'>
        <label htmlFor='max-ram-range' className='text18px'>
          Max. RAM: {maxRam} GB
        </label>
        <input
          type='range'
          min='0'
          max='32'
          value={maxRam}
          onChange={(e) => setMaxRam(e.target.value)}
          className='slider'
          id='max-ram-range'
        ></input>
      </div>
    </aside>
  );
};

export default RightSlidersPanel;
