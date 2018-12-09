import React, {Component} from 'react';

class Badge extends Component {
    
    render() {
        return (
            <div className="alert alert-primary">
                Badge: $ {this.props.badge}
            </div>
        );
    }
}

export default Badge;