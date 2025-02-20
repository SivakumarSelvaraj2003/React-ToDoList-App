import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
   <h1>{length} {length<=1?"Item":"Items"} </h1>
 
    </footer>
  )
}

export default Footer