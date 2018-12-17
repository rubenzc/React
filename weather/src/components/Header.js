import React from 'react';

const Header = (props) => {
    return (
        <div>
           <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <p className="brand-logo">{props.title}</p>
                </div>
            </nav> 
        </div>
    );
};

export default Header;