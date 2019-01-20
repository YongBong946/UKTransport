import React, { Component } from 'react';


class Home extends Component {
    render() {
        return(
            <div>
                <nav className="Nav Home_Nav">
                    <a href="/tube">View Tube Status</a>
                    <a href="/carpark">View Car Park Occupancy</a>
                </nav>
                <main className="Home_Main">
                    <p>Welcome to my Website</p>
                    <br/>
                    <p>This is just a simple Site displaying Information from the Transport of London API</p>
                </main>
            </div>
        )
    }
}

export default Home