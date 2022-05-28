import React from 'react'

import s from '../../SideBar.module.scss';


interface Props { }

export const TransferFilter = (props: Props) => {
  return (
    <div className={s.filter_container}>
      <div className="title">
        <h5>Фильтровать</h5>
        <form>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="ascending_price" checked={true} />
              - 1 пересадка
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="ascending_price" />
              - без пересадок
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}