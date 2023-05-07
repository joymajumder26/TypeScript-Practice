//Arrow function
const createArray = (param:string):string[]=>{
    return [param];
}
const createArray1 = <T>(param:T):T[]=>{
    return [param];
}
const createArray2 = <X,Y>(param:X,param2:Y):[X,Y]=>{
    return [param,param2];
}

const result1 = createArray1<string>("Bangladesh");
const result2 = createArray1<boolean>(true);
const result3 = createArray1<{name:string}>({name:"Bangladesh"});

const result4 = createArray2<string,string>("Bangladesh","I love My Country");

//spread operator


const myInfo ={
    name:"Persian",age:100,salary:100000
}
const addMeInMyCrushMind = (myInfo:object)=>{
    const Girl ="kate winslet";
    const newData = {...myInfo,Girl}
    return newData;
}

const result5 = addMeInMyCrushMind(myInfo)


// spread generic
// const myInfo1 ={
//     name:"Persian",age:100,salary:100000
// }
// const addMeInMyCrushMind1 = <T>(myInfo1:T)=>{
//     const Girl1 ="kate winslet";
//     const newData1 = {...myInfo,Girl1}
//     return newData1;
// }
// const result6 = addMeInMyCrushMind(myInfo)


