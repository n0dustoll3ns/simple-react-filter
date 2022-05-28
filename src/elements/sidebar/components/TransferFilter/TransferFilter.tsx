import React, { useState } from 'react';

import s from '../../SideBar.module.scss';


interface Props { }

export const TransferFilter = (props: Props) => {

  const [isCheckedTransfer, setIsCheckedTransfer] = useState(true);
  const [isCheckedNotransfer, setIsCheckedNoTransfer] = useState(true);
  const handleTransferChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCheckedTransfer(changeEvent.target.checked);
  };
  const handleNoTransferChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCheckedNoTransfer(changeEvent.target.checked);
  };



  return (
    <div className={s.filter_container}>
      <div className="title">
        <h5>Фильтровать</h5>
        <form>
          <div className={s.checkbox}>
            <label>
              <input type="checkbox" value="transfer" name='transfer'
                checked={isCheckedTransfer}
                onChange={handleTransferChange} />
              - 1 пересадка
            </label>
          </div>
          <div className={s.checkbox}>
            <label>
              <input type="checkbox" value="notransfer" name='notransfer'
                checked={isCheckedNotransfer}
                onChange={handleNoTransferChange} />
              - без пересадок
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}