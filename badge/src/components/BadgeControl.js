import React, {Component} from 'react';
import Badge from './Badge';
import Difference from './Difference';

class BadgeControl extends Component {

    render() {
        return (
            <React.Fragment>
                <Badge/>
                <Difference/>
            </React.Fragment>
        );
    }
}

export default BadgeControl;