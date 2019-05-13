import React, { Component } from 'react';
import WorldMap from './WorldMap';
import FormCard from './FormCard'

class Root extends Component {

  constructor(props) {
    super(props);

    this.state = {
      haveUsersLocation: false
    }
  }

  updateUserLocation = (bool) => {
    this.setState({
      haveUsersLocation: bool
    })
  }

  render() {

    return (
        <div className="rootContainer">
          <FormCard
            haveUsersLocation={this.state.haveUsersLocation}
          ></FormCard>
          <WorldMap
            haveUsersLocation={this.state.haveUsersLocation}
            updateUserLocation={this.updateUserLocation}
          ></WorldMap>
        </div>
    );
  }
}

export default Root;
