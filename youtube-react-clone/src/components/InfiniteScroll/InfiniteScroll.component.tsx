import React from 'react';
import { Waypoint } from 'react-waypoint'
import { Loader } from 'semantic-ui-react';

interface IInfiniteScroll {
    children: React.ReactElement;
    callBack(args: Waypoint.CallbackArgs): void
    isLoading : boolean
}
export const InfiniteScroll = (props: IInfiniteScroll) => {
    return <>
        {props.children}
        <Waypoint bottomOffset="-15px" onEnter={props.callBack}>
            <div style={{paddingBottom : '15px'}}>
                <Loader active={props.isLoading} inline="centered" />
            </div>
        </Waypoint>
    </>
}