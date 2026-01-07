import React, { useState } from "react";
function NewLogin()
{
    const[show,setshow]=useState(false);
    return(
        <div>
   <button onClick={()=>setshow(!show)}>{show?"LOGOUT":"login"}</button>
    {show && <p>Welcome</p>}
     {!show &&<p>PLEASE LOGIN 🔒</p>}

   </div>
    )
}
export default NewLogin;