import React from 'react';
import { Menu, Divider } from 'semantic-ui-react';
import SideBarItem  from './SideBarItem/SideBarItem.component';

import './SideBar.css';

export const SideBar = () => {

    return <Menu borderless vertical fixed='left' className="side_bar">
        <SideBarItem itemUri="/" label="Home" icon="home" />
        <SideBarItem itemUri="/feed/trending" label="Trending" icon="fire"/>
        <SideBarItem label="Subscription" icon="youtube" />
        <Divider />
        <SideBarItem label="History" icon="history"/>
        <SideBarItem label="Library" icon="play" />
    </Menu>
}