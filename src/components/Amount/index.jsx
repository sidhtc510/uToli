import React from 'react'
import s from './s.module.css'
import Button from '../UI/Button'
export default function Amount() {
  return (
    <div className={s.amount_wrap}>
        <p>2990.68</p>
        <Button className={s.amount_btn}>Settling the bill</Button>
    </div>
  )
}
