import React from 'react'
import s from './s.module.css'

export default function CheckboxMy({label = "", ...props}) {
  return (
    <div className={s.container}>
        <input className={s.checkbox} type="checkbox" {...props} />
        <p>{label}</p>
    </div>
  )
}