import React, {Component} from 'react';
import Badge from './Badge';
import Difference from './Difference';

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

export default BadgeControl;