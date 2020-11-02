import React, { useState } from 'react';

const PhoneNumber = ({ placeholder, setDigits, errors }) => {
  const [number, setNumber] = useState('');

  return (
    <>
      <input type="text" placeholder={placeholder} value={number} onChange={(e) => { setNumber(e.target.value); setDigits(e.target.value); }} />
      {errors.includes('digits') ? <p className="errorMessage">Type 9 numbers</p> : null}
    </>
  )
}

export default PhoneNumber;