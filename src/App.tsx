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
  maxprice: number;
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
      maxprice: Infinity,
      accessibleAirlines: Object.values(Caption)
    }
    this.handleSorterSelected = this.handleSorterSelected.bind(this);
    this.handleTransferFilterIsChecked = this.handleTransferFilterIsChecked.bind(this);
    this.handleNotransferFilterIsChecked = this.handleNotransferFilterIsChecked.bind(this);
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
    console.log(newState)
  }
  handleNotransferFilterIsChecked = (isChecked: boolean) => {
    let newState: FilterState = this.state;
    newState.notransferFilterIsChecked = isChecked
    this.setState(newState);
    console.log(newState)
  }


  
  render() {
    console.log(this.state)

    return (
      <div className='container'>
        <Header />
        <div className="wrapper">
          <SideBar
            handleSorterSelected={this.handleSorterSelected}
            handleTransferFilterIsChecked={this.handleTransferFilterIsChecked}
            handleNotransferFilterIsChecked={this.handleNotransferFilterIsChecked}
          />
          <ListView filterAndSort={this.state} />
        </div>
      </div>
    );
  }
}
