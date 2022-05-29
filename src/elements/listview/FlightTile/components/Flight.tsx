import React from 'react'
import s from '../FlightTile.module.scss'

type Props = {
  departureAirport: { name: string, uid: string, city?: string },
  arrivalAirport: { name: string, uid: string, city?: string },
  numberOfTransfer: number,
  departureDate: Date,
  arrivalDate: Date,
  airlines: string,
  durationHours: number,
  durationMinutes: number,
}

const monthNames = ["янв", "фев.", "мар", "апр", "май", "июн",
  "июл", "авг", "сен", "окт", "ноя", "дек"
];


export const Flight = (props: Props) => {
  return (
    <div className={s.flight}>
      <div className={s.from_to}>
        <span className={s.airport}>
          {props.departureAirport.city}, {props.departureAirport.name}&nbsp;
          <span className={s.airport_code}>
            ({props.departureAirport.uid}) →&nbsp;
          </span>
        </span>
        <span className={s.airport}>
          {props.arrivalAirport.city}, {props.arrivalAirport.name}&nbsp;
          <span className={s.airport_code}>
            ({props.arrivalAirport.uid})
          </span>
        </span>
      </div>
      <hr className={s.light} />
      <div className={s.details}>
        <div className={s.datetime}>
          <span className={s.time}>
            {props.departureDate.getHours() < 10 ? '0' + props.departureDate.getHours() : props.departureDate.getHours()}
            :
            {props.departureDate.getMinutes() < 10 ? '0' + props.departureDate.getMinutes() : props.departureDate.getMinutes()}&nbsp;
          </span>
          <span className={s.date}>
            {props.departureDate.getDate()} {monthNames[props.departureDate.getMonth()]}. вт
          </span>
        </div>
        <div className={s.duration}>
          <span className={s.time}>
            🕓&nbsp;
          </span>
          {props.durationHours} ч {props.durationMinutes} м
        </div>
        <div className={s.datetime}>
          <span className={s.date}>
          {props.arrivalDate.getDate()} {monthNames[props.arrivalDate.getMonth()]}.
          </span>
          <span className={s.time}>
            &nbsp;{props.arrivalDate.getHours() < 10 ? '0' + props.arrivalDate.getHours() : props.arrivalDate.getHours()}
            :
            {props.arrivalDate.getMinutes() < 10 ? '0' + props.arrivalDate.getMinutes() : props.arrivalDate.getMinutes()}
          </span>
        </div>
      </div>
      <div className={s.divider}>
        <span className={props.numberOfTransfer > 0 ? '' : s.unshow}>{props.numberOfTransfer} пересадка</span>
      </div>
      <div className={s.company}>
        Рейс выполняет: {props.airlines}
      </div>
    </div>
  )
}