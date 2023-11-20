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
        <select className="emp_dropdown_dept">
          <option value="software engineer">software engineer</option>
          <option value="Network Engineer">Network engineer</option>
          <option value="software tester">software Tester</option>
          <option value="fllstack developer">fullstack developer</option>
        </select>

        <label>Date Of Joining</label>
        <input type="date" name="doj" id="empdoj" placeholder='Enter date' onChange={()=> onValueChange}/>

        <button className="formbtn" type="button" >Submit</button >

      </form>
    </div>
    </>
  )
}
export default AddEmp