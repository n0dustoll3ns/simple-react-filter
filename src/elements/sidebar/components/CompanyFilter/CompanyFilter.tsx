import React, { useState } from 'react';
import s from '../../SideBar.module.scss';
import { Caption } from '../../../../models/API';

interface Props {
  handleAirlinesFilter: (value: string[]) => void
}

export const CompanyFilter = (props: Props) => {
  let airlines: string[] = [];
  Object.values(Caption).forEach(company => airlines.push(company))

  const [isCheckedCompanies, setIsCheckedAirlinesList] = useState(Array(14).fill(true));
  const handleAirlinesChecked = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    let listController: boolean[] = []
    isCheckedCompanies.forEach(e => listController.push(e))
    listController[airlines.indexOf(changeEvent.target.name)] = changeEvent.target.checked
    setIsCheckedAirlinesList(listController);
    let stateList: string[] = []
    listController.forEach((e: boolean, i: number) => { if (e) { stateList.push(airlines[i]) } })
    console.log(stateList)
    props.handleAirlinesFilter(stateList)
  };



  return (
    <div className={s.filter_container}>
      <div className="title">
        <h5>Авиакомпании</h5>
        <form>
          {airlines.map((company: string) => (
            <div className="checkbox">
              <label>
                <input type="checkbox" value={company} name={company}
                  checked={isCheckedCompanies[airlines.indexOf(company)]}
                  onChange={handleAirlinesChecked}
                />
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