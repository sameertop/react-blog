import { Component, useEffect, useState, useTransition } from "react";
import Sameer, { Lorem } from "./header";
// import New from "./user";
import { useRef } from "react";
// import Userinput from "./user";
import { useFormStatus, } from 'react-dom'
import Sawant from "./sawant";
import Adduser from "./user1";

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



// function Toggle(){
//   let[display,setdisplay]=useState(0) ;
//   return(
//     <div>
//       {/* <h1>{display}</h1> */}
//      <button onClick={()=>setdisplay(display+1)} >click again</button>
//       {
//        display==0?<h1>condition 0</h1>
//       :display==1?<h1>cndition 1</h1> 
//       :display==2?<h1>cndition 2</h1> 
//       :display==3?<h1>cndition 3</h1>
//       :null

//      }

//     </div>
//   )
// }

// function Smita(){
//   let [top,settop]=useState(true)
//   return(
// <div>
//   <h1>toggle function</h1>
//     {top ? <h1>sameer is top</h1 >: <h2>sameer is noob</h2> }
//   <button onClick={()=>settop(!top)}>click toggle</button>
// </div>
//   )
// }

// function App() {
//   let [fruit,setFruit]=useState("Apple");

// const handlefruit=()=>{
//   setFruit("banana")
// }

// return (
//   <div>
//     <h1>state in react js</h1>
//     <h1>{fruit}</h1>
//    <button onClick={()=>setFruit("hello sameer")} >click</button>
//    <Hello2/>
//   </div>
// )
// }
// export default App


// function Hello(){
//   return(
//     <div>
//     <h1>props in react</h1>
//      <User sameer={userobj}/>

//     </div>

//   )
// }



// function Hello2(){
// const [student, setStudent]=useState();

//   return(
//     <div>
// <User name={student}/>
// <User />
// <User name="rushi"/>


// <button onClick={()=>setStudent("bhaskar") }>click</button>
// </div>
// )
// }
// export default Hello2;

// function Input() {
// // *INPUT FIELD CONTROLLED Component*//

// const [val,setval]=useState("")
// const [password,setPassword]=useState("")
// const [email,setEmail]=useState("")
// return(
//   <div>
//     <h1>input field</h1>
//     <input type="text" value={val} onChange={(event)=>setval(event.target.value)} placeholder="enter your name"></input>
//      <h1>{val}</h1>

//     <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="enter your password"></input>
//      <h1>{password}</h1>

//     <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter your email"></input>
//      <h1>{email}</h1>
//      <button onClick={()=>{setval("");setPassword("");setEmail("")}}>clear form</button>
//   </div>
// )
// }
// export default Input;



// checkbox ch example//
// function Skills() {
//   const [skills,setskills] = useState([]) ;

//   const handleskills = (event)=>{
//     if (event.target.checked) {
//       setskills([...skills,event.target.value])
//     }
//     else{
//       setskills([...skills.filter((item)=>item!=event.target.value)])
//     }
//   }
//   return(
//     <div>
//       <h1>select your skills</h1>
//       <input onChange={handleskills} type="checkbox" id="php" value="PHP"/>
//       <label htmlFor="php">PHP</label>
// <br/><br/>

//        <input onChange={handleskills}type="radio" id="JAVA" value="JAVA"/>
//       <label htmlFor="JAVA">JAVA</label>
// <br/><br/>


//        <input onChange={handleskills} type="checkbox" id="PHYTHON" value="PHYTHON"/>
//       <label htmlFor="PHYTHON">PHYTHON</label>
// <br/><br/>


//        <input onChange={handleskills} type="checkbox" id="NODE" value="NODE"/>
//       <label htmlFor="NODE">NODE</label>
//       <br />
//     <h1>{skills.toString()}</h1>
//     </div>
//   )
// }



