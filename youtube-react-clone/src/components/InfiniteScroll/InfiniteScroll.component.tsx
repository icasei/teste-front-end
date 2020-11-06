import React from 'react';
import {Waypoint} from 'react-Waypoint';
import {Loader} from 'semantic-ui-react';

interface InfiniteScroll{
    children: React.ReactElement;
    callBack(args: Waypoint.CallbackArgs):void
    isLoading: boolean
}

export const InfiniteScroll = (props: InfiniteScroll) => {
    return <>
    {props.children}
    <Waypoint bottomOffset = "-15px" onEnter={props.callBack}>
        <div style={{paddingBottom: '15px'}}>
            <Loader active={props.isLoading} inline="centered" />
        </div>
    </Waypoint>
    </>
}