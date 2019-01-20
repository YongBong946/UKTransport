import React, { Component } from 'react';

class CarPark extends Component {

    state = {
        search: ''
    }

    // changes the value of this.state.search to what will be inputed into the input field
    searchHandler(e) {
        this.setState({ search: e.target.value });
    }

    // x will be the array on which my filter is applying to
    // searches through the 'name' field from x and returns any matches
    // toLowerCase will ensure that it is not case sensitive
    // || !search to stop it from filtering out anyhting if nothing is passed in
    searchFor(search) {
        return (function(x) {
            return x.name.toLowerCase().includes(search.toLowerCase()) || !search
        })
    }

    render() {
        const props = this.props.carParkSpace
        const { search } = this.state

        // checks to see if props is not null, before displaying data
        if (props) {
            return (
                <div className="App">
                  <h1>Car Park Occupancy</h1>
                  <nav className='Nav'>
                    <a href="/">Home</a>
                    <a href="/carpark">View Tube Status</a>
                  </nav>
                {/* making a input field for my search/filter bar */}
                <form className="SearchBar">
                  <input type="text" onChange={this.searchHandler.bind(this)} placeholder="Search Bar"/>
                </form>


                  <div className="Container">

                    {/* using the searchFor method to filter out what comes out of the .map */}
                    {/* using a .map fucntion to loop through array and pull out data */}
                    {props.filter(this.searchFor(search).bind(this)).map((car, index) => {
                      const status = car.bays[1]

                    // Had a weird error where it returned undefined, so used another if function to make sure there is data before displaying
                      if (status) {
                          return(
                            <div key={index} className="Card">
                              <h2>{car.name}</h2>
                              <p>Occupied:<strong>{status.occupied}</strong></p>
                              <p>Free Spaces:<strong>{status.free}</strong></p>
                            </div>
                          )
                      }
                    })}
                  </div>
                </div>
              )

        // Placeholder for when the data is not there initially, and is in the process of being pulled from the API 
        } else {
            return (
            <div className="Loading">
                <h1>Loading Information</h1>
            </div>
            )
        }
    }
}

export default CarPark