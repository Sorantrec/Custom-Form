import React, { useEffect, useState, errors } from 'react';
import stylesModule from './YearInput.module.scss';

const YearInput = ({ setYear, errors }) => {
  const [inputYear, setInputYear] = useState('');
  const [toggle, setToggle] = useState(false);

  const generateYearsRange = () => {
    let max = new Date().getFullYear();
    let min = max - 100;
    let years = [];

    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }

  const years = generateYearsRange().map((year, index) => <li key={`${year}-${index}`} onClick={() => { setInputYear(year); setToggle(false); setYear(year); }}>{year}</li>)

  return (
    <div className={`inputWrapper ${stylesModule.yearInputContainer}`}>
      <input type="number" placeholder="Choose or write years" value={inputYear} onChange={(e) => { setInputYear(e.target.value); setYear(e.target.value); }} onInput={(e) => {
        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4);
      }} onFocus={() => { setToggle(true) }} onBlur={() => setToggle(false)} />
      <ul className={`${stylesModule.years} ${toggle ? stylesModule.active : ''}`}>{years}</ul>
      {errors.includes('year') ? <p className="errorMessage">Select or type a year</p> : null}
    </div>
  )
}

export default YearInput;