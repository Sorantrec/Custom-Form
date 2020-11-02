import React from 'react';
import stylesModule from './DateBirth.module.scss';
import DayInput from './DayInput/DayInput';
import MonthSelect from './MonthSelect/MonthSelect';
import YearInput from './YearInput/YearInput';

const DateBirth = ({ title, monthNames, correctDate, grownUp, setDay, setMonth, setYear, errors }) => {

  return (
    <section className={stylesModule.container}>
      <p className='inputTitle'>{title}</p>
      <div className={stylesModule.dateContainer}>
        <DayInput correctDate={correctDate} setDay={setDay} errors={errors} />
        <MonthSelect monthNames={monthNames} setMonth={setMonth} errors={errors} />
        <YearInput setYear={setYear} errors={errors} />
      </div>
      {grownUp && correctDate ? <p className='errorMessage'>You are too young :)</p> : null}
    </section>
  )
}

export default DateBirth;