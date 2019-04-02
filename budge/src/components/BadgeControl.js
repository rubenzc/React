import React, {Component} from 'react';
import Badge from './Badge';
import Difference from './Difference';
import PropTypes from 'prop-types';

class BadgeControl extends Component {

    render() {
        return (
            <React.Fragment>
                <Badge
                    badge = {this.props.badge}
                />
                <Difference
                    badge = {this.props.badge}
                    difference = {this.props.difference}
                />
            </React.Fragment>
        );
    }
}

BadgeControl.propTypes = {
    badge: PropTypes.string.isRequired,
    difference: PropTypes.string.isRequired
}

export default BadgeControl;