import React, { useState } from 'react'

import s from '../../SideBar.module.scss';


interface Props {
  handleMinPrice: (value: string) => void
  handleMaxPrice: (value: string) => void

}

export const PriceFilter = (props: Props) => {

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const handleMinPriceChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setMinPrice(changeEvent.target.value);
    props.handleMinPrice(changeEvent.target.value);
    console.log(`trying to set min price on`, changeEvent.target, `got value ${changeEvent.target.value}`)
  };
  const handleMaxPriceChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setMaxPrice(changeEvent.target.value);
    props.handleMaxPrice(changeEvent.target.value);
    console.log(`trying to set max price on`, changeEvent.target, `got value ${changeEvent.target.value}`)
  };


  return (
    <div className={s.filter_container}>
      <div className={s.title}>
        <h5>Цена</h5>
        <form>
          <div className={s.number}>
            <label className={s.minprice}>
              От&nbsp;
              <input type="number"
                value={minPrice}
                className={s.minprice}
                onChange={handleMinPriceChange} />

            </label>
          </div>
          <div className={s.number}>
            <label className={s.maxprice}>
              До&nbsp;
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