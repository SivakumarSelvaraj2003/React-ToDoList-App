import React from 'react'
import LineItem from './LineItem'
const itemList = ({item,handleCheck,handleDelete}) => {
  return (
    <ul>
             {item.map((item) => (
               <LineItem 
                 item = {item}
                 key={item.id}
                 handleCheck={handleCheck}
                 handleDelete={handleDelete}
   />
             ))}
           </ul>
  )
}

export default itemList