import React from 'react'

export default function OrderHistoryContainer({orderHistory}) {
  


const normalizeDate = (dateString)=>{
    const dateObj = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        // timeZoneName: 'short'
    };
    
    const formattedDate = dateObj.toLocaleString('en-EN', options);
    return formattedDate
}
// console.log("OrderHistoryContainer", orderHistory);

  return (
    <div>
        {orderHistory.list.map(el=><p>{normalizeDate(el.date)} | Amount: <b style={{color:"red"}}> {el.orderAmount}</b></p>)}
    </div>
  )
}
