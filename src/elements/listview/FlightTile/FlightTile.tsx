import React from 'react';
import { FlightThere } from './components/FlightThere';

import s from './FlightTile.module.scss';
import logo from '../../../assets/LOT-logo.svg'
import { FlightBack } from './components/FlightBack';

export interface Props {

}

export default function FlightTile(props: Props) {
  return (
    <div className={s.flight_tile}>
      <div className={s.tile__header}>
        <span className={s.logo}>
          <img src={logo} alt="logo" />
        </span>
        <span className={s.price}>
          <div className={s.price}>
            21212 ₽
          </div>
          <div className={s.passengersnumber}>
            Стоимость для одного взрослого пассажира
          </div>
        </span>
      </div>
      <FlightThere/>
      <hr className={s.solid}/>
      <FlightBack/>
      <div className={s.select_button}> ВЫБРАТЬ </div>
    </div>
  );
}
