import React from 'react';
import s from '../../SideBar.module.scss';
import { Caption } from '../../../../models/API';

interface Props { }

export const CompanyFilter = (props: Props) => {


  let airlines: string[] = [];
  Object.values(Caption).forEach(company => airlines.push(company))

  return (
    <div className={s.filter_container}>
      <div className="title">
        <h5>Авиакомпании</h5> 
        <form>
          {airlines.map((company: string) => (
            <div className="checkbox">
              <label>
                <input type="checkbox" value={company} checked={true} />
                {company}
              </label>
            </div>
          ))
          }
        </form>
      </div>
    </div>
  )
}