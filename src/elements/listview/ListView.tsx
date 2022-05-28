import React from 'react';
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
