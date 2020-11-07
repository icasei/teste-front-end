import React, { useState } from 'react'
import { Menu, Item, Icon, Form, Input } from 'semantic-ui-react'

import './TopNav.css';
import { encode } from 'punycode';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { params } from '../../store/types';
import { getParamValue } from '../../utils/uri';

interface ITopNav extends RouteComponentProps<params> {

}

const TopNav = (props: ITopNav) => {
    const [searchInputState, setSearchState] = useState(getParamValue(props.location, 'search_query') || '');

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = event.currentTarget.value;
        setSearchState(() => value)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const encodeUri = encodeURI(searchInputState!);
        props.history.push(`/result?search_query=${encodeUri}`)
    }

    return <Menu borderless fixed="top" className="top_nav">
        <Link to="/">
            <Item className="top_nav_icon">
                <span><Icon size='large' name="youtube" /></span>
                <span>UTube</span>
            </Item>
        </Link>
        <Menu.Menu className="top_nav_containter">
            <Item className="search_input">
                <Form onSubmit={onSubmit}>
                    <Form.Field>
                        <Input
                            placeholder="Search"
                            value={searchInputState}
                            action={{ icon: 'search' }}
                            onChange={onSearchChange}
                        />
                    </Form.Field>
                </Form>
            </Item>
        </Menu.Menu>
        <Menu.Menu>
            <Item><Icon className="menu_icon" name="video camera" size="large" /></Item>
            <Item><Icon className="menu_icon" name="grid layout" size="large" /></Item>
            <Item><Icon className="menu_icon" name="ellipsis vertical" size="large" /></Item>
        </Menu.Menu>
    </Menu>
}

export default withRouter(TopNav);