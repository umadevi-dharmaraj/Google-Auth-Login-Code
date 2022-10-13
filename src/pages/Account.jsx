import React, {Component} from 'react';
import { UserAuth } from '../context/AuthContext';
 var userDetails =[];
 

 const Account = () => {
  
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const providerdata = JSON.stringify(user)
 
  return (

    <div className='w-[300px] m-auto text-center'>
      <h1 className='text-center text-3xl font-bold pt-20'>Account</h1>
      <div>
        <p style={{fontSize:25}}>Welcome, {user?.displayName} {providerdata}</p>
        
        
        
      </div>
      <button onClick={handleSignOut} style={{fontSize:25,backgroundColor:"greenyellow"}} className='border py-5 px-10 mt-9 ml-16'>
        Logout
      </button>
    </div>
  
  );
};

export default Account;