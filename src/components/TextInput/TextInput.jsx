import React, { createRef, useEffect, useState } from 'react';

const TextInput = ({ title, placeholder, setName, errors }) => {
  const [text, setText] = useState('');
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <p className='inputTitle'>{title}</p>
      <input ref={inputRef} type="text" value={text} onChange={(e) => { setText(e.target.value); setName(e.target.value); }} placeholder={placeholder} />
      {errors.includes('name') ? <p className='errorMessage'>Invalid data</p> : null}
    </>
  )
}

export default TextInput;