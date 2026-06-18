import { Link, Outlet, Routes } from "react-router-dom";
import Skills from "./Skills";
import Project from "./Project";

function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "blue" }}>
            <Link  to="/">Go Back Home</Link>

      <h1>About Page</h1>
      <div style={{display:"flex", justifyContent:"center", gap:"20px"}}>
      <Link  to="">skills</Link> 
      <Link  to="Project">Project</Link>
      </div>
       <Outlet />
    </div>
  );
}
export default About;