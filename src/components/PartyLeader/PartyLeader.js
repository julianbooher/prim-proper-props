// imports
import React, { Component } from 'react';

// class
class PartyLeader extends Component {
    render(){
        return (
            <div>
                <h2>Party Leader</h2>
                {this.props.leader && <h3>{this.props.leader.name}</h3>}
            </div>
        ) 
    } 
} 

// export
export default PartyLeader;