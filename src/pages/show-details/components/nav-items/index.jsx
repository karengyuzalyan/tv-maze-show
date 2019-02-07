// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

export function NavItems({ seasons, activeTab, toggleTabs }) {  
    return(
        <Nav tabs>
            {seasons.map(season => (
                <NavItem
                    value={season}
                    key={season}
                    onClick={toggleTabs}
                >
                    <NavLink className={classnames({ active: activeTab === +season })}>
                        {`Season ${season}`}
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    );
}

NavItems.propTypes = {
    seasons: PropTypes.arrayOf(PropTypes.string),
    activeTab: PropTypes.number,
    toggleTabs: PropTypes.func,
};

NavItems.defaultProps = {
    seasons: [],
    activeTab: 1,
    toggleTabs: null,
};
