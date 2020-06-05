import React from 'react';
import { withRouter } from 'react-router';


class SpotIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.props.history.push(`/spots/${this.props.spot.id}`)
    }



    render() {
        let {title, price, spot_type} = this.props.spot;
        const spot1 = window.spot1;
        const spot2 = window.spot2;
        const spot3 = window.spot3;
        const spot4 = window.spot4;
        const spot5 = window.spot5;
        const rating = window.star;
        return (
            <div>
                <div className="spot-main-container" onClick={this.handleClick}>
                    <div className="main-spot-photo">
                        <img className="index-photo" src={spot1} style={{ width: "300px", height: "200px"}}/>
                    </div>
                    <div className="spot-details">
                        <div className="row-details">
                            <div className="spot-type">{spot_type}</div>
                            <ul className="rating-spot">
                                <li className="rating-star"> 4.87</li>
                            </ul>
                        </div>
                        <div className="spot-title"><h3>{title}</h3></div>
                        <div className="spot-info">
                            <div className="spot-basic-info">2 guests•1 bedroom•2 beds•1 bath</div>
                            <div className="spot-basic-amenities">Wifi•Air conditioning•Kitchen•Washer</div>
                        </div>
                        <div className="spot-price">
                            <span>${price}</span>/night
                        </div>
                    </div>
                </div>
                <div className="spot-main-container" onClick={this.handleClick}>
                    <div className="main-spot-photo">
                        <img className="index-photo" src={spot2} style={{ width: "300px", height: "200px"}}/>
                    </div>
                    <div className="spot-details">
                        <div className="row-details">
                            <div className="spot-type">{spot_type}</div>
                            <span className="spot-rating">4.87
                                {/* <img className="rating-star" src={rating} /> */}
                            </span>
                        </div>
                        <div className="spot-title"><h3>{title}</h3></div>
                        <div className="spot-info">
                            <div className="spot-basic-info">2 guests•1 bedroom•2 beds•1 bath</div>
                            <div className="spot-basic-amenities">Wifi•Air conditioning•Kitchen•Washer</div>
                        </div>
                        <div className="spot-price">
                            <span>${price}</span>/night
                        </div>
                    </div>
                </div>
                <div className="spot-main-container" onClick={this.handleClick}>
                    <div className="main-spot-photo">
                        <img className="index-photo" src={spot3} style={{ width: "300px", height: "200px"}}/>
                    </div>
                    <div className="spot-details">
                        <div className="row-details">
                            <div className="spot-type">{spot_type}</div>
                            <span className="spot-rating">4.87
                                {/* <img className="rating-star" src={rating} /> */}
                            </span>
                        </div>
                        <div className="spot-title"><h3>{title}</h3></div>
                        <div className="spot-info">
                            <div className="spot-basic-info">2 guests•1 bedroom•2 beds•1 bath</div>
                            <div className="spot-basic-amenities">Wifi•Air conditioning•Kitchen•Washer</div>
                        </div>
                        <div className="spot-price">
                            <span>${price}</span>/night
                        </div>
                    </div>
                </div>
                <div className="spot-main-container" onClick={this.handleClick}>
                    <div className="main-spot-photo">
                        <img className="index-photo" src={spot4} style={{ width: "300px", height: "200px"}}/>
                    </div>
                    <div className="spot-details">
                        <div className="row-details">
                            <div className="spot-type">{spot_type}</div>
                            <span className="spot-rating">4.87
                                {/* <img className="rating-star" src={rating} /> */}
                            </span>
                        </div>
                        <div className="spot-title"><h3>{title}</h3></div>
                        <div className="spot-info">
                            <div className="spot-basic-info">2 guests•1 bedroom•2 beds•1 bath</div>
                            <div className="spot-basic-amenities">Wifi•Air conditioning•Kitchen•Washer</div>
                        </div>
                        <div className="spot-price">
                            <span>${price}</span>/night
                        </div>
                    </div>
                </div>
                <div className="spot-main-container" onClick={this.handleClick}>
                    <div className="main-spot-photo">
                        <img className="index-photo" src={spot5} style={{ width: "300px", height: "200px"}}/>
                    </div>
                    <div className="spot-details">
                        <div className="row-details">
                            <div className="spot-type">{spot_type}</div>
                            <span className="spot-rating">4.87
                                {/* <img className="rating-star" src={rating} /> */}
                            </span>
                        </div>
                        <div className="spot-title"><h3>{title}</h3></div>
                        <div className="spot-info">
                            <div className="spot-basic-info">2 guests•1 bedroom•2 beds•1 bath</div>
                            <div className="spot-basic-amenities">Wifi•Air conditioning•Kitchen•Washer</div>
                        </div>
                        <div className="spot-price">
                            <span>${price}</span>/night
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SpotIndexItem);