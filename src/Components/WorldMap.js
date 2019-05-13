import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../Style/map.css';

class WorldMap extends Component {

  constructor(props) {
    super(props)

    this.state = {
      location: {
        lat: 51.505,
        lng: -0.09
      },
      zoom: 3
    }
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        zoom: 13
      }, () => {
        this.props.updateUserLocation(true)
      })
    }, () => {
      fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(location => {
        this.setState({
          location: {
            lat: location.latitude,
            lng: location.longitude
          },
          zoom: 13
        }, () => {
          this.props.updateUserLocation(true)
        })
      })
    });
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng]

    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    )
  }
}

export default WorldMap;
