import React, { Component } from 'react';

class Weather extends Component {

    showResult = () => {

        //Get request data
        const {name, weather, main} = this.props.result;

        if(!name || !weather || !main) return null;

        const kelvin = 273.15;
        const urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt = `${name} Weather`;
        return(
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2> Weather in {name}</h2>
                            <p className="temperatura">
                                Now: { (main.temp - kelvin).toFixed(1) }&deg;C
                                <img src={urlIcon} alt={alt} />
                            </p>
                            <p>Max. { (main.temp_max - kelvin).toFixed(1) }&deg;C</p>
                            <p>Min. { (main.temp_min - kelvin).toFixed(1) }&deg;C</p>
                        </span>

                    </div>
                </div>
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