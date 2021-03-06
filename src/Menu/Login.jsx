import React, { useState } from 'react'

const Login = () => {
    const [userName,setUserName]=useState()
    const [userPassword,setUserPassword]=useState()


function sendData()
{

    loadData(userName,userPassword)  
}


async function loadData(userName,userPassword)
{

    try {
        let obj={
            "password": userPassword,
            "username":userName
        }
    
        const res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" }
    });

    let response=await res.json();
    console.log(response);
    if(response.error==true)
    {
        alert(response.message)
    }
    else{
        alert("Welcome!") 
        window.location="dash.html"
        localStorage.setItem("token",response.token)
        //localStorage.setItem("username",e)
    }
        
    } catch (error) {
        alert(error) 
    }
  

}




  return (
    <div>
    <input type="text" placeholder='User Name' name="" id="" value={userName} onChange={(e)=>setUserName(e.target.value)} />
    <input type="text"  placeholder='User Password' name="" id=""  value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
    <button onClick={sendData}>Login</button>
    </div>
  )
}

export default Login