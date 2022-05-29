import React from 'react';
import s from './FlightTile.module.scss';
import { Flight } from './components/Flight';
import { FlightFlight, Leg, Segment, TotalClass } from '../../../models/API';

export interface Props {
  flight: FlightFlight,
}

export default function FlightTile(props: Props) {

  const price: TotalClass = props.flight.price.total;

  const dataThere: Segment[] = props.flight.legs[0].segments;
  const dataBack: Segment[] = props.flight.legs[1].segments;
  return (
    <li className={s.flight}>

      <div className={s.flight_tile}>
        <div className={s.tile__header}>
          <span className={s.logo}>{props.flight.carrier.airlineCode} LOGO
          </span>
          <span className={s.price}>
            <div className={s.price}>
              {price.amount} {price.currency}
            </div>
            <div className={s.passengersnumber}>
              Стоимость для одного взрослого пассажира
            </div>
          </span>
        </div>
        <Flight departureAirport={{
          name: dataThere[0].departureAirport.caption,
          uid: dataThere[0].departureAirport.uid,
          city: dataThere[0].departureCity?.caption
        }}
          arrivalAirport={{
            name: dataThere[dataThere.length - 1].arrivalAirport.caption,
            uid: dataThere[dataThere.length - 1].arrivalAirport.uid,
            city: dataThere[dataThere.length - 1].arrivalCity?.caption,
          }}
          numberOfTransfer={dataThere.length - 1}
          departureDate={new Date(dataThere[0].departureDate)}
          arrivalDate={new Date(dataThere[dataThere.length - 1].departureDate)}
          airlines={dataThere[0].airline.caption}
          durationHours={Math.floor(props.flight.legs[0].duration / 60)} durationMinutes={props.flight.legs[0].duration % 60} />
        <hr className={s.solid} />
        <Flight departureAirport={{
          name: dataBack[0].departureAirport.caption,
          uid: dataBack[0].departureAirport.uid,
          city: dataBack[0].departureCity?.caption
        }}
          arrivalAirport={{
            name: dataBack[dataBack.length - 1].arrivalAirport.caption,
            uid: dataBack[dataBack.length - 1].arrivalAirport.uid,
            city: dataBack[dataBack.length - 1].arrivalCity?.caption,
          }}
          numberOfTransfer={dataBack.length - 1}
          departureDate={new Date(dataBack[0].departureDate)}
          arrivalDate={new Date(dataBack[dataBack.length - 1].departureDate)}
          airlines={dataBack[dataBack.length - 1].airline.caption}
          durationHours={Math.floor(props.flight.legs[1].duration / 60)} durationMinutes={props.flight.legs[1].duration % 60} />
        <div className={s.select_button}> ВЫБРАТЬ </div>
      </div>
    </li>

  );
}
