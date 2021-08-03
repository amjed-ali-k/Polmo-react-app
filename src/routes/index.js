import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

// ----------- Pages Imports ---------------
import Dashboard from './Dashboard'

import AccountEdit from './Profile/AccountEdit';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileEdit from './Profile/ProfileEdit';
import SettingsEdit from './Profile/SettingsEdit';
import Confirmation from './Pages/Confirmation';
import ForgotPassword from './Pages/ForgotPassword';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Logout from "./Pages/Logout";


// ----------- Layout Imports ---------------
import {DefaultNavbar} from '../layout/components/DefaultNavbar';
import {DefaultSidebar} from '../layout/components/DefaultSidebar';


//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>

            {/*  Unprotected routes */}
            <Route component={Login} path="/auth/auth"/>
            <Route component={Register} path="/auth/register"/>
            <Route component={ForgotPassword} path="/auth/forgot-password"/>
            <Route component={Confirmation} path="/auth/confirmation"/>
            { /*    404    */}
            <Redirect to="/auth/auth"/>
        </Switch>
    );
}

export const ProtectedRoutedContent = () => {
    return (
        <Switch>
            {/*  Protected routes */}
            <Redirect from="/" to="/dashboard" exact/>
            <Route path="/dashboard/" exact component={Dashboard}/>
            <Route component={ProfileDetails} path="/profile/details"/>
            <Route component={ProfileEdit} path="/profile/profile-edit"/>
            <Route component={SettingsEdit} path="/profile/settings-edit"/>
            <Route component={AccountEdit} path="/profile/account-edit"/>
            <Route path="/logout/" exact component={Logout}/>
            { /*    404    */}
            <Redirect to="/pages/error-404"/>
        </Switch>
    );
}

//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
    <Switch>
        { /* Default Navbar: */}
        <Route
            component={DefaultNavbar}
        />
    </Switch>
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Default Sidebar: */}
        <Route
            component={DefaultSidebar}
        />
    </Switch>
);
