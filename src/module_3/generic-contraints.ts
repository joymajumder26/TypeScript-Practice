
interface MandatoryInterface {name:string,age:number,salary:number}
const addMeInMyCrushMind1 = <T extends MandatoryInterface>(myInfo1:T)=>{
    const Girl1 ="kate winslet";
    const newData1 = {...myInfo1,Girl1}
    return newData1;
}
type MyInfoType = {
    name:string;
    age:number;
    salary:number;
    other1:boolean;
    other2:null;
}
const myInfo1 ={
    name:"Persian",
    age:100,
    salary:100000,
    other1:false
}
const result6 = addMeInMyCrushMind1(myInfo1)