import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users=useLoaderData();
    const [dispalyUser,setDisplayUSer]=useState(users);
    const handleDelete=user=>{
      const agree=window.confirm(` are you sure want to delete:${user.name}`);
      if(agree){
        //console.log("deleting with :",user._id);
        fetch(`http://localhost:5000/users/${user._id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
          alert('data deleted Succesfully');
          const remainningUSer=dispalyUser.filter(usr=>usr._id !==user._id);
          setDisplayUSer(remainningUSer);
        }
      });
      }

    }
    return (
        <div>
           <h2> user:{dispalyUser.length}</h2>
          <div>
            {
                dispalyUser.map(user=> <p key={user._id}>
                   Name:{user.name}     email:{user.email} <button  onClick={()=>handleDelete(user)} >x</button>
                </p>)
            }
          </div>
        </div>
    );
};

export default Home;