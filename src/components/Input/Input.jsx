import React from 'react';
import stylesModule from './Input.module.scss';

const Input = ({ children }) => {
  return (
    <label className={stylesModule.block}>
      {children}
    </label>
  )
}

export default Input;