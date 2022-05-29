import React, { ReactNode } from 'react';
import { useState } from 'react';
import { FilterState } from '../../App';
import { FlightElement, Leg, Pokedex, Segment } from '../../models/API';
import data from '../../models/flights.json';
import FlightTile from './FlightTile/FlightTile';
import s from './ListView.module.scss';

export interface Props { filterAndSort: FilterState }

export default function ListView(props: Props) {
  const mock: Pokedex = JSON.parse(JSON.stringify(data))

  /* ----------------- FILTER -----------------*/
  /* ---------------- transfer ----------------*/

  let filteredFlights: FlightElement[] = mock.result.flights.filter(
    (e: FlightElement) =>
      (((e.flight.legs[0].segments.length <= 1) && (e.flight.legs[1].segments.length <= 1)) && (props.filterAndSort.notransferFilterIsChecked)) ||
      (((e.flight.legs[0].segments.length > 1) || (e.flight.legs[1].segments.length > 1)) && (props.filterAndSort.transferFilterIsChecked))
  );
  /* --------^^^----- transfer -------^^^------*/
  /* ---------------- price ----------------*/
  filteredFlights = filteredFlights.filter((e: FlightElement) => (
    (Number(e.flight.price.total.amount) >= props.filterAndSort.minPrice) &&
    (Number(e.flight.price.total.amount) <= props.filterAndSort.maxPrice)
  ))
  /* --------^^^----- price -------^^^------*/

  /* ---------------- airlines ----------------*/
  filteredFlights = filteredFlights.filter((e: FlightElement) => {
    let legsFilterArray: string[] = []
    e.flight.legs.forEach((el: Leg) => el.segments.forEach((elem: Segment) => {
      legsFilterArray.push(elem.airline.caption)
    }));
    let include = false;
    legsFilterArray.forEach((element: string) => {
      if (props.filterAndSort.accessibleAirlines.includes(element)) { include = true }
    })
    return include
  });
  /* --------^^^----- airlines -------^^^------*/
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
      <div className={flights.length + 1 >= numberOfFlights ? s.button__wrapper : s.unshow}>
        <button onClick={handleShowMore}>Показать ещё</button>
      </div>
      <div className={flights.length !== 0 ? s.unshow : ''}>
        ПО ВАШЕМУ ЗАПРОСУ РЕЙСЫ ОТСУТСТВУЮТ
      </div>
    </div>
  );
}
