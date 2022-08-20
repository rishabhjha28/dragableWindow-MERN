import React, { useState } from 'react'
import { useEffect } from 'react';
import Split from 'react-split';
import axios from 'axios';

export default function TopRight() {
  const[isClicked,setIsClicked] = useState(false);
  const [count,setCount] = useState({
    add:0,
    update:0
  })
  const handleCount =()=>{
    setIsClicked(prev=>!prev);
  }
  useEffect(()=>{
    const url = "http://localhost:5000/count";
    axios.get(url)
      .then(function(response){
        setCount(response.data[0])
      })
      .catch(function(error){
        console.log(error)
      })
  },[isClicked])
  return (
    <Split direction = 'vertical' sizes={[0,100]}>
      <div className="tp"></div>
      <div className='w2'>
        <h1>Add: {count.add}</h1>
        <h1>Update: {count.update}</h1>
        <button onClick={handleCount}>Count</button>
      </div>
    </Split>
  )
}
