import React from 'react'
import style from './TaskItem.module.scss'

export default function TaskItem({ children }) {
  return (
    <li className={style.item}>
      { children }
    </li>
  )
}
