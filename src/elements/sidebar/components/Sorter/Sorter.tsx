import React from 'react';

import s from '../../SideBar.module.scss';


export interface Props {
}

export const Sorter = (props: Props) => {
  return (
    <div className={s.filter_container}>
      <div className="title">
        <h5>Сортировать</h5>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="ascending_price" checked={true} />
              - по возрастанию цены
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="descending _price" />
              - по убыванию цены
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="travel_time" />
              - по времени в пути
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
