// import { useState } from "react";
import Sameer from "./header";

// function Apple(){
//   const[counter,setcounter]=useState(0);
//   return(
// <div>
//   <Sameer />
//   <h1>sameer top</h1>
//   <h2>hello : {counter} </h2>
//   <button  onClick={()=>setcounter(counter+1)} >increase counter</button>
// </div>
//   )
// }

// export default Apple


function Colour(){
  return(
    <div>
      <h1>sameer top</h1>
      <h1>sameer top 2</h1>
      <Fruit/>
      <Sameer/>
    </div>
  )
}
export default Colour


function Fruit(){
  return(
    <h1>bananna</h1>
  )
}



