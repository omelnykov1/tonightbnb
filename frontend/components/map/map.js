import React from 'react';
import MarkerManager from '../../util/marker_manager';

class GoogleMap extends React.Component {
    constructor(props) {
        
        super(props);
        this.comparison = this.comparison.bind(this);
    }

    componentDidMount() {
        const mapOptions = {
            center: {lat: 40.756795, lng: -73.954298} ,
            zoom: 12
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions); 
        this.MarkerManager = new MarkerManager(this.map)
        debugger
        this.props.spots.map(spot => {
            let marker = new google.maps.Marker({
                map: this.map,
                draggable: false,
                position: { lat: spot.lat, lng: spot.lng },
                animation: google.maps.Animation.DROP
            });
            marker.setMap(this.map);
        })
    }


    componentDidUpdate(prevProps) {
        let lat;
        let lng;
        const { spots } = this.props;
        if (spots.length === 0) {
            lat = 40.756795;
            lng = -73.954298;
        } else {
            lat = spots[0].lat;
            lng = spots[0].lng;
        }
        const mapOptions = {
            center: { lat: lat, lng: lng },
            zoom: 12
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        if (this.comparison(spots, prevProps.spots)) {
            spots.map(spot => {
                let marker = new google.maps.Marker({
                    map: this.map,
                    draggable: false,
                    position: { lat: spot.lat, lng: spot.lng },
                    animation: google.maps.Animation.DROP
                });
                return marker.setMap(this.map);
            })

        }
    }

    comparison(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return true
        } else {
            arr1.map(el1 => {
                arr2.map(el2 => {
                    if (el1 !== el2) {
                        return true
                    }
                })
            })
            return false;
        }
    }



    render() {
        debugger
        return (
                <div>
                    <div className="google-map" ref={map => this.mapNode = map} >
                    </div>
                </div>
                )
    }
}

export default GoogleMap