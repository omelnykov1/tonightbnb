import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchItem = ({ spot }) => {
  const history = useHistory();
  const { title, price, spot_type, photoUrls } = spot;

  const handleClick = () => {
    history.push(`/spots/${spot.id}`)
  }

  const getRandomRating = () => {
    return [4.7, 4.54, 5.0, 4.67, 4.85, 4.71, 4.45, 4.68, 4.75][Math.floor(Math.random() * 9)];
  }

  return (
    <div className="main-spot">
      <div className="spot-main-container">
        <div className="main-spot-photo" onClick={handleClick}>
          <img className="index-photo" src={photoUrls[1]} style={{ width: "300px", height: "200px" }} />
        </div>
        <div className="spot-details">
          <div className="row-details">
            <div className="spot-type">{spot_type}</div>
            <ul className="rating-spot">
              <li className="rating-star">
                <div className="star"><i className="fas fa-star"></i></div>{getRandomRating()}
              </li>
            </ul>
          </div>
          <div className="spot-title" onClick={handleClick}><h3>{title}</h3></div>
          <div className="spot-info">
            <div className="spot-basic-info">2 guests • 1 bedroom•2 beds • 1 bath</div>
            <div className="spot-basic-amenities">Wifi • Air conditioning • Kitchen • Washer</div>
          </div>
        </div>
      </div>
      <div className="spot-price"><span>${price}</span>/night</div>
    </div>
  )
}

export default SearchItem;