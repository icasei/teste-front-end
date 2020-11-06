import React from 'react';
import { Menu, Divider } from 'semantic-ui-react';
import SideBarItem from './SideBarItem/SideBarItem.component.tsx';

import './SideBar.css';

export const SideBar = () => {
    return <Menu borderless vertical fixed='left' className="side_bar">
        <SideBarItem itemUri="/" label="Home" icon="home" />
        <SideBarItem itemUri="/feed/trending" label="Em Alta" icon="home" />
        <SideBarItem label="Inscrições" icon="youtube" />
        <Divider />
        <SideBarItem label="Historico" icon="history"/>
        <SideBarItem label="Bliblioteca" icon="play" />
        
    </Menu>
}