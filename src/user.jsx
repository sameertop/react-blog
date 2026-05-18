import { useEffect, useState } from "react";

// function User({sameer}){
//     return(
//         <div>
//             <h1>sameer top</h1>
//             <h1>name : {sameer.name}</h1>
//          <h1>email : {sameer.email}</h1>

//         </div>
//     )
// }
// export default User ;

// function  User2({name}){
//     return(
//         <div>
//         <h1>student name : {name}</h1>
//         <hr/>
//         </div>
//     )
// }
// export default User2



// function User({name}) {
//     return(
//         <div>
//             <h1>hii,{name}</h1>
//         </div>
//     )
// }
// export default User ;

// function User({sameer}){
//     return(
//     <>
//     <h1>user component : {sameer.email}</h1>
//     <h1>user component : {sameer.name}</h1>
//     <h1>user component : {sameer.age}</h1>
//     </>
//     )
// }
// export default User;


// clock with changing colour with state
// function Clock({colour}) {
//     const [time, setTime] = useState(0);
//     useEffect(() => {
//         setInterval(() => {
//             setTime(new Date().toLocaleTimeString())
//         }, 1000);
//     },[])
//     return (
// <div>
//     <h1>clock</h1>
//     <h1 style={{color:colour, backgroundColor:"black", width:"160px", padding:"10px", borderRadius:"20px"}}>{time}</h1>
// </div>
//     )
// }
// export default Clock;


// lifecycle process mounting update unmounting

// function New ({counter ,data}){
//     const [message,setMessage] = useState("")
//     useEffect(()=>{
// console.log("mounting start");

// },[])


// useEffect(()=>{
// if (counter > 0){
//     setMessage("hello user");

// }
// },[counter])

// useEffect(()=>{
//     return()=>{
//         console.log("unmounting starting");
        
//     }
// },[])
//     return(
//         <div>
//              <h2>Counter: {counter}</h2>
//             <h2>Data: {data}</h2>
//             <h2>{message}</h2>
//         </div>
//     )
// }
// export default New;


// forward ref
// function Userinput(props) {
//     return(
//         <div>
//             <input type="text" ref={props.ref}/>
//         </div>
//     )
// }
// export default Userinput;