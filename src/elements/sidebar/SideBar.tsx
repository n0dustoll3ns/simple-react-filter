import React from 'react';
import { CompanyFilter } from './components/CompanyFilter/CompanyFilter';
import { PriceFilter } from './components/PriceFilter/PriceFilter';
import { Sorter } from './components/Sorter/Sorter';
import { TransferFilter } from './components/TransferFilter/TransferFilter';

import s from './SideBar.module.scss';

export interface Props {
  handleSorterSelected: (option: string) => void
  handleTransferFilterIsChecked: (option: boolean) => void
  handleNotransferFilterIsChecked: (option: boolean) => void
  handleMinPrice: (value: string) => void
  handleMaxPrice: (value: string) => void
  handleAirlinesFilter: (value: string[]) => void

}

export default function SideBar(props: Props) {
  return (
    <div className={s.sidebar__wrapper}>
      <Sorter handleSorterSelected={props.handleSorterSelected} />
      <TransferFilter
        handleTransferFilterIsChecked={props.handleTransferFilterIsChecked} handleNotransferFilterIsChecked={props.handleNotransferFilterIsChecked} />
      <PriceFilter
        handleMinPrice={props.handleMinPrice}
        handleMaxPrice={props.handleMaxPrice} />
      <CompanyFilter
        handleAirlinesFilter={props.handleAirlinesFilter}
      />
    </div>
  );
}
