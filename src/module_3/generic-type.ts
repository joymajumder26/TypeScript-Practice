
type GerericArray<T> = Array<T>;

const rollNumber1:GerericArray<number> =[44,2,5];

const rollNumber2:GerericArray<string> =["44","2","5"];

type NameRollType ={name:string;roll:number}
const userNameAndRollNumbers: GerericArray<NameRollType> = [
    {
        name:"Mr. X",
        roll:1,
    },
    {
        name:"Mr. Y",
        roll:2,
    }
]

type GenericTuple<X,Y> = [X,Y];
const relation:GenericTuple<string,string> =["joy","majumder"];

///type
//type RelationWithSalaryType = {name:string,salary:number};

//interface
interface RelationWithSalaryInterface{
    name:string;
    salary:number
}


const relationWithSalary:GenericTuple<RelationWithSalaryInterface,string>=[
    {
        name:'Joy',
        salary:54545454
    },
    "jfkdjfkdj"
]