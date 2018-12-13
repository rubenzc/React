import React, { Component } from 'react';
import Date from './Date';
import PropTypes from 'prop-types';

class DatesList extends Component {
    
    render() {

        const dates = this.props.dates;

        const message = Object.keys(dates).length === 0 ? 'No dates' : 'Manage your dates here';

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{message}</h2>

                    <div className="lista-citas">
                        {Object.keys(this.props.dates).map(date => (
                            <Date
                                key = {date}
                                info = {this.props.dates[date]}
                                deleteDate={this.props.deleteDate}
                            />
                            
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

DatesList.propTypes = {
    dates : PropTypes.array.isRequired,
    deleteDate : PropTypes.func.isRequired
}
 
export default DatesList;