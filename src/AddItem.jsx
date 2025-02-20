import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
  <form className='addForm'>
    <label htmlFor="addItem">Add Item</label>
    <input 
    type="text" 
    id='addItem'
    autoFocus
    required
    placeholder='Add Item'
    value={newItem}
    onChange={(e)=>setNewItem(e.target.value)}
    />
    <button 
    type='submit'
    aria-label='Add Item'
    onClick={handleSubmit}
    >
        <FaPlus />
    </button>
  </form>
  )
}

export default AddItem