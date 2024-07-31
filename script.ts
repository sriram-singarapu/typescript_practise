import { Last } from "react-bootstrap/esm/PageItem";

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "Sri Ram", last: "Singarapu" });

// --------------------------------------------------------------------------------------------------

function random(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
//---------------------------------------------------------------------------------------------------
printName({ first: "Sr", last: "looks", age: 22 }); //Object literal may only specify known properties
let details = { first: "Sr", last: "looks", age: 22 }; // this is a valid syntax. we can assign varibales
printName(details);

//====================================================================================================
function doublerandom({ x: number; y: number }): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

//   objects type
//insted of writing number all the times, we can create a type for it

type Point ={
    x:number;
    y:number;
}
function doublerandomtype(point:Point): Point {
    return { x: Math.random(), y: Math.random() };
  }

//=============================================
optional ways 
type Point ={
    x:number;
    y:number;
    z?:number;
}



//   nested objects....................................
//   Nested type Annotations 
//lec 29
  type Song={

  }



  //readonly proprty:'

  type User ={
    readonly id: number;
    username: string;
  }

  const user:User ={
    id:1,
    username:"haha"
  }

  user.id=22


//cannot assign to id because it is a read only property