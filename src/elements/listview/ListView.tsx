import React, { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import { FilterState } from '../../App';
import { FlightElement, Pokedex } from '../../models/API';
import data from '../../models/flights.json';
import FlightTile from './FlightTile/FlightTile';
import s from './ListView.module.scss';

export interface Props { filterAndSort: FilterState }

export default function ListView(props: Props) {
  const mock: Pokedex = JSON.parse(JSON.stringify(data))

  /* ----------------- FILTER -----------------*/


  let filteredFlights: FlightElement[] = mock.result.flights.filter((e: FlightElement) =>
    (e.flight.legs[0].segments.length <= 2 || e.flight.legs[1].segments.length <= 2) === (props.filterAndSort.notransferFilterIsChecked) ||
    (e.flight.legs[0].segments.length > 2 || e.flight.legs[1].segments.length > 2) === (props.filterAndSort.transferFilterIsChecked)
  );

  /* --------^^^------ FILTER --------^^^------*/


  


  /* ----------------- SORTER -----------------*/
  const sorterFunc = (
    props.filterAndSort.sorterSelectedOption === 'ascending_price') ?
    (a: FlightElement, b: FlightElement): number => Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount) :
    (props.filterAndSort.sorterSelectedOption === 'descending_price') ?
      (a: FlightElement, b: FlightElement): number => Number(b.flight.price.total.amount) - Number(a.flight.price.total.amount) :
      (a: FlightElement, b: FlightElement): number => a.flight.legs[0].duration - b.flight.legs[0].duration
  let sortedFlights: FlightElement[] = filteredFlights.sort(sorterFunc)
  /* --------^^^------ SORTER --------^^^------*/

  const [numberOfFlights, setNumberFlights] = useState(6)

  let flights: FlightElement[] = sortedFlights.slice(0, numberOfFlights);

  const handleShowMore = () => {
    setNumberFlights(numberOfFlights + 6)
  }



  return (
    <div className={s.listview__wrapper}>
      <ul className={s.flights}>
        {flights.map((e: FlightElement): ReactNode => (
          <FlightTile flight={e.flight} />
        ))}
      </ul>
      <div className={s.button__wrapper}>
        <button onClick={handleShowMore}>Показать ещё</button>
      </div>
    </div>
  );
}
function sorterFunc(sorterFunc: any): FlightElement[] {
  throw new Error('Function not implemented.');
}

