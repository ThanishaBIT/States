import React from "react";
function List(){
    const persons=["thanisha","vidhu","shajana","dharshini"];
    return(
        <div>
            <ul>
                {persons.map((person,index)=>(
                    <li key={index}>{person}</li>
                ))}
            </ul>
           
        </div>
    )
}
export default List;