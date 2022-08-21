import React, { useState } from 'react'
import axios from 'axios'; 

export default function Form(props) {
  const [data,setData] = useState({
    name:"",
    age:"",
    phno:"",
    email:""
  })
  const handleForm = (event)=>{
    const {name,value} = event.target;
    if(name === "age" && (value < 0 || value > 120)){}
    else if(name === 'phno' && value.length >10){}
    else{
        setData((prev)=>{
            return ({
                ...prev,
                [name]: value
            })
        })
    }
  }
  const addname=()=>{
    if(data.name && data.age && data.phno && data.email){
        const url = 'http://localhost:5000/you'
        axios.post(url, data)
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        }).then(()=>{
            setData({
                name:"",
                age:"",
                phno:"",
                email:""
            });
            
            props.isAdded()
        });
    }
    else{
        console.log("Please enter all the values");
        }
    
    }
    const cancel =()=>{
        props.setIsAdd(false);
    }
    const style = {padding:'0px 10px'}
    return (
    <>
        {props.isAdd && <tr>
            <td style = {props.isAdd? style:null}className='margin'><input type="text" onChange={handleForm} value = {data.name} name = "name" placeholder='Enter Your Name' autoFocus/></td>
            <td style = {props.isAdd? style:null}className='margin'><input className ="age" type="number" onChange={handleForm} value = {data.age} name = "age" placeholder='Enter Your Age'/></td>
            <td style = {props.isAdd? style:null}className='margin'><input type="tel" onChange={handleForm} value = {data.phno} name="phno" placeholder='Enter Your Number'/></td>
            <td style = {props.isAdd? style:null}className='margin'><input type="email" onChange={handleForm} value = {data.email} name="email" placeholder='Enter Your Email'/></td>
            <td><button onClick={addname}>Add</button></td>
            <td><button onClick={cancel}>Cancel</button></td>
        </tr>}
    </>
  )
}
