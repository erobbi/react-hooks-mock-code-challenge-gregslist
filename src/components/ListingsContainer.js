import React, {useState, useEffect} from 'react'
import App from './App';
import ListingCard from "./ListingCard";

function ListingsContainer({list, removeItem}) {

  function removeItem(id) {    
    useEffect(()=>{
      fetch(`http://localhost:6001/listings/${id}`, {method: 'DELETE'})
          .then(() => removeItem(id))
    },[])
  }

    return (
      <main>
      <ul className="cards">
        {
          list.map(item => <ListingCard potato={item} removeItem={removeItem}/>)
        }
      </ul>
    </main>
  );
}

export default ListingsContainer
