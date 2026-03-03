import { useState } from "react";
import Sameer ,{Lorem} from "./header";




// function Colour(){
//   return(
//     <div>
//       <h1>sameer top</h1>
//       <h1>sameer top 2</h1>
//       <Fruit/>
//       <Top/>
//     </div>
//   )
// }
// export default Colour


// function Fruit(){
// let x=10;
// let y = 30;
//   return(
//     <>
//     <h1>bananna</h1>
//     <button onClick={()=>alert("hello sameer")} >click</button>
//     <h1>{x*y}</h1>
//     <Lorem/>
//    </>
//   )
// }
// function Top() {
// function opreation(a,b,op){
// if (op===0) {
//   return(a*b)
// }
// if (op>0) {
//   return(a+b)
// }
// if (op<0){
//   return(a-b)
// }
// }
// const name="sameer";
// const Userobj={
//   name:"sameer sawant",
//   age:"22 years"
// }
// const userArray =["sameer"," top"," niket"," adittya"]

//   return(
//     <>
//         <h1>{opreation(10,20,0)}</h1>
//     <h2>{name?name:"user not found"}</h2>
//     <h3>{Userobj.name}</h3>
//     <h1>{userArray[2]}</h1>
//     <input type="text" value={name}/>
//     </>
//   )
// }


// function Apple(){
//   const[counter,setcounter]=useState(0);
//   const name="sameer";
//   const name2=" is a pro player";

//   function Call(){
//     alert("call kelay")
//   }

//   return(
// <div>
//   <Sameer />
//   <h1>sameer top</h1>
//   <h2>hello : {counter} </h2>
//   <button  onClick={()=>setcounter(counter+1)} >increase counter</button>
//   <button onClick={()=>alert(name + name2)} >dont click me</button>
//   <button  style={{padding:"10px", margin:"10px",color:"black",backgroundColor:"red"}}onClick={Call}>call</button>
// }

// export default Apple


function App() {
  const [fruit,setFruit]=useState("Apple");

  // const handlefruit=()=>{
  //   setFruit("banana")
  // }

return (
  <div>
    <h1>state in react js</h1>
    <h1>{fruit}</h1>
   <button onClick={()=>setFruit("hello sameer")} >click</button>
  </div>
)
}
export default App