// function Radio(){
//   const [gender,setGender]=useState("Male")
//   const [city,setCity]=useState("Delhi")
//   return(
//     <div>
//       <h1>select gender </h1>
//      <input type="radio" onChange={(event)=>setGender(event.target.value)}  checked={gender=="Male"}  value="Male" name="gender" id="male"/>
//      <label htmlFor="male">male</label>
//       <input type="radio" onChange={(event)=>setGender(event.target.value)} checked={gender=="female"} value="Female" name="gender" id="Female"/>
//       <label htmlFor="Female">Female</label>
//       <h1>selected gender : {gender}</h1>
//      <br /> <br /> <br />

// <select onChange={(event)=>setCity(event.target.value)}>
//   <option value="delhi">Delhi</option>
//   <option value="mumbai">Mumbai</option>
//   <option value="kokan">Kokan</option>
//   <option value="gujrat">Gujrat</option>
// </select>
// <h1>selected city : {city}</h1>

// <br /> <br />
// <Skills/>

//     </div>
//   )
// }
// export default Radio;



// rendering list using map function
// and use another file component for rendering using props and keys
// function App() {
//   const userData = [
//     {
//       name: "sameer sawant",
//       age: "22",
//       email: "samsawant123456@gmail.com",
//       id: 1

//     },
//     {
//       name: "niket mahadik",
//       age: "23",
//       email: "niketmahadik123456@gmail.com",
//       id: 2

//     }, {
//       name: "aditya salvi",
//       age: "21",
//       email: "adityasalvi123456@gmail.com",
//       id: 3

//     }, {
//       name: "ganesh rane",
//       age: "25",
//       email: "ganeshrane123456@gmail.com",
//       id: 4

//     }, {
//       name: "ganesh rane",
//       age: "25",
//       email: "ganeshrane123456@gmail.com",
//       id: 5

//     }
//   ]
//   return (
//     <div>
//       <h1>sameer top</h1>
//           {
//           userData.map((user) => (
//             <div key={user.id}>
//               <User sameer={user}/>
//           </div>
//           ))}

//     </div>
//   )
// }
// export default App;



// clock with changhing colours with state
// function App(){
// const [colour,setColour]=useState("red")
//     return(
// <div>

//     <Clock colour={colour}/>
//    <select  onChange={(event)=>setColour(event.target.value)}>
//     <option value={"red"}>red</option>
//     <option value={"green"}>green</option>
//     <option value={"yellow"}>yellow</option>
//     <option value={"pink"}>pink</option> 
//    </select>
// </div>
//     )
// }
// export default App;



//NESTED LOOP//
// function App() {
//     const Collegedata = [
//         {
//             name: "sameer sawant",
//             city: "mumbai",
//             website: "www.sameer.com",
//             collegename: [
//                 {
//                     name: "somaiya",
//                     city: "hydrabad",
//                     email: "somaiya.edu"
//                 },
//                 {
//                     name: "DAV",
//                     city: "bhandup",
//                     email: "somaiya.edu"
//                 },
//                 {
//                     name: "Menon",
//                     city: "nahur",
//                     email: "somaiya.edu"
//                 },
//             ]
//         },
//         {
//             name: "ganesh rane",
//             city: "pune",
//             website: "www.ganesh.com",
//             collegename: [
//                 {
//                     name: "somaiya",
//                     city: "hydrabad",
//                     email: "somaiya.edu"
//                 },
//                 {
//                     name: "DAV",
//                     city: "bhandup",
//                     email: "somaiya.edu"
//                 },
//                 {
//                     name: "Menon",
//                     city: "nahur",
//                     email: "somaiya.edu"
//                 },
//             ]
//         },
//         {
//             name: "niket mahadik",
//             city: "hydrabad",
//             website: "www.sameer.com",
//             collegename: [
//                 {
//                     name: "somaiya",
//                     city: "hydrabad",
//                     email: "somaiya.edu"
//                 },
//                 {
//                     name: "DAV",
//                     city: "bhandup",
//                     email: "somaiya.edu"
//                 },
//                 {
//                     name: "Menon",
//                     city: "nahur",
//                     email: "somaiya.edu"
//                 },
//             ]
//         },
//     ]
//     return (
//         <div >
//             <h1>nested loop</h1>
//             {Collegedata.map((college, index) => (
//                 <div key={index}>
//                     <h1>name : {college.name}</h1>
//                     <ul>
//                         <li>
//                             <h3>name : {college.city}</h3></li>
//                         <li>
//                             <h3>name : {college.website}</h3></li>
//                         {college.collegename.map((col, colIndex) => (
//                             <li key={colIndex}>
//                                 <h3>College: {col.name} | City: {col.city} | Email: {col.email}</h3>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     )
// }
// export default App;




