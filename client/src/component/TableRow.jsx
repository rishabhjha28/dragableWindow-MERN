import React, { useState } from 'react';

export default function TableRow(props) {
  const handleUpdate =()=>props.handleUpdate(props.data._id)
  const handleDelete =()=>props.handleDelete(props.data._id)
  const [clickedElement,setCleckedElement] = useState({
    value:"",
    clicked:false  
  });
  const dataClicked = (e)=>{

    console.log(e.target.getAttribute("value"));
  }
  return (
    <>
      <tr>
          <td onClick={dataClicked} name = "name" value = {props.data.name}className='margin data'>{props.data.name}</td>
          <td onClick={dataClicked} name = "age" value = {props.data.age}className='margin data'>{props.data.age}</td>
          <td onClick={dataClicked} name = "phno" value = {props.data.phno}className='margin data'>{props.data.phno}</td>
          <td onClick={dataClicked} name = "email" value = {props.data.email}className='margin data'>{props.data.email}</td>
          <td><button onClick={handleUpdate}>Update</button></td>
          <td><button onClick={handleDelete} >Delete</button></td>
      </tr>
    </>
  )
}