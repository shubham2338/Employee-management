import React, {useState} from 'react';
import { addEmp } from '../store/empSlice';
import {useDispatch, useSelector} from 'react-redux';

function AddEmp() {
  
  const [users, setUsers]= useState({});

  const onValueChange = (e)=>{
    
    setUsers({...users , [e.target.name] : e.target.value});
    console.log(users);

  }


  return (
    <>
    <div className='addemp'>
      <h3>Employee Details</h3>
      <form >
        <label>Name</label>
        <input type="text" name="name" id="empname" placeholder='Enter name' onChange={()=> onValueChange} />

        <label>Email</label>
        <input type="email" name="email" id="empemail" placeholder='Enter email' onChange={()=> onValueChange}/>

        <label>Department</label>
        <input type="text" name="department" id="empdepartment" placeholder='Enter department' onChange={()=> onValueChange}/>

        <label>Date Of Joining</label>
        <input type="date" name="doj" id="empdoj" placeholder='Enter date' onChange={()=> onValueChange}/>

        <button className="formbtn" type="button" >Submit</button >

      </form>
    </div>
    </>
  )
}
export default AddEmp