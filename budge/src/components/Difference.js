import React, {Component} from 'react';
import {revisarPresupuesto} from '../helper';
import PropTypes from 'prop-types';

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


Difference.propTypes = {
    badge: PropTypes.string.isRequired,
    difference: PropTypes.string.isRequired
}
export default Difference;