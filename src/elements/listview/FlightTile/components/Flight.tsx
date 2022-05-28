import React from 'react'
import s from '../FlightTile.module.scss'

type Props = {}

export const Flight = (props: Props) => {
  return (
    <div className={s.flight}>
      <div className={s.from_to}>
        <span className={s.airport}>
          Москва, Шереметьево &nbsp;
          <span className={s.airport_code}>
            (SVO) →&nbsp;
          </span>
        </span>
        <span className={s.airport}>
          ЛОНДОН, Лондон, Хитроу &nbsp;
          <span className={s.airport_code}>
            (LHR)
          </span>
        </span>
      </div>
      <hr className={s.light} />

      <div className={s.details}>
        <div className={s.datetime}>
          <span className={s.time}>
            20:40&nbsp;
          </span>
          <span className={s.date}>
            18 авг. вт
          </span>
        </div>
        <div className={s.duration}>
          <span className={s.time}>
            🕓&nbsp;
          </span>
          14 ч 45 м
        </div>
        <div className={s.datetime}>
          <span className={s.date}>
            19 авг. ср
          </span>
          <span className={s.time}>
            &nbsp;20:40
          </span>
        </div>
      </div>
      <div className={s.divider}>
        1 пересадка
      </div>
      <div className={s.company}>
        Рейс выполняет: LOT Polish Airlines
      </div>
    </div>
  )
}