import {Location, LocationState} from 'history';

export const getParamVallue = (location: Location<LocationState>, paramname: string) => {
    if(!location || !location.search){
        return null;
    }

    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(paramname);
}