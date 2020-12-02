// imports
import React, { Component } from 'react';

// class
class _template extends Component {
    render(){
        return (
            <div>
                {this.props.name}: {this.props.count * 2}
            </div>
        ) 
    } 
} 

// export
export default _template;