import React from 'react'

import s from '../../SideBar.module.scss';


interface Props { }

export const PriceFilter = (props: Props) => {
  return (
    <div className={s.filter_container}>
      <div className="title">
        <h5>Цена</h5>
        <form>
          <div className={s.number}>
            <label>От&nbsp;
              <input type="number" value="ascending_price" checked={true} />
            </label>
          </div>
          <div className={s.number}>
            <label>До&nbsp;
              <input type="number" value="ascending_price" checked={true} />
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}