import React from 'react'
import ItemList from './ItemsList';

const Content = ({ item, handleCheck, handleDelete }) => { 
  return (
    <div className="content">
      {item.length ? (
       <ItemList 
       item = {item}
   handleCheck={handleCheck}
   handleDelete={handleDelete}
   />
      ) : (
        <h1 style={{ color: "white" }}>Your List Is Empty</h1>
      )}
    </div>
  );
};

export default Content