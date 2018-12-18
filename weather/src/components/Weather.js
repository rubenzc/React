import React, { Component } from 'react';

class Weather extends Component {

    showResult = () => {

        //Get request data
        const {name, weather, main} = this.props.result;

        if(!name || !weather || !main) return null;

        return(
            <div className="row">
                {name}
            </div>
        )

    }

    render() { 
        console.log(this.props.result);
        return (
            <div className="container">
               { this.showResult() } 
            </div>
        );
    }
}
 
export default Weather;