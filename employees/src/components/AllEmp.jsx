import React from 'react';
import '../styles/App.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import axios from 'axios';

function AllEmp() {
  const [data, setData] = useState([]);
  const getData = async()=>{
    try{
    const resp = await axios.get("http://localhost:8000/allemp");
    setData(resp.data);
    }
    catch(error){

      return <h4>Error at server side</h4>
    }
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
            <th>Status</th>
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
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllEmp;