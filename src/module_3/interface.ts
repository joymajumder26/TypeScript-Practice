type User ={
    name:string;
    age:number;
};

interface IUser{
    name:string;
    age:number;
}
interface IExtendedUser extends IUser{
    role:string;
}
const user: IExtendedUser ={
    name:'Omanush',
    age:2000,
    role:'unknown'
}


//function of interface

interface IAddNumbers{
    (num1:number,num2:number):number;
}
const addNumbers: IAddNumbers=(num1,num2)=>num1+num2;

//array of interface

type rollNumbersType = number[];
interface IRollNumber{
    [index:number] :number
}
const rollNumbers: IRollNumber=[14,35];
