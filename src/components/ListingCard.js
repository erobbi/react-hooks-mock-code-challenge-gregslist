import React, {useState} from "react";

function ListingCard({potato: {image, description, location, id}, removeItem}) {
  
  const [star, setStar] = useState(false)
  function handleStar() {
    setStar(!star)
  }

  const [remove, setRemove] = useState(false)
  function handleRemove() {
    removeItem(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {/* why do i still have an key error */}
        {star ? (
          <button onClick={handleStar} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleStar} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleRemove} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
