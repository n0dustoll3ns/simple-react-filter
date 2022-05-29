import React, { useState } from 'react';

import s from '../../SideBar.module.scss';

interface Props {
  handleSorterSelected: (option: string) => void
}

export const Sorter = (props: Props) => {

  const [selectedOption, setSelectedOption] = useState("ascending_price");
  const isRadioSelected = (value: string): boolean => selectedOption === value;
  const handleOptionChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedOption(changeEvent.currentTarget.value);
    props.handleSorterSelected(changeEvent.currentTarget.value)
};



  return (
    <div className={s.filter_container}>
      <h5>Сортировать</h5>
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="ascending_price"
              checked={isRadioSelected("ascending_price")}
              onChange={handleOptionChange} />
            - по возрастанию цены
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="descending_price"
              checked={isRadioSelected("descending_price")}
              onChange={handleOptionChange} />
            - по убыванию цены
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="travel_time"
              checked={isRadioSelected("travel_time")}
              onChange={handleOptionChange} />
            - по времени в пути
          </label>
        </div>
      </form>
    </div>);
}



