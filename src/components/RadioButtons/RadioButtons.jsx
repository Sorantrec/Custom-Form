import React, { useState } from 'react';
import stylesModule from './RadioButtons.module.scss';

const RadioButtons = ({ defaultState, data, title, setPlayChessState, errors }) => {
  const [radioChosen, setRadioChosen] = useState(defaultState);

  const radioButtons = data.map((buttonValue, index) => {
    return (
      <label key={`${buttonValue}-${index}`} className={`${stylesModule.radioButton} ${radioChosen === buttonValue ? stylesModule.active : ''}`}>
        <input type="radio" name="radio" value={buttonValue} checked={radioChosen === buttonValue && 'checked'} onChange={(e) => { setRadioChosen(e.target.value); setPlayChessState(e.target.value); }} />
        <p>{buttonValue}</p>
      </label>
    )
  })
  return (
    <div className={stylesModule.container}>
      <p className='inputTitle'>{title}</p>
      <div className={stylesModule.buttonsContainer}>
        {radioButtons}
        {errors.includes('playChessState') ? <p className="errorMessage">Please, select your answer</p> : null}
      </div>
    </div>
  )
}

export default RadioButtons;