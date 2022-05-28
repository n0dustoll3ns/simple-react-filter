import React from 'react'

import s from '../../SideBar.module.scss';


interface Props { }

export const CompanyFilter = (props: Props) => {
  return (
    <div className={s.filter_container}>
      <div className="title">
        <h5>Авиакомпании</h5>
        <form>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="ascending_price" checked={true} />
              LOT
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="ascending_price" />
              Aeroflot
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}