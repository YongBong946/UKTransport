import React, { Component } from 'react';

class TubeStatus extends Component {


    render() {
        const props = this.props.tubeStatus

        // checks to see if props is not null, before displaying data
        if (props) {
            return (
              <div className="App">
                <h1>Tube Status</h1>
                <nav className='Nav'>
                    <a href="/">Home</a>
                    <a href="/carpark">View Car Park Occupancy</a>
                </nav>
                <div className="Container">

                {/* using a .map fucntion to loop through array and pull out data */}
                  {props.map((tube, index) => {
                    const status = tube.lineStatuses[0]
                    return(
                      <div key={index} className="Card">
                        <h2>{tube.name}</h2>
                        <p><strong>{status.statusSeverityDescription}</strong></p>
                        <p className="StatusText">{status.reason}</p>
                      </div>
                    )
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


export default TubeStatus;