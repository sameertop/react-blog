function Adduser({setuser}) {
    return(
        <div>
            <h1>add user</h1>
            <input type="text" onChange={(e)=>setuser(e.target.value)} placeholder="user name" />
        </div>
    )
}
export default Adduser ;