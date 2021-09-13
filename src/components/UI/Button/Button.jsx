import React from 'react'
import style from './Button.module.scss'

export default function Button({ children, saveDataMain }) {
  return (
    <button
      className={style.myBtn}
      onClick={saveDataMain}
     
    >
      { children }
    </button>
  )
}
