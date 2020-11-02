import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';
import TextInput from '../TextInput/TextInput';
import '../../assets/scss/form-styles/form.scss';
import stylesModule from './Form.module.scss';
import PhoneNumber from '../Phone/PhoneNumber/PhoneNumber';
import Code from './../Phone/Code/Code';
import RadioButtons from './../RadioButtons/RadioButtons';
import DateBirth from './../DateBirth/DateBirth';
import Submit from '../Submit/Submit';

const Form = () => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [name, setName] = useState('');
  const [prefix, setPrefix] = useState('');
  const [digits, setDigits] = useState('');
  const [playChessState, setPlayChessState] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [correctDate, setCorrectDate] = useState(true);
  const [grownUp, setGrownUp] = useState(false);
  const [errors, setErrors] = useState([]);

  const getError = (newError) => {
    setErrors((data) => {
      let arr = data;
      if (!arr.includes(newError)) arr.push(newError);
      return [...arr];
    });
  }

  const removeError = (oldError) => {
    setErrors((data) => {
      let arr = data;
      arr = arr.filter((error) => error !== oldError);
      return [...arr];
    });
  }

  const checkName = () => {
    if (name.length < 3) getError('name');
    else removeError('name');
  }

  const checkPrefix = () => {
    if (!prefix) getError('prefix');
    else removeError('prefix');
  }

  const checkDigits = () => {
    if (digits.length !== 9) getError('digits');
    else removeError('digits');
  }

  const checkPlayChessState = () => {
    if (!playChessState) getError('playChessState');
    else removeError('playChessState');
  }

  const checkDate = () => {
    checkDay();
    checkMonth();
    checkYear();

    const isLeap = year => new Date(year, 1, 29).getDate() === 29;

    if (Number(day) > 31 || (Number(day) > 29 && !isLeap(year))) setCorrectDate(false);
    else setCorrectDate(true);

    const checkAdultUser = () => {
      return new Date(year + 18, monthNames.indexOf(month) - 1, day) <= new Date();
    }

    if (day && correctDate && month && year) setGrownUp(!checkAdultUser());

  }

  const checkDay = () => {
    if (!Number(day)) getError('day');
    else {
      if (Number(day) > 31) getError('day');
      else removeError('day');
    }
  }

  const checkMonth = () => {
    if (!month) getError('month');
    else removeError('month');
  }

  const checkYear = () => {
    if (!year) getError('year');
    else removeError('year');
  }

  const validateForm = (e) => {
    e.preventDefault();
    checkName();
    checkPrefix();
    checkDigits();
    checkPlayChessState();
    checkDate();
  }

  return (
    <div className={stylesModule.container}>
      <aside className={stylesModule.leftBox}>
        <svg width="244" height="374" viewBox="0 0 244 374" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="244" height="374" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0" transform="translate(0 -0.000259398) scale(0.00373134 0.00243435)" />
            </pattern>
            <image id="image0" width="268" height="411"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAGbCAYAAAAx765oAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABDKADAAQAAAABAAABmwAAAABUJGQZAAAJIklEQVR4Ae3dwY2rMBQF0GHqQKIBikgPrKmOdXqgCBqIRB98/11GGjNBCsPz+HiV2Aaez4P1bdpl2j6MwwJrPzaHL3IBgcIFPguvX/kECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKAigWboZrkkFTW8tKPeHzf5L4GaJpckUDOUQoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIE9gXCZz5saewfwepvCDRp/MZzPCO2gFyS2P1RHQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQeBIInTXRLpNMkqdmvfpz7cfQfX31HPbFE5BLEq8nKiJAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAhmBZksjs2aawGkCTRqn3dyNTxOQS3IarRsTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIF3C8iGyIi2yySvJWNjOrbA2o+nfddySWL3XnUECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQOBJ4LT8gqdnFPlz6Ga5JEV2ro6i74/bJd+uXJI63i+nJECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE/IXBJtsERuS2NI/vtPSbQpHHsCrtrFpBLUnP3nZ0AAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEChOQSZFp2NDN8lAyNjVM3x8338Y3jZZL8g2KKQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgEFOg2dKIWZqqCNQn0KQR+dRySSJ3R20ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQOCLQOgMhP+VtsskN+VLy/w5KrD2Y/j3/OiZrtovl+Qqec8lQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcJ6AgJeM7dDNApQyNnvT98fNO7UHVPiaIKPCG6h8AgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKhJQIZEpttbGpkl0wULNGkUXP7lpcslubwFCiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAq8KhM9oaJdJPsir3bQvlMDaj+G/r6NgckmOitlPgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQuE/hzuQnvkhy6+S15KPfHjfG7muI+lwvIJbm8BQogQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKvCsjMyEhtaWSWTO8INGnsLFsqXEAuSeENVD4BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQI1CQgQyJYt9tlkocSrCdRyln78fLvVS5JlLdBHQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBA4EeBy3MOfqywsg1DN8slqaznJR1XLklJ3VIrgYsF/gFNzUZox7e3CAAAAABJRU5ErkJggg==" />
          </defs>
        </svg>
      </aside>
      <form className={stylesModule.main}>
        <p className={stylesModule.title}>Provide personal information so that we can create a new account for you.</p>
        <section className="textInputWrapper">
          <Input>
            <TextInput title="Your name" placeholder="Bill Elliot" setName={setName} errors={errors} />
          </Input>
          <div className={stylesModule.asideItem}>
            <div className={stylesModule.asideLine}></div>
            <p className={stylesModule.asideNumber}>01</p>
          </div>
        </section>
        <section className="phoneWrapper">
          <Input>
            <Code title="Mobile" setPrefix={setPrefix} errors={errors} />
          </Input>
          <Input>
            <PhoneNumber placeholder='889 800 988' setDigits={setDigits} errors={errors} />
          </Input>
          <div className={stylesModule.asideItem}>
            <div className={`${stylesModule.asideLine} ${stylesModule.active}`}></div>
            <p className={stylesModule.asideNumber}>02</p>
            <p className={stylesModule.asideTxt}>Personal</p>
          </div>
        </section>
        <section className="relative">
          <RadioButtons defaultState='No' data={['Yes', 'No']} title='Can you play chess?' setPlayChessState={setPlayChessState} errors={errors} />
          <div className={stylesModule.asideItem}>
            <div className={stylesModule.asideLine}></div>
            <p className={stylesModule.asideNumber}>03</p>
          </div>
        </section>
        <DateBirth title="Date of birth" monthNames={monthNames} correctDate={correctDate} grownUp={grownUp} setDay={setDay} setMonth={setMonth} setYear={setYear} errors={errors} />
        <Submit validateForm={validateForm} />
      </form>
    </div>
  )
}

export default Form;