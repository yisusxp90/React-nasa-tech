import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <div className="brand-logo center">{props.title}</div>
            </div>
        </nav>
    );
}
export default Header;