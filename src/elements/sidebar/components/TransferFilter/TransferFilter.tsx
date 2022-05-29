import React, { useState } from 'react';

import s from '../../SideBar.module.scss';


interface Props {
  handleTransferFilterIsChecked: (option: boolean) => void
  handleNotransferFilterIsChecked: (option: boolean) => void
}

export const TransferFilter = (props: Props) => {

  const [isCheckedTransfer, setIsCheckedTransfer] = useState(true);
  const [isCheckedNotransfer, setIsCheckedNoTransfer] = useState(true);
  const handleTransferChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCheckedTransfer(changeEvent.target.checked);
    props.handleTransferFilterIsChecked(changeEvent.target.checked);
  };
  const handleNoTransferChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCheckedNoTransfer(changeEvent.target.checked);
    props.handleNotransferFilterIsChecked(changeEvent.target.checked);
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