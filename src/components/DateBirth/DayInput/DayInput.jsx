import React, { useState } from 'react';
import stylesModule from './DayInput.module.scss';

const DayInput = ({ correctDate, setDay, errors }) => {
  const [dayNumber, setDayNumber] = useState('');
  console.log({ correctDate });

  return (
    <label className={`inputWrapper ${stylesModule.numberInputContainer}`}>
      <input type="number" placeholder="01" value={dayNumber} onChange={(e) => { setDayNumber(e.target.value); setDay(e.target.value); }} onInput={(e) => {
        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
      }} />
      {errors.includes('day') && correctDate ? <p className="errorMessage">Type a day</p> : null}
      {!correctDate ? <p className="errorMessage">Type correct date</p> : null}
    </label>
  )
}

export default DayInput;