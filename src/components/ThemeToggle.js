import React, { useState } from "react";
function ThemeToogle(){
    const [isdark,setisdark]=useState(false);
    
    const themeStyle ={
        backgroundColor :isdark?'#333' :'#fff',
        color:isdark? '#fff' :'#333',
        minHeight:'100vh',
        padding:'20px'
    }
    const buttonstyle={
        padding :'10px',
        backgroundColor: isdark? '#666':'#0000ff',
        color:'white',
       border:'none',
    cursor:'pointer'  }

    return(
        <div style={themeStyle}>
            <h2>{isdark ? 'Dark Mode' : 'Light Mode'}</h2>
            <button style={buttonstyle}onClick={ ()=> setisdark(!isdark)}>Switch to {isdark? 'light':'dark'}</button>
        </div>
    )
}
export default ThemeToogle;