// ****useeffect hook***
// function App() {

//     const [counter, setcounter] = useState(0)
//     const [data, setdata] = useState(0)

// useEffect(() => {
//         // callonce();
//         countervalue()
//     }, [counter])

//     // function callonce() {
//     //     console.log("callonce function");
//     // }
//     function countervalue() {
//         console.log("counter:", counter);

//     }
//     function datavalue() {
//         console.log("data:", data);

//     }
//     return (
//         <div>
//             <h1>UseEffect hooks</h1>
//             <button onClick={() => setcounter(counter + 1)}>counter {counter}</button>
//             <button onClick={() => setdata(data + 1)}> DATA {data}</button><br />
//             <h1> {data}</h1>
//         </div>
//     )
// }
// export default App;



// mounting update unmounting

// function App() {
//     const [counter, setcounter] = useState(0)
//     const [data, setdata] = useState(0)
//     const [display, setdisplay] = useState(true)

//     return (

//         <div>
//             <h1>lifecycle process</h1>
//                         {display ? <New counter={counter} data={data} /> : null}
//             <button onClick={() => setcounter(counter + 1)}>counter:{counter}</button>
//             <button onClick={() => setdata(data + 1)}>data:{data}</button>
//             <button onClick={() => setdisplay(!display)}>toggle</button><br /><br />
//         </div>
//     )
// }
// export default App;



// click vr bgColorand textColo change and display change
// function Top() {
//   const [cardstyle,setcardStyle] = useState({
//     border: "1px solid #ccc",
//     width: "200px",
//     boxShadow: "1px 2px 3px 0px #cccccc57",
//     margin: "10px",
//   })


//    const updatetheme=(bgColor,textColor)=>{
// // console.log(bgColor,textColor);
// setcardStyle({...cardstyle,backgroundColor:bgColor,color:textColor})
//   }
//  const[grid,setgrid] = useState(true)

//   return (
//     <div >
//       <h1 style={{ color: "#07f7f7f1" }}>Inline Style in React :</h1>
//       <button onClick={()=>updatetheme("gray","green")}>Gray theme </button>
//       <button onClick={()=>updatetheme("white","black")}>Default theme </button>
//       <button onClick={()=>setgrid(!grid)}>change display </button>
//       <div style={{display: grid ? "flex" : "block", flexWrap:"wrap"}}>
//       <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//        <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//        <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//        <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//        <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//       <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//       <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//       <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//       <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//       <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//       <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//       <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//       <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//        <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div>
//        <div style={cardstyle}>
//         <img
//           style={{ width: "200px" }}
//           src="Screenshot (35).png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <ul> <li><h4>sameer sawant</h4></li>
//             <li>Software Developer</li>
//           </ul>
//         </div>
//       </div> 
//       </div>
//     </div>
//   );
// }

// export default Top;



//useref example
// function App() {
//     const inputref = useRef(null);
//     const h1ref = useRef(null);
//     const inputHandler = () => {
//         // console.log(inputref);
//         inputref.current.focus();
//         inputref.current.style.color = "green"
//         inputref.current.value = "Sameer@2504"

