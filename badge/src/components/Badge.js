import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Badge extends Component {
    
    render() {
        return (
            <div className="alert alert-primary">
                Badge: $ {this.props.badge}
            </div>
        );
    }
}

Badge.propTypes = {
    badge: PropTypes.string.isRequired
}
export default Badge;