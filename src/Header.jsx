import React from 'react'
/* import { FaEdit } from "react-icons/fa"; */
const Header = (props) => {
  return (
 <header>
    <h1>  {props.tittle}</h1>
 </header>
  )
}
/* Header.defaultProps ={
 tittle:"To Do List"
} */
export default Header