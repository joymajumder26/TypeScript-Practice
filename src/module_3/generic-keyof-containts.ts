type PersonType = {
    name:string;
    age:number;
    address:string;
}
type newType = "name" | "age" | "address"; //manually
type newTypeUsingKeyOf = keyof PersonType;

function getProperty <X,Y extends keyof X>(obj:X,key:Y){
    obj[key];
}
const property = getProperty({name:"Mr x",age:1000},"age")