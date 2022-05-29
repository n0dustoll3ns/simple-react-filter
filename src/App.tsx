import React from 'react';
import ListView from './elements/listview/ListView';
import SideBar from './elements/sidebar/SideBar';
import { Caption } from './models/API';
import Header from './shared/Header/Header';


export interface IAppProps {
}

export type FilterState = {
  sorterSelectedOption: string;
  transferFilterIsChecked: boolean;
  notransferFilterIsChecked: boolean;
  minPrice: number;
  maxPrice: number;
  accessibleAirlines: string[]
};


export default class App extends React.Component<IAppProps, FilterState> {

  constructor(props: IAppProps) {
    super(props)
    this.state = {
      sorterSelectedOption: 'ascending_price',
      transferFilterIsChecked: true,
      notransferFilterIsChecked: true,
      minPrice: 0,
      maxPrice: Infinity,
      accessibleAirlines: Object.values(Caption)
    }
    this.handleSorterSelected = this.handleSorterSelected.bind(this);
    this.handleTransferFilterIsChecked = this.handleTransferFilterIsChecked.bind(this);
    this.handleNotransferFilterIsChecked = this.handleNotransferFilterIsChecked.bind(this);
    this.handleMinPrice = this.handleMinPrice.bind(this);
    this.handleMaxPrice = this.handleMaxPrice.bind(this);

  }
  handleSorterSelected = (option: string) => {
    let newState: FilterState = this.state;
    newState.sorterSelectedOption = option
    this.setState(newState);
  }

  handleTransferFilterIsChecked = (isChecked: boolean) => {
    let newState: FilterState = this.state;
    newState.transferFilterIsChecked = isChecked
    this.setState(newState);
  }
  handleNotransferFilterIsChecked = (isChecked: boolean) => {
    let newState: FilterState = this.state;
    newState.notransferFilterIsChecked = isChecked
    this.setState(newState);
  }

  handleMinPrice = (value: string) => {
    let newState: FilterState = this.state;
    newState.minPrice = value === '' ? 0 : Number(value)
    this.setState(newState);
  }

  handleMaxPrice = (value: string) => {
    let newState: FilterState = this.state;
    newState.maxPrice = value === '' ? Infinity : Number(value)
    this.setState(newState);
  }

  handleAirlinesFilter = (airlinesList: string[]) => {
    let newState: FilterState = this.state;
    newState.accessibleAirlines = airlinesList
    this.setState(newState);
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className="wrapper">
          <SideBar
            handleSorterSelected={this.handleSorterSelected}
            handleTransferFilterIsChecked={this.handleTransferFilterIsChecked}
            handleNotransferFilterIsChecked={this.handleNotransferFilterIsChecked}
            handleMinPrice={this.handleMinPrice}
            handleMaxPrice={this.handleMaxPrice}
            handleAirlinesFilter={this.handleAirlinesFilter}

          />
          <ListView
            filterAndSort={this.state}
          />
        </div>
      </div>
    );
  }
}
