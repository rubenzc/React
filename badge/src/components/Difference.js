import React, {Component} from 'react';

class Difference extends Component {
    
    render() {
        return (
            <div className="alert alert-success">
                Difference: $ {this.props.difference}
            </div>
        );
    }
}

export default Difference;