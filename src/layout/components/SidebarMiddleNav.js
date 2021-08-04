import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"/>}
            title="Realtime Data"
            to="/dashboard"
        >
        </SidebarMenu.Item>
        <SidebarMenu.Item title="Profile" icon={<i className="fa fa-fw fa-user-o"/>}>
            <SidebarMenu.Item title="Profile Details" to="/profile/details" />
            <SidebarMenu.Item title="Profile Edit" to="/profile/profile-edit" />
            <SidebarMenu.Item title="Account Edit" to="/profile/account-edit" />
            {/*<SidebarMenu.Item title="Billing Edit" to="/profile/billing-edit" />*/}
            <SidebarMenu.Item title="Settings Edit" to="/profile/settings-edit" />
            {/*<SidebarMenu.Item title="Sessions Edit" to="/profile/sessions-edit" />*/}
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-power-off" />}
            title="Logout"
            to="/logout" />
    </SidebarMenu >
);
