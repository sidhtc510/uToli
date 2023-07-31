import React from 'react'
import OrderedItem from './OrderedItem'

export default function OredredProductsContainer({products}) {
  return (
    <div>
        {products.map(el=><OrderedItem key={el.id} {...el} />)}
    </div>
  )
}
