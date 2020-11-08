export const formatShortString = (value: string) : string => {
    let intValue : number = parseInt(value);

    if(value < 999){
        return intValue + "";
    }

    else if (intValue < 1000000){
        return (intValue/1000).toFixed(1) + "K";
    }

    else if(intValue < 10000000) {
        return (intValue/1000000000).toFixed(1) + "M";
    }

    else {
        return (intValue/1000000).toFixed(1) + "B";
    }
}