import React, { ReactNode } from 'react';
import { FilterState } from '../../App';
import { FlightElement, Pokedex } from '../../models/API';
import data from '../../models/flights.json';
import FlightTile from './FlightTile/FlightTile';
import s from './ListView.module.scss';

export interface Props { filter: FilterState }

export default function ListView(props: Props) {

  const mock: Pokedex = JSON.parse(JSON.stringify(data))

  const handleShowMore = ()=>{}
  
  let flights: FlightElement[] = mock.result.flights.slice(0, 6);

  return (
    <div className={s.listview__wrapper}>
      <ul className="fligths">
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
