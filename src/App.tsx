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
      maxprice: 999999,
      accessibleAirlines: Object.values(Caption)
    }
    this.handleSorterSelected = this.handleSorterSelected.bind(this);
  }

  handleSorterSelected = (option: string) => {
    let newState: FilterState = this.state;
    newState.sorterSelectedOption = option
    this.setState(newState);
  }



  render() {
    return (
      <div className='container'>
        <Header />
        <div className="wrapper">
          <SideBar handleSorterSelected={this.handleSorterSelected} />
          <ListView filter={this.state} />
        </div>
      </div>
    );
  }
}
