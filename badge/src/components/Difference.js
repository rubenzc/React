import React, {Component} from 'react';
import {revisarPresupuesto} from '../helper';

class Difference extends Component {
    
    render() {

        const badge = this.props.badge;
        const difference = this.props.difference;

        return (
            <div className={revisarPresupuesto(badge, difference)}>
                Difference: $ {this.props.difference}
            </div>
        );
    }
}

export default Difference;