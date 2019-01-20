import React, { Component } from 'react';
import './App.css';
import Tube from './components/Tube'
import Home from './components/Home'
import CarPark from './components/CarPark'

class App extends Component {

  // Declaring State to Store States
  state = {
    tubeStatus: null,
    carParkSpace: null
  }

  // When page first loads, retrieve API data
  componentDidMount() {
    const baseURL = 'https://api.tfl.gov.uk'
    const tubeStatusURL = `${baseURL}/Line/Mode/tube/Status`
    const carParkSpaceURL = `${baseURL}/Occupancy/CarPark`

    // Fetch API Data
    fetch(tubeStatusURL)
      .then(res => res.json())
      .then(tubeStatus => this.setState({ tubeStatus }))

    fetch(carParkSpaceURL)
      .then(res => res.json())
      .then(carParkSpace => this.setState({ carParkSpace }))
  }

  render() {
    const { pathname } = window.location
    const params = pathname.substr(1)
    const { tubeStatus, carParkSpace } = this.state

    // Setting the Paths to load/show different Components
    if (params === '') {
      return <Home />

    } else if (params === 'tube') {
      return <Tube tubeStatus={tubeStatus} />

    } else if (params === 'carpark') {
      return <CarPark carParkSpace={carParkSpace} />

    } else
    return <h1>Unknown Path</h1>
  }
}

export default App;
