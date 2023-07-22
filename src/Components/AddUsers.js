import { useState } from "react";


const AddUsers = () => {
    const [user,setUser]=useState({});
    const handleAdduser=event=>{
    event.preventDefault();
    console.log(user);
    fetch('http://localhost:5000/users', {
    method:'POST',
    headers:{
    'content-type':'application/json'
    },
    body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
    if(data.acknowledged){
    alert('Successfully data inserted');
    event.target.reset();
    }
    })
    }
    const handleinputBlur=event=>{
    const value=event.target.value;
    const feild=event.target.name;
    const newUser={...user}
    newUser[feild]=value;
    setUser(newUser);
    }
    return ( <div><h4> Please add a new users</h4>
    <form onSubmit={handleAdduser}> <input onBlur={handleinputBlur} type="text" name='name'
    placeholder='enter your name' /><br />
    <input onBlur={handleinputBlur} type="text" name='address'
    placeholder='enter your address' /><br />
    <input onBlur={handleinputBlur} type="email" name="email"
    id="" placeholder='enter your email' /> <br />
    <button type="submit"> Add User</button>
    </form>
    </div>
    );
    };

export default AddUsers;