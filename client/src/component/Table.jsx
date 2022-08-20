import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import Form from './Form';
import axios from 'axios';
import TableRow from './TableRow';

export default function Table() {
  const [isAdd,setIsAdd] = useState(false);  
  const [yourData,setYourData] = useState([]);
  const [changed,setChanged] = useState(false);
  const handleAdd = ()=>{
    setIsAdd(true);
  }
  useEffect(()=>{
    const url = "http://localhost:5000/you";
    axios.get(url)
      .then(function (response) {
        setYourData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },[changed]);
  const handleUpdate =(id)=>{
    console.log("update from main");
  }
  const handleDelete =(id)=>{
    const url = "http://localhost:5000/you/" + id
    axios.delete(url)
      .then(function(response){
        setChanged(prev => !prev);
      })
      .catch(function(error){
        console.log(error);
      })
  }
  const handleAdded=()=>{
    setIsAdd(false);
    setChanged(prev=>!prev);
  }
  const dataTable = yourData.map((element)=>{
    return <TableRow data = {element} key = {element._id} handleUpdate = {handleUpdate} handleDelete = {handleDelete}/>
  })

  return (
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th className='margin'>Name</th>
              <th className='margin'>Age</th>
              <th className='margin'>Mobile No</th>
              <th className='margin'>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataTable}
            <Form isAdd = {isAdd} isAdded = {handleAdded} setIsAdd = {setIsAdd}/>
          </tbody>
        </table>  
          {!isAdd && <button onClick={handleAdd}>Add</button>}
      </div>
  )
}
