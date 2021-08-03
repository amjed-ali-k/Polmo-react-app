import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { 
    Nav,
    NavItem,
    NavLink
} from './../../../components';

const ProfileLeftNav = () => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <Nav pills vertical>
                <NavItem>
                    <NavLink tag={ RouterNavLink } to="/profile/profile-edit">
                        Profile Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ RouterNavLink } to="/profile/account-edit">
                        Account Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ RouterNavLink } to="/profile/settings-edit">
                        Settings Edit
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { ProfileLeftNav };
