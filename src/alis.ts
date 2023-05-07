type CrushType = {
    name:string;
    age?:number;
    profession:string;
    address:string;
}

const crush1: CrushType ={
    name:'Moina Pakhi',
    age:21,
    profession:'Web Develper',
    address:'Uganda'
}
const crush2:CrushType= {
    name:'Amr Jan',
    profession:'software Developer',
    address:'India'
}

type CourseNameType = string;
const courseName: CourseNameType = 'Next Level web development';


type OperationType=(x:number,y:number) => number;
const calculate = (number1:number,number2:number,operation:OperationType)=>{
    return operation(number1,number2);
};
calculate(10,20,(x,y)=>x+y)
calculate(10,20,(x,y)=>x-y)