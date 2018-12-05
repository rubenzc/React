import React, {Component} from 'react';

class Result extends Component {

    render() {
        return (
            <div className="class-name">
                <p>$ {this.props.result}</p>
            </div>
        );
    }
}

export default Result;