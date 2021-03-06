import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Date extends Component {

    deleteDate = () =>{
        this.props.deleteDate(this.props.info.id);
    }

    render() { 

        const {petName, animalOwner, date, time, symptoms} = this.props.info;

        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{petName}</h3>
                    <p className="card-text"><span>Owner name: </span>{animalOwner}</p>
                    <p className="card-text"><span>Date: </span>{date}</p>
                    <p className="card-text"><span>Time: </span>{time}</p>
                    <p className="card-text"><span>Symptoms: </span>{symptoms}</p>
                    
                    <button onClick={this.deleteDate} className="btn btn-danger">Delete

                    </button>
                </div>
            </div>
          );
    }
}

Date.PropTypes = {
    info : PropTypes.shape({
        date : PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        pet : PropTypes.string.isRequired,
        owner : PropTypes.string.isRequired,
        symptoms : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired

    }),
    deleteDate : PropTypes.func.isRequired
}
 
export default Date;