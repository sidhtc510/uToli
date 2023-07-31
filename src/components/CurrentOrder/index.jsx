import React from 'react'
import s from "./s.module.css";
import OredredProductsContainer from './OredredProductsContainer';
export default function CurrentOrder({...props}) {

  const products_shablon = [
    {
      id: 1,
      title: "Кофе",
      description: "Ароматный горячий кофе",
      category_id: 1,
      image: "https://picsum.photos/300/300",
      price: 3.99,
  },
  {
      id: 2,
      title: "Чай",
      description: "Ароматный горячий чай",
      category_id: 1,
      image: "https://picsum.photos/300/300",
      price: 2.49,
  }
  ]

  return (
    <div className={s.currentOrder} {...props}>
     <h2>Current order</h2>
     <OredredProductsContainer  products={products_shablon}/>
    </div>
  )
}
