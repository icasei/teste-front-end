export const formatShortString = (value : string) : string => {
    
    let intValue : number = parseInt(value);

    if(intValue < 999){
        return intValue + "";
    }
    else if (intValue < 1000000){
        return (intValue/1000).toFixed(1) + "K";
    }
    else if (intValue < 100000000){
        return (intValue/1000000).toFixed(1) + "M";
    }
    else {
        return (intValue/100000000).toFixed(1) + "B";
    }
}