import React, { createRef, useEffect, useState } from 'react';
import stylesModule from './MonthSelect.module.scss';

const MonthSelect = ({ monthNames, setMonth, errors }) => {
  const [slide, toggleSlide] = useState(false);
  const currentMonthRef = createRef();
  const [currentMonth, setCurrentMonth] = useState(monthNames[0]);
  const chooseMonth = (month) => {
    setCurrentMonth(month);
    toggleSlide(false);
  }

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (currentMonthRef.current && e.target !== currentMonthRef.current) toggleSlide(false);
    })
  }, [currentMonthRef]);

  useEffect(() => {
    setCurrentMonth('01');
  }, []);

  let months = '';
  let windowWidthSize = window.screen.availWidth;
  if (windowWidthSize < 991) {
    months = monthNames.map((month, index) => <li key={`${month}-${index}`} onClick={() => { chooseMonth(month); setMonth(month); }}>{monthNames.indexOf(month)}</li>);
  }
  else {
    months = monthNames.map((month, index) => <li key={`${month}-${index}`} onClick={() => { chooseMonth(month); setMonth(month); }}>{index}</li>);
  }


  return (
    <div ref={currentMonthRef} className={`inputWrapper ${stylesModule.monthInputContainer} ${slide ? stylesModule.active : ''}`} onClick={() => toggleSlide(!slide)}>
      <p>{currentMonth}</p>
      <ul className={`${stylesModule.months}`}>{months}</ul>
      {errors.includes('month') ? <p className="errorMessage">Select a month</p> : null}
    </div>
  )
}

export default MonthSelect;