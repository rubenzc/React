import React, { Component } from 'react';

class DatesList extends Component {
    
    render() {

        const dates = this.props.dates;

        const message = Object.keys(dates).length === 0 ? 'No dates' : 'Manage your dates here';

        return (
            <div className="card mt">
                <div className="card-body">
                    <h2 className="card-title text-center">{message}</h2>
                </div>
            </div>
        );
    }
}
 
export default DatesList;