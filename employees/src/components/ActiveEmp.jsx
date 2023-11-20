import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

function ActiveEmp() {
  const [data, setData] = useState([]);
  const getData = async()=>{
    const resp = await axios.get("http://localhost:8000/active");
    console.log(resp);
    setData(resp.data);
  }
  
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className='tablebox'>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Date of joining</th>
          </tr>
        </thead>
        <tbody>
        {data.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.date_of_joining}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ActiveEmp;