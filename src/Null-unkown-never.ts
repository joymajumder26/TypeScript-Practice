const searchName = (value:string | null) =>{
    if(value== null){
        console.log('There is nothing to search');
    }
    else{
        console.log("Searching");
    }
}

searchName(null);

const getMySpeed = (speed:unknown)=>{
    if(typeof speed  === "number"){
        const convertedSpeed  = (speed * 1000)/3600;
        console.log(convertedSpeed);
    }
    if(typeof speed  === "string"){
        const [value,unit]= speed.split(''); //['10','kmh']
        const convertedSpeed  = (parseFloat(value) * 1000)/3600;
        console.log(convertedSpeed);
    }
    else{
        console.log('there is wrong type');
    }
}
getMySpeed(10);
getMySpeed("10 kmh");
getMySpeed(true);


function thowError(message:string):never{
    throw new Error(message);
}
thowError("error hoyeche");