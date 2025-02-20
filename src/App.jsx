import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { useState } from "react";
  import "./App.css";  

function App() { 
   //to do list items
  
    const [item, setItem] = useState(
       JSON.parse(localStorage.getItem("to do list")) 

/*          [
        {
          id:1,
          checked:true,
          item:"Coding"
        },
        {
          id:2,
          checked:false,
          item:"Playing"
        },
        {
          id:3,
          checked:false,
          item:"Reading"
        },
      ]  */
    );
   
    const [newItem,setNewItem]=useState('')
    const [search,setSearch]=useState('')

    

const addItem =(items)=>{

  const isDuplicate = item.some(
    (existingItem) => existingItem.item.toLowerCase() === items.toLowerCase()
  );

  if (isDuplicate) {
    alert("You already Entered this Work!");
    return;
  }

  const id=item.length?item[item.length-1].id+1:1; 
 const addNewItem={id,checked:false,item:items}
  const listItems=[...item,addNewItem]
 setItem(listItems)
 localStorage.setItem("to do list", JSON.stringify(listItems)); 
}
    //for checkbox 
  const handleCheck =(id)=>{
    const listItems=item.map((item)=>(item.id===id ? {...item,checked:!item.checked}:item))
    setItem(listItems)
    localStorage.setItem("to do list",JSON.stringify(listItems))
    console.log(`id:${id}`)
  }
  
  //for delete
   const handleDelete =(id)=>{
    const listItems=item.filter((item)=>(item.id!==id))
    setItem(listItems)
     localStorage.setItem("to do list", JSON.stringify(listItems));
    console.log(`id:${id}`)
  } 
  
  
    
  //for submit
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!newItem) return; 
   console.log(newItem)
   addItem(newItem)
   setNewItem('')
    
  }
  return (
    <div className="app">
      <Header tittle="To Do List" />
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem 
      search={search}
      setSearch={setSearch}
      />
      <Content
        item={item.filter(item=>((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        setItem={setItem}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={item.length} />
    </div>
  );
}

export default App;
