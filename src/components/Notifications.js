import React from 'react'
function Notifications(){
    const hasMessage= true;
    return (
        <div>
            {hasMessage && <p> you have new message</p>}
        </div>
    );
}
export default Notifications