import React from 'react';
import { Pokedex } from '../../models/ApiInterface';
import data from '../../models/flights.json';
import FlightTile from './FlightTile/FlightTile';

import s from './ListView.module.scss';

export interface Props { }

export default function ListView(props: Props) {
  return (
    <div className={s.listview__wrapper}>
      <ul className="fligths">
        <li className="flight">
        <FlightTile />
        </li>
        <li className="flight">
        <FlightTile />
        </li>
      </ul>
    </div>
  );
}