//     }
//     const h1Handler=()=>{
//         h1ref.current.style.color = "blue"
//         h1ref.current.innerText = "hello sameer sawant"
//     }


//     return (
//         <div>
//             <h1>useref hook</h1>
//             <input ref={inputref} type="text" placeholder="first name" />
//             <button onClick={inputHandler}>focus</button>
//             <h1 ref={h1ref}>sameer top</h1>
//             <button onClick={h1Handler}>focus</button>

//         </div>
//     )
// }
// export default App;




// uncontrolled comoponent with querySelector and use ref
// function App(){
//     const formRef = useRef()
//     const passwordRef = useRef()

// const handleform =(event)=>{
//     event.preventDefault();
//     const user =document.querySelector("#name").value;
//     const password =document.querySelector("#password").value;
//     console.log(user,password);

// }
// const handleformRef =(event)=>{
//     event.preventDefault();
// const user = formRef.current.value;
// const password = passwordRef.current.value;
// console.log(user,password,"sameer");

// }

//     return(
// <div>
//     <h1>uncontrolled component</h1>
//     <form action="" method="post" onSubmit={handleform}>

//         <input type="text"  id="name" placeholder="enter yout name" /> <br /><br />
//         <input type="password"  id="password" placeholder="enter yout password" /> <br /><br />
//         <button>submit</button>

//         </form>
// <hr />

// <h1>uncontrolled component</h1>
//     <form action="" method="post" onSubmit={handleformRef}>

//         <input type="text" ref={formRef} id="name" placeholder="enter yout name" /> <br /><br />
//         <input type="password" ref={passwordRef} id="password" placeholder="enter yout password" /> <br /><br />
//         <button>submit with ref</button>

//         </form>
// </div>
//     )
// }
// export default App;


// // forwardref example 
// function App(){
// const inputRef = useRef(null);

// const updateinput=()=>{
// inputRef.current.focus()
// inputRef.current.value = 1000
// inputRef.current.style.color ='red'
// console.log("sameer top");

// }
//     return(
//         <div>
//             <h1>hello react</h1>
//             <Userinput ref={inputRef}/>
//             <button onClick={updateinput}>update input field</button>
//         </div>
//     )
// }
// export default App;





//  useFormStatus example  for delay !!!
// function App() { 


//   const handleSubmit=async ()=>{
//     await new Promise(res=>setTimeout(res,2000));
//     console.log("submit");

//   }

//   function CustomerForm(){
//     const {pending} =useFormStatus();
//     // console.log(pending,data,method);

//     return(
//       <div>
//         <input type="text" placeholder="Enter Name" />
//       <br />
//       <br />
//       <input type="text" placeholder="Enter Password" />
//       <br />
//       <br />
//       <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>

//       </div>
//     )
//   }
//   return (
//    <div>
//     <h1>useFormStatus Hook in React js 19</h1>
//     <form action={handleSubmit} method='post'>
//       <CustomerForm />
//     </form>
//    </div>

//   );
// }

// export default App;


// useTransition hook for delay
// function App(){
//   const [pending,startTransition] = useTransition();

//    const handleButton=()=>{
//     startTransition(async()=>{
//           await  new Promise(res=>setTimeout(res,2000))
//     })}

//     return(
//         <div>
//         <form action="">
//             <h1>Usetransition example</h1>

//             <input type="text"  name="name" placeholder="enter name"/><br /><br />
//             <input type="text"  name="name" placeholder="enter password"/><br /><br />
//             <button disabled={pending} onClick={handleButton}> {pending?"submitting...":"submit"}</button>

//         </form>
//         </div>
//     )
// }
// export default App;



// useTransition hook with state !!!
// function App(){
//   const [pending,setPending] = useState(false);

//   const handleButton =async()=>{
//     setPending(true)
//  await new Promise(res=>setTimeout(res,2000))

