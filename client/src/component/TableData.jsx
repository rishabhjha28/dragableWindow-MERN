import React from 'react'
import { useState } from 'react'

export default function TableData(props) {
  const [isClicked,setisClicked] = useState(false);
  const handleClick=()=>{
    setisClicked(true)
  }
  const handleChange =(e)=>{
    const {name,value} = e.target
    props.setChanges(prev=>{
      prev.func = setisClicked;
      return({
        ...prev,
        [name]:value
      })
    })
  }
  const style = {padding:'0px 10px'}
  return (
    <td  style = {isClicked?style:null}className='margin data' onClick={handleClick}>{isClicked? <input value={props.changes} onChange={handleChange} name = {props.name} type={props.type} placeholder={'Enter Your '+props.placeholder}/> :props.data}</td>
  )
}
