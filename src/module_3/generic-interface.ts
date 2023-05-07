
//generic interface
interface CrushInterface<T,U=null>{
    name:string;
    husband:T;
    wife?: U ;
}

const crush: CrushInterface<boolean> ={
    name:'Kate Winlet',
    husband:true
}
const crushs: CrushInterface<string> ={
    name:'Kate Winlet',
    husband:"Joy"
}
interface PersonInterface{
    name:string,age:number
}

const crushes: CrushInterface<PersonInterface,PersonInterface>={
    name:"kate",
    husband:{
        name:"Persian",
        age:30,
    },
    wife:{
        name:"winslet",
        age:25,

    }
}



