
//default parameters
function create(age1:number,age2:number=10){
    return age1+age2;
}
create(20);

//spread
const myFriend =['chandler','joey','ross']
const newFriend =['Joy','monica','rache']
const myBestFriend ={
    fullName:'Amit',
    age:22
};

myFriend.push(...newFriend);
// console.log(myFriend);

//rest parameter

const greetFriends =(...friends:string[]):void => console.log(friends);

greetFriends('kashem','hashem','gashem','lashem');


//destructuring

const [bestFriend] = myFriend;
const {fullName} = myBestFriend;
console.log(fullName);

