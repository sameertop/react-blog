import {useParams} from "react-router-dom";
function Userdetail() {
    const paramData=useParams();
    console.log(paramData);
    return(
        <div>
            <h1>
                user details page
            </h1>
            <h2>user id : {paramData.id}</h2>
        </div>
    )
}
export default Userdetail;