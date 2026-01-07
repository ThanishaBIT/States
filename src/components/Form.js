import React, { useState } from "react";
function Form(){
    const[name,setName]=useState("");
 return (
    <div>
        <input type='text' placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
        <h1>hello,{name}</h1>
    </div>
 );
 
}
export default Form;