//Named exports
//used for multiple import at a time with their names individually


//defining and exporting a variable 
export const name:string = "ismail";

//defining and exporting a function
export function greet(){
    console.log("Hello" , name);
    
}

//defining and exporting a class 
export class student{
    marks = 840;
    grade = "A+";
}

//defining and exporting an object 
export let TRIO = {
    frnd1 : "ismail", 
    frnd2 : "ahmed" , 
    frnd3 : "shah"
}