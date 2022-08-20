import React, { useState } from 'react';
import TableData from './TableData';

export default function TableRow(props) {
  const [changes,setChanges] = useState({
    name:"",
    age:"",
    phno:"",
    email:""
  })
  const handleUpdate =()=>{
    const update = {}
    if(changes.name)update.name=changes.name
    if(changes.age)update.age=changes.age
    if(changes.phno)update.phno=changes.phno
    if(changes.email)update.email=changes.email
    if(changes.func)changes.func(false);
    props.handleUpdate(props.data._id,update)
  }
  const handleDelete =()=>props.handleDelete(props.data._id)
  return (
    <>
      <tr>
          <TableData changes = {changes.name} setChanges = {setChanges} placeholder = "Name" name = "name" type = 'name' data = {props.data.name}/>
          <TableData changes = {changes.age} setChanges = {setChanges} placeholder = "Age" name = "age" type = 'number' data = {props.data.age}/>
          <TableData changes = {changes.phno} setChanges = {setChanges} placeholder = "Number" name = "phno" type = 'tel' data = {props.data.phno}/>
          <TableData changes = {changes.email} setChanges = {setChanges} placeholder = "Email" name = "email" type  = 'email' data = {props.data.email}/>
          <td><button onClick={handleUpdate}>Update</button></td>
          <td><button onClick={handleDelete} >Delete</button></td>
      </tr>
    </>
  )
}