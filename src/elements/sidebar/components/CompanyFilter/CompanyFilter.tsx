import React from 'react'
import s from '../../SideBar.module.scss';
import { Result, FlightElement, FlightFlight, Leg, Segment, AirlineAlliance, Caption } from '../../../../models/ApiInterface'
import data from '../../../../models/flights.json'
interface Props { }

export const CompanyFilter = (props: Props) => {

  let res: FlightElement = JSON.parse(JSON.stringify(data));
  let airlines: string[] = [];

  Object.values(Caption).forEach(company => airlines.push(company))
  return (
    <div className={s.filter_container}>
      <div className="title">
        <h5>Авиакомпании</h5>
        <form>
          {airlines.map((company: string) => (
            <div className="checkbox">
              <label>
                <input type="checkbox" value={company} checked={true} />
                {company}
              </label>
            </div>
          ))
          }
        </form>
      </div>
    </div>
  )
}