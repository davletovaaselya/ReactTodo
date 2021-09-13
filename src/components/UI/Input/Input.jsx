import React from 'react'

import style from './Input.module.scss'
export default function Input({ setInpValue, value }) {
  return (
    <input 
      className={style.inp}
      onChange={e => setInpValue(e.target.value)}
      value={value}
    />
  )
}
