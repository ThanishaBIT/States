import React, { useState } from "react";
function Counter()
{
    //creating a state
    const [count,setcount]=useState(0);
  const increment =()=>{
    setcount(count+1);
  }
   const decrement =()=>{
    setcount(count-1);
  }

return (
    <div>
        <button onClick={increment}> Add</button>
        <h2>Count: {count}</h2>
        <button onClick={decrement}> decrement-</button>
    </div>


)

    }
    export default Counter
