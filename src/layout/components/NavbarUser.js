import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    NavItem,
    NavLink
} from './../../components';

const NavbarUser = (props) => (
    <NavItem { ...props }>
        <NavLink tag={ Link } to="/logout">
            <i className="fa fa-power-off"/>
        </NavLink>
    </NavItem>
);
NavbarUser.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarUser };
