import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemsListed, setItemsListed] = useState([])
  const [removeItemState, setRemoveItem] = useState('')
  // usestate for search string

  // Simple GET request using fetch
  useEffect(() => {fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(json => setItemsListed(json))
  },[])

  const removeItemArray = function removeItem(id) {
    console.log(`remove item ${id}`)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer list={itemsListed} removeItem={removeItem} />
    </div>
  );
}

export default App;

// 1) When the app starts, I can see all listings.
//      doing a fetch
//      somehow rendering all data to page
// 2) I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
//      adding state to some heart
//      onClick will have logic of true/false
// 3) I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
//      use state to have onClick that calls fcn that will lead to one listing not being rendered
// 4) I can search for listings by their name.
//      make a text search box
//      will use filter to determine what items to render