// setPending(false)
//   }
//     return(
//         <div>
//         <form action="">
//             <h1>Usetransition example</h1>

//             <input type="text"  name="name" placeholder="enter name"/><br /><br />
//             <input type="text"  name="name" placeholder="enter password"/><br /><br />
//             <button disabled={pending} onClick={handleButton}> {pending?"submitting...":"submit"}</button>

//         </form>
//         </div>
//     )
// }
// export default App;



// normal example of multiplication
// function App() {
//   const [num, setNum] = useState("");

//   const doubleValue = (n) => n * 2;

//   return (
//     <div>
//       <input 
//         type="number" 
//         value={num} 
//         onChange={(e) => setNum(e.target.value)} 
//       />
//       <h2>Output: {num && doubleValue(Number(num))}</h2>
//     </div>
//   );
// }

// export default App;



// pure component impure component example
// let top=1;
// function App() {

//     return(
// <div>
//     <h1>hello react</h1>
//     <Cup guest={11}/>
//     <Cup guest={12}/>
//     <Cup guest={13}/>
// </div>
//     )
// }

// const Cup=({guest})=>{
//     guest=guest+top
//     return(
//         <h1>In cricket there are {guest} players and {guest} plaers in opposite team</h1>
//     )
// }

// export default App;



// example of derived state
// function App() {
//   const [users,setUsers]=useState([]);
//   const [user,setUser]=useState('');
//   const handleAddUsers=()=>{
//     setUsers([...users,user])
//   }
// const total=users.length;
// const last= users[users.length-1];
// const unique= [...new Set(users)].length

//   return (
//     <div>
//       <h2>Total User : {total} </h2>
//       <h2>Last User : {last}</h2>
//       <h2>Unique Total User : {unique}</h2>

//     <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user" />
//     <button onClick={handleAddUsers} >Add User</button>
//     {
//       users.map((item,index)=>(
//         <h4 key={index}>{item}</h4>
//       ))
//     }
//     </div>

//   );
// }

// export default App;




// function App() {
//   const [user,setUser]=useState('');  
//   return(
//     <div>
//       <h1>hello react</h1>
//       <Adduser setuser={setUser} /> <hr />
//       <Sawant user={user} />
//     </div>
//   )
// }
// export default App;



// change object in state
// export default function App() {
//   const [data, setData] = useState({
//     name: 'Anil',
//     address: {
//       city: 'Delhi',
//       country: 'India'
//     }
//   });

//   // ✅ No direct mutation — build a new object from scratch
//   const handleName = (val) => {
//     setData(top => ({ 
//       ...top, name: val }));
//   };

//   const handleCity = (city) => {
//     setData(prev => ({
//       ...prev,
//       address: { ...prev.address, city }
//     }));
//   };

//   return (
//     <div>
//       <h1>Updating Objects in State</h1>
//       <input type="text" placeholder="update name"
//         onChange={(e) => handleName(e.target.value)} />
//       <input type="text" placeholder="update city"
//         onChange={(e) => handleCity(e.target.value)} />
//       <h2>Name: {data.name}</h2>
//       <h2>City: {data.address.city}</h2>
//       <h2>Country: {data.address.country}</h2>
//     </div>
//   );
// }


// function App() {
//   const [data, setData] = useState({
//     name:"sameer",
//     adress:{
//       city:"mumbai", 
//       country:"india",
//     }
//   });


//   return (
//     <div>
//       <h1>updating objects in state</h1>
//       <input type="text" onChange={(event)=>setData(prev=>({...prev,name:event.target.value}))} placeholder="update name" />
//       <input type="text" onChange={(event)=>setData(prev=>({...prev,adress:{...prev.adress,city:event.target.value}}))} placeholder="update city" />
//        <h2>Name:{data.name} </h2>
//        <h2>City:{data.adress.city} </h2>
//        <h2>Country:{data.adress.country}</h2>
//     </div>
//   )
// }
//  export default App;


