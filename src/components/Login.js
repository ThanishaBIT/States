import React from 'react';
function Login()
{
    const isLogged=true;
    return(
        <div>
            {isLogged?"welcome user!!":"please login"}
        </div>
    );
}
export default Login;