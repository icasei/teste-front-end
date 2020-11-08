import React from 'react';
import { Item, Icon, SemanticICONS } from 'semantic-ui-react';

import './SideBarItem.css';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { params } from '../../../store/types';

interface ISideBarItem extends RouteComponentProps<params> {
    icon: SemanticICONS;
    label: string;
    itemUri?: string;
}

const SideBarItem = (props: ISideBarItem) => {

    const isSelected = () => {
        const {pathname} = props.location;
        return pathname === props.itemUri;
    }

    const highlightClass = isSelected() ? 'highlight_menu' : null;

    return (
        <Link to={props.itemUri || '/'}>
            <Item className={['sidebar_item', highlightClass].join(' ')}>
                <div>
                    <span><Icon size="large" name={props.icon} /></span>
                    <span>{props.label}</span>
                </div>
            </Item>
        </Link>
    )
}

export default withRouter(SideBarItem)