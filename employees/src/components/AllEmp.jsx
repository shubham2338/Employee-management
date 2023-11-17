import React from 'react';
import '../styles/App.css';
import {useDispatch, useSelector} from 'react-redux';

function AllEmp() {
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

        </tbody>
      </table>
    </div>
  )
}

export default AllEmp;