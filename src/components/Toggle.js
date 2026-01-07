import React,{useState} from "react";
function Toggle(){
    const[show,setShow] =useState(false);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
            {show &&<p>Heelo Mern stck Students</p>}

        </div>
    )
}
export default Toggle