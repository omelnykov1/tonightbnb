import React from 'react';
import { useHistory } from 'react-router-dom'; 
import Carousel from 'nuka-carousel';

const SpotIndexItem = ({ spot }) => {
  const history = useHistory();
  const handleClick = () => history.push(`/spots/${spot.id}`);
  const { title, price, spot_type, photoUrls} = spot;
  const rating1 = [4.7, 4.54, 5.0, 4.67, 4.85, 4.71, 4.45, 4.68, 4.75][Math.floor(Math.random() * 9)];
        
  return (
    <div className="main-spot">
      <div className="spot-main-container">
        <div className="main-spot-photo" >
          <Carousel 
            width={"20vw"} 
            wrapAround={true} 
            heightMode={"first"} 
            transitionMode={'scroll3d'} 
            >
            {photoUrls.map((photo,idx) => {
              if (idx < 5) {
                return (
                  <img 
                    src={photo}
                    key={idx}
                    className="index-photo"
                    style={{ height: "23vh" }}
                    onClick={handleClick}
                />
              )}
            })}  
          </ Carousel>  
      </div>
      <div className="spot-details">
        <div className="row-details">
          <div className="spot-type">{spot_type}</div>
            <ul className="rating-spot">
              <li className="rating-star"> 
                <div className="star"><i className="fas fa-star"></i></div>{rating1}
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
      <div className="spot-price">
        <span>${price}</span>/night
      </div>
    </div>
  )
}

export default SpotIndexItem;