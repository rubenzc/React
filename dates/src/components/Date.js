import React, { Component } from 'react';

class Date extends Component {

    render() { 

        const {petName, animalOwner, date, time, symptoms, id} = this.props.info;

        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{petName}</h3>
                    <p className="card-text"><span>Owner name: </span>{animalOwner}</p>
                    <p className="card-text"><span>Date: </span>{date}</p>
                    <p className="card-text"><span>Time: </span>{time}</p>
                    <p className="card-text"><span>Symptoms: </span>{symptoms}</p>
                    <p className="card-text"></p>
                </div>
            </div>
          );
    }
}
 
export default Date;