import React, { Component } from 'react';

class Date extends Component {

    render() { 
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">Pet Name</h3>
                    <p className="card-text"><span>Owner name: </span></p>
                    <p className="card-text"><span>Date: </span></p>
                    <p className="card-text"><span>Time: </span></p>
                    <p className="card-text"><span>Symptoms: </span></p>
                    <p className="card-text"></p>
                </div>
            </div>
          );
    }
}
 
export default Date;