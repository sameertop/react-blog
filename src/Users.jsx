import  {Link} from "react-router-dom";
import Userdetail from "./Userdetail";
function UserList(){
    const UserData=[
        {id:1,name:"John Doe"},
        {id:2,name:"Jane Smith"},
        {id:3,name:"Bob Johnson"},
        {id:4,name:"Alice Williams"},
        {id:5,name:"Charlie Brown"}
    ]
    return(
        <div>
            <h1>Users list</h1>
            {
                UserData.map((item)=>(
                <h2 style={{marginLeft:"20px"}}> <Link to={"/Users/"+item.id}>{item.name}</Link> </h2>
                ))
            }
            
        </div>
    )
}
export default UserList;