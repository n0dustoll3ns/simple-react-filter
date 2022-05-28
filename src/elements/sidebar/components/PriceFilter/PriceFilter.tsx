import React, { useState } from 'react'

import s from '../../SideBar.module.scss';


interface Props { }

export const PriceFilter = (props: Props) => {

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const handleMinPriceChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setMinPrice(changeEvent.target.value);
  };
  const handleMaxPriceChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setMaxPrice(changeEvent.target.value);
};


  return (
    <div className={s.filter_container}>
      <div className="title">
        <h5>Цена</h5>
        <form>
          <div className={s.number}>
            <label>От&nbsp;
              <input type="number"
                value={minPrice}
                className={s.minprice}
                onChange={handleMinPriceChange} />

            </label>
          </div>
          <div className={s.number}>
            <label>До&nbsp;
              <input type="number"
                value={maxPrice}
                className={s.maxprice}
                onChange={handleMaxPriceChange} />
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}