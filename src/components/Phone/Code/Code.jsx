import React, { createRef, useEffect, useState } from 'react';
import stylesModule from './Code.module.scss';

const Code = ({ title, setPrefix, errors }) => {
  const [slide, toggleSlide] = useState(false);
  const [phones, setPhones] = useState([]);
  const [currentCode, setCurrentCode] = useState('+48 (PL)');
  const currentCodeRef = createRef();

  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://country.io/phone.json";
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => {
        let codeArr = [];
        for (const key in data) {
          let code = `+${data[key]} (${key})`;
          codeArr = [...codeArr, code];
        }
        setPhones(codeArr);
      })
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
  }, []);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (currentCodeRef.current && e.target !== currentCodeRef.current) toggleSlide(false);
    })
  }, [currentCodeRef]);

  const chooseCode = (code) => {
    setCurrentCode(code);
    toggleSlide(false);
  }

  const codeList = phones.map((code, index) => <li key={`${code}-${index}`} onClick={() => chooseCode(code)}>{code}</li>);

  return (
    <div className={`select ${slide ? 'active' : ''}`}>
      <p className="inputTitle">{title}</p>
      <div ref={currentCodeRef} className="currentCode" onClick={() => { toggleSlide(!slide); setPrefix(currentCode) }}>{currentCode}</div>
      <ul className={`${stylesModule.select} ${slide ? stylesModule.active : ''}`}>{codeList}</ul>
      {errors.includes('prefix') ? <p className="errorMessage">Choose prefix</p> : null}
    </div>
  )
}

export default Code